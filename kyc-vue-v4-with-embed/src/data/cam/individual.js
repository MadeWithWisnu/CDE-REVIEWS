/**
 * cam/individual.js
 * -------------------
 * CAM (Credit Approval Memorandum) content for Individual applications.
 * Same section vocabulary as cam/corporate.js — only `checkingResult` and
 * `fiveC` differ meaningfully (Customer/Spouse instead of
 * Shareholder/Director/Commissioner), matching the Word template's
 * "Checking Result – Individual" and "5C Highlight – Individual" blocks.
 * No `organization` key — Organization Structure is corporate-only
 * (see camTypes.js sectionOrder).
 */
export const camIndividual = {
  verdict: {
    result: 'Recommended to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  applicationInfo: [
    { type: 'row', label: 'Application No', value: '', mono: true },
    { type: 'row', label: 'Order No', value: '', mono: true },
    { type: 'badge', label: 'Status', value: 'Customer New' },
    { type: 'row', label: 'Contract No', value: '—' },
    { type: 'row', label: 'Cross Disbursement No', value: '—' },
  ],

  customer: [
    { type: 'group', label: 'Customer' },
    { type: 'row', label: 'Customer Name', value: '', indent: 1 },
    { type: 'row', label: 'Legal Address', value: '', indent: 1 },
    { type: 'row', label: 'Telephone', value: '', indent: 1 },
    { type: 'row', label: 'Mail Address', value: '', indent: 1 },
    { type: 'row', label: 'NPWP', value: '', indent: 1 },
    { type: 'row', label: 'Guarantor', value: '', indent: 1 },
    { type: 'row', label: 'Industry', value: '', indent: 1 },
  ],

  asset: [
    { type: 'group', label: 'Asset Information' },
    { type: 'row', label: 'Asset Type', value: '', indent: 1 },
    { type: 'row', label: 'Brand', value: '', indent: 1 },
    { type: 'row', label: 'Type / Year', value: '', indent: 1 },
    { type: 'row', label: 'Condition / Model / Karoseri', value: '', indent: 1 },
    { type: 'row', label: 'Name in BPKB', value: '', indent: 1 },
    { type: 'row', label: 'Address in BPKB', value: '', indent: 1 },
    { type: 'row', label: 'Purpose of Finance', value: '', indent: 1 },

    { type: 'group', label: 'Supplier Information' },
    { type: 'row', label: 'Dealer Name', value: '', indent: 1 },
    { type: 'row', label: 'Dealer Type / Nickname', value: '', indent: 1 },
    { type: 'row', label: 'Dealer Address', value: '', indent: 1 },
    { type: 'row', label: 'Dealer Status', value: '', indent: 1 },
    { type: 'row', label: 'Disbursement Account No', value: '', mono: true, indent: 1 },
  ],

  finance: [
    { type: 'group', label: 'Finance Information' },
    { type: 'row', label: 'Asset Value', value: '', indent: 1 },
    { type: 'row', label: 'Unit Price', value: '', indent: 1 },
    { type: 'row', label: 'Down Payment', value: '', indent: 1 },
    { type: 'row', label: 'Insurance Loan', value: '', indent: 1 },
    { type: 'row', label: 'Provision Loan', value: '', indent: 1 },
    { type: 'row', label: 'Other Loan', value: '', indent: 1 },
    { type: 'row', label: 'Net Finance', value: '', indent: 1 },
    { type: 'row', label: 'Loan To Value', value: '', indent: 1 },
    { type: 'row', label: 'Interest Type / Installment Scheme', value: '', indent: 1 },
    { type: 'row', label: 'Way of Payment / Payment Frequency', value: '', indent: 1 },
    { type: 'row', label: 'Tenor / First Installment Type', value: '', indent: 1 },
    { type: 'row', label: 'MLCI Rate (Flat / Effective)', value: '', indent: 1 },
    { type: 'row', label: 'Selling Rate (Flat / Effective)', value: '', indent: 1 },
    { type: 'row', label: 'Survey Fee Gross', value: '', indent: 1 },
    { type: 'row', label: 'Notary Fee Gross', value: '', indent: 1 },
    { type: 'row', label: 'Provision Fee', value: '', indent: 1 },
    { type: 'row', label: 'Installment', value: '', indent: 1 },
    { type: 'row', label: 'Grace Period', value: '0 Month(s) 0%', indent: 1 },

    { type: 'group', label: 'Notary / Legitimate' },
    { type: 'row', label: 'Vendor Name', value: '', indent: 1 },
    { type: 'row', label: 'Fiducia / Cessie / Deed Fee', value: '', indent: 1 },
    { type: 'row', label: 'Fiducia / Cessie / Certificate (PNBP)', value: '', indent: 1 },

    { type: 'group', label: 'BPKB Checking Blocking' },
    { type: 'row', label: 'Fee', value: '', indent: 1 },

    { type: 'group', label: 'Agency' },
    { type: 'row', label: 'BBN Via', value: '', indent: 1 },
    { type: 'row', label: 'Paid By', value: '', indent: 1 },
    { type: 'row', label: 'Agency Name', value: '', indent: 1 },
    { type: 'row', label: 'Agency Fee Gross', value: '', indent: 1 },
    { type: 'row', label: 'BBN Fee', value: '', indent: 1 },
    { type: 'row', label: 'Nett Agency Fee', value: '', indent: 1 },
  ],

  disbursement: [
    { type: 'group', label: 'Disbursement — Paid to MLCI' },
    { type: 'row', label: 'Asset Value', value: '', indent: 1 },
    { type: 'row', label: 'Down Payment', value: '', indent: 1 },
    { type: 'row', label: 'Survey Fee Gross', value: '', indent: 1 },
    { type: 'row', label: 'Notary Fee Gross', value: '', indent: 1 },
    { type: 'row', label: 'Provision Fee', value: '', indent: 1 },
    { type: 'row', label: 'Other Fee', value: '', indent: 1 },
    { type: 'row', label: 'Insurance', value: '', indent: 1 },
    { type: 'row', label: 'Extra Warranty', value: '', indent: 1 },
    { type: 'row', label: 'First Installment', value: '', indent: 1 },
    { type: 'row', label: 'Advance Grace Period', value: '0 Month(s)', indent: 1 },
    { type: 'row', label: 'Agency Fee Gross', value: '', indent: 1 },
    { type: 'row', label: 'Subsidy From Dealer', value: '', indent: 1 },
    { type: 'row', label: 'Refund To Dealer', value: '', indent: 1 },
    { type: 'row', label: 'Disbursement to Dealer', value: '', indent: 1 },
    { type: 'row', label: 'Commission to Dealer (Gross)', value: '', indent: 1 },
    { type: 'row', label: 'Total Payment to Dealer', value: '', indent: 1 },
    { type: 'row', label: 'Subsidy from APM', value: '', indent: 1 },

    { type: 'group', label: 'Commission to Salesman & Broker' },
    { type: 'row', label: 'Total Gross Commission', value: '', indent: 1 },

    { type: 'group', label: 'Credit Protection' },
    { type: 'row', label: 'Credit Protection', value: '', indent: 1 },
    { type: 'row', label: 'Guaranteed Acceptance', value: '', indent: 1 },
  ],

  insurance: [
    { type: 'group', label: 'Insurance' },
    { type: 'row', label: 'Insurance Policy', value: '', indent: 1 },
    { type: 'row', label: 'Insurance Type', value: '', indent: 1 },
    { type: 'row', label: 'Insurance Company', value: '', indent: 1 },
    { type: 'row', label: 'Model', value: '', indent: 1 },
    { type: 'row', label: 'Payment Method', value: '', indent: 1 },
    { type: 'row', label: 'Condition', value: '', indent: 1 },
    { type: 'row', label: 'Gross Premium', value: '', indent: 1 },
    { type: 'row', label: 'Net Premium', value: '', indent: 1 },
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
        { name: 'Year 1', insAmount: '', tpl: '', tloCp: '', clause: '', rate: '', premReceive: '', premPayment: '' },
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
        { name: 'Active contract (disbursed)', unit: '', amount: '' },
        { name: 'Undisbursed', unit: '', amount: '' },
        { name: 'Propose (unapproved)', unit: '', amount: '' },
        { name: 'Group', unit: '', amount: '' },
        { name: 'Guarantor', unit: '', amount: '' },
        { name: 'Total', unit: '', amount: '' },
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
        { name: 'Insurance Income', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Net Insurance Prem. Received', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Survey Fee 1', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Survey Fee 2', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Provision Fee', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Interest Income', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Total', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Incentive to 3rd Party 17.5%', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Marketing Fee', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
        { name: 'Incentive To Be Paid', income: '', subsidy: '', totalIncome: '', baseRate: '', maxRefund: '' },
      ],
    },
    { type: 'row', label: 'IRR Actual', value: '' },
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
        { name: 'Down Payment', apm: '', dealer: '', refund: '' },
        { name: 'Installment', apm: '', dealer: '', refund: '' },
        { name: 'Insurance', apm: '', dealer: '', refund: '' },
        { name: 'Survey Fee 1', apm: '', dealer: '', refund: '' },
        { name: 'Survey Fee 2', apm: '', dealer: '', refund: '' },
        { name: 'Provision Fee', apm: '', dealer: '', refund: '' },
        { name: 'Interest', apm: '', dealer: '', refund: '' },
        { name: 'Total', apm: '', dealer: '', refund: '' },
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
        { name: '1', contractNo: '', purpose: '', amount: '' },
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
        { name: '1', partyName: '', address: '', bankBranch: '', accountNo: '', beneficiary: '', amount: '' },
      ],
    },
  ],

  equipment: [
    { type: 'group', label: 'Equipment Detail Review' },
    { type: 'row', label: 'User Usage', value: 'Default from customer, editable manually', indent: 1 },
    { type: 'row', label: 'OJK Financing Goods', value: '', indent: 1 },
    { type: 'row', label: 'OJK Collateral Goods', value: '', indent: 1 },
    { type: 'row', label: 'Parking Address', value: '', indent: 1 },
    { type: 'row', label: 'Zip Code', value: '', indent: 1 },
    { type: 'row', label: 'BPKB Area', value: '', indent: 1 },
  ],

  checkingResult: [
    { type: 'group', label: 'KYC Checking' },
    {
      type: 'peopleTable',
      label: 'Dukcapil',
      columns: [
        { key: 'name', label: 'Name — Role' },
        { key: 'result', label: 'Match Status', badge: true },
      ],
      people: [
        { name: 'Customer Name — Customer', result: 'Match' },
        { name: 'Spouse Name — Spouse', result: 'Match' },
      ],
    },

    { type: 'group', label: 'Collateral Check' },
    { type: 'row', label: 'Chassis No', value: '', mono: true, indent: 1 },
    { type: 'row', label: 'BPKB No', value: '', mono: true, indent: 1 },
    { type: 'row', label: 'Engine No', value: '', mono: true, indent: 1 },
    { type: 'row', label: 'Vehicle Type', value: '', indent: 1 },
    { type: 'row', label: 'License Type', value: '', indent: 1 },
    { type: 'row', label: 'Manufacture Year', value: '', indent: 1 },
    { type: 'row', label: 'Brand', value: '', indent: 1 },
    { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
    { type: 'row', label: 'Finance Company', value: '', indent: 1 },

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
        { name: 'Customer Name — Customer', result: 'Match' },
        { name: 'Spouse Name — Spouse', result: 'Match' },
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
        { name: 'Customer Name — Customer', phoneAge: '(>12 months)' },
        { name: 'Spouse Name — Spouse', phoneAge: '(>12 months)' },
      ],
    },
    { type: 'row', label: 'Location Verification (House)', value: '', indent: 1 },
    { type: 'row', label: 'Location Verification (Office)', value: '', indent: 1 },
    { type: 'badge', label: 'Bank Statement', value: 'Valid', indent: 1 },

    { type: 'group', label: 'APU PPT Check' },
    { type: 'badge', label: 'AML News', value: 'No Issue', indent: 1 },
    { type: 'badge', label: 'AML-CFT Customer Classification', value: 'High Risk', indent: 1 },

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
        { name: 'Customer', score: '', grade: '', summaryUrl: '#' },
        { name: 'Spouse', score: '', grade: '', summaryUrl: '#' },
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
  ],

  apuppt: [
    { type: 'group', label: 'Customer Information' },
    { type: 'row', label: 'Customer Name', value: '', indent: 1 },
    { type: 'row', label: 'Customer Type', value: '', indent: 1 },
    { type: 'row', label: 'Occupation / Business Type', value: '', indent: 1 },
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
        { name: '1', question: 'Has the BM / Department Head Business Unit ensured that the prospective customer is not involved in money laundering activities, either directly or indirectly?', yes: '', no: '' },
        { name: '2', question: 'Has the BM / Department Head Business Unit confirmed that the source of income and down payment of the prospective customer originate from legal sources?', yes: '', no: '' },
        { name: '3', question: "Has the BM / Department Head Business Unit confirmed that the prospective customer's business/profession is not related to illegal activities?", yes: '', no: '' },
        { name: '4', question: 'Has the BM / Department Head Business Unit confirmed that all customer documents are in accordance with the actual condition and supporting evidence?', yes: '', no: '' },
      ],
    },
  ],

  deviation: [
    {
      type: 'subAccordion',
      title: 'Automatic Deviation',
      icon: '⚙️',
      rows: [
        { type: 'row', label: '1', value: '', indent: 1 },
        { type: 'row', label: '2', value: '', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Manual Deviation',
      icon: '✍️',
      rows: [
        { type: 'row', label: '1', value: '', indent: 1 },
        { type: 'row', label: '2', value: '', indent: 1 },
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
        { name: 'Fixed Monthly Income', projection: '' },
        { name: 'Spouse Income', projection: '' },
        { name: 'Total Other Income', projection: '' },
        { name: 'Total Income per Month', projection: '' },
        { name: 'DSCR', projection: '' },
      ],
    },
    { type: 'group', label: 'Bank Statement' },
    { type: 'row', label: 'Bank', value: '', indent: 1 },
    { type: 'row', label: 'Account Name', value: '', indent: 1 },
    { type: 'row', label: 'Account Number', value: '', mono: true, indent: 1 },
    { type: 'row', label: 'Currency', value: '', indent: 1 },
    { type: 'row', label: 'Notes', value: '', indent: 1 },
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
        { name: '', beginning: '', debet: '', credit: '', ending: '', notes: '' },
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
        { type: 'row', label: 'Credit History', value: 'New / AO Good / AO Medium / AO Bad / RO Good / RO Good Medium / RO Medium / RO Medium Bad / RO Bad', indent: 1 },
        { type: 'badge', label: 'Watchlist', value: 'Not Listed', indent: 1 },
        { type: 'row', label: 'Reference', value: 'Unavailable / Available', indent: 1 },
        { type: 'row', label: 'Business / Working Experience', value: '>5 years', indent: 1 },
        { type: 'row', label: 'Business Size', value: 'Only shown if Occupation = Entrepreneur', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capital',
      icon: '💰',
      rows: [
        { type: 'row', label: 'Residential Type', value: 'House / Apartment', indent: 1 },
        { type: 'row', label: 'House Status', value: 'Owned / Family Owned (2nd degree) / Office / Rent', indent: 1 },
        { type: 'row', label: 'Car Ownership', value: 'First car user / More than 1 car', indent: 1 },
        { type: 'row', label: 'Deposit', value: '', indent: 1 },
        { type: 'row', label: 'Bank Statement → Average Ending Balance', value: '< Asset Value / = Asset Value / > Asset Value', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capacity',
      icon: '📈',
      rows: [
        { type: 'row', label: 'Job / Occupation (Customer)', value: 'Entrepreneur / Employee / Professional', indent: 1 },
        { type: 'row', label: 'Monthly Sales (Rp.)', value: 'Shown when Occupation = Entrepreneur (UMKM reporting)', indent: 1 },
        { type: 'row', label: 'Fixed Monthly Income (Rp.)', value: '', indent: 1 },
        { type: 'row', label: 'Job / Occupation (Spouse)', value: '', indent: 1 },
        { type: 'row', label: 'Spouse Income (Rp.)', value: '', indent: 1 },
        { type: 'row', label: 'Total Other Income per Month (Rp.)', value: '', indent: 1 },
        { type: 'row', label: 'Total Income per Month (Rp.)', value: 'Fixed monthly income + spouse income + other income', indent: 1 },
        { type: 'row', label: 'Average Income per Year (Rp.)', value: '', indent: 1 },
        { type: 'row', label: 'Average Credit Transaction Activities (Rp.)', value: 'Total average credit mutation', indent: 1 },
        { type: 'row', label: 'Average CTA Reflection (%)', value: 'Ratio of sales and average CTA', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Collateral',
      icon: '🚚',
      rows: [
        { type: 'row', label: 'Unit Type', value: 'New / Used', indent: 1 },
        { type: 'row', label: 'Loan to Value', value: '75%', indent: 1 },
        { type: 'row', label: 'Insurance', value: 'Cash / Loan', indent: 1 },
        { type: 'row', label: 'Guarantor', value: 'Available / Not Available', indent: 1 },
        { type: 'row', label: 'Payment Method', value: 'Giro / Autodebet', indent: 1 },
        { type: 'row', label: 'Additional Collateral', value: 'No / Yes (list additional collateral)', indent: 1 },
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
    { type: 'row', label: 'Notes', value: '', indent: 1 },
    { type: 'note', label: 'Credit Recommendation' },
    { type: 'row', label: 'Recommendation', value: '', indent: 1 },
  ],

  surveyTask: [
    {
      type: 'links',
      label: 'Survey Task Result',
      links: [
        { text: 'Survey Task Result 1', url: '#' },
        { text: 'Survey Task Result 2', url: '#' },
        { text: 'Survey Task Result 3', url: '#' },
        { text: 'Survey Task Result 4', url: '#' },
        { text: 'Survey Task Result 5', url: '#' },
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
        { name: '1', docName: 'KTP Customer', priorTo: 'TC', check: 'Yes', waived: 'No', promiseDate: '—', expiredDate: '—', notes: '—', viewUrl: '#' },
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
        { name: '1', appNo: '', brandType: '', unitYear: '', financing: 'IF', branch: '', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
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
      people: [],
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
        { name: 'Customer', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
        { name: 'Group', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
        { name: 'Guarantor', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
        { name: 'GRAND TOTAL', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
      ],
    },
  ],
};
