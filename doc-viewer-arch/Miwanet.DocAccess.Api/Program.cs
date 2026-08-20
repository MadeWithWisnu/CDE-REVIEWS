using Miwanet.DocAccess.Api.Middleware;
using Miwanet.DocAccess.Api.Models;
using Miwanet.DocAccess.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DocAccessOptions>(
    builder.Configuration.GetSection(DocAccessOptions.SectionName));

builder.Services.AddSingleton<ITokenService, TokenService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS: hanya izinkan origin Confins yang sah untuk memanggil endpoint non-viewer (kalau ada)
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("ConfinsOnly", policy =>
    {
        policy.WithOrigins(builder.Configuration.GetSection("DocAccess:AllowedFrontendOrigins").Get<string[]>() ?? Array.Empty<string>())
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS default (ConfinsOnly) dipakai untuk endpoint umum.
// Untuk /api/v1/cde-access-token/validate, izinkan juga origin Vue app Miwanet sendiri
// (karena endpoint ini dipanggil dari browser oleh kyc-vue-v4, bukan cuma dari Confins).
app.UseCors("ConfinsOnly");

// Validasi API Key khusus untuk endpoint /api/v1/access-token (server-to-server)
app.UseApiKeyAuth();

// Izinkan halaman doc-viewer di-embed sebagai iframe HANYA dari domain Confins yang terdaftar.
// Default browser akan block iframe cross-origin kalau X-Frame-Options=DENY/SAMEORIGIN,
// jadi kita override khusus untuk path /doc-viewer.
// CATATAN: middleware ini cuma efektif kalau /cde ikut di-serve oleh API .NET ini
// (mis. lewat app.UseSpaStaticFiles / reverse proxy ke Vite). Kalau kyc-vue-v4 di-deploy
// terpisah (static hosting/IIS site sendiri), header CSP frame-ancestors ini HARUS
// disetel di level web server/reverse proxy-nya juga, bukan cuma di sini.
app.Use(async (context, next) =>
{
    if (context.Request.Path.StartsWithSegments("/doc-viewer") ||
        context.Request.Path.StartsWithSegments("/cde"))
    {
        var allowedFrameAncestors = builder.Configuration
            .GetSection("DocAccess:AllowedFrontendOrigins").Get<string[]>() ?? Array.Empty<string>();

        var csp = "frame-ancestors " + (allowedFrameAncestors.Length > 0
            ? string.Join(' ', allowedFrameAncestors)
            : "'none'");

        context.Response.Headers["Content-Security-Policy"] = csp;
        // Jangan set X-Frame-Options di sini karena CSP frame-ancestors sudah lebih granular & modern
    }

    await next();
});

app.UseAuthorization();
app.MapControllers();

app.Run();
