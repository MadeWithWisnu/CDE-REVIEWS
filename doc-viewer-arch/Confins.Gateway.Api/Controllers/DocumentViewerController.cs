using Confins.Gateway.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Confins.Gateway.Api.Controllers
{
    // Endpoint ini yang dipanggil oleh Vue.js FE (bukan langsung ke Miwanet).
    // Auth ke sini pakai mekanisme auth existing Confins FE<->BE (mis. JWT user login Confins),
    // BUKAN API Key - API Key hanya dipakai di komunikasi Confins BE -> Miwanet BE.
    [ApiController]
    [Route("api/documents")]
    // [Authorize] // aktifkan sesuai skema auth existing Confins
    public class DocumentViewerController : ControllerBase
    {
        private readonly IMiwanetDocAccessClient _miwanetClient;
        private readonly ILogger<DocumentViewerController> _logger;

        public DocumentViewerController(IMiwanetDocAccessClient miwanetClient, ILogger<DocumentViewerController> logger)
        {
            _miwanetClient = miwanetClient;
            _logger = logger;
        }

        [HttpGet("{docId}/viewer-url")]
        public async Task<IActionResult> GetViewerUrl(string docId, [FromQuery] string docType, CancellationToken ct)
        {
            if (string.IsNullOrWhiteSpace(docId))
            {
                return BadRequest("docId wajib diisi.");
            }

            try
            {
                var result = await _miwanetClient.GetViewerUrlAsync(docId, docType ?? string.Empty, ct);
                return Ok(result);
            }
            catch (InvalidOperationException ex)
            {
                _logger.LogError(ex, "Gagal ambil viewer URL untuk DocId={DocId}", docId);
                return StatusCode(StatusCodes.Status502BadGateway, new { message = "Gagal menghubungi Miwanet untuk akses dokumen." });
            }
        }
    }
}
