using Microsoft.Extensions.Options;
using Miwanet.DocAccess.Api.Models;

namespace Miwanet.DocAccess.Api.Middleware
{
    // Validasi header X-Api-Key untuk endpoint yang hanya boleh dipanggil server-to-server
    // (mis. Confins BE -> Miwanet BE). TIDAK dipakai untuk endpoint doc-viewer (itu pakai token JWT).
    public class ApiKeyAuthMiddleware
    {
        private const string ApiKeyHeaderName = "X-Api-Key";
        private const string ClientIdHeaderName = "X-Client-Id"; // identitas pemanggil, mis: "CONFINS"

        private readonly RequestDelegate _next;

        public ApiKeyAuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, IOptions<DocAccessOptions> options)
        {
            // Hanya proteksi endpoint token issuance (POST, server-to-server).
            // Endpoint /validate SENGAJA tidak diproteksi API Key karena dipanggil
            // langsung dari browser (Vue app) - keamanannya ada di validasi JWT itu sendiri.
            var path = context.Request.Path;
            var isIssuanceEndpoint =
                (path.StartsWithSegments("/api/v1/access-token") && !path.Value!.Contains("/validate")) ||
                (path.StartsWithSegments("/api/v1/cde-access-token") && !path.Value!.Contains("/validate"));

            if (!isIssuanceEndpoint)
            {
                await _next(context);
                return;
            }

            if (!context.Request.Headers.TryGetValue(ApiKeyHeaderName, out var apiKey) ||
                !context.Request.Headers.TryGetValue(ClientIdHeaderName, out var clientId))
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                await context.Response.WriteAsJsonAsync(new ErrorResponse { Message = "X-Api-Key / X-Client-Id header tidak ditemukan." });
                return;
            }

            var allowedKeys = options.Value.AllowedApiKeys;

            if (!allowedKeys.TryGetValue(clientId.ToString(), out var expectedKey) ||
                expectedKey != apiKey.ToString())
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                await context.Response.WriteAsJsonAsync(new ErrorResponse { Message = "API Key tidak valid untuk client ini." });
                return;
            }

            // Simpan identitas client tervalidasi ke item context, bisa dipakai untuk audit log
            context.Items["ClientId"] = clientId.ToString();

            await _next(context);
        }
    }

    public static class ApiKeyAuthMiddlewareExtensions
    {
        public static IApplicationBuilder UseApiKeyAuth(this IApplicationBuilder app)
        {
            return app.UseMiddleware<ApiKeyAuthMiddleware>();
        }
    }
}
