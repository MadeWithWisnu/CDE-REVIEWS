using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Miwanet.DocAccess.Api.Models;
using Miwanet.DocAccess.Api.Services;

namespace Miwanet.DocAccess.Api.Controllers
{
    // Endpoint ini diproteksi oleh ApiKeyAuthMiddleware (lihat Program.cs)
    // Hanya boleh dipanggil server-to-server (mis. Confins BE), TIDAK boleh dipanggil dari browser/FE.
    [ApiController]
    [Route("api/v1/access-token")]
    public class AccessTokenController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly DocAccessOptions _options;
        private readonly ILogger<AccessTokenController> _logger;

        public AccessTokenController(
            ITokenService tokenService,
            IOptions<DocAccessOptions> options,
            ILogger<AccessTokenController> logger)
        {
            _tokenService = tokenService;
            _options = options.Value;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult IssueToken([FromBody] AccessTokenRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.DocId))
            {
                return BadRequest(new ErrorResponse { Message = "DocId wajib diisi." });
            }

            // TODO: tambahkan validasi bisnis di sini, mis:
            // - cek apakah DocId benar-benar ada & valid di Miwanet
            // - cek apakah client (dari HttpContext.Items["ClientId"]) berhak akses dokumen ini
            var clientId = HttpContext.Items["ClientId"]?.ToString() ?? request.RequestedBy;

            var (token, expiresAtUtc) = _tokenService.GenerateViewerToken(
                request.DocId, request.DocType, clientId);

            var viewerUrl = $"{_options.ViewerBaseUrl}?token={Uri.EscapeDataString(token)}";

            _logger.LogInformation(
                "Access token diterbitkan untuk DocId={DocId} DocType={DocType} RequestedBy={RequestedBy} ExpiresAt={ExpiresAt}",
                request.DocId, request.DocType, clientId, expiresAtUtc);

            return Ok(new AccessTokenResponse
            {
                Token = token,
                ViewerUrl = viewerUrl,
                ExpiresAtUtc = expiresAtUtc
            });
        }
    }
}
