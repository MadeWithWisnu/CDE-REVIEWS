/**
 * vehicleCollateral.js
 * ---------------------
 * Collateral Check untuk unit kendaraan (On The Road) dan alat berat
 * (Off The Road). Dipakai bareng oleh CDE Review CF dan CDE FL karena
 * strukturnya identik. Kalau nanti salah satu butuh versi beda, tinggal
 * copy array ini ke file terpisah dan sesuaikan.
 */
export const vehicleCollateralCorporate = [
  { type: 'note', label: 'Untuk unit kendaraan On The Road' },
  { type: 'group', label: 'Rapindo:' },
  { type: 'row', label: 'Chassis No', value: 'MJEC1JG43J1234567', mono: true, indent: 1 },
  { type: 'row', label: 'Engine No', value: 'W04DTRR12345', mono: true, indent: 1 },
  { type: 'row', label: 'Vehicle Type', value: 'Dutro 130 HD', indent: 1 },
  { type: 'row', label: 'License Type', value: 'H 1234 HC', mono: true, indent: 1 },
  { type: 'row', label: 'Manufacture Year', value: '2025', indent: 1 },
  { type: 'row', label: 'Brand', value: 'Hino', indent: 1 },
  { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
  { type: 'row', label: 'Finance Company', value: 'Mitsui Leasing Capital Indonesia', indent: 1 },

  { type: 'note', label: 'Untuk unit alat berat Off The Road' },
  { type: 'group', label: 'Rapindo:' },
  { type: 'row', label: 'Invoice No', value: '123/INV/SSN/II/2026', mono: true, indent: 1 },
  { type: 'row', label: 'Serial No', value: '12345DT1234', mono: true, indent: 1 },
  { type: 'row', label: 'Type', value: 'Heavy Equipment', indent: 1 },
  { type: 'row', label: 'Brand', value: 'Heli', indent: 1 },
  { type: 'row', label: 'Category', value: 'Forklift', indent: 1 },
  { type: 'row', label: 'Manufacture Year', value: '2026', indent: 1 },
  { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
  { type: 'row', label: 'Finance Company', value: 'Mitsui Leasing Capital Indonesia', indent: 1 },
];
