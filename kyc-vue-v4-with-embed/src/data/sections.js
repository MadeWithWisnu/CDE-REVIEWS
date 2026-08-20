/**
 * sections.js
 * ------------
 * SECTION_LIBRARY = "katalog" semua kemungkinan section accordion beserta
 * ikon/warnanya. Setiap tipe CDE (lihat cdeTypes.js) tinggal memilih section
 * mana saja yang dipakai lewat `sectionOrder`, komponen akan otomatis
 * render sesuai urutan itu.
 *
 * Mau tambah section baru (mis. "Legal Check")? Tambahkan entry baru di
 * sini, lalu pakai key-nya di `sectionOrder` tipe CDE yang relevan dan
 * sediakan datanya di file data CDE tersebut.
 */
export const SECTION_LIBRARY = {
  kyc:          { title: 'KYC Screening',    icon: '🪪', color: '#0E5C63', bg: '#E4F1F1' },
  preScoring:   { title: 'Pre Scoring',      icon: '📊', color: '#5B4EA6', bg: '#ECE9F8' },
  slikCheck:    { title: 'SLIK Check',       icon: '🧮', color: '#5B4EA6', bg: '#ECE9F8' },
  collateral:   { title: 'Collateral Check', icon: '🚚', color: '#B7791F', bg: '#FBF0DC' },
  apuppt:       { title: 'APU PPT Check',    icon: '🛡️', color: '#C43D3D', bg: '#FBE7E7' },
  lpip:         { title: 'LPIP Check',       icon: '🔎', color: '#1E7A8C', bg: '#E1F0F4' },
  finalScoring: { title: 'Final Scoring',    icon: '✅', color: '#1E8E5A', bg: '#E4F6ED' },
};

/**
 * badgeTone(rawValue)
 * --------------------
 * Menentukan warna badge (good / mid / risk / neutral) berdasarkan keyword
 * di value. Tambah/ubah keyword di sini kalau ada istilah status baru.
 */
export function badgeTone(raw) {
  const v = String(raw).toLowerCase();

  const goodWords = ['good', 'match', 'active', 'available', 'low risk', 'recommend to approve', 'yes', 'registered', 'valid'];
  const midWords  = ['medium', 'tend to approve', 'pep'];
  const riskWords = ['not match', 'high risk', 'no', 'not listed', 'not registered'];

  if (riskWords.some(w => v.includes(w))) return 'risk';
  if (midWords.some(w => v.includes(w))) return 'mid';
  if (goodWords.some(w => v.includes(w))) return 'good';
  return 'neutral';
}
