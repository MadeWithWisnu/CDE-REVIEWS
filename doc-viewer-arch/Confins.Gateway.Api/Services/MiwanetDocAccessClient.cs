using System.Net.Http.Json;
using Confins.Gateway.Api.Models;
using Microsoft.Extensions.Options;

namespace Confins.Gateway.Api.Services
{
    public class MiwanetDocAccessClient : IMiwanetDocAccessClient
    {
        private readonly HttpClient _httpClient;
        private readonly MiwanetIntegrationOptions _options;
        private readonly ILogger<MiwanetDocAccessClient> _logger;

        public MiwanetDocAccessClient(
            HttpClient httpClient,
            IOptions<MiwanetIntegrationOptions> options,
            ILogger<MiwanetDocAccessClient> logger)
        {
            _options = options.Value;
            _logger = logger;

            httpClient.BaseAddress = new Uri(_options.BaseUrl);
            httpClient.Timeout = TimeSpan.FromSeconds(_options.TimeoutSeconds);
            httpClient.DefaultRequestHeaders.Add("X-Api-Key", _options.ApiKey);
            httpClient.DefaultRequestHeaders.Add("X-Client-Id", _options.ClientId);

            _httpClient = httpClient;
        }

        public async Task<ViewerUrlResponse> GetViewerUrlAsync(string docId, string docType, CancellationToken ct = default)
        {
            var payload = new
            {
                DocId = docId,
                DocType = docType,
                RequestedBy = _options.ClientId
            };

            var response = await _httpClient.PostAsJsonAsync("/api/v1/access-token", payload, ct);

            if (!response.IsSuccessStatusCode)
            {
                var errorBody = await response.Content.ReadAsStringAsync(ct);
                _logger.LogError(
                    "Gagal minta access token ke Miwanet untuk DocId={DocId}. Status={Status} Body={Body}",
                    docId, response.StatusCode, errorBody);

                throw new InvalidOperationException($"Gagal mendapatkan viewer URL dari Miwanet (status {response.StatusCode}).");
            }

            var result = await response.Content.ReadFromJsonAsync<MiwanetTokenApiResponse>(cancellationToken: ct)
                ?? throw new InvalidOperationException("Response dari Miwanet kosong / tidak bisa di-parse.");

            return new ViewerUrlResponse
            {
                ViewerUrl = result.ViewerUrl,
                ExpiresAtUtc = result.ExpiresAtUtc
            };
        }

        public async Task<CdeViewerUrlResponse> GetCdeViewerUrlAsync(string cdeKey, string appNo, CancellationToken ct = default)
        {
            var payload = new
            {
                CdeKey = cdeKey,
                AppNo = appNo,
                RequestedBy = _options.ClientId
            };

            var response = await _httpClient.PostAsJsonAsync("/api/v1/cde-access-token", payload, ct);

            if (!response.IsSuccessStatusCode)
            {
                var errorBody = await response.Content.ReadAsStringAsync(ct);
                _logger.LogError(
                    "Gagal minta CDE access token ke Miwanet untuk CdeKey={CdeKey} AppNo={AppNo}. Status={Status} Body={Body}",
                    cdeKey, appNo, response.StatusCode, errorBody);

                throw new InvalidOperationException($"Gagal mendapatkan viewer URL CDE dari Miwanet (status {response.StatusCode}).");
            }

            var result = await response.Content.ReadFromJsonAsync<MiwanetCdeTokenApiResponse>(cancellationToken: ct)
                ?? throw new InvalidOperationException("Response CDE dari Miwanet kosong / tidak bisa di-parse.");

            return new CdeViewerUrlResponse
            {
                ViewerUrl = result.ViewerUrl,
                ExpiresAtUtc = result.ExpiresAtUtc
            };
        }

        // Bentuk response dari Miwanet.DocAccess.Api (AccessTokenResponse)
        private class MiwanetTokenApiResponse
        {
            public string Token { get; set; } = string.Empty;
            public string ViewerUrl { get; set; } = string.Empty;
            public DateTime ExpiresAtUtc { get; set; }
        }

        // Bentuk response dari Miwanet.DocAccess.Api (CdeAccessTokenResponse)
        private class MiwanetCdeTokenApiResponse
        {
            public string Token { get; set; } = string.Empty;
            public string ViewerUrl { get; set; } = string.Empty;
            public DateTime ExpiresAtUtc { get; set; }
        }
    }
}
