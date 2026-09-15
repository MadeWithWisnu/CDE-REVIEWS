/**
 * cbas/corporate.js
 * --------------------
 * Same Summary CBAS shape as cbas/individual.js, adapted for a corporate
 * debtor (business/working-capital facilities instead of consumer ones).
 */
const ACTIVE_FACILITIES_COLUMNS = [
  { key: 'name', label: 'Creditor' },
  { key: 'typeOfUse', label: 'Type of Use' },
  { key: 'initialPlafon', label: 'Initial Plafon', currency: true },
  { key: 'outstandingPrincipal', label: 'Outstanding Principal', currency: true },
  { key: 'worstColl12', label: 'Worst Coll & DPD (12mo)' },
  { key: 'worstColl24', label: 'Worst Coll & DPD (24mo)' },
  { key: 'totalOverdue', label: 'Total Overdue Amount', currency: true },
  { key: 'estMonthlyInstallment', label: 'Est. Monthly Installment', currency: true },
  { key: 'freqRestru', label: 'Freq Restru' },
];

const PAID_OFF_FACILITIES_COLUMNS = [
  { key: 'name', label: 'Creditor' },
  { key: 'typeOfUse', label: 'Type of Use' },
  { key: 'initialPlafon', label: 'Initial Plafon', currency: true },
  { key: 'lastQuality', label: 'Last Quality (Coll | DPD)' },
  { key: 'worstColl12', label: 'Worst Coll & DPD (12mo)' },
  { key: 'worstColl24', label: 'Worst Coll & DPD (24mo)' },
  { key: 'freqRestru', label: 'Freq Restru' },
];

export const cbasCorporate = {
  facilities: [
    {
      type: 'highlight',
      items: [
        { label: 'Total Outstanding (Active)', value: 'Rp 2,180,500,000', tone: 'mid' },
        { label: 'Total Overdue Amount', value: 'Rp 0', tone: 'good' },
      ],
    },

    { type: 'group', label: 'Active Facilities' },
    {
      type: 'peopleTable',
      columns: ACTIVE_FACILITIES_COLUMNS,
      people: [
        { name: '009 - PT Bank Negara Indonesia (Persero) Tbk', typeOfUse: 'Modal Kerja', initialPlafon: 'Rp 1,500,000,000', outstandingPrincipal: 'Rp 1,180,500,000', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 62,500,000', freqRestru: '0' },
        { name: '451 - PT Bank Syariah Indonesia', typeOfUse: 'Investasi', initialPlafon: 'Rp 1,000,000,000', outstandingPrincipal: 'Rp 1,000,000,000', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 27,777,778', freqRestru: '0' },
        { name: 'TOTAL', typeOfUse: '', initialPlafon: 'Rp 2,500,000,000', outstandingPrincipal: 'Rp 2,180,500,000', worstColl12: '', worstColl24: '', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 90,277,778', freqRestru: '0' },
      ],
    },

    { type: 'group', label: 'Paid Off Facilities' },
    {
      type: 'peopleTable',
      columns: PAID_OFF_FACILITIES_COLUMNS,
      people: [
        { name: '014 - PT Bank Central Asia Tbk', typeOfUse: 'Modal Kerja', initialPlafon: 'Rp 500,000,000', lastQuality: '1 | 0', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: 'TOTAL', typeOfUse: '', initialPlafon: 'Rp 500,000,000', lastQuality: '', worstColl12: '', worstColl24: '', freqRestru: '0' },
      ],
    },
  ],
};
