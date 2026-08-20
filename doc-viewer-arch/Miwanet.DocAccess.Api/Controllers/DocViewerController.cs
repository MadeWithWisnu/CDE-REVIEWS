using Microsoft.AspNetCore.Mvc;
using Miwanet.DocAccess.Api.Models;
using Miwanet.DocAccess.Api.Services;

namespace Miwanet.DocAccess.Api.Controllers
{
    // Endpoint ini yang jadi target src="..." dari <iframe> di Confins FE.
    // Tidak butuh login manual karena otentikasi dilakukan lewat token JWT di query string.
    [ApiController]
    [Route("doc-viewer")]
    public class DocViewerController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly ILogger<DocViewerController> _logger;

        public DocViewerController(ITokenService tokenService, ILogger<DocViewerController> logger)
        {
            _tokenService = tokenService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult ViewDocument([FromQuery] string token)
        {
            if (string.IsNullOrWhiteSpace(token))
            {
                return Content(RenderErrorHtml("Token tidak ditemukan."), "text/html");
            }

            var principal = _tokenService.ValidateViewerToken(token);

            if (principal == null)
            {
                _logger.LogWarning("Percobaan akses doc-viewer dengan token invalid/expired.");
                return Content(RenderErrorHtml("Token tidak valid atau sudah kedaluwarsa."), "text/html");
            }

            var docId = principal.FindFirst("doc_id")?.Value ?? string.Empty;
            var docType = principal.FindFirst("doc_type")?.Value ?? string.Empty;

            // TODO: ganti bagian ini dengan logic render dokumen sesungguhnya, mis:
            // - fetch data dokumen dari MLCI_DB berdasarkan docId
            // - render halaman viewer Miwanet yang sudah ada (reuse komponen existing)
            // - atau redirect ke halaman internal Miwanet dengan session sementara

            _logger.LogInformation("Doc viewer diakses untuk DocId={DocId} DocType={DocType}", docId, docType);

            // Contoh placeholder response - di implementasi nyata ini reuse halaman viewer Miwanet yang ada
            return Content(RenderViewerHtml(docId, docType), "text/html");
        }

        private static string RenderErrorHtml(string message) =>
            $"<html><body style='font-family:sans-serif;padding:2rem;color:#b00020;'>{message}</body></html>";

        private static string RenderViewerHtml(string docId, string docType) =>
            $"<html><body style='font-family:sans-serif;padding:2rem;'>" +
            $"<h3>Dokumen: {docType}</h3><p>DocId: {docId}</p>" +
            $"<p><em>Ganti dengan komponen viewer Miwanet yang sudah ada.</em></p></body></html>";
    }
}
