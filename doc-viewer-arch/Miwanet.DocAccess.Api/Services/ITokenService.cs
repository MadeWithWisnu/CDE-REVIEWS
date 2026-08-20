using System.Security.Claims;

namespace Miwanet.DocAccess.Api.Services
{
    public interface ITokenService
    {
        (string token, DateTime expiresAtUtc) GenerateViewerToken(string docId, string docType, string requestedBy);

        // Return null kalau invalid/expired. Kalau valid, kembalikan claims-nya (docId, docType, dst)
        ClaimsPrincipal? ValidateViewerToken(string token);
    }
}
