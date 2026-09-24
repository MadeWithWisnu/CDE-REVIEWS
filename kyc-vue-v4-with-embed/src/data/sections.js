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
  rating:       { title: 'RATING',           icon: '⭐', color: '#B7791F', bg: '#FBF0DC' },
  kyc:          { title: 'SCREENING',        icon: '🛂', color: '#0E5C63', bg: '#E4F1F1' },
  preScoring:   { title: 'PRE SCORING',      icon: '📊', color: '#5B4EA6', bg: '#ECE9F8' },
  slikCheck:    { title: 'SLIK CHECK',       icon: '🧮', color: '#5B4EA6', bg: '#ECE9F8' },
  collateral:   { title: 'COLLATERAL CHECK', icon: '🚚', color: '#B7791F', bg: '#FBF0DC' },
  apuppt:       { title: 'APU PPT CHECK',    icon: '🛡️', color: '#C43D3D', bg: '#FBE7E7' },
  lpip:         { title: 'CREDIT BUREAU CHECK',       icon: '🔎', color: '#1E7A8C', bg: '#E1F0F4' },
  finalScoring: { title: 'FINAL SCORING',    icon: '✅', color: '#1E8E5A', bg: '#E4F6ED' },
};

/**
 * badgeTone(rawValue)
 * --------------------
 * Menentukan warna badge (good / mid / risk / neutral) berdasarkan keyword
 * di value. Tambah/ubah keyword di sini kalau ada istilah status baru.
 *
 * NOTE: "no"/"yes" dicek exact-match (bukan substring) supaya tidak salah
 * tangkap kata seperti "Not Listed" (yang harusnya GOOD, bukan risk hanya
 * karena mengandung huruf "no").
 */
export function badgeTone(raw) {
  const v = String(raw).toLowerCase().trim();

  if (v === 'no') return 'risk';
  if (v === 'yes') return 'good';

  const goodWords = ['good', 'match', 'inactive', 'available', 'low risk', 'recommend to approve', 'registered', 'valid', 'verified', 'passed', 'not listed', 'green', 'outstanding', 'recommended', 'customer new'];
  const midWords  = ['medium', 'tend to approve', 'pep', 'yellow', 'potentially modified'];
  const riskWords = ['not match', 'active', 'listed', 'high risk', 'not registered', 'not valid', 'not verified', 'deviated', 'failed', 'dttot', 'blacklist', 'red', 'late payment', 'wo', 'exact'];

  if (riskWords.some(w => v.includes(w))) return 'risk';
  if (midWords.some(w => v.includes(w))) return 'mid';
  if (goodWords.some(w => v.includes(w))) return 'good';
  return 'neutral';
}
