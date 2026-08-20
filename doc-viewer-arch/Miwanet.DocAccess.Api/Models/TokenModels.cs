namespace Miwanet.DocAccess.Api.Models
{
    // Request dari Confins BE (server-to-server) untuk minta token akses dokumen
    public class AccessTokenRequest
    {
        public string DocId { get; set; } = string.Empty;       // ID dokumen / no application di Miwanet
        public string DocType { get; set; } = string.Empty;     // mis: "PerjanjianIF", "CAM", dll
        public string RequestedBy { get; set; } = string.Empty; // identitas caller (audit trail), mis: "CONFINS"
    }

    public class AccessTokenResponse
    {
        public string Token { get; set; } = string.Empty;
        public string ViewerUrl { get; set; } = string.Empty; // URL siap pakai untuk src iframe
        public DateTime ExpiresAtUtc { get; set; }
    }

    public class ErrorResponse
    {
        public string Message { get; set; } = string.Empty;
    }
}
