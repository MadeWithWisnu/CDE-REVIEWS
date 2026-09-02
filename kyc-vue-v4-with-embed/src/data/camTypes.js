/**
 * camTypes.js
 * ------------
 * Registry of CAM (Credit Approval Memorandum) report templates, one per
 * debtor type — mirrors the pattern in cdeTypes.js. "Organization
 * Structure" only applies to Corporate; "5C Highlight" and "Checking
 * Result" render different sub-content per debtor type (handled inside the
 * data file itself, not here).
 */
export const CAM_DEBTOR_TYPES = [
  { key: 'personal', label: 'Personal' },
  { key: 'company', label: 'Company' },
];

export const CAM_TYPES = [
  {
    key: 'corporate',
    name: 'Credit Approval Memorandum — Corporate',
    description: 'Full CAM report for a corporate application — customer, finance, checking, financial review, and recommendation.',
    icon: '🏢',
    color: '#0E5C63',
    bg: '#E4F1F1',
    debtorType: 'company',
    sectionOrder: [
      'applicationInfo', ['customer', 'asset'], ['finance', 'disbursement'], 'insurance',
      'obligor', 'subsidy', 'equipment', 'checkingResult', 'apuppt', 'deviation',
      'organization', 'financialReview', 'fiveC', 'camNotes', 'surveyTask',
      'termCondition', 'loanRatio',
    ],
  },
  {
    key: 'individual',
    name: 'Credit Approval Memorandum — Individual',
    description: 'Full CAM report for a personal application — customer, finance, checking, and recommendation.',
    icon: '🪪',
    color: '#0E5C63',
    bg: '#E4F1F1',
    debtorType: 'personal',
    sectionOrder: [
      'applicationInfo', ['customer', 'asset'], ['finance', 'disbursement'], 'insurance',
      'obligor', 'subsidy', 'equipment', 'checkingResult', 'apuppt', 'deviation',
      'financialReview', 'fiveC', 'camNotes', 'surveyTask',
      'termCondition', 'loanRatio',
    ],
  },
];

export function getCamType(debtorTypeKey) {
  return CAM_TYPES.find(t => t.debtorType === debtorTypeKey) || null;
}

export function getCamTypeByKey(key) {
  return CAM_TYPES.find(t => t.key === key) || null;
}
