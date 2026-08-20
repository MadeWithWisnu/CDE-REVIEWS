using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Miwanet.DocAccess.Api.Models;

namespace Miwanet.DocAccess.Api.Services
{
    public class TokenService : ITokenService
    {
        private readonly DocAccessOptions _options;
        private readonly SymmetricSecurityKey _signingKey;

        public TokenService(IOptions<DocAccessOptions> options)
        {
            _options = options.Value;

            if (string.IsNullOrWhiteSpace(_options.JwtSigningKey) || _options.JwtSigningKey.Length < 32)
            {
                throw new InvalidOperationException(
                    "DocAccess:JwtSigningKey belum diset atau terlalu pendek (minimal 32 karakter). " +
                    "Simpan di secret manager / environment variable, jangan hardcode.");
            }

            _signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.JwtSigningKey));
        }

        public (string token, DateTime expiresAtUtc) GenerateViewerToken(string docId, string docType, string requestedBy)
        {
            var now = DateTime.UtcNow;
            var expires = now.AddMinutes(_options.TokenLifetimeMinutes);

            // Nonce (jti) supaya token unik - bisa dipakai untuk implementasi single-use di masa depan
            // (mis. simpan jti yang sudah dipakai di cache/redis, tolak kalau dipakai ulang)
            var jti = Guid.NewGuid().ToString("N");

            var claims = new[]
            {
                new Claim("doc_id", docId),
                new Claim("doc_type", docType),
                new Claim("requested_by", requestedBy),
                new Claim(JwtRegisteredClaimNames.Jti, jti),
                new Claim(JwtRegisteredClaimNames.Iat, ((DateTimeOffset)now).ToUnixTimeSeconds().ToString())
            };

            var creds = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                issuer: "Miwanet.DocAccess",
                audience: "Miwanet.DocViewer",
                claims: claims,
                notBefore: now,
                expires: expires,
                signingCredentials: creds);

            var token = new JwtSecurityTokenHandler().WriteToken(jwt);
            return (token, expires);
        }

        public ClaimsPrincipal? ValidateViewerToken(string token)
        {
            var handler = new JwtSecurityTokenHandler();

            var validationParams = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = "Miwanet.DocAccess",
                ValidateAudience = true,
                ValidAudience = "Miwanet.DocViewer",
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.FromSeconds(30) // toleransi kecil untuk perbedaan jam server
            };

            try
            {
                var principal = handler.ValidateToken(token, validationParams, out _);
                return principal;
            }
            catch
            {
                // Token invalid, expired, atau signature tidak cocok
                return null;
            }
        }
    }
}
