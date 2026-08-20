namespace Miwanet.DocAccess.Api.Models
{
    // Dibaca dari appsettings.json / environment variables
    public class DocAccessOptions
    {
        public const string SectionName = "DocAccess";

        // Signing key untuk JWT short-lived token (simpan di secret manager, JANGAN hardcode)
        public string JwtSigningKey { get; set; } = string.Empty;

        // Berapa lama token viewer berlaku (menit) - default singkat karena hanya untuk sekali render iframe
        public int TokenLifetimeMinutes { get; set; } = 5;

        // Daftar API Key yang valid untuk memanggil endpoint ini (server-to-server dari Confins BE)
        // Format: { "CONFINS": "api-key-value", "OTHER-SYSTEM": "api-key-value" }
        public Dictionary<string, string> AllowedApiKeys { get; set; } = new();

        // Base URL viewer di Miwanet (untuk membangun ViewerUrl)
        public string ViewerBaseUrl { get; set; } = "https://miwanet.mlci.internal/doc-viewer";

        // Base URL app Vue "CDE di Miwanet" (kyc-vue-v4), dipakai untuk membangun ViewerUrl embed CDE.
        // Route Vue-nya: /cde/:cdeKey  -> jadi ViewerUrl = {CdeViewerBaseUrl}/cde/{cdeKey}?appNo=...&embed=1&token=...
        public string CdeViewerBaseUrl { get; set; } = "https://miwanet.mlci.internal";
    }
}
