/**
 * cbasSections.js
 * -----------------
 * Section catalog for the "Summary CBAS" tab — credit bureau facility
 * summary (Active & Paid Off Facilities), same pattern as sections.js (CDE)
 * and camSections.js (Report CAM). Reuses `badgeTone` for consistency.
 */
export const CBAS_SECTION_LIBRARY = {
  facilities: { title: 'Credit Facilities Summary', icon: '🏦', color: '#5B4EA6', bg: '#ECE9F8' },
};

export { badgeTone } from './sections.js';
