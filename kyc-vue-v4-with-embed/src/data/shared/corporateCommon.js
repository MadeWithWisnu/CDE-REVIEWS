/**
 * corporateCommon.js
 * -------------------
 * KYC Screening, APU PPT Check, dan SLIK Check untuk Corporate Customer
 * bentuknya SAMA di beberapa tipe CDE (Review CF, FL, Factory, MOU & CWR).
 * Daripada duplikat di 4 file, isinya ditaruh di sini dan tinggal di-import.
 *
 * Kalau suatu saat ada satu tipe CDE yang butuh versi berbeda (mis. ada
 * field tambahan), tinggal jangan pakai import ini di file data tipe
 * tersebut — buat array sendiri di situ. Section lain tetap boleh pakai
 * yang common.
 */

export const kycCorporateCommon = [
  { type: 'group', label: 'AHU:' },
  { type: 'row', label: 'Inquiry', value: 'Registered', indent: 1 },
  { type: 'group', label: 'Deed of Establishment' },
  { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },
];

export const apupptCorporateCommon = [
  { type: 'badge', label: 'AML News', value: 'Not Listed' },
  { type: 'badge', label: 'AML-CFT Customer Classification', value: 'Medium Risk' },
  { type: 'badge', label: 'World Check One', value: 'PEP' },
];

export const slikCheckCorporateCommon = [
  { type: 'group', label: 'SLIK Score:' },
  { type: 'badge', label: 'Customer', value: 'Good', indent: 1 },
  { type: 'badge', label: 'Mr Febby - Director & Shareholder', value: 'Medium-Good', indent: 1 },
  { type: 'badge', label: 'Mr Ivan - Commisioner & Shareholder', value: 'Medium-Good', indent: 1 },
  { type: 'badge', label: 'Aggregate', value: 'Good', indent: 1 },
  {
    type: 'links', label: 'Summary SLIK', indent: 1, links: [
      { text: 'Link to dashboard Customer', url: '#' },
      { text: 'Link to dashboard Mr Febby', url: '#' },
      { text: 'Link to dashboard Mr Ivan', url: '#' },
    ]
  },
];
