/**
 * corporateCommon.js
 * -------------------
 * KYC Screening, APU PPT Check, and SLIK Check for Corporate Customer share
 * the same shape across several CDE types (Review CF, FL, Factory, MOU &
 * CWR). Instead of duplicating them in 4 files, they live here and get
 * imported where needed.
 *
 * If a CDE type ever needs a different version (e.g. an extra field), just
 * skip this import in that type's data file and build a dedicated array
 * there instead — other sections can still use the common one.
 */

export const kycCorporateCommon = [
  { type: 'group', label: 'AHU:' },
  { type: 'row', label: 'Inquiry', value: 'Registered', indent: 1 },
  { type: 'group', label: 'Deed of Establishment' },
  { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },

  { type: 'group', label: 'Company Guarantor' },
  { type: 'row', label: 'Inquiry', value: 'Registered', indent: 1 },
  { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },

  { type: 'group', label: 'Personal Guarantor' },
  { type: 'row', label: 'Dukcapil', value: 'Match', indent: 1 },
  { type: 'row', label: 'Phone Verification (ID Match)', value: 'Match', indent: 1 },
  { type: 'row', label: 'Phone Verification (Phone Age)', value: '(>12 months)', indent: 1 },
];

export const apupptCorporateCommon = [
  { type: 'badge', label: 'AML News', value: 'Not Listed' },
  { type: 'badge', label: 'AML-CFT Customer Classification', value: 'Medium Risk' },
  { type: 'badge', label: 'World Check One', value: 'PEP' },
];

export const slikCheckCorporateCommon = [
  {
    type: 'peopleTable',
    label: 'SLIK Score',
    people: [
      { name: 'Customer', positionStatus: '—', result: 'Good', summaryUrl: '#' },
      { name: 'Mr Febby', positionStatus: 'Director & Shareholder', result: 'Medium-Good', summaryUrl: '#' },
      { name: 'Mr Ivan', positionStatus: 'Commissioner & Shareholder', result: 'Medium-Good', summaryUrl: '#' },
      { name: 'Company Guarantor', positionStatus: '—', result: 'Good', summaryUrl: '#' },
      { name: 'Personal Guarantor', positionStatus: '—', result: 'Good', summaryUrl: '#' },
      { name: 'Aggregate', positionStatus: '—', result: 'Good', summaryUrl: '' },
    ],
  },
];
