/**
 * cdeTypes.js
 * ------------
 * Registry SEMUA template CDE yang tersedia. Setiap entry BERDIRI SENDIRI
 * (bukan tab Individual/Corporate dalam satu dashboard) — jadi "CDE Leasing
 * Individual" dan "CDE Leasing Corporate" adalah dua entry terpisah dengan
 * key masing-masing.
 *
 * Field:
 *  - key              : ID unik, dipakai di URL (/cde/:key) & lookup data di cdeData.js
 *  - name              : nama yang ditampilkan
 *  - description       : deskripsi singkat
 *  - icon / color / bg  : styling kartu & header section
 *  - debtorType        : 'personal' | 'company'  — dipakai untuk filter
 *  - financingWays     : array kode Way of Financing yang match template ini
 *                         — dipakai untuk filter. Kode yang dipakai: 'IF', 'FMU', 'FL'
 *  - sectionOrder      : urutan section accordion untuk template ini (key harus
 *                         ada di SECTION_LIBRARY, lihat sections.js)
 *
 * ==> ASUMSI mapping Way of Financing (silakan sesuaikan kalau beda di lapangan):
 *     IF  (Installment Financing) -> CDE Leasing (Individual & Corporate), CDE Review CF
 *     FL  (Fleet Leasing)         -> CDE FL
 *     FMU                         -> CDE Factory, CDE MOU & CWR
 *
 * ==> Menambah template CDE baru? 3 langkah:
 *   1. Tambah entry baru di array ini (termasuk debtorType & financingWays).
 *   2. Buat file data di src/data/cde/<key>/... berisi array per section.
 *   3. Daftarkan di src/data/cdeData.js
 * Tidak perlu mengubah komponen .vue.
 */
export const DEBTOR_TYPES = [
  { key: 'personal', label: 'Personal' },
  { key: 'company', label: 'Company' },
];

export const FINANCING_WAYS = [
  { key: 'IF', label: 'IF — Installment Financing' },
  { key: 'FMU', label: 'FMU' },
  { key: 'FL', label: 'FL — Fleet Leasing' },
];

export const CDE_TYPES = [
  {
    key: 'leasing-individual',
    name: 'CDE Leasing — Individual',
    description: 'Pembiayaan kendaraan perorangan — full pipeline scoring sampai final approval.',
    icon: '🚗',
    color: '#0E5C63',
    bg: '#E4F1F1',
    debtorType: 'personal',
    financingWays: ['IF'],
    sectionOrder: ['kyc', 'preScoring', 'collateral', 'apuppt', 'lpip', 'finalScoring'],
  },
  {
    key: 'leasing-corporate',
    name: 'CDE Leasing — Corporate',
    description: 'Pembiayaan kendaraan perusahaan — full pipeline scoring sampai final approval.',
    icon: '🏢',
    color: '#0E5C63',
    bg: '#E4F1F1',
    debtorType: 'company',
    financingWays: ['IF'],
    sectionOrder: ['kyc', 'preScoring', 'collateral', 'apuppt', 'lpip', 'finalScoring'],
  },
  {
    key: 'review-cf',
    name: 'CDE Review CF',
    description: 'Review consumer finance — KYC, compliance, SLIK, dan collateral kendaraan.',
    icon: '📋',
    color: '#5B4EA6',
    bg: '#ECE9F8',
    debtorType: 'company',
    financingWays: ['IF'],
    sectionOrder: ['kyc', 'apuppt', 'slikCheck', 'collateral'],
  },
  {
    key: 'fl',
    name: 'CDE FL',
    description: 'Fleet Leasing — mencakup unit kendaraan (On The Road) & alat berat (Off The Road).',
    icon: '🚛',
    color: '#B7791F',
    bg: '#FBF0DC',
    debtorType: 'company',
    financingWays: ['FL'],
    sectionOrder: ['kyc', 'apuppt', 'slikCheck', 'collateral'],
  },
  {
    key: 'factory',
    name: 'CDE Factory',
    description: 'Factoring / pembiayaan invoice — pengecekan PO, invoice, dan status registrasi.',
    icon: '🧾',
    color: '#1E7A8C',
    bg: '#E1F0F4',
    debtorType: 'company',
    financingWays: ['FMU'],
    sectionOrder: ['kyc', 'apuppt', 'slikCheck', 'collateral'],
  },
  {
    key: 'mou-cwr',
    name: 'CDE MOU & CWR',
    description: 'MOU & Collateral Warehouse Receipt — tanpa pengecekan collateral kendaraan.',
    icon: '📑',
    color: '#8E4B8E',
    bg: '#F4E9F4',
    debtorType: 'company',
    financingWays: ['FMU'],
    sectionOrder: ['kyc', 'apuppt', 'slikCheck'],
  },
];

export function getCdeType(key) {
  return CDE_TYPES.find(t => t.key === key) || null;
}

/** Filter template CDE berdasarkan debtorType + wayOfFinancing dari form. */
export function filterCdeTypes(debtorType, financingWay) {
  return CDE_TYPES.filter(t =>
    (!debtorType || t.debtorType === debtorType) &&
    (!financingWay || t.financingWays.includes(financingWay))
  );
}
