using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Miwanet.DocAccess.Api.Models;
using Miwanet.DocAccess.Api.Services;

namespace Miwanet.DocAccess.Api.Controllers
{
    [ApiController]
    [Route("api/v1/cde-access-token")]
    public class CdeAccessTokenController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly DocAccessOptions _options;
        private readonly ILogger<CdeAccessTokenController> _logger;

        public CdeAccessTokenController(
            ITokenService tokenService,
            IOptions<DocAccessOptions> options,
            ILogger<CdeAccessTokenController> logger)
        {
            _tokenService = tokenService;
            _options = options.Value;
            _logger = logger;
        }

        // POST /api/v1/cde-access-token
        // Diproteksi ApiKeyAuthMiddleware (server-to-server, dipanggil Confins BE). Lihat Program.cs.
        [HttpPost]
        public IActionResult IssueToken([FromBody] CdeAccessTokenRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.CdeKey) || string.IsNullOrWhiteSpace(request.AppNo))
            {
                return BadRequest(new ErrorResponse { Message = "CdeKey dan AppNo wajib diisi." });
            }

            // TODO: validasi bisnis - cek apakah AppNo benar-benar ada dan cocok dengan CdeKey (debtorType/financingWay)
            // sebelum menerbitkan token, supaya token tidak diterbitkan untuk kombinasi yang tidak valid.
            var clientId = HttpContext.Items["ClientId"]?.ToString() ?? request.RequestedBy;

            // Reuse TokenService yang sama dengan doc-viewer: doc_id -> AppNo, doc_type -> CdeKey
            var (token, expiresAtUtc) = _tokenService.GenerateViewerToken(
                docId: request.AppNo, docType: request.CdeKey, requestedBy: clientId);

            var viewerUrl = $"{_options.CdeViewerBaseUrl}/cde/{Uri.EscapeDataString(request.CdeKey)}" +
                             $"?appNo={Uri.EscapeDataString(request.AppNo)}&embed=1&token={Uri.EscapeDataString(token)}";

            _logger.LogInformation(
                "CDE access token diterbitkan untuk CdeKey={CdeKey} AppNo={AppNo} RequestedBy={RequestedBy} ExpiresAt={ExpiresAt}",
                request.CdeKey, request.AppNo, clientId, expiresAtUtc);

            return Ok(new CdeAccessTokenResponse
            {
                Token = token,
                ViewerUrl = viewerUrl,
                ExpiresAtUtc = expiresAtUtc
            });
        }

        // GET /api/v1/cde-access-token/validate?token=xxx
        // TIDAK diproteksi API Key - ini dipanggil LANGSUNG dari browser oleh Vue app (kyc-vue-v4)
        // saat CdeDashboard.vue mount dalam embed mode, untuk konfirmasi token masih valid
        // sebelum menampilkan data. Lihat Program.cs untuk pengecualian middleware-nya.
        [HttpGet("validate")]
        public IActionResult ValidateToken([FromQuery] string token)
        {
            if (string.IsNullOrWhiteSpace(token))
            {
                return Ok(new CdeTokenValidateResponse { Valid = false });
            }

            var principal = _tokenService.ValidateViewerToken(token);

            if (principal == null)
            {
                return Ok(new CdeTokenValidateResponse { Valid = false });
            }

            var appNo = principal.FindFirst("doc_id")?.Value ?? string.Empty;
            var cdeKey = principal.FindFirst("doc_type")?.Value ?? string.Empty;
            var expClaim = principal.FindFirst("exp")?.Value;

            DateTime? expiresAtUtc = null;
            if (expClaim != null && long.TryParse(expClaim, out var expUnix))
            {
                expiresAtUtc = DateTimeOffset.FromUnixTimeSeconds(expUnix).UtcDateTime;
            }

            return Ok(new CdeTokenValidateResponse
            {
                Valid = true,
                CdeKey = cdeKey,
                AppNo = appNo,
                ExpiresAtUtc = expiresAtUtc
            });
        }
    }
}
