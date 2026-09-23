export const leasingCorporate = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  rating: [
    { type: 'group', label: 'Sales Rating' },
    { type: 'row', label: 'Sales Name', value: 'Hendra Wijaya' },
    { type: 'badge', label: 'Rating', value: 'Green' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'fpd', label: 'FPD' },
        { key: 'f3pd', label: 'F3PD' },
        { key: 'rejectReturn', label: 'Reject Return' },
        { key: 'fid6', label: 'FID 6' },
        { key: 'achBooking', label: 'Ach Booking' },
      ],
      people: [
        { fpd: '1%', f3pd: '1%', rejectReturn: '1%', fid6: '1%', achBooking: '1%' },
      ],
    },

    { type: 'group', label: 'Branch' },
    { type: 'row', label: 'Branch Name', value: 'Kelapa Gading' },
    { type: 'badge', label: 'Rating', value: 'Green' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'fpd', label: 'FPD' },
        { key: 'f3pd', label: 'F3PD' },
        { key: 'fid6', label: 'FID 6' },
        { key: 'od0', label: '0+' },
        { key: 'od30', label: '30+' },
        { key: 'pct90', label: '90%' },
        { key: 'ncl', label: 'NCL' },
      ],
      people: [
        { fpd: '1%', f3pd: '1%', fid6: '1%', od0: '1%', od30: '1%', pct90: '1%', ncl: '1%' },
      ],
    },

    { type: 'group', label: 'Dealer' },
    {
      type: 'rowPair',
      left: { label: 'Supplier Name', value: 'Arista Jaya Niaga, PT.' },
      right: { label: 'Group Supplier', value: 'Arista Group' },
    },
    {
      type: 'rowPair',
      left: { label: 'Rating', value: 'Green', badge: true },
      right: { label: 'Group Rating', value: 'Green', badge: true },
    },
    {
      type: 'rowPair',
      left: { label: 'Supplier Status', value: 'Dealer' },
      right: { label: 'Group Status', value: 'Dealer' },
    },
    {
      type: 'rowPair',
      left: { label: 'Tier', value: '1' },
      right: { label: 'Group Tier', value: '1' },
    },
    {
      type: 'peopleTable',
      columns: [
        { key: 'fid6', label: 'FID6' },
        { key: 'fid9', label: 'FID9' },
      ],
      people: [
        { fid6: '1%', fid9: '1%' },
      ],
    },
  ],

  kyc: [
    { type: 'group', label: 'AHU' },
    { type: 'badge', label: 'Inquiry', value: 'Registered', indent: 1 },

    { type: 'group', label: 'Deed of Establishment' },
    { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },

    { type: 'group', label: 'Company Guarantor' },
    { type: 'badge', label: 'Inquiry', value: 'Registered', indent: 1 },
    { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },

    { type: 'group', label: 'Personal Guarantor' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Check Item' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { name: 'Dukcapil', status: 'Match' },
        { name: 'Phone Verification (ID Match)', status: 'Match' },
      ],
    },
    { type: 'row', label: 'Phone Verification (Phone Age)', value: '(>12 months)', indent: 1 },

    { type: 'group', label: 'Relationship Check' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Relationship' },
        { key: 'relatedTo', label: 'Related To' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { name: 'Personal Guarantor', relatedTo: 'Company (Director/Shareholder)', status: 'Verified' },
        { name: 'Company Guarantor', relatedTo: 'Company', status: 'Verified' },
      ],
    },

    // Negative Debtor — Blacklist / Watchlist screening. If a check does not
    // pass, the reason is shown in the Reason column; otherwise it's "—".
    { type: 'group', label: 'Negative Debtor' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'blacklist', label: 'Blacklist', badge: true },
        { key: 'watchlist', label: 'Watchlist', badge: true },
        { key: 'reason', label: 'Reason (if not pass)' },
      ],
      people: [
        { name: 'Customer', blacklist: 'Not Listed', watchlist: 'Not Listed', reason: '—' },
        { name: 'Shareholder & Management', blacklist: 'Not Listed', watchlist: 'Not Listed', reason: '—' },
        { name: 'Guarantor', blacklist: 'Not Listed', watchlist: 'Not Listed', reason: '—' },
      ],
    },
  ],

  preScoring: [
    {
      type: 'highlight',
      items: [
        { label: 'Pre Scoring Result', value: 'Tend to Approve', tone: 'good' },
        { label: 'Survey Treatment', value: 'SO and Surveyor' },
        { label: 'Surveyor Name', value: 'Name of Surveyor' },

      ],
    },

    {
      type: 'peopleTable',
      label: 'SLIK Score',
      people: [
        { name: 'Customer', positionStatus: '—', result: 'Good', summaryUrl: '#' },
        { name: 'Mr Febby', positionStatus: 'Director & Shareholder', result: 'Medium-Good', summaryUrl: '#' },
        { name: 'Mr Ivan', positionStatus: 'Commissioner & Shareholder', result: 'Medium-Good', summaryUrl: '#' },
        { name: 'Company Guarantor', positionStatus: '—', result: 'Good', summaryUrl: '#' },
        { name: 'Personal Guarantor', positionStatus: '—', result: 'Good', summaryUrl: '#' },
        { name: 'Aggregate', positionStatus: '—', result: 'Good', summaryUrl: '' },
      ],
    },

    {
      type: 'knockoutList',
      label: 'Knockout',
      items: [],
    },
  ],

  collateral: [
    { type: 'group', label: 'Rapindo:' },
    { type: 'row', label: 'Chassis No', value: 'MJEC1JG43J1234567', mono: true, indent: 1 },
    { type: 'row', label: 'Engine No', value: 'W04DTRR12345', mono: true, indent: 1 },
    { type: 'row', label: 'Vehicle Type', value: 'Dutro 130 HD', indent: 1 },
    { type: 'row', label: 'License Plate', value: 'H 1234 HC', mono: true, indent: 1 },
    { type: 'row', label: 'Manufacture Year', value: '2025', indent: 1 },
    { type: 'row', label: 'Brand', value: 'Hino', indent: 1 },
    { type: 'badge', label: 'Certificate Status', value: 'Active', indent: 1 },
    { type: 'row', label: 'Finance Company', value: 'Mitsui Leasing Capital Indonesia', indent: 1 },

    { type: 'group', label: 'Asset Financing History' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'contractNo', label: 'Contract No' },
        { key: 'customerNo', label: 'Customer No' },
        { key: 'otrAmount', label: 'OTR Amount' },
        { key: 'totalNetFinance', label: 'Total Net Finance' },
        { key: 'disbursementDate', label: 'Disbursement Date' },
        { key: 'finishDate', label: 'Finish Date' },
      ],
      people: [
        { contractNo: '21093302015', customerNo: 'CUST-55019', otrAmount: 'Rp 780,000,000', totalNetFinance: 'Rp 624,000,000', disbursementDate: '09-2021', finishDate: '09-2025' },
      ],
    },
  ],

  apuppt: [
    { type: 'group', label: 'AML News' },
    { type: 'badge', label: 'Status', value: 'Not Listed', indent: 1 },

    {
      type: 'subAccordion',
      title: 'AML-CFT Customer Classification',
      icon: '🛡️',
      rows: [
        { type: 'badge', label: 'Rating', value: 'Medium Risk', indent: 1 },
      ],
    },
  ],

  lpip: [
    { type: 'group', label: 'Customer LPIP' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary LPIP', indent: 1, links: [{ text: 'Link to LPIP Result', url: '#' }] },
  ],

  finalScoring: [
    {
      type: 'highlight',
      items: [
        { label: 'Final Score Result', value: 'Recommend to Approve', tone: 'good' },
        { label: 'Instant Approval', value: 'Yes', tone: 'good' },
      ],
    },

    {
      type: 'peopleTable',
      label: 'SLIK Score Final',
      people: [
        { name: 'Customer', positionStatus: '—', result: 'Good', summaryUrl: '#' },
        { name: 'Mr Febby', positionStatus: 'Director & Shareholder', result: 'Medium-Good', summaryUrl: '#' },
        { name: 'Mr Ivan', positionStatus: 'Commissioner & Shareholder', result: 'Medium-Good', summaryUrl: '#' },
        { name: 'Company Guarantor', positionStatus: '—', result: 'Good', summaryUrl: '#' },
        { name: 'Personal Guarantor', positionStatus: '—', result: 'Good', summaryUrl: '#' },
        { name: 'Aggregate', positionStatus: '—', result: 'Good', summaryUrl: '' },
      ],
    },

     { type: 'group', label: 'Bank Statement Analyzer' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Document List' },
        { key: 'validity', label: 'Validity', badge: true },
      ],
      people: [
        { name: '22212609005-other3-view4.pdf', validity: 'Valid' },
        { name: '22212609005-other3-view2.pdf', validity: 'Valid' },
        { name: '22212609005-other3-view3.pdf', validity: 'Valid' },
        { name: '22212609005-other3-view1.pdf', validity: 'Not Valid' },
      ],
    },
  ],
};
