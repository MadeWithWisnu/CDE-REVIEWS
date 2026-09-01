/**
 * cam/corporate.js
 * ------------------
 * CAM (Credit Approval Memorandum) content for Corporate applications.
 * The source Word template ships mostly BLANK (only a handful of fields
 * carry example defaults) — this file fills every field with a coherent,
 * realistic illustrative example (one consistent fictional application)
 * so the layout is demo-ready end to end. Swap in real backend data by
 * replacing the string/number literals per key; the shape (row/badge/
 * peopleTable/subAccordion) should stay as-is since AccordionSection.vue
 * depends on it.
 */
export const camCorporate = {
  verdict: {
    result: 'Recommended to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  applicationInfo: [
    { type: 'row', label: 'Application No', value: '23182604001', mono: true },
    { type: 'row', label: 'Order No', value: '23182604001', mono: true },
    { type: 'badge', label: 'Status', value: 'Customer New' },
    { type: 'row', label: 'Contract No', value: '—' },
    { type: 'row', label: 'Cross Disbursement No', value: '—' },
  ],

  customer: [
    { type: 'group', label: 'Customer' },
    { type: 'row', label: 'Customer Name', value: 'PT Sinar Abadi Logistik', indent: 1 },
    { type: 'row', label: 'Name in Akta', value: 'PT Sinar Abadi Logistik', indent: 1 },
    { type: 'row', label: 'Legal Address', value: 'Jl. Kelapa Gading Boulevard Raya No. 45, Jakarta Utara 14240', indent: 1 },
    { type: 'row', label: 'Telephone', value: '021-4567 1234', indent: 1 },
    { type: 'row', label: 'Mail Address', value: 'finance@sinarabadilogistik.co.id', indent: 1 },
    { type: 'row', label: 'NPWP', value: '01.234.567.8-901.000', mono: true, indent: 1 },
    { type: 'row', label: 'Guarantor', value: 'Hendra Wijaya (Personal) & PT Sinar Abadi Holding (Company)', indent: 1 },
    { type: 'row', label: 'Industry', value: 'Transportasi & Logistik Darat', indent: 1 },
    { type: 'row', label: 'Industry Group', value: 'Trading & Distribution', indent: 1 },
  ],

  asset: [
    { type: 'group', label: 'Asset Information' },
    { type: 'row', label: 'Asset Type', value: 'Automotive OTR', indent: 1 },
    { type: 'row', label: 'Brand', value: 'Hino', indent: 1 },
    { type: 'row', label: 'Type / Year', value: 'FG 260 JS / 2026', indent: 1 },
    { type: 'row', label: 'Condition / Model / Karoseri', value: 'New / TRUCK / STEEL BOX', indent: 1 },
    { type: 'row', label: 'Name in BPKB', value: 'PT Sinar Abadi Logistik', indent: 1 },
    { type: 'row', label: 'Address in BPKB', value: 'Jl. Kelapa Gading Boulevard Raya No. 45, Jakarta Utara', indent: 1 },
    { type: 'row', label: 'Purpose of Finance', value: 'Investasi', indent: 1 },

    { type: 'group', label: 'Supplier Information' },
    { type: 'row', label: 'Dealer Name', value: 'ARISTA JAYA NIAGA, PT.', indent: 1 },
    { type: 'row', label: 'Dealer Type / Nickname', value: 'Authorized Dealer / HINO ARISTA KALIMALANG', indent: 1 },
    { type: 'row', label: 'Dealer Address', value: 'RAYA KALIMALANG NO.19, DUREN SAWIT', indent: 1 },
    { type: 'row', label: 'Dealer Status', value: 'NonSKB / NonPPN', indent: 1 },
    { type: 'row', label: 'Karoseri Name', value: 'TEJA MANDIRI, CV.', indent: 1 },
    { type: 'row', label: 'Karoseri Address', value: 'GG. BUNTU POLSEK, CIKARANG KOTA, CIKARANG UTARA', indent: 1 },
    { type: 'row', label: 'Disbursement Account No', value: 'BCA 1234567890 - ARISTA JAYA NIAGA, PT.', mono: true, indent: 1 },
    { type: 'row', label: 'Disbursement Account No (Karoseri)', value: 'BCA 9876543210 - TEJA MANDIRI, CV.', mono: true, indent: 1 },
  ],

  finance: [
    { type: 'group', label: 'Finance Information' },
    { type: 'row', label: 'Asset Value', value: 'Rp 1,100,000,000', indent: 1 },
    { type: 'row', label: 'Unit Price', value: 'Rp 950,000,000', indent: 1 },
    { type: 'row', label: 'Karoseri Price', value: 'Rp 150,000,000', indent: 1 },
    { type: 'row', label: 'Down Payment 20%', value: 'Rp 220,000,000', indent: 1 },
    { type: 'row', label: 'Insurance Loan', value: 'Rp 26,400,000', indent: 1 },
    { type: 'row', label: 'Provision Loan', value: 'Rp 8,800,000', indent: 1 },
    { type: 'row', label: 'Other Loan', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'Net Finance', value: 'Rp 915,200,000', indent: 1 },
    { type: 'row', label: 'Loan To Value', value: '75%', indent: 1 },
    { type: 'row', label: 'Interest Type / Installment Scheme', value: 'Fixed Rate / Regular Fixed', indent: 1 },
    { type: 'row', label: 'Way of Payment / Payment Frequency', value: 'Transfer / Monthly', indent: 1 },
    { type: 'row', label: 'Tenor / First Installment Type', value: 'Tenor 48 months / Advance', indent: 1 },
    { type: 'row', label: 'MLCI Rate (Flat / Effective)', value: '5.5% / 10.5772408%', indent: 1 },
    { type: 'row', label: 'Selling Rate (Flat / Effective)', value: '5.5% / 10.5772408%', indent: 1 },
    { type: 'row', label: 'Survey Fee Gross', value: 'Rp 1,500,000', indent: 1 },
    { type: 'row', label: 'Notary Fee Gross', value: 'Rp 2,500,000', indent: 1 },
    { type: 'row', label: 'Provision Fee', value: 'Rp 8,800,000', indent: 1 },
    { type: 'row', label: 'Installment', value: 'Rp 24,166,667 / month', indent: 1 },
    { type: 'row', label: 'Grace Period', value: '0 Month(s) 0%', indent: 1 },

    { type: 'group', label: 'Notary / Legitimate' },
    { type: 'row', label: 'Vendor Name', value: 'Kantor Notaris Siti Aminah, S.H.', indent: 1 },
    { type: 'row', label: 'Fiducia / Cessie / Deed Fee', value: 'Rp 750,000', indent: 1 },
    { type: 'row', label: 'Fiducia / Cessie / Certificate (PNBP)', value: 'Rp 125,000', indent: 1 },

    { type: 'group', label: 'BPKB Checking Blocking' },
    { type: 'row', label: 'Fee', value: 'Rp 150,000', indent: 1 },

    { type: 'group', label: 'Agency' },
    { type: 'row', label: 'BBN Via', value: 'Biro Jasa', indent: 1 },
    { type: 'row', label: 'Paid By', value: 'Customer', indent: 1 },
    { type: 'row', label: 'Agency Name', value: 'CV Mitra BBN Sejahtera', indent: 1 },
    { type: 'row', label: 'Agency Fee Gross', value: 'Rp 3,000,000', indent: 1 },
    { type: 'row', label: 'BBN Fee', value: 'Rp 2,500,000', indent: 1 },
    { type: 'row', label: 'Nett Agency Fee', value: 'Rp 500,000', indent: 1 },
  ],

  disbursement: [
    { type: 'group', label: 'Disbursement — Paid to MLCI' },
    { type: 'row', label: 'Asset Value', value: 'Rp 1,100,000,000', indent: 1 },
    { type: 'row', label: 'Down Payment', value: 'Rp 220,000,000', indent: 1 },
    { type: 'row', label: 'Survey Fee Gross', value: 'Rp 1,500,000', indent: 1 },
    { type: 'row', label: 'Notary Fee Gross', value: 'Rp 2,500,000', indent: 1 },
    { type: 'row', label: 'Provision Fee', value: 'Rp 8,800,000', indent: 1 },
    { type: 'row', label: 'Other Fee', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'Insurance', value: 'Rp 26,400,000', indent: 1 },
    { type: 'row', label: 'Extra Warranty', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'First Installment', value: 'Rp 24,166,667', indent: 1 },
    { type: 'row', label: 'Advance Grace Period', value: '0 Month(s)', indent: 1 },
    { type: 'row', label: 'Agency Fee Gross', value: 'Rp 3,000,000', indent: 1 },
    { type: 'row', label: 'Subsidy From Dealer', value: 'Rp 15,000,000', indent: 1 },
    { type: 'row', label: 'Refund To Dealer', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'Disbursement to Dealer', value: 'Rp 950,000,000', indent: 1 },
    { type: 'row', label: 'Commission to Dealer (Gross)', value: 'Rp 12,000,000', indent: 1 },
    { type: 'row', label: 'Total Payment to Dealer', value: 'Rp 962,000,000', indent: 1 },
    { type: 'row', label: 'Subsidy from APM', value: 'Rp 5,000,000', indent: 1 },

    { type: 'group', label: 'Commission to Salesman & Broker' },
    { type: 'row', label: 'Total Gross Commission', value: 'Rp 9,500,000', indent: 1 },

    { type: 'group', label: 'Credit Protection' },
    { type: 'badge', label: 'Credit Protection', value: 'Asuransi Jiwa Kredit', indent: 1 },
    { type: 'badge', label: 'Guaranteed Acceptance', value: 'Yes', indent: 1 },
  ],

  insurance: [
    { type: 'group', label: 'Insurance' },
    { type: 'row', label: 'Insurance Policy', value: 'Comprehensive', indent: 1 },
    { type: 'row', label: 'Insurance Type', value: 'All Risk', indent: 1 },
    { type: 'row', label: 'Insurance Company', value: 'PT Asuransi Sinarmas', indent: 1 },
    { type: 'row', label: 'Model', value: 'Combine (Gabungan)', indent: 1 },
    { type: 'row', label: 'Payment Method', value: 'Cash', indent: 1 },
    { type: 'row', label: 'Condition', value: 'New', indent: 1 },
    { type: 'row', label: 'Special Rate', value: '—', indent: 1 },
    { type: 'row', label: 'Seat', value: '3', indent: 1 },
    { type: 'row', label: 'Gross Premium', value: 'Rp 28,500,000', indent: 1 },
    { type: 'row', label: 'Unit Price', value: 'Rp 950,000,000', indent: 1 },
    { type: 'row', label: 'Net Premium', value: 'Rp 26,400,000', indent: 1 },
    { type: 'row', label: 'Karoseri Price', value: 'Rp 150,000,000', indent: 1 },
    {
      type: 'peopleTable',
      label: 'Insurance Rate Detail',
      columns: [
        { key: 'name', label: 'Year' },
        { key: 'insAmount', label: 'Insurance Amount' },
        { key: 'tpl', label: 'TPL Amount' },
        { key: 'tloCp', label: 'TLO CP' },
        { key: 'clause', label: 'Clause' },
        { key: 'rate', label: 'Rate' },
        { key: 'premReceive', label: 'Premium Receive' },
        { key: 'premPayment', label: 'Premium Payment' },
      ],
      people: [
        { name: 'Year 1', insAmount: 'Rp 1,100,000,000', tpl: 'Rp 50,000,000', tloCp: '—', clause: 'Bank/Finance Company Clause', rate: '2.4%', premReceive: 'Rp 26,400,000', premPayment: 'Rp 26,400,000' },
      ],
    },
  ],

  obligor: [
    {
      type: 'peopleTable',
      label: 'Outstanding One Obligor',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'unit', label: 'Unit' },
        { key: 'amount', label: 'Amount' },
      ],
      people: [
        { name: 'Active contract (disbursed)', unit: '2', amount: 'Rp 1,850,000,000' },
        { name: 'Undisbursed', unit: '0', amount: 'Rp 0' },
        { name: 'Propose (unapproved)', unit: '1', amount: 'Rp 915,200,000' },
        { name: 'Group', unit: '1', amount: 'Rp 620,000,000' },
        { name: 'Guarantor', unit: '0', amount: 'Rp 0' },
        { name: 'Total', unit: '4', amount: 'Rp 3,385,200,000' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Max Commission for 3rd Party',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'income', label: 'Income' },
        { key: 'subsidy', label: 'Subsidy' },
        { key: 'totalIncome', label: 'Total Income (Incl. Subsidy)' },
        { key: 'baseRate', label: 'Base Rate' },
        { key: 'maxRefund', label: 'Max Refund' },
      ],
      people: [
        { name: 'Insurance Income', income: 'Rp 2,640,000', subsidy: 'Rp 0', totalIncome: 'Rp 2,640,000', baseRate: '10%', maxRefund: 'Rp 264,000' },
        { name: 'Net Insurance Prem. Received', income: 'Rp 26,400,000', subsidy: 'Rp 0', totalIncome: 'Rp 26,400,000', baseRate: '—', maxRefund: '—' },
        { name: 'Survey Fee 1', income: 'Rp 1,500,000', subsidy: 'Rp 0', totalIncome: 'Rp 1,500,000', baseRate: '—', maxRefund: '—' },
        { name: 'Survey Fee 2', income: 'Rp 0', subsidy: 'Rp 0', totalIncome: 'Rp 0', baseRate: '—', maxRefund: '—' },
        { name: 'Provision Fee', income: 'Rp 8,800,000', subsidy: 'Rp 0', totalIncome: 'Rp 8,800,000', baseRate: '—', maxRefund: '—' },
        { name: 'Interest Income', income: 'Rp 45,760,000', subsidy: 'Rp 0', totalIncome: 'Rp 45,760,000', baseRate: '—', maxRefund: '—' },
        { name: 'Total', income: 'Rp 84,600,000', subsidy: 'Rp 0', totalIncome: 'Rp 84,600,000', baseRate: '—', maxRefund: '—' },
        { name: 'Incentive to 3rd Party 17.5%', income: '—', subsidy: '—', totalIncome: '—', baseRate: '17.5%', maxRefund: 'Rp 14,805,000' },
        { name: 'Marketing Fee', income: '—', subsidy: '—', totalIncome: '—', baseRate: '—', maxRefund: 'Rp 9,500,000' },
        { name: 'Incentive To Be Paid', income: '—', subsidy: '—', totalIncome: '—', baseRate: '—', maxRefund: 'Rp 5,305,000' },
      ],
    },
    { type: 'row', label: 'IRR Actual', value: '11.540176737071%' },
  ],

  subsidy: [
    {
      type: 'peopleTable',
      label: 'Purpose of Subsidy From / Refund To',
      columns: [
        { key: 'name', label: 'Purpose' },
        { key: 'apm', label: 'Subsidy From APM' },
        { key: 'dealer', label: 'Subsidy From Dealer' },
        { key: 'refund', label: 'Refund To Dealer' },
      ],
      people: [
        { name: 'Down Payment', apm: 'Rp 0', dealer: 'Rp 5,000,000', refund: 'Rp 0' },
        { name: 'Installment', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Insurance', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Survey Fee 1', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Survey Fee 2', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Provision Fee', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Interest', apm: 'Rp 5,000,000', dealer: 'Rp 10,000,000', refund: 'Rp 0' },
        { name: 'Total', apm: 'Rp 5,000,000', dealer: 'Rp 15,000,000', refund: 'Rp 0' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Internal Disbursement',
      columns: [
        { key: 'name', label: 'No' },
        { key: 'contractNo', label: 'Contract Number' },
        { key: 'purpose', label: 'Purpose' },
        { key: 'amount', label: 'Amount' },
      ],
      people: [
        { name: '1', contractNo: '22045501002', purpose: 'Top Up Modal Kerja', amount: 'Rp 45,000,000' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'External Disbursement',
      columns: [
        { key: 'name', label: 'No' },
        { key: 'partyName', label: 'Name' },
        { key: 'address', label: 'Address' },
        { key: 'bankBranch', label: 'Bank - Branch' },
        { key: 'accountNo', label: 'Account Number' },
        { key: 'beneficiary', label: 'Beneficiary Name' },
        { key: 'amount', label: 'Amount' },
      ],
      people: [
        { name: '1', partyName: 'ARISTA JAYA NIAGA, PT.', address: 'RAYA KALIMALANG NO.19, DUREN SAWIT', bankBranch: 'BCA - KCP Kalimalang', accountNo: '1234567890', beneficiary: 'ARISTA JAYA NIAGA, PT.', amount: 'Rp 962,000,000' },
      ],
    },
  ],

  equipment: [
    { type: 'group', label: 'Equipment Detail Review' },
    { type: 'row', label: 'User Usage', value: 'Default from customer, editable manually', indent: 1 },
    { type: 'row', label: 'OJK Financing Goods', value: 'Produktif - Mobil Pengangkutan', indent: 1 },
    { type: 'row', label: 'OJK Collateral Goods', value: 'Produktif - Mobil Pengangkutan', indent: 1 },
    { type: 'row', label: 'Parking Address', value: 'Jl. Kelapa Gading Boulevard Raya No. 45, Jakarta Utara', indent: 1 },
    { type: 'row', label: 'Zip Code', value: '14240', indent: 1 },
    { type: 'row', label: 'BPKB Area', value: 'Wilayah 2 (DKI Jakarta, Banten dan Jawa Barat)', indent: 1 },
  ],

  checkingResult: [
    { type: 'group', label: 'KYC Checking' },
    { type: 'badge', label: 'AHU', value: 'Match', indent: 1 },
    {
      type: 'peopleTable',
      label: 'Dukcapil',
      columns: [
        { key: 'name', label: 'Name — Role' },
        { key: 'result', label: 'Match Status', badge: true },
      ],
      people: [
        { name: 'Hendra Wijaya — Shareholder', result: 'Match' },
        { name: 'Hendra Wijaya — President Director', result: 'Match' },
        { name: 'Siti Marlina — Director', result: 'Match' },
        { name: 'Ahmad Fauzi — President Commissioner', result: 'Match' },
        { name: 'Rina Kartika — Commissioner', result: 'Match' },
      ],
    },

    { type: 'group', label: 'Collateral Check' },
    { type: 'row', label: 'Chassis No', value: 'MJEFG260JSN123456', mono: true, indent: 1 },
    { type: 'row', label: 'BPKB No', value: 'L-01234567', mono: true, indent: 1 },
    { type: 'row', label: 'Engine No', value: 'J08EWJ12345', mono: true, indent: 1 },
    { type: 'row', label: 'Vehicle Type', value: 'FG 260 JS', indent: 1 },
    { type: 'row', label: 'License Type', value: 'BPKB Baru', indent: 1 },
    { type: 'row', label: 'Manufacture Year', value: '2026', indent: 1 },
    { type: 'row', label: 'Brand', value: 'Hino', indent: 1 },
    { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
    { type: 'row', label: 'Finance Company', value: 'PT Mitsui Leasing Capital Indonesia', indent: 1 },

    {
      type: 'subAccordion',
      title: 'Pre-Scoring — 1',
      icon: '📊',
      rows: [
        { type: 'row', label: 'Score', value: '789', indent: 1 },
        { type: 'badge', label: 'Grade', value: 'Tend to Approve', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Pre-Scoring — 2',
      icon: '📊',
      rows: [
        { type: 'row', label: 'Score', value: '789', indent: 1 },
        { type: 'badge', label: 'Grade', value: 'Tend to Approve', indent: 1 },
      ],
    },

    { type: 'group', label: 'Third Party Checking' },
    { type: 'row', label: 'Aggregate Credit Bureau Rating', value: '789 — Pefindo', indent: 1 },
    {
      type: 'peopleTable',
      label: 'Phone Verification (ID Match)',
      columns: [
        { key: 'name', label: 'Name — Role' },
        { key: 'result', label: 'Match Status', badge: true },
      ],
      people: [
        { name: 'Siti Marlina — Director', result: 'Match' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Phone Verification (Phone Age)',
      columns: [
        { key: 'name', label: 'Name — Role' },
        { key: 'phoneAge', label: 'Phone Age' },
      ],
      people: [
        { name: 'Siti Marlina — Director', phoneAge: '(>12 months)' },
      ],
    },
    { type: 'row', label: 'Location Verification (House)', value: '0 - 200 meter', indent: 1 },
    { type: 'row', label: 'Location Verification (Office)', value: '0 - 200 meter', indent: 1 },
    { type: 'badge', label: 'Bank Statement', value: 'Valid', indent: 1 },

    { type: 'group', label: 'APU PPT Check' },
    { type: 'badge', label: 'AML News', value: 'No Issue', indent: 1 },
    { type: 'badge', label: 'AML-CFT Customer Classification', value: 'High Risk', indent: 1 },
    { type: 'badge', label: 'AML-CFT Customer Classification (BO)', value: 'High Risk', indent: 1 },

    {
      type: 'peopleTable',
      label: 'SLIK',
      columns: [
        { key: 'name', label: 'Subject' },
        { key: 'score', label: 'SLIK Score' },
        { key: 'grade', label: 'Grade', badge: true },
        { key: 'summaryUrl', label: 'Summary', link: true, linkText: 'View Summary' },
      ],
      people: [
        { name: 'Customer', score: '850', grade: 'Good', summaryUrl: '#' },
        { name: 'Shareholder — Hendra Wijaya', score: '780', grade: 'Medium-Good', summaryUrl: '#' },
      ],
    },

    { type: 'group', label: 'Scoring Result' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Subject' },
        { key: 'aggregateScore', label: 'Aggregate Score' },
        { key: 'instantApproval', label: 'Instant Approval', badge: true },
        { key: 'aggregateGrade', label: 'Aggregate Grade', badge: true },
      ],
      people: [
        { name: 'Customer', aggregateScore: '789', instantApproval: 'Yes', aggregateGrade: 'Recommended to approve' },
      ],
    },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Subject' },
        { key: 'score', label: 'Score' },
        { key: 'grade', label: 'Grade', badge: true },
      ],
      people: [
        { name: 'President Director — Hendra Wijaya', score: '812', grade: 'Low Risk' },
        { name: 'Director — Siti Marlina', score: '745', grade: 'Medium Risk' },
      ],
    },
  ],

  apuppt: [
    { type: 'group', label: 'Customer Information' },
    { type: 'row', label: 'Customer Name', value: 'PT Sinar Abadi Logistik', indent: 1 },
    { type: 'row', label: 'Customer Type', value: 'Corporate — Domestic', indent: 1 },
    { type: 'row', label: 'Occupation / Business Type', value: 'Transportasi & Logistik Darat', indent: 1 },
    { type: 'badge', label: 'AML-CFT Customer Classification', value: 'High Risk', indent: 1 },
    { type: 'row', label: 'Identification & Verification Process', value: 'Enhanced Due Diligence (EDD) / Customer Due Diligence (CDD)', indent: 1 },
    { type: 'badge', label: 'APU PPT Customer Status', value: 'Recommended', indent: 1 },

    {
      type: 'peopleTable',
      label: 'EDD Form',
      columns: [
        { key: 'name', label: 'No' },
        { key: 'question', label: 'Questionnaire' },
        { key: 'yes', label: 'Yes' },
        { key: 'no', label: 'No' },
      ],
      people: [
        { name: '1', question: 'Has the BM / Department Head Business Unit ensured that the prospective customer is not involved in money laundering activities, either directly or indirectly?', yes: '✓', no: '' },
        { name: '2', question: 'Has the BM / Department Head Business Unit confirmed that the source of income and down payment of the prospective customer originate from legal sources?', yes: '✓', no: '' },
        { name: '3', question: "Has the BM / Department Head Business Unit confirmed that the prospective customer's business/profession is not related to illegal activities?", yes: '✓', no: '' },
        { name: '4', question: 'Has the BM / Department Head Business Unit confirmed that all customer documents are in accordance with the actual condition and supporting evidence?', yes: '✓', no: '' },
      ],
    },
  ],

  deviation: [
    {
      type: 'subAccordion',
      title: 'Automatic Deviation',
      icon: '⚙️',
      rows: [
        { type: 'row', label: '1', value: 'Tenor exceeds standard (48 vs 42 months) — approved by Credit Committee', indent: 1 },
        { type: 'row', label: '2', value: 'Down payment below regional standard (20% vs 25%) — approved by Credit Committee', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Manual Deviation',
      icon: '✍️',
      rows: [
        { type: 'row', label: '1', value: 'Company age < 3 years — mitigated by Personal & Company Guarantor', indent: 1 },
        { type: 'row', label: '2', value: '—', indent: 1 },
      ],
    },
  ],

  organization: [
    { type: 'group', label: 'Capital' },
    { type: 'row', label: 'Authorized Capital', value: 'Rp 5,000,000,000', indent: 1 },
    { type: 'row', label: 'Paid-In Capital', value: 'Rp 2,500,000,000', indent: 1 },

    {
      type: 'peopleTable',
      label: 'Composition of Management and Shareholder',
      columns: [
        { key: 'name', label: 'Name in ID Card / Akta' },
        { key: 'status', label: 'Status' },
        { key: 'position', label: 'Position' },
        { key: 'shareholder', label: 'Shareholder' },
        { key: 'shares', label: 'Total Shares (Pieces)' },
        { key: 'nominal', label: 'Nominal (Rp.)' },
        { key: 'bo', label: 'BO' },
        { key: 'signer', label: 'Signer' },
      ],
      people: [
        { name: 'Hendra Wijaya', status: 'Individual', position: 'President Director', shareholder: 'Yes', shares: '1,500', nominal: 'Rp 1,500,000,000', bo: 'Yes', signer: 'Yes' },
        { name: 'PT Sinar Abadi Holding', status: 'Corporate', position: '-', shareholder: 'Yes', shares: '1,000', nominal: 'Rp 1,000,000,000', bo: 'No', signer: 'No' },
      ],
    },

    {
      type: 'peopleTable',
      label: 'Deed of Establishment',
      columns: [
        { key: 'name', label: 'State Gazette No' },
        { key: 'deedNo', label: 'Deed No' },
        { key: 'date', label: 'Date of Deed / State Gazette' },
        { key: 'notary', label: 'Notary Name' },
        { key: 'certificate', label: 'Certificate of Ministry' },
      ],
      people: [
        { name: 'AHU-0012345.AH.01.01.Tahun 2020', deedNo: '15', date: '12 March 2020', notary: 'Kantor Notaris Siti Aminah, S.H.', certificate: 'AHU-0056789.AH.01.02.Tahun 2020' },
      ],
    },

    { type: 'group', label: 'Contract Signer According to Deed of Establishment' },
    { type: 'row', label: "Board of Director's Roles and Authority", value: 'Director + Approval from Board of Commissioners', indent: 1 },

    { type: 'group', label: 'Person in Charge to Sign PT. MLCI Contract' },
    { type: 'row', label: 'Authority', value: 'Director + Approval from Board of Commissioners', indent: 1 },

    {
      type: 'peopleTable',
      label: 'Signer',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'position', label: 'Position' },
        { key: 'endTerm', label: 'End of Term of Office' },
      ],
      people: [
        { name: 'Hendra Wijaya', position: 'President Director', endTerm: '12 March 2030' },
      ],
    },

    {
      type: 'peopleTable',
      label: 'Management Detail Information',
      columns: [
        { key: 'name', label: 'Name in ID Card / Akta' },
        { key: 'idCard', label: 'ID Card' },
        { key: 'address', label: 'Address in ID Card / SK. Domisili' },
        { key: 'city', label: 'City' },
        { key: 'image', label: 'Image', link: true, linkText: 'View' },
      ],
      people: [
        { name: 'Hendra Wijaya', idCard: '3172051234560001', address: 'Jl. Kelapa Gading Boulevard Raya No. 45', city: 'Jakarta Utara', image: '#' },
      ],
    },
  ],

  financialReview: [
    {
      type: 'peopleTable',
      label: 'Balance Sheet',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'y2024', label: '2024' },
        { key: 'y2025', label: '2025' },
      ],
      people: [
        { name: 'Cash & Bank', y2024: 'Rp 350,000,000', y2025: 'Rp 420,000,000' },
        { name: 'Account Receivable', y2024: 'Rp 620,000,000', y2025: 'Rp 780,000,000' },
        { name: 'Current Financial Assets', y2024: 'Rp 50,000,000', y2025: 'Rp 60,000,000' },
        { name: 'Other Receivable', y2024: 'Rp 30,000,000', y2025: 'Rp 25,000,000' },
        { name: 'Inventory', y2024: 'Rp 180,000,000', y2025: 'Rp 210,000,000' },
        { name: 'Total Current Asset', y2024: 'Rp 1,230,000,000', y2025: 'Rp 1,495,000,000' },
        { name: 'Land & Building', y2024: 'Rp 900,000,000', y2025: 'Rp 900,000,000' },
        { name: 'Machine', y2024: 'Rp 450,000,000', y2025: 'Rp 520,000,000' },
        { name: 'Vehicle', y2024: 'Rp 1,850,000,000', y2025: 'Rp 2,100,000,000' },
        { name: 'Others', y2024: 'Rp 120,000,000', y2025: 'Rp 135,000,000' },
        { name: 'Accumulated Depreciation', y2024: '(Rp 620,000,000)', y2025: '(Rp 780,000,000)' },
        { name: 'Total Fixed Asset', y2024: 'Rp 2,700,000,000', y2025: 'Rp 2,875,000,000' },
        { name: 'Long-term Receivables', y2024: 'Rp 0', y2025: 'Rp 0' },
        { name: 'Non-current Investments', y2024: 'Rp 100,000,000', y2025: 'Rp 100,000,000' },
        { name: 'Total Fixed & Non-Current Asset', y2024: 'Rp 2,800,000,000', y2025: 'Rp 2,975,000,000' },
        { name: 'TOTAL ASSET', y2024: 'Rp 4,030,000,000', y2025: 'Rp 4,470,000,000' },
        { name: 'Short Term Debt', y2024: 'Rp 250,000,000', y2025: 'Rp 300,000,000' },
        { name: 'Current Portion Long Term Debt (Bank)', y2024: 'Rp 180,000,000', y2025: 'Rp 210,000,000' },
        { name: 'Current Portion Long Term Debt (Leasing)', y2024: 'Rp 320,000,000', y2025: 'Rp 410,000,000' },
        { name: 'Account Payable', y2024: 'Rp 410,000,000', y2025: 'Rp 460,000,000' },
        { name: 'Other Payable', y2024: 'Rp 60,000,000', y2025: 'Rp 70,000,000' },
        { name: 'Total Current Liabilities', y2024: 'Rp 1,220,000,000', y2025: 'Rp 1,450,000,000' },
        { name: 'Long Term Debt (Bank)', y2024: 'Rp 620,000,000', y2025: 'Rp 540,000,000' },
        { name: 'Long Term Debt (Leasing)', y2024: 'Rp 980,000,000', y2025: 'Rp 1,150,000,000' },
        { name: 'Long Term Account Payable', y2024: 'Rp 0', y2025: 'Rp 0' },
        { name: 'Other Non-Current Liabilities', y2024: 'Rp 40,000,000', y2025: 'Rp 35,000,000' },
        { name: 'Total Non-Current Liabilities', y2024: 'Rp 1,640,000,000', y2025: 'Rp 1,725,000,000' },
        { name: 'Capital Stock (Equity)', y2024: 'Rp 2,500,000,000', y2025: 'Rp 2,500,000,000' },
        { name: 'Retained Earning', y2024: '(Rp 1,510,000,000)', y2025: '(Rp 1,330,000,000)' },
        { name: 'Change in Retained Earning', y2024: 'Rp 180,000,000', y2025: 'Rp 180,000,000' },
        { name: 'Total Equity', y2024: 'Rp 1,170,000,000', y2025: 'Rp 1,295,000,000' },
        { name: 'TOTAL LIABILITIES & EQUITY', y2024: 'Rp 4,030,000,000', y2025: 'Rp 4,470,000,000' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Income Statement',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'y2024', label: '2024' },
        { key: 'y2025', label: '2025' },
      ],
      people: [
        { name: 'Sales', y2024: 'Rp 6,800,000,000', y2025: 'Rp 7,950,000,000' },
        { name: 'COGS', y2024: 'Rp 4,760,000,000', y2025: 'Rp 5,485,000,000' },
        { name: 'Gross Profit / (Loss)', y2024: 'Rp 2,040,000,000', y2025: 'Rp 2,465,000,000' },
        { name: 'Total Operating Expenses', y2024: 'Rp 1,360,000,000', y2025: 'Rp 1,590,000,000' },
        { name: 'Operating Profit / (Loss)', y2024: 'Rp 680,000,000', y2025: 'Rp 875,000,000' },
        { name: 'Total Other Income', y2024: 'Rp 45,000,000', y2025: 'Rp 60,000,000' },
        { name: 'Total Other Expenses', y2024: 'Rp 210,000,000', y2025: 'Rp 245,000,000' },
        { name: 'Profit / (Loss) Before Tax', y2024: 'Rp 515,000,000', y2025: 'Rp 690,000,000' },
        { name: 'Income Tax Expense', y2024: 'Rp 113,300,000', y2025: 'Rp 151,800,000' },
        { name: 'Net Profit / (Loss) for the Year', y2024: 'Rp 401,700,000', y2025: 'Rp 538,200,000' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Income Report Projection',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'projection', label: 'Projection' },
      ],
      people: [
        { name: 'Sales', projection: 'Rp 680,000,000 / month' },
        { name: 'COGS', projection: 'Rp 462,000,000 / month' },
        { name: 'Gross Profit / (Loss)', projection: 'Rp 218,000,000 / month' },
        { name: 'Total Operating Expenses', projection: 'Rp 135,000,000 / month' },
        { name: 'Operating Profit / (Loss)', projection: 'Rp 83,000,000 / month' },
        { name: 'Total Other Income', projection: 'Rp 5,000,000 / month' },
        { name: 'Total Other Expenses', projection: 'Rp 21,000,000 / month' },
        { name: 'Profit / (Loss) Before Tax', projection: 'Rp 67,000,000 / month' },
        { name: 'Income Tax Expense', projection: 'Rp 14,740,000 / month' },
        { name: 'Net Profit / (Loss) for the Month', projection: 'Rp 52,260,000 / month' },
        { name: 'DSCR', projection: '2.16x' },
      ],
    },
    { type: 'group', label: 'Bank Statement' },
    { type: 'row', label: 'Bank', value: 'BCA', indent: 1 },
    { type: 'row', label: 'Account Name', value: 'PT Sinar Abadi Logistik', indent: 1 },
    { type: 'row', label: 'Account Number', value: '0987654321', mono: true, indent: 1 },
    { type: 'row', label: 'Currency', value: 'IDR', indent: 1 },
    { type: 'row', label: 'Notes', value: '6-month mutation reviewed, consistent operational cash flow', indent: 1 },
    {
      type: 'peopleTable',
      label: 'Bank Summary',
      columns: [
        { key: 'name', label: 'Month - Year' },
        { key: 'beginning', label: 'Beginning Balance' },
        { key: 'debet', label: 'Debet' },
        { key: 'credit', label: 'Credit' },
        { key: 'ending', label: 'Ending Balance' },
        { key: 'notes', label: 'Notes' },
      ],
      people: [
        { name: 'Jan 2026', beginning: 'Rp 310,000,000', debet: 'Rp 540,000,000', credit: 'Rp 590,000,000', ending: 'Rp 360,000,000', notes: 'Normal' },
        { name: 'Feb 2026', beginning: 'Rp 360,000,000', debet: 'Rp 505,000,000', credit: 'Rp 565,000,000', ending: 'Rp 420,000,000', notes: 'Normal' },
      ],
    },
    { type: 'note', label: 'Bank Statement Analysis — data from Simplifa' },
  ],

  fiveC: [
    {
      type: 'subAccordion',
      title: 'Character',
      icon: '👤',
      rows: [
        { type: 'row', label: 'Credit History', value: 'RO Good', indent: 1 },
        { type: 'badge', label: 'Watchlist', value: 'Not Listed', indent: 1 },
        { type: 'row', label: 'Reference', value: 'Available', indent: 1 },
        { type: 'row', label: 'Business Experience', value: '>5 years', indent: 1 },
        { type: 'row', label: 'Company Status', value: 'Family Business', indent: 1 },
        { type: 'row', label: 'Ownership Type', value: 'Local Company', indent: 1 },
        { type: 'row', label: 'Scale of Business', value: 'National', indent: 1 },
        { type: 'row', label: 'Business Size', value: 'Medium', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capital',
      icon: '💰',
      rows: [
        { type: 'row', label: 'Business Location', value: 'Business District', indent: 1 },
        { type: 'row', label: 'Office Status', value: 'Owned', indent: 1 },
        { type: 'row', label: 'Total Unit Owned (Vehicle)', value: '<10 units', indent: 1 },
        { type: 'row', label: 'Unit Free from Finance', value: '30% - 50%', indent: 1 },
        { type: 'row', label: 'Deposit', value: 'Rp 220,000,000', indent: 1 },
        { type: 'row', label: 'Bank Statement → Average Ending Balance', value: '= Asset Value', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capacity',
      icon: '📈',
      rows: [
        { type: 'row', label: 'Monthly Sales (Rp.)', value: 'Rp 680,000,000', indent: 1 },
        { type: 'row', label: 'Monthly Profit (Rp.)', value: 'Rp 52,260,000', indent: 1 },
        { type: 'row', label: 'Profit Margin (%)', value: '7.7%', indent: 1 },
        { type: 'row', label: 'Average Credit Transaction Activities (Rp.)', value: 'Rp 555,000,000', indent: 1 },
        { type: 'row', label: 'Average CTA Reflection (%)', value: '81.6%', indent: 1 },
        { type: 'row', label: 'Average Sales per Year', value: 'Rp 8,160,000,000', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Collateral',
      icon: '🚚',
      rows: [
        { type: 'row', label: 'Unit Type', value: 'New', indent: 1 },
        { type: 'row', label: 'Loan to Value', value: '75%', indent: 1 },
        { type: 'row', label: 'Insurance', value: 'Loan', indent: 1 },
        { type: 'row', label: 'Guarantor', value: 'Available', indent: 1 },
        { type: 'row', label: 'Payment Method', value: 'Autodebet', indent: 1 },
        { type: 'row', label: 'Additional Collateral', value: 'No', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Condition',
      icon: '📋',
      rows: [
        { type: 'row', label: 'Credit Period', value: '48 months', indent: 1 },
        { type: 'row', label: 'Total Outstanding (Rp.)', value: 'IDR < 600 Mio', indent: 1 },
        { type: 'row', label: 'Dealer Status', value: 'Authorized Dealer', indent: 1 },
        { type: 'row', label: 'Usage of Car', value: 'Non-Private', indent: 1 },
      ],
    },
  ],

  camNotes: [
    { type: 'note', label: 'CAM Notes / Comments — Business Notes' },
    { type: 'row', label: 'Notes', value: 'Customer has 3 active fleet financing contracts with good repayment history over 4 years. Business shows consistent revenue growth (17% YoY). Additional truck is intended to expand logistics coverage to the Cikarang–Bekasi corridor following a new distribution contract with an FMCG client.', indent: 1 },
    { type: 'note', label: 'Credit Recommendation' },
    { type: 'row', label: 'Recommendation', value: 'Recommended to approve with standard terms. Personal Guarantor (Hendra Wijaya) and Company Guarantor (PT Sinar Abadi Holding) to be bound in the credit agreement per standard MLCI policy for company age < 3 years.', indent: 1 },
  ],

  surveyTask: [
    {
      type: 'links',
      label: 'Survey Task Result',
      links: [
        { text: 'Survey Task Result 1 — Business Location', url: '#' },
        { text: 'Survey Task Result 2 — Financial Verification', url: '#' },
        { text: 'Survey Task Result 3 — Asset Inspection', url: '#' },
        { text: 'Survey Task Result 4 — Trade Checking', url: '#' },
        { text: 'Survey Task Result 5 — Guarantor Verification', url: '#' },
      ],
    },
  ],

  termCondition: [
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'No' },
        { key: 'docName', label: 'Document Name' },
        { key: 'priorTo', label: 'Prior To' },
        { key: 'check', label: 'Check' },
        { key: 'waived', label: 'Waived' },
        { key: 'promiseDate', label: 'Promise Date' },
        { key: 'expiredDate', label: 'Expired Date' },
        { key: 'notes', label: 'Notes' },
        { key: 'viewUrl', label: 'View', link: true, linkText: 'View' },
      ],
      people: [
        { name: '1', docName: 'KTP Direktur (Hendra Wijaya)', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
        { name: '2', docName: 'NPWP Perusahaan', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
        { name: '3', docName: 'Akta Pendirian & Perubahan Terakhir', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
        { name: '4', docName: 'SK Kemenkumham', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
        { name: '5', docName: 'Laporan Keuangan 2 Tahun Terakhir', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
        { name: '6', docName: 'Rekening Koran 6 Bulan Terakhir', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
        { name: '7', docName: 'Perjanjian Personal & Company Guarantee', priorTo: 'Disbursement', check: 'No', waived: 'No', promiseDate: '10 Sep 2026', expiredDate: '—', notes: 'Pending signature', viewUrl: '' },
      ],
    },
  ],

  loanRatio: [
    {
      type: 'peopleTable',
      label: 'Propose',
      columns: [
        { key: 'name', label: 'No' },
        { key: 'appNo', label: 'Application No' },
        { key: 'brandType', label: 'Brand / Type' },
        { key: 'unitYear', label: 'Unit Year' },
        { key: 'financing', label: 'Financing' },
        { key: 'branch', label: 'Branch' },
        { key: 'installment', label: 'Installment/Month' },
        { key: 'marketPrice', label: 'Market Price' },
        { key: 'outstanding', label: 'Outstanding' },
        { key: 'loanRatio', label: 'Loan Ratio (%)' },
      ],
      people: [
        { name: '1', appNo: '23182604001', brandType: 'Hino / FG 260 JS', unitYear: '2026', financing: 'IF', branch: 'Kelapa Gading', installment: 'Rp 24,166,667', marketPrice: 'Rp 1,100,000,000', outstanding: 'Rp 915,200,000', loanRatio: '83%' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Active',
      columns: [
        { key: 'name', label: 'No' },
        { key: 'appNo', label: 'Application No' },
        { key: 'brandType', label: 'Brand / Type' },
        { key: 'unitYear', label: 'Unit Year' },
        { key: 'financing', label: 'Financing' },
        { key: 'branch', label: 'Branch' },
        { key: 'installment', label: 'Installment/Month' },
        { key: 'marketPrice', label: 'Market Price' },
        { key: 'outstanding', label: 'Outstanding' },
        { key: 'loanRatio', label: 'Loan Ratio (%)' },
      ],
      people: [
        { name: '1', appNo: '22071502003', brandType: 'Hino / 130 HDL', unitYear: '2023', financing: 'IF', branch: 'Kelapa Gading', installment: 'Rp 18,500,000', marketPrice: 'Rp 780,000,000', outstanding: 'Rp 495,000,000', loanRatio: '63%' },
        { name: '2', appNo: '22110301007', brandType: 'Hino / Dutro 130 MDL', unitYear: '2023', financing: 'FL', branch: 'Kelapa Gading', installment: 'Rp 15,800,000', marketPrice: 'Rp 620,000,000', outstanding: 'Rp 420,000,000', loanRatio: '68%' },
      ],
    },
    {
      type: 'peopleTable',
      label: 'Grand Total',
      columns: [
        { key: 'name', label: 'Group' },
        { key: 'installment', label: 'Installment/Month' },
        { key: 'marketPrice', label: 'Market Price' },
        { key: 'outstanding', label: 'Outstanding' },
        { key: 'loanRatio', label: 'Loan Ratio (%)' },
      ],
      people: [
        { name: 'Customer', installment: 'Rp 58,466,667', marketPrice: 'Rp 2,500,000,000', outstanding: 'Rp 1,830,200,000', loanRatio: '73%' },
        { name: 'Group', installment: 'Rp 12,400,000', marketPrice: 'Rp 620,000,000', outstanding: 'Rp 620,000,000', loanRatio: '100%' },
        { name: 'Guarantor', installment: 'Rp 0', marketPrice: 'Rp 0', outstanding: 'Rp 0', loanRatio: '0%' },
        { name: 'GRAND TOTAL', installment: 'Rp 70,866,667', marketPrice: 'Rp 3,120,000,000', outstanding: 'Rp 2,450,200,000', loanRatio: '79%' },
      ],
    },
  ],
};
