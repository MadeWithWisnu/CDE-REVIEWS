/**
 * cam/corporate.js
 * ------------------
 * CAM (Credit Approval Memorandum) content for Corporate applications.
 * Structured to mirror the Word template 1:1, section by section, using
 * the same row/badge/peopleTable/subAccordion vocabulary as CDE data files
 * so it renders through the exact same AccordionSection.vue component.
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
    { type: 'row', label: 'Customer Name', value: '', indent: 1 },
    { type: 'row', label: 'Name in Akta', value: '', indent: 1 },
    { type: 'row', label: 'Legal Address', value: '', indent: 1 },
    { type: 'row', label: 'Telephone', value: '', indent: 1 },
    { type: 'row', label: 'Mail Address', value: '', indent: 1 },
    { type: 'row', label: 'NPWP', value: '', indent: 1 },
    { type: 'row', label: 'Guarantor', value: '', indent: 1 },
    { type: 'row', label: 'Industry', value: '', indent: 1 },
    { type: 'row', label: 'Industry Group', value: '', indent: 1 },
  ],

  asset: [
    { type: 'group', label: 'Asset Information' },
    { type: 'row', label: 'Asset Type', value: 'Automotive OTR', indent: 1 },
    { type: 'row', label: 'Brand', value: 'Hino', indent: 1 },
    { type: 'row', label: 'Type / Year', value: 'FG 260 JS / 2026', indent: 1 },
    { type: 'row', label: 'Condition / Model / Karoseri', value: 'New / TRUCK / STEEL BOX', indent: 1 },
    { type: 'row', label: 'Name in BPKB', value: '', indent: 1 },
    { type: 'row', label: 'Address in BPKB', value: '', indent: 1 },
    { type: 'row', label: 'Purpose of Finance', value: 'Investasi', indent: 1 },

    { type: 'group', label: 'Supplier Information' },
    { type: 'row', label: 'Dealer Name', value: 'ARISTA JAYA NIAGA, PT.', indent: 1 },
    { type: 'row', label: 'Dealer Type / Nickname', value: 'Authorized Dealer / HINO ARISTA KALIMALANG', indent: 1 },
    { type: 'row', label: 'Dealer Address', value: 'RAYA KALIMALANG NO.19, DUREN SAWIT', indent: 1 },
    { type: 'row', label: 'Dealer Status', value: 'NonSKB / NonPPN', indent: 1 },
    { type: 'row', label: 'Karoseri Name', value: 'TEJA MANDIRI, CV.', indent: 1 },
    { type: 'row', label: 'Karoseri Address', value: 'GG. BUNTU POLSEK, CIKARANG KOTA, CIKARANG UTARA', indent: 1 },
    { type: 'row', label: 'Disbursement Account No', value: 'BCA 1234567890 - ARISTA JAYA NIAGA, PT.', mono: true, indent: 1 },
    { type: 'row', label: 'Disbursement Account No (Karoseri)', value: 'BCA 1234567890 - Karoseri PT', mono: true, indent: 1 },
  ],

  finance: [
    { type: 'group', label: 'Finance Information' },
    { type: 'row', label: 'Asset Value', value: '', indent: 1 },
    { type: 'row', label: 'Unit Price', value: '', indent: 1 },
    { type: 'row', label: 'Karoseri Price', value: '', indent: 1 },
    { type: 'row', label: 'Down Payment 20%', value: '', indent: 1 },
    { type: 'row', label: 'Insurance Loan', value: '', indent: 1 },
    { type: 'row', label: 'Provision Loan', value: '', indent: 1 },
    { type: 'row', label: 'Other Loan', value: '', indent: 1 },
    { type: 'row', label: 'Net Finance', value: '', indent: 1 },
    { type: 'row', label: 'Loan To Value', value: '', indent: 1 },
    { type: 'row', label: 'Interest Type / Installment Scheme', value: 'Fixed Rate / Regular Fixed', indent: 1 },
    { type: 'row', label: 'Way of Payment / Payment Frequency', value: 'Transfer / Monthly', indent: 1 },
    { type: 'row', label: 'Tenor / First Installment Type', value: 'Tenor 48 months / Advance', indent: 1 },
    { type: 'row', label: 'MLCI Rate (Flat / Effective)', value: '5.5% / 10.5772408%', indent: 1 },
    { type: 'row', label: 'Selling Rate (Flat / Effective)', value: '5.5% / 10.5772408%', indent: 1 },
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
    { type: 'row', label: 'Special Rate', value: '', indent: 1 },
    { type: 'row', label: 'Seat', value: '', indent: 1 },
    { type: 'row', label: 'Gross Premium', value: '', indent: 1 },
    { type: 'row', label: 'Unit Price', value: '', indent: 1 },
    { type: 'row', label: 'Net Premium', value: '', indent: 1 },
    { type: 'row', label: 'Karoseri Price', value: '', indent: 1 },
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
    { type: 'row', label: 'OJK Financing Goods', value: 'Produktif - Mobil Pengangkutan', indent: 1 },
    { type: 'row', label: 'OJK Collateral Goods', value: 'Produktif - Mobil Pengangkutan', indent: 1 },
    { type: 'row', label: 'Parking Address', value: '', indent: 1 },
    { type: 'row', label: 'Zip Code', value: '', indent: 1 },
    { type: 'row', label: 'BPKB Area', value: 'Wilayah 2 (DKI Jakarta, Banten dan Jawa Barat)', indent: 1 },
  ],

  checkingResult: [
    { type: 'group', label: 'KYC Checking' },
    { type: 'row', label: 'AHU', value: 'Match — Not Match', indent: 1 },
    {
      type: 'peopleTable',
      label: 'Dukcapil',
      columns: [
        { key: 'name', label: 'Name — Role' },
        { key: 'result', label: 'Match Status', badge: true },
      ],
      people: [
        { name: 'Shareholder Name — Shareholder', result: 'Match' },
        { name: 'President Director Name — President Director', result: 'Match' },
        { name: 'Director Name — Director', result: 'Match' },
        { name: 'President Commissioner Name — President Commissioner', result: 'Match' },
        { name: 'Commissioner Name — Commissioner', result: 'Match' },
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
        { name: 'Director Name — Director', result: 'Match' },
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
        { name: 'Director Name — Director', phoneAge: '(>12 months)' },
      ],
    },
    { type: 'row', label: 'Location Verification (House)', value: '', indent: 1 },
    { type: 'row', label: 'Location Verification (Office)', value: '', indent: 1 },
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
        { name: 'Customer', score: '', grade: '', summaryUrl: '#' },
        { name: 'Shareholder — Shareholder Name', score: '', grade: '', summaryUrl: '#' },
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
        { name: 'President Director — President Director Name', score: '789', grade: 'Low Risk' },
        { name: 'Director — Director Name', score: '123', grade: 'High Risk' },
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

  organization: [
    { type: 'group', label: 'Capital' },
    { type: 'row', label: 'Authorized Capital', value: '', indent: 1 },
    { type: 'row', label: 'Paid-In Capital', value: '', indent: 1 },

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
        { name: '', status: 'Individual', position: 'President Director', shareholder: '', shares: '', nominal: '', bo: '', signer: '' },
        { name: '', status: 'Corporate', position: '-', shareholder: '', shares: '', nominal: '', bo: '', signer: '' },
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
        { key: 'certificate', label: 'Certificate of Ministry of Law & Human Rights' },
      ],
      people: [
        { name: '', deedNo: '', date: '', notary: '', certificate: '' },
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
        { name: '', position: '', endTerm: '' },
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
        { name: '', idCard: '', address: '', city: '', image: '' },
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
        { name: 'Cash & Bank', y2024: '', y2025: '' },
        { name: 'Account Receivable', y2024: '', y2025: '' },
        { name: 'Current Financial Assets', y2024: '', y2025: '' },
        { name: 'Other Receivable', y2024: '', y2025: '' },
        { name: 'Inventory', y2024: '', y2025: '' },
        { name: 'Total Current Asset', y2024: '', y2025: '' },
        { name: 'Land & Building', y2024: '', y2025: '' },
        { name: 'Machine', y2024: '', y2025: '' },
        { name: 'Vehicle', y2024: '', y2025: '' },
        { name: 'Others', y2024: '', y2025: '' },
        { name: 'Accumulated Depreciation', y2024: '', y2025: '' },
        { name: 'Total Fixed Asset', y2024: '', y2025: '' },
        { name: 'Long-term Receivables', y2024: '', y2025: '' },
        { name: 'Non-current Investments', y2024: '', y2025: '' },
        { name: 'Total Fixed Asset & Non-Current Asset', y2024: '', y2025: '' },
        { name: 'TOTAL ASSET', y2024: '', y2025: '' },
        { name: 'Short Term Debt', y2024: '', y2025: '' },
        { name: 'Current Portion Long Term Debt (Bank)', y2024: '', y2025: '' },
        { name: 'Current Portion Long Term Debt (Leasing)', y2024: '', y2025: '' },
        { name: 'Account Payable', y2024: '', y2025: '' },
        { name: 'Other Payable', y2024: '', y2025: '' },
        { name: 'Total Current Liabilities', y2024: '', y2025: '' },
        { name: 'Long Term Debt (Bank)', y2024: '', y2025: '' },
        { name: 'Long Term Debt (Leasing)', y2024: '', y2025: '' },
        { name: 'Long Term Account Payable', y2024: '', y2025: '' },
        { name: 'Other Non-Current Liabilities', y2024: '', y2025: '' },
        { name: 'Total Non-Current Liabilities', y2024: '', y2025: '' },
        { name: 'Capital Stock (Equity)', y2024: '', y2025: '' },
        { name: 'Retained Earning', y2024: '', y2025: '' },
        { name: 'Change in Retained Earning', y2024: '', y2025: '' },
        { name: 'Total Equity', y2024: '', y2025: '' },
        { name: 'TOTAL LIABILITIES', y2024: '', y2025: '' },
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
        { name: 'Sales', y2024: '', y2025: '' },
        { name: 'COGS', y2024: '', y2025: '' },
        { name: 'Gross Profit / (Loss)', y2024: '', y2025: '' },
        { name: 'Total Operating Expenses', y2024: '', y2025: '' },
        { name: 'Operating Profit / (Loss)', y2024: '', y2025: '' },
        { name: 'Total Other Income', y2024: '', y2025: '' },
        { name: 'Total Other Expenses', y2024: '', y2025: '' },
        { name: 'Profit / (Loss) Before Tax', y2024: '', y2025: '' },
        { name: 'Income Tax Expense', y2024: '', y2025: '' },
        { name: 'Net Profit / (Loss) for the Year', y2024: '', y2025: '' },
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
        { name: 'Sales', projection: '' },
        { name: 'COGS', projection: '' },
        { name: 'Gross Profit / (Loss)', projection: '' },
        { name: 'Total Operating Expenses', projection: '' },
        { name: 'Operating Profit / (Loss)', projection: '' },
        { name: 'Total Other Income', projection: '' },
        { name: 'Total Other Expenses', projection: '' },
        { name: 'Profit / (Loss) Before Tax', projection: '' },
        { name: 'Income Tax Expense', projection: '' },
        { name: 'Net Profit / (Loss) for the Month', projection: '' },
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
        { type: 'row', label: 'Business Experience', value: '<2 years / 2-5 years / >5 years', indent: 1 },
        { type: 'row', label: 'Company Status', value: 'National Company / Family Business / Private Business / Pure Foreign Company / Multinational Company', indent: 1 },
        { type: 'row', label: 'Ownership Type', value: 'Local Company / Foreign Investment (PMA) / Public Company / Group Subsidiary / Family Business', indent: 1 },
        { type: 'row', label: 'Scale of Business', value: 'Local / National / International', indent: 1 },
        { type: 'row', label: 'Business Size', value: 'Micro / Small / Medium / Large / Others / Non-productive', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capital',
      icon: '💰',
      rows: [
        { type: 'row', label: 'Business Location', value: 'Non-Permanent / House Complex / Business District', indent: 1 },
        { type: 'row', label: 'Office Status', value: 'Owned / Rent', indent: 1 },
        { type: 'row', label: 'Total Unit Owned (Vehicle)', value: 'None / <10 units / >10 units', indent: 1 },
        { type: 'row', label: 'Unit Free from Finance', value: '<30% / 30% - 50% / >50%', indent: 1 },
        { type: 'row', label: 'Deposit', value: '', indent: 1 },
        { type: 'row', label: 'Bank Statement → Average Ending Balance', value: '< Asset Value / = Asset Value / > Asset Value', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Capacity',
      icon: '📈',
      rows: [
        { type: 'row', label: 'Monthly Sales (Rp.)', value: 'Linked from Sales Projection', indent: 1 },
        { type: 'row', label: 'Monthly Profit (Rp.)', value: 'Linked from Net Profit Projection', indent: 1 },
        { type: 'row', label: 'Profit Margin (%)', value: 'Ratio sales:profit', indent: 1 },
        { type: 'row', label: 'Average Credit Transaction Activities (Rp.)', value: 'Total average credit mutation', indent: 1 },
        { type: 'row', label: 'Average CTA Reflection (%)', value: 'Ratio of sales and average CTA', indent: 1 },
        { type: 'row', label: 'Average Sales per Year', value: 'Sales projection × 12', indent: 1 },
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
        { name: '1', appNo: '23182604001', brandType: 'Hino / 130 HDL 6.4 PS', unitYear: '2026', financing: 'IF', branch: 'KG', installment: '8,750,000', marketPrice: '1,000,000,000', outstanding: '800,000,000', loanRatio: '80%' },
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
        { name: '1', appNo: '23182604001', brandType: 'Hino / 130 HDL 6.4 PS', unitYear: '2026', financing: 'IF', branch: 'KG', installment: '8,750,000', marketPrice: '1,000,000,000', outstanding: '800,000,000', loanRatio: '80%' },
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
        { name: 'Customer', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
        { name: 'Group', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
        { name: 'Guarantor', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
        { name: 'GRAND TOTAL', installment: '', marketPrice: '', outstanding: '', loanRatio: '' },
      ],
    },
  ],
};
