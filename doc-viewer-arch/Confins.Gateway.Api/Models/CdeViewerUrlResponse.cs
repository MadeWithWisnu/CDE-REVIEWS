namespace Confins.Gateway.Api.Models
{
    public class CdeViewerUrlResponse
    {
        public string ViewerUrl { get; set; } = string.Empty;
        public DateTime ExpiresAtUtc { get; set; }
    }
}
