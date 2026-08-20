using Confins.Gateway.Api.Models;

namespace Confins.Gateway.Api.Services
{
    public interface IMiwanetDocAccessClient
    {
        Task<ViewerUrlResponse> GetViewerUrlAsync(string docId, string docType, CancellationToken ct = default);

        Task<CdeViewerUrlResponse> GetCdeViewerUrlAsync(string cdeKey, string appNo, CancellationToken ct = default);
    }
}
