/**
 * cam/individual.js
 * -------------------
 * CAM (Credit Approval Memorandum) content for Individual applications.
 * Same note as cam/corporate.js — the source template is mostly blank;
 * every field here is filled with a coherent, realistic illustrative
 * example (one consistent fictional application) so the layout renders
 * fully populated end to end. No `organization` key — Organization
 * Structure is corporate-only (see camTypes.js sectionOrder).
 */
export const camIndividual = {

  camNotes: [
    { type: 'note', label: 'CAM Notes / Comments — Business Notes' },
    { type: 'row', label: 'Notes', value: 'Customer is an established retail entrepreneur with 7+ years of business history and a spouse with stable formal employment income. Existing MLCI contract has clean repayment history. Requested vehicle is for family/personal use.', indent: 1 },
  ],

  applicationInfo: [
    { type: 'row', label: 'Application No', value: '23182604118', mono: true },
    { type: 'row', label: 'Order No', value: '23182604118', mono: true },
    { type: 'badge', label: 'Status', value: 'Customer New' },
    { type: 'row', label: 'Contract No', value: '—' },
    { type: 'row', label: 'Cross Disbursement No', value: '—' },
  ],

  customer: [
    { type: 'group', label: 'Customer' },
    { type: 'row', label: 'Customer Name', value: 'Dewi Anggraini', indent: 1 },
    { type: 'row', label: 'Legal Address', value: 'Jl. Kemang Timur No. 12, Jakarta Selatan 12730', indent: 1 },
    { type: 'row', label: 'Telephone', value: '0812-3456-7890', indent: 1 },
    { type: 'row', label: 'Mail Address', value: 'dewi.anggraini@gmail.com', indent: 1 },
    { type: 'row', label: 'NPWP', value: '02.345.678.9-012.000', mono: true, indent: 1 },
    { type: 'row', label: 'Guarantor', value: 'Rudi Hartono (Spouse)', indent: 1 },
    { type: 'row', label: 'Industry', value: 'Perdagangan Retail', indent: 1 },
  ],

  asset: [
    { type: 'group', label: 'Asset Information' },
    { type: 'row', label: 'Asset Type', value: 'Automotive OTR', indent: 1 },
    { type: 'row', label: 'Brand', value: 'Toyota', indent: 1 },
    { type: 'row', label: 'Type / Year', value: 'Innova Zenix Hybrid / 2026', indent: 1 },
    { type: 'row', label: 'Condition / Model / Karoseri', value: 'New / MPV / —', indent: 1 },
    { type: 'row', label: 'Name in BPKB', value: 'Dewi Anggraini', indent: 1 },
    { type: 'row', label: 'Address in BPKB', value: 'Jl. Kemang Timur No. 12, Jakarta Selatan', indent: 1 },
    { type: 'row', label: 'Purpose of Finance', value: 'Konsumtif', indent: 1 },

    { type: 'group', label: 'Supplier Information' },
    { type: 'row', label: 'Dealer Name', value: 'AUTO 2000 KEMANG', indent: 1 },
    { type: 'row', label: 'Dealer Type / Nickname', value: 'Authorized Dealer / AUTO2000 KEMANG', indent: 1 },
    { type: 'row', label: 'Dealer Address', value: 'JL. KEMANG RAYA NO. 8, JAKARTA SELATAN', indent: 1 },
    { type: 'row', label: 'Dealer Status', value: 'NonSKB / NonPPN', indent: 1 },
    { type: 'row', label: 'Disbursement Account No', value: 'BCA 5647382910 - AUTO 2000 KEMANG', mono: true, indent: 1 },
  ],

  finance: [
    { type: 'group', label: 'Finance Information' },
    { type: 'row', label: 'Asset Value', value: 'Rp 495,000,000', indent: 1 },
    { type: 'row', label: 'Unit Price', value: 'Rp 495,000,000', indent: 1 },
    { type: 'row', label: 'Down Payment', value: 'Rp 148,500,000', indent: 1 },
    { type: 'row', label: 'Insurance Loan', value: 'Rp 15,850,000', indent: 1 },
    { type: 'row', label: 'Provision Loan', value: 'Rp 3,465,000', indent: 1 },
    { type: 'row', label: 'Other Loan', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'Net Finance', value: 'Rp 365,815,000', indent: 1 },
    { type: 'row', label: 'Loan To Value', value: '70%', indent: 1 },
    { type: 'row', label: 'Interest Type / Installment Scheme', value: 'Fixed Rate / Regular Fixed', indent: 1 },
    { type: 'row', label: 'Way of Payment / Payment Frequency', value: 'Autodebet / Monthly', indent: 1 },
    { type: 'row', label: 'Tenor / First Installment Type', value: 'Tenor 36 months / Advance', indent: 1 },
    { type: 'row', label: 'MLCI Rate (Flat / Effective)', value: '6.0% / 11.4198%', indent: 1 },
    { type: 'row', label: 'Selling Rate (Flat / Effective)', value: '6.0% / 11.4198%', indent: 1 },
    { type: 'row', label: 'Survey Fee Gross', value: 'Rp 750,000', indent: 1 },
    { type: 'row', label: 'Notary Fee Gross', value: 'Rp 1,200,000', indent: 1 },
    { type: 'row', label: 'Provision Fee', value: 'Rp 3,465,000', indent: 1 },
    { type: 'row', label: 'Installment', value: 'Rp 11,840,000 / month', indent: 1 },
    { type: 'row', label: 'Grace Period', value: '0 Month(s) 0%', indent: 1 },

    { type: 'group', label: 'Notary / Legitimate' },
    { type: 'row', label: 'Vendor Name', value: 'Kantor Notaris Ratna Wulandari, S.H.', indent: 1 },
    { type: 'row', label: 'Fiducia / Cessie / Deed Fee', value: 'Rp 500,000', indent: 1 },
    { type: 'row', label: 'Fiducia / Cessie / Certificate (PNBP)', value: 'Rp 100,000', indent: 1 },

    { type: 'group', label: 'BPKB Checking Blocking' },
    { type: 'row', label: 'Fee', value: 'Rp 100,000', indent: 1 },

    { type: 'group', label: 'Agency' },
    { type: 'row', label: 'BBN Via', value: 'Dealer', indent: 1 },
    { type: 'row', label: 'Paid By', value: 'Customer', indent: 1 },
    { type: 'row', label: 'Agency Name', value: 'CV Cepat BBN', indent: 1 },
    { type: 'row', label: 'Agency Fee Gross', value: 'Rp 1,800,000', indent: 1 },
    { type: 'row', label: 'BBN Fee', value: 'Rp 1,500,000', indent: 1 },
    { type: 'row', label: 'Nett Agency Fee', value: 'Rp 300,000', indent: 1 },
  ],

  disbursement: [
    { type: 'group', label: 'Disbursement — Paid to MLCI' },
    { type: 'row', label: 'Asset Value', value: 'Rp 495,000,000', indent: 1 },
    { type: 'row', label: 'Down Payment', value: 'Rp 148,500,000', indent: 1 },
    { type: 'row', label: 'Survey Fee Gross', value: 'Rp 750,000', indent: 1 },
    { type: 'row', label: 'Notary Fee Gross', value: 'Rp 1,200,000', indent: 1 },
    { type: 'row', label: 'Provision Fee', value: 'Rp 3,465,000', indent: 1 },
    { type: 'row', label: 'Other Fee', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'Insurance', value: 'Rp 15,850,000', indent: 1 },
    { type: 'row', label: 'Extra Warranty', value: 'Rp 2,500,000', indent: 1 },
    { type: 'row', label: 'First Installment', value: 'Rp 11,840,000', indent: 1 },
    { type: 'row', label: 'Advance Grace Period', value: '0 Month(s)', indent: 1 },
    { type: 'row', label: 'Agency Fee Gross', value: 'Rp 1,800,000', indent: 1 },
    { type: 'row', label: 'Subsidy From Dealer', value: 'Rp 8,000,000', indent: 1 },
    { type: 'row', label: 'Refund To Dealer', value: 'Rp 0', indent: 1 },
    { type: 'row', label: 'Disbursement to Dealer', value: 'Rp 495,000,000', indent: 1 },
    { type: 'row', label: 'Commission to Dealer (Gross)', value: 'Rp 6,500,000', indent: 1 },
    { type: 'row', label: 'Total Payment to Dealer', value: 'Rp 501,500,000', indent: 1 },
    { type: 'row', label: 'Subsidy from APM', value: 'Rp 3,000,000', indent: 1 },

    { type: 'group', label: 'Commission to Salesman & Broker' },
    { type: 'row', label: 'Total Gross Commission', value: 'Rp 4,950,000', indent: 1 },

    { type: 'group', label: 'Credit Protection' },
    { type: 'badge', label: 'Credit Protection', value: 'Asuransi Jiwa Kredit', indent: 1 },
    { type: 'badge', label: 'Guaranteed Acceptance', value: 'Yes', indent: 1 },
  ],

  insurance: [
    { type: 'group', label: 'Insurance' },
    { type: 'row', label: 'Insurance Policy', value: 'Comprehensive', indent: 1 },
    { type: 'row', label: 'Insurance Type', value: 'All Risk', indent: 1 },
    { type: 'row', label: 'Insurance Company', value: 'PT Asuransi Astra Buana', indent: 1 },
    { type: 'row', label: 'Model', value: 'Single', indent: 1 },
    { type: 'row', label: 'Payment Method', value: 'Loan', indent: 1 },
    { type: 'row', label: 'Condition', value: 'New', indent: 1 },
    { type: 'row', label: 'Gross Premium', value: 'Rp 17,325,000', indent: 1 },
    { type: 'row', label: 'Net Premium', value: 'Rp 15,850,000', indent: 1 },
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
        { name: 'Year 1', insAmount: 'Rp 495,000,000', tpl: 'Rp 25,000,000', tloCp: '—', clause: 'Bank/Finance Company Clause', rate: '3.2%', premReceive: 'Rp 15,850,000', premPayment: 'Rp 15,850,000' },
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
        { name: 'Active contract (disbursed)', unit: '1', amount: 'Rp 210,000,000' },
        { name: 'Undisbursed', unit: '0', amount: 'Rp 0' },
        { name: 'Propose (unapproved)', unit: '1', amount: 'Rp 365,815,000' },
        { name: 'Group', unit: '0', amount: 'Rp 0' },
        { name: 'Guarantor', unit: '0', amount: 'Rp 0' },
        { name: 'Total', unit: '2', amount: 'Rp 575,815,000' },
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
        { name: 'Insurance Income', income: 'Rp 1,475,000', subsidy: 'Rp 0', totalIncome: 'Rp 1,475,000', baseRate: '10%', maxRefund: 'Rp 147,500' },
        { name: 'Net Insurance Prem. Received', income: 'Rp 15,850,000', subsidy: 'Rp 0', totalIncome: 'Rp 15,850,000', baseRate: '—', maxRefund: '—' },
        { name: 'Survey Fee 1', income: 'Rp 750,000', subsidy: 'Rp 0', totalIncome: 'Rp 750,000', baseRate: '—', maxRefund: '—' },
        { name: 'Survey Fee 2', income: 'Rp 0', subsidy: 'Rp 0', totalIncome: 'Rp 0', baseRate: '—', maxRefund: '—' },
        { name: 'Provision Fee', income: 'Rp 3,465,000', subsidy: 'Rp 0', totalIncome: 'Rp 3,465,000', baseRate: '—', maxRefund: '—' },
        { name: 'Interest Income', income: 'Rp 18,290,000', subsidy: 'Rp 0', totalIncome: 'Rp 18,290,000', baseRate: '—', maxRefund: '—' },
        { name: 'Total', income: 'Rp 39,830,000', subsidy: 'Rp 0', totalIncome: 'Rp 39,830,000', baseRate: '—', maxRefund: '—' },
        { name: 'Incentive to 3rd Party 17.5%', income: '—', subsidy: '—', totalIncome: '—', baseRate: '17.5%', maxRefund: 'Rp 6,970,000' },
        { name: 'Marketing Fee', income: '—', subsidy: '—', totalIncome: '—', baseRate: '—', maxRefund: 'Rp 4,950,000' },
        { name: 'Incentive To Be Paid', income: '—', subsidy: '—', totalIncome: '—', baseRate: '—', maxRefund: 'Rp 2,020,000' },
      ],
    },
    { type: 'row', label: 'IRR Actual', value: '12.104223875%' },
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
        { name: 'Down Payment', apm: 'Rp 0', dealer: 'Rp 3,000,000', refund: 'Rp 0' },
        { name: 'Installment', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Insurance', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Survey Fee 1', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Survey Fee 2', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Provision Fee', apm: 'Rp 0', dealer: 'Rp 0', refund: 'Rp 0' },
        { name: 'Interest', apm: 'Rp 3,000,000', dealer: 'Rp 5,000,000', refund: 'Rp 0' },
        { name: 'Total', apm: 'Rp 3,000,000', dealer: 'Rp 8,000,000', refund: 'Rp 0' },
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
        { name: '1', contractNo: '—', purpose: '—', amount: '—' },
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
        { name: '1', partyName: 'AUTO 2000 KEMANG', address: 'JL. KEMANG RAYA NO. 8, JAKARTA SELATAN', bankBranch: 'BCA - KCP Kemang', accountNo: '5647382910', beneficiary: 'AUTO 2000 KEMANG', amount: 'Rp 501,500,000' },
      ],
    },
  ],

  equipment: [
    { type: 'group', label: 'Equipment Detail Review' },
    { type: 'row', label: 'User Usage', value: 'Default from customer, editable manually', indent: 1 },
    { type: 'row', label: 'OJK Financing Goods', value: 'Konsumtif - Mobil Penumpang', indent: 1 },
    { type: 'row', label: 'OJK Collateral Goods', value: 'Konsumtif - Mobil Penumpang', indent: 1 },
    { type: 'row', label: 'Parking Address', value: 'Jl. Kemang Timur No. 12, Jakarta Selatan', indent: 1 },
    { type: 'row', label: 'Zip Code', value: '12730', indent: 1 },
    { type: 'row', label: 'BPKB Area', value: 'Wilayah 2 (DKI Jakarta, Banten dan Jawa Barat)', indent: 1 },
  ],

  deviation: [
    {
      type: 'subAccordion',
      title: 'Automatic Deviation',
      icon: '⚙️',
      rows: [
        { type: 'row', label: '1', value: '—', indent: 1 },
        { type: 'row', label: '2', value: '—', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Manual Deviation',
      icon: '✍️',
      rows: [
        { type: 'row', label: '1', value: '—', indent: 1 },
        { type: 'row', label: '2', value: '—', indent: 1 },
      ],
    },
  ],

  financialReview: [
    {
      type: 'peopleTable',
      label: 'Income Report Projection',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'projection', label: 'Projection' },
      ],
      people: [
        { name: 'Fixed Monthly Income', projection: 'Rp 22,000,000' },
        { name: 'Spouse Income', projection: 'Rp 15,000,000' },
        { name: 'Total Other Income', projection: 'Rp 3,500,000' },
        { name: 'Total Income per Month', projection: 'Rp 40,500,000' },
        { name: 'DSCR', projection: '3.42x' },
      ],
    },
    { type: 'group', label: 'Bank Statement' },
    { type: 'row', label: 'Bank', value: 'Mandiri', indent: 1 },
    { type: 'row', label: 'Account Name', value: 'Dewi Anggraini', indent: 1 },
    { type: 'row', label: 'Account Number', value: '1230004567890', mono: true, indent: 1 },
    { type: 'row', label: 'Currency', value: 'IDR', indent: 1 },
    { type: 'row', label: 'Notes', value: '3-month mutation reviewed, salary credit consistent', indent: 1 },
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
        { name: 'Jan 2026', beginning: 'Rp 45,000,000', debet: 'Rp 28,000,000', credit: 'Rp 22,500,000', ending: 'Rp 39,500,000', notes: 'Normal' },
        { name: 'Feb 2026', beginning: 'Rp 39,500,000', debet: 'Rp 26,000,000', credit: 'Rp 22,500,000', ending: 'Rp 36,000,000', notes: 'Normal' },
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
        { type: 'row', label: 'Business / Working Experience', value: '>5 years', indent: 1 },
        { type: 'row', label: 'Business Size', value: 'Small (Retail Trading)', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capital',
      icon: '💰',
      rows: [
        { type: 'row', label: 'Residential Type', value: 'House', indent: 1 },
        { type: 'row', label: 'House Status', value: 'Owned', indent: 1 },
        { type: 'row', label: 'Car Ownership', value: 'More than 1 car', indent: 1 },
        { type: 'row', label: 'Deposit', value: 'Rp 148,500,000', indent: 1 },
        { type: 'row', label: 'Bank Statement → Average Ending Balance', value: '> Asset Value', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capacity',
      icon: '📈',
      rows: [
        { type: 'row', label: 'Job / Occupation (Customer)', value: 'Entrepreneur — Retail Trading', indent: 1 },
        { type: 'row', label: 'Monthly Sales (Rp.)', value: 'Rp 185,000,000', indent: 1 },
        { type: 'row', label: 'Fixed Monthly Income (Rp.)', value: 'Rp 22,000,000', indent: 1 },
        { type: 'row', label: 'Job / Occupation (Spouse)', value: 'Employee — Marketing Manager', indent: 1 },
        { type: 'row', label: 'Spouse Income (Rp.)', value: 'Rp 15,000,000', indent: 1 },
        { type: 'row', label: 'Total Other Income per Month (Rp.)', value: 'Rp 3,500,000', indent: 1 },
        { type: 'row', label: 'Total Income per Month (Rp.)', value: 'Rp 40,500,000', indent: 1 },
        { type: 'row', label: 'Average Income per Year (Rp.)', value: 'Rp 486,000,000', indent: 1 },
        { type: 'row', label: 'Average Credit Transaction Activities (Rp.)', value: 'Rp 32,000,000', indent: 1 },
        { type: 'row', label: 'Average CTA Reflection (%)', value: '79%', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Collateral',
      icon: '🚚',
      rows: [
        { type: 'row', label: 'Unit Type', value: 'New', indent: 1 },
        { type: 'row', label: 'Loan to Value', value: '70%', indent: 1 },
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
        { type: 'row', label: 'Credit Period', value: '36 months', indent: 1 },
        { type: 'row', label: 'Total Outstanding (Rp.)', value: 'IDR < 600 Mio', indent: 1 },
        { type: 'row', label: 'Dealer Status', value: 'Authorized Dealer', indent: 1 },
        { type: 'row', label: 'Usage of Car', value: 'Private', indent: 1 },
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
        { name: '1', appNo: '23182604118', brandType: 'Toyota / Innova Zenix Hybrid', unitYear: '2026', financing: 'IF', branch: 'Kemang', installment: 'Rp 11,840,000', marketPrice: 'Rp 495,000,000', outstanding: 'Rp 365,815,000', loanRatio: '74%' },
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
        { name: '1', appNo: '22091203045', brandType: 'Honda / HR-V', unitYear: '2023', financing: 'IF', branch: 'Kemang', installment: 'Rp 8,200,000', marketPrice: 'Rp 320,000,000', outstanding: 'Rp 210,000,000', loanRatio: '66%' },
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
        { name: 'Customer', installment: 'Rp 20,040,000', marketPrice: 'Rp 815,000,000', outstanding: 'Rp 575,815,000', loanRatio: '71%' },
        { name: 'Group', installment: 'Rp 0', marketPrice: 'Rp 0', outstanding: 'Rp 0', loanRatio: '0%' },
        { name: 'Guarantor', installment: 'Rp 0', marketPrice: 'Rp 0', outstanding: 'Rp 0', loanRatio: '0%' },
        { name: 'GRAND TOTAL', installment: 'Rp 20,040,000', marketPrice: 'Rp 815,000,000', outstanding: 'Rp 575,815,000', loanRatio: '71%' },
      ],
    },
  ],
};
