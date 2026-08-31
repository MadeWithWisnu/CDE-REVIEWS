/**
 * camSections.js
 * ---------------
 * Section catalog for the "Report CAM" (Credit Approval Memorandum) space —
 * mirrors the pattern in sections.js for CDE. Reuses `badgeTone` from
 * sections.js so status colors stay consistent across both spaces.
 *
 * Some sections differ between Corporate and Individual debtors (e.g.
 * "Organization Structure" is corporate-only) — that's controlled per
 * template in camTypes.js via `sectionOrder`, same pattern as CDE_TYPES.
 */
export const CAM_SECTION_LIBRARY = {
  applicationInfo:  { title: 'Application Info',        icon: '🧾', color: '#0E5C63', bg: '#E4F1F1' },
  customer:         { title: 'Customer',                icon: '🪪', color: '#0E5C63', bg: '#E4F1F1' },
  asset:            { title: 'Asset & Supplier',        icon: '🚚', color: '#B7791F', bg: '#FBF0DC' },
  finance:          { title: 'Finance Information',     icon: '💳', color: '#5B4EA6', bg: '#ECE9F8' },
  disbursement:     { title: 'Disbursement',             icon: '💸', color: '#5B4EA6', bg: '#ECE9F8' },
  insurance:        { title: 'Insurance',                icon: '🛡️', color: '#C43D3D', bg: '#FBE7E7' },
  obligor:          { title: 'Outstanding & Commission', icon: '📈', color: '#1E7A8C', bg: '#E1F0F4' },
  subsidy:          { title: 'Subsidy & Disbursement Detail', icon: '🔁', color: '#1E7A8C', bg: '#E1F0F4' },
  equipment:        { title: 'Equipment Detail Review',  icon: '⚙️', color: '#B7791F', bg: '#FBF0DC' },
  checkingResult:   { title: 'Checking Result',          icon: '✅', color: '#1E8E5A', bg: '#E4F6ED' },
  apuppt:           { title: 'APU PPT',                  icon: '🛡️', color: '#C43D3D', bg: '#FBE7E7' },
  deviation:        { title: 'Deviation',                icon: '📉', color: '#B7791F', bg: '#FBF0DC' },
  organization:     { title: 'Organization Structure',   icon: '🏢', color: '#0E5C63', bg: '#E4F1F1' },
  financialReview:  { title: 'Financial Information Review', icon: '📑', color: '#5B4EA6', bg: '#ECE9F8' },
  fiveC:            { title: '5C Highlight',             icon: '⭐', color: '#1E8E5A', bg: '#E4F6ED' },
  camNotes:         { title: 'CAM Notes & Recommendation', icon: '📝', color: '#8E4B8E', bg: '#F4E9F4' },
  surveyTask:       { title: 'Survey Task Result',       icon: '🔗', color: '#1E7A8C', bg: '#E1F0F4' },
  termCondition:    { title: 'Term & Condition',         icon: '📋', color: '#5B4EA6', bg: '#ECE9F8' },
  loanRatio:        { title: 'Loan Ratio',                icon: '📊', color: '#B7791F', bg: '#FBF0DC' },
};

export { badgeTone } from './sections.js';
