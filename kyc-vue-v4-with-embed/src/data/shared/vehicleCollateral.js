/**
 * vehicleCollateral.js
 * ---------------------
 * Collateral Check for vehicle assets. The backend already filters and
 * returns ONLY ONE asset category per application — either On The Road
 * (light/heavy vehicle) or Off The Road (heavy equipment) — never both at
 * once, so the FE only ever renders one of these two exports per CDE.
 *
 * Wire-up note: pick `vehicleCollateralOnTheRoad` or
 * `vehicleCollateralOffTheRoad` in the relevant CDE data file based on the
 * `assetCategory` field returned by the backend for that application.
 */
export const vehicleCollateralOnTheRoad = [
  { type: 'group', label: 'Rapindo:' },
  { type: 'row', label: 'Chassis No', value: 'MJEC1JG43J1234567', mono: true, indent: 1 },
  { type: 'row', label: 'Engine No', value: 'W04DTRR12345', mono: true, indent: 1 },
  { type: 'row', label: 'Vehicle Type', value: 'Dutro 130 HD', indent: 1 },
  { type: 'row', label: 'License Plate', value: 'H 1234 HC', mono: true, indent: 1 },
  { type: 'row', label: 'Manufacture Year', value: '2025', indent: 1 },
  { type: 'row', label: 'Brand', value: 'Hino', indent: 1 },
  { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
  { type: 'row', label: 'Finance Company', value: 'Mitsui Leasing Capital Indonesia', indent: 1 },
];

export const vehicleCollateralOffTheRoad = [
  { type: 'group', label: 'Rapindo:' },
  { type: 'row', label: 'Invoice No', value: '123/INV/SSN/II/2026', mono: true, indent: 1 },
  { type: 'row', label: 'Serial No', value: '12345DT1234', mono: true, indent: 1 },
  { type: 'row', label: 'Equipment Type', value: 'Heavy Equipment', indent: 1 },
  { type: 'row', label: 'Brand', value: 'Heli', indent: 1 },
  { type: 'row', label: 'Category', value: 'Forklift', indent: 1 },
  { type: 'row', label: 'Manufacture Year', value: '2026', indent: 1 },
  { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
  { type: 'row', label: 'Finance Company', value: 'Mitsui Leasing Capital Indonesia', indent: 1 },
];
