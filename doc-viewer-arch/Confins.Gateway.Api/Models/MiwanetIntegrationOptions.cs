namespace Confins.Gateway.Api.Models
{
    public class MiwanetIntegrationOptions
    {
        public const string SectionName = "MiwanetIntegration";

        public string BaseUrl { get; set; } = string.Empty;      // mis: https://miwanet.mlci.internal
        public string ApiKey { get; set; } = string.Empty;       // API Key yang dibagikan Miwanet ke Confins
        public string ClientId { get; set; } = "CONFINS";        // dikirim sebagai X-Client-Id
        public int TimeoutSeconds { get; set; } = 10;
    }

    public class ViewerUrlResponse
    {
        public string ViewerUrl { get; set; } = string.Empty;
        public DateTime ExpiresAtUtc { get; set; }
    }
}
