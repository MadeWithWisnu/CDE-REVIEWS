using Confins.Gateway.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Confins.Gateway.Api.Controllers
{
    // Dipanggil oleh FE Confins (bukan langsung ke Miwanet). Auth pakai skema existing Confins FE<->BE.
    [ApiController]
    [Route("api/cde")]
    // [Authorize]
    public class CdeViewerController : ControllerBase
    {
        private readonly IMiwanetDocAccessClient _miwanetClient;
        private readonly ILogger<CdeViewerController> _logger;

        public CdeViewerController(IMiwanetDocAccessClient miwanetClient, ILogger<CdeViewerController> logger)
        {
            _miwanetClient = miwanetClient;
            _logger = logger;
        }

        [HttpGet("{cdeKey}/viewer-url")]
        public async Task<IActionResult> GetViewerUrl(string cdeKey, [FromQuery] string appNo, CancellationToken ct)
        {
            if (string.IsNullOrWhiteSpace(cdeKey) || string.IsNullOrWhiteSpace(appNo))
            {
                return BadRequest("cdeKey dan appNo wajib diisi.");
            }

            try
            {
                var result = await _miwanetClient.GetCdeViewerUrlAsync(cdeKey, appNo, ct);
                return Ok(result);
            }
            catch (InvalidOperationException ex)
            {
                _logger.LogError(ex, "Gagal ambil viewer URL CDE untuk CdeKey={CdeKey} AppNo={AppNo}", cdeKey, appNo);
                return StatusCode(StatusCodes.Status502BadGateway, new { message = "Gagal menghubungi Miwanet untuk akses CDE." });
            }
        }
    }
}
