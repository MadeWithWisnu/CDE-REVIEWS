namespace Miwanet.DocAccess.Api.Models
{
    // Request dari Confins BE (server-to-server) untuk minta akses embed CDE
    public class CdeAccessTokenRequest
    {
        public string CdeKey { get; set; } = string.Empty;      // mis: "leasing-individual", "fl", "factory"
        public string AppNo { get; set; } = string.Empty;       // No Application
        public string RequestedBy { get; set; } = string.Empty; // identitas caller, mis: "CONFINS"
    }

    public class CdeAccessTokenResponse
    {
        public string Token { get; set; } = string.Empty;
        public string ViewerUrl { get; set; } = string.Empty; // URL langsung ke route Vue app Miwanet, siap pakai untuk src iframe
        public DateTime ExpiresAtUtc { get; set; }
    }

    public class CdeTokenValidateResponse
    {
        public bool Valid { get; set; }
        public string CdeKey { get; set; } = string.Empty;
        public string AppNo { get; set; } = string.Empty;
        public DateTime? ExpiresAtUtc { get; set; }
    }
}
