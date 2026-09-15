/**
 * cbasTypes.js
 * --------------
 * Registry of Summary CBAS templates, one per debtor type — mirrors the
 * pattern in camTypes.js. CBAS content (credit bureau facility history)
 * has the same shape for both debtor types, just different sample data.
 */
export const CBAS_TYPES = [
  {
    key: 'corporate',
    name: 'Summary CBAS — Corporate',
    description: 'Credit bureau facility summary (SLIK) — active and paid-off facilities across all creditors.',
    icon: '🏦',
    color: '#5B4EA6',
    bg: '#ECE9F8',
    debtorType: 'company',
    sectionOrder: ['facilities'],
  },
  {
    key: 'individual',
    name: 'Summary CBAS — Individual',
    description: 'Credit bureau facility summary (SLIK) — active and paid-off facilities across all creditors.',
    icon: '🏦',
    color: '#5B4EA6',
    bg: '#ECE9F8',
    debtorType: 'personal',
    sectionOrder: ['facilities'],
  },
];

export function getCbasType(debtorTypeKey) {
  return CBAS_TYPES.find(t => t.debtorType === debtorTypeKey) || null;
}
