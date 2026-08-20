# Arsitektur: Iframe Dokumen Miwanet via Confins (Tanpa Login Manual)

## Alur

```
[Vue.js FE] --(1. GET viewer-url)--> [Confins.Gateway.Api]
                                            |
                                (2. POST /api/v1/access-token)
                                     X-Api-Key + X-Client-Id
                                            |
                                            v
                                  [Miwanet.DocAccess.Api]
                                            |
                                (3. generate JWT short-lived, 5 menit)
                                            |
[Confins.Gateway.Api] <--(4. { viewerUrl, expiresAtUtc })--
       |
       v
[Vue.js FE] <--(5. viewerUrl)--
       |
       v
<iframe src="https://miwanet.../doc-viewer?token=xxx">
       |
       v
[Miwanet.DocAccess.Api] validasi token (6. GET /doc-viewer?token=xxx) -> render dokumen
```

**Poin penting:**
- API Key **hanya** dipakai di komunikasi server-to-server (langkah 2), **tidak pernah** dikirim ke browser.
- Token JWT di URL iframe (langkah 6) **short-lived** (default 5 menit) dan scoped ke 1 dokumen saja (klaim `doc_id`).
- Browser tidak pernah login manual ke Miwanet — otentikasi terjadi lewat token yang sudah divalidasi server.
- `Content-Security-Policy: frame-ancestors` di Miwanet membatasi domain mana saja yang boleh embed iframe ini (bukan `*`).

## Struktur Proyek

```
doc-viewer-arch/
├── Miwanet.DocAccess.Api/       # BE Miwanet: issue & validasi token, serve doc-viewer
│   ├── Controllers/
│   │   ├── AccessTokenController.cs   # POST /api/v1/access-token (server-to-server, pakai API Key)
│   │   └── DocViewerController.cs     # GET /doc-viewer?token=xxx (dipanggil iframe browser)
│   ├── Services/TokenService.cs       # generate & validasi JWT
│   ├── Middleware/ApiKeyAuthMiddleware.cs
│   └── appsettings.json
│
├── Confins.Gateway.Api/         # BE Confins: proxy ke Miwanet, expose endpoint untuk FE
│   ├── Controllers/DocumentViewerController.cs  # GET /api/documents/{docId}/viewer-url
│   ├── Services/MiwanetDocAccessClient.cs        # HttpClient + API Key ke Miwanet
│   └── appsettings.json
│
└── vue-frontend/
    └── src/components/
        ├── DocViewerIframe.vue          # komponen reusable render iframe + auto-refresh token
        └── CdeDocumentPage.example.vue  # contoh integrasi ke halaman CDE existing
```

## Cara Jalankan (Development)

### 1. Miwanet.DocAccess.Api
```bash
cd Miwanet.DocAccess.Api
dotnet restore
# Set secret via user-secrets (jangan commit ke appsettings.json)
dotnet user-secrets init
dotnet user-secrets set "DocAccess:JwtSigningKey" "ganti-dengan-random-string-minimal-32-char"
dotnet user-secrets set "DocAccess:AllowedApiKeys:CONFINS" "generate-api-key-random"
dotnet run
```
Default jalan di `https://localhost:xxxx` (cek `launchSettings.json` setelah `dotnet new`).

### 2. Confins.Gateway.Api
```bash
cd Confins.Gateway.Api
dotnet restore
dotnet user-secrets init
dotnet user-secrets set "MiwanetIntegration:ApiKey" "sama-dengan-yang-di-set-di-Miwanet"
dotnet user-secrets set "MiwanetIntegration:BaseUrl" "https://localhost:xxxx"  # URL Miwanet.DocAccess.Api
dotnet run
```

### 3. Vue Frontend
```bash
cd vue-frontend
npm install axios
# copy DocViewerIframe.vue ke project Vue existing (cdeTypes.js / cdeData.js / sections.js)
# sesuaikan api-base-url mengarah ke Confins.Gateway.Api
```

## Catatan Implementasi Lanjutan (Belum Termasuk di Kode Ini)

1. **Validasi bisnis di `AccessTokenController`**: cek apakah `DocId` benar-benar ada di Miwanet dan apakah `RequestedBy` (Confins) berhak mengakses dokumen tersebut sebelum menerbitkan token.
2. **Single-use token (opsional)**: klaim `jti` sudah disiapkan di `TokenService`, tinggal simpan `jti` yang sudah dipakai di Redis/cache dengan TTL = expiry token, tolak kalau dipakai ulang.
3. **`DocViewerController.RenderViewerHtml`**: saat ini placeholder HTML. Ganti dengan reuse halaman/komponen viewer Miwanet yang sudah ada (RDLC render, PDF viewer, dsb) berdasarkan `docId` dan `docType`.
4. **Audit log**: setiap token yang diterbitkan (langkah 3) dan setiap akses viewer (langkah 6) sudah di-log via `ILogger` — sambungkan ke sistem logging terpusat kalau ada (mis. Serilog + Seq/ELK).
5. **Rate limiting**: tambahkan rate limit di `AccessTokenController` untuk mencegah abuse dari sisi Confins BE yang error/looping.
6. **Rotasi API Key**: `AllowedApiKeys` saat ini dictionary statis di config — untuk production sebaiknya pindah ke tabel DB atau secret manager (Azure Key Vault / AWS Secrets Manager) agar bisa dirotasi tanpa redeploy.
