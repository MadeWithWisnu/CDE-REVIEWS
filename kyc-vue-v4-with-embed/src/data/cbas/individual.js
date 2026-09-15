/**
 * cbas/individual.js
 * --------------------
 * Credit facility summary sourced from the Summary CBAS Mobile Order PDF —
 * Active Facilities and Paid Off Facilities across all creditors, plus
 * totals. "Worst Coll & DPD" columns show Collectibility | Days Past Due.
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

export const cbasIndividual = {
  facilities: [
    {
      type: 'highlight',
      items: [
        { label: 'Total Outstanding (Active)', value: 'Rp 4,278,610,333', tone: 'mid' },
        { label: 'Total Overdue Amount', value: 'Rp 552,470,930', tone: 'risk' },
      ],
    },

    { type: 'group', label: 'Active Facilities' },
    {
      type: 'peopleTable',
      columns: ACTIVE_FACILITIES_COLUMNS,
      people: [
        { name: '451 - PT Bank Syariah Indonesia', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 636,371,005', outstandingPrincipal: 'Rp 610,214,896', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 116,129,781', estMonthlyInstallment: 'Rp 15,166,273', freqRestru: '0' },
        { name: '252920 - PT Mandiri Utama Finance (UUS)', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 6,427,990', outstandingPrincipal: 'Rp 7,794,366', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 11,515,186', estMonthlyInstallment: 'Rp 201,110', freqRestru: '0' },
        { name: '503 - PT Bank Nationalnobu Tbk', typeOfUse: 'Modal Kerja', initialPlafon: 'Rp 300,000,000', outstandingPrincipal: 'Rp 241,666,669', worstColl12: '2 | 7', worstColl24: '2 | 7', totalOverdue: 'Rp 144,993,222', estMonthlyInstallment: 'Rp 16,758,791', freqRestru: '0' },
        { name: '601254 - PT Bank Perekonomian Rakyat Gede Arthaguna', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 800,000,000', outstandingPrincipal: 'Rp 733,000,000', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 21,990,000', estMonthlyInstallment: 'Rp 15,390,557', freqRestru: '0' },
        { name: '014 - PT Bank Central Asia Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 7,000,000', outstandingPrincipal: 'Rp 0', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 0', freqRestru: '0' },
        { name: '016 - PT Bank Maybank Indonesia Tbk d/h Bank Internasional Indonesia', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 259,952,079', outstandingPrincipal: 'Rp 255,853,341', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 27,209,120', estMonthlyInstallment: 'Rp 6,008,723', freqRestru: '0' },
        { name: '251200 - PT Maybank Indonesia Finance', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 2,837,520', outstandingPrincipal: 'Rp 2,586,627', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 289,450', estMonthlyInstallment: 'Rp 64,368', freqRestru: '0' },
        { name: '567 - PT Allo Bank Indonesia Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 1,000', outstandingPrincipal: 'Rp 0', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 0', freqRestru: '0' },
        { name: '009 - PT Bank Negara Indonesia (Persero) Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 2,476,000,000', outstandingPrincipal: 'Rp 2,427,494,434', worstColl12: '2 | 28', worstColl24: '2 | 28', totalOverdue: 'Rp 230,344,171', estMonthlyInstallment: 'Rp 19,508,103', freqRestru: '0' },
        { name: '506 - PT Bank Mega Syariah', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 15,000,000', outstandingPrincipal: 'Rp 0', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 0', freqRestru: '0' },
        { name: '426 - PT Bank Mega Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 5,000,000', outstandingPrincipal: 'Rp 0', worstColl12: '1 | 0', worstColl24: '1 | 0', totalOverdue: 'Rp 0', estMonthlyInstallment: 'Rp 0', freqRestru: '0' },
        { name: 'TOTAL', typeOfUse: '', initialPlafon: 'Rp 4,508,589,594', outstandingPrincipal: 'Rp 4,278,610,333', worstColl12: '', worstColl24: '', totalOverdue: 'Rp 552,470,930', estMonthlyInstallment: 'Rp 73,097,925', freqRestru: '0' },
      ],
    },

    { type: 'group', label: 'Paid Off Facilities' },
    {
      type: 'peopleTable',
      columns: PAID_OFF_FACILITIES_COLUMNS,
      people: [
        { name: '451 - PT Bank Syariah Indonesia', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 636,371,005', lastQuality: '5 | 255', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '252920 - PT Mandiri Utama Finance (UUS)', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 6,427,990', lastQuality: '5 | 255', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '503 - PT Bank Nationalnobu Tbk', typeOfUse: 'Modal Kerja', initialPlafon: 'Rp 300,000,000', lastQuality: '5 | 341', worstColl12: '2 | 7', worstColl24: '2 | 7', freqRestru: '0' },
        { name: '601254 - PT Bank Perekonomian Rakyat Gede Arthaguna', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 800,000,000', lastQuality: '2 | 75', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '014 - PT Bank Central Asia Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 7,000,000', lastQuality: '1 | 0', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '016 - PT Bank Maybank Indonesia Tbk d/h Bank Internasional Indonesia', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 259,952,079', lastQuality: '4 | 137', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '251200 - PT Maybank Indonesia Finance', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 2,837,520', lastQuality: '4 | 137', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '567 - PT Allo Bank Indonesia Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 1,000', lastQuality: '1 | 0', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '009 - PT Bank Negara Indonesia (Persero) Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 2,476,000,000', lastQuality: '5 | 362', worstColl12: '2 | 28', worstColl24: '2 | 28', freqRestru: '0' },
        { name: '506 - PT Bank Mega Syariah', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 15,000,000', lastQuality: '1 | 0', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: '426 - PT Bank Mega Tbk', typeOfUse: 'Konsumsi', initialPlafon: 'Rp 5,000,000', lastQuality: '1 | 0', worstColl12: '1 | 0', worstColl24: '1 | 0', freqRestru: '0' },
        { name: 'TOTAL', typeOfUse: '', initialPlafon: 'Rp 4,508,589,594', lastQuality: '', worstColl12: '', worstColl24: '', freqRestru: '0' },
      ],
    },
  ],
};
