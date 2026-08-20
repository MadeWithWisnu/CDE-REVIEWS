/**
 * factoringCollateral.js
 * -----------------------
 * Collateral Check untuk skema Factoring (Invoice). Dipakai oleh CDE Factory.
 */
export const factoringCollateralCorporate = [
  { type: 'note', label: 'Untuk pengecekan Factoring (Invoice)' },
  { type: 'group', label: 'Rapindo:' },
  { type: 'row', label: 'Purchase Order No (PO or SO or SPK Number)', value: '1234.123/ABC', mono: true, indent: 1 },
  { type: 'row', label: 'Customer Name', value: 'PT ABC', indent: 1 },
  { type: 'row', label: 'Invoice Number', value: '524120045', mono: true, indent: 1 },
  { type: 'badge', label: 'Status', value: 'Not Registered', indent: 1 },
];
