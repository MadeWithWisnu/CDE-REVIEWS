# CDE Order Review (Vue 3 + Vite + Vue Router)

Restyle mengikuti mockup **MLCI Mobile Order** (PDF): shell sidebar navy +
topbar, aksi utama hijau brand, search-bar horizontal, hasil pencarian
berbentuk tabel, dan tampilan detail CDE berbentuk grid data 2-kolom
dengan header bar navy (ala "View Detail Assignment").

## Cara pakai

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Kalau muncul warning `npm error ... allowScripts` soal `esbuild`:
```bash
npm approve-scripts esbuild
npm install
```

Build production:
```bash
npm run build
```

## Alur & tampilan (mengikuti style PDF)

| Langkah | Route | Style dari mockup yang dipakai |
|---|---|---|
| 1. Search | `/` | Search-bar horizontal ala "Search By" di Order Monitoring — App No, Debtor Type, Way of Financing, tombol hijau **Search** |
| 2. Pilih dokumen | `/results` | Tabel daftar dokumen CDE (bukan card grid) — baris klik untuk buka |
| 3. Detail CDE | `/cde/:cdeKey` | Section dengan header bar **navy** (ala "View Detail Assignment"), isi berupa grid data 2 kolom label-di-atas/value-di-bawah |

Semua halaman dibungkus **App Shell**: sidebar navy kiri ("CDE ORDER") +
topbar atas dengan judul halaman & user chip, meniru layout web
"FIMS ORDER" di mockup.

## Yang baru dibanding versi sebelumnya

1. **AppShell.vue** — sidebar + topbar persisten di semua halaman.
2. **Skema warna baru**: navy (`--navy`) untuk header/sidebar, hijau
   (`--green`) untuk aksi utama — ganti total dari skema teal/navy lama.
   Semua token ada di `src/style.css`.
3. **CdeFilterForm.vue** — search-bar horizontal, bukan card form ter-center.
4. **CdeResults.vue** — tabel (thead/tbody), bukan grid kartu.
5. **AccordionSection.vue** — header jadi bar navy solid, body jadi
   `grid-template-columns: 1fr 1fr` (field label kecil uppercase di atas,
   value tebal di bawah) — mengikuti pola field di modal
   "View Detail Assignment" pada mockup.
6. Font & layout full-page dari revisi sebelumnya tetap dipertahankan.
7. Upload & view PDF review CA (`CaReviewUpload.vue`) tetap ada, warnanya
   disesuaikan ke skema navy/hijau baru.

## Struktur folder

```
src/
├── components/
│   ├── AppShell.vue         ← sidebar navy + topbar (shell seluruh app)
│   ├── CdeFilterForm.vue    ← search-bar (App No / Debtor Type / Way of Financing)
│   ├── CdeResults.vue       ← tabel dokumen CDE hasil filter
│   ├── CdeDashboard.vue     ← header dokumen + upload CA + accordion section
│   ├── CaReviewUpload.vue   ← upload & viewer PDF review CA
│   └── AccordionSection.vue ← 1 section: header navy + grid data 2 kolom
├── data/                     ← sama seperti sebelumnya (lihat komentar di tiap file)
├── router/index.js
├── App.vue / main.js / style.css
```

## Reskin lebih lanjut

- Warna navy/hijau: `src/style.css` (`:root`).
- Item sidebar (`Task Order`, `Monitoring`, `Report` — saat ini ditandai
  "Segera" karena belum ada halamannya): edit array `navItems` di
  `AppShell.vue`. Tinggal buat komponen halaman baru + route, lalu hapus
  `comingSoon: true` dan tambahkan `to:` pada item terkait.
- Struktur data CDE, cara tambah template baru, cara tambah section baru:
  masih sama seperti sebelumnya — lihat komentar di `src/data/cdeTypes.js`
  dan `src/data/sections.js`.
