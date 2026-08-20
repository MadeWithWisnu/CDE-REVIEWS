using Confins.Gateway.Api.Models;
using Confins.Gateway.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MiwanetIntegrationOptions>(
    builder.Configuration.GetSection(MiwanetIntegrationOptions.SectionName));

// HttpClient dengan retry/timeout dasar - bisa ditambah Polly kalau perlu resilience lebih lanjut
builder.Services.AddHttpClient<IMiwanetDocAccessClient, MiwanetDocAccessClient>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("ConfinsFrontend", policy =>
    {
        policy.WithOrigins(builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? Array.Empty<string>())
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
app.UseCors("ConfinsFrontend");
app.UseAuthorization();
app.MapControllers();

app.Run();
