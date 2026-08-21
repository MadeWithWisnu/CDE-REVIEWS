export const leasingCorporate = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  kyc: [
    { type: 'group', label: 'AHU:' },
    { type: 'row', label: 'Inquiry', value: 'Registered', indent: 1 },
    { type: 'group', label: 'Deed of Establishment' },
    { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },

    { type: 'group', label: 'Company Guarantor' },
    { type: 'row', label: 'Inquiry', value: 'Registered', indent: 1 },
    { type: 'badge', label: 'Shareholder & Management', value: 'Match', indent: 1 },

    { type: 'group', label: 'Personal Guarantor' },
    { type: 'row', label: 'Dukcapil', value: 'Match', indent: 1 },
    { type: 'row', label: 'Phone Verification (ID Match)', value: 'Match', indent: 1 },
    { type: 'row', label: 'Phone Verification (Phone Age)', value: '(>12 months)', indent: 1 },
  ],

  preScoring: [
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
    { type: 'row', label: 'Pre Scoring Result', value: 'Tend to Approve' },
    { type: 'row', label: 'Survey Treatment', value: 'SO and Surveyor' },
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
  ],

  apuppt: [
    { type: 'badge', label: 'AML News', value: 'Not Listed' },
    { type: 'badge', label: 'AML-CFT Customer Classification', value: 'Medium Risk' },
  ],

  lpip: [
    { type: 'group', label: 'Customer LPIP' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary LPIP', indent: 1, links: [{ text: 'Link to LPIP Result', url: '#' }] },

    { type: 'group', label: 'Director LPIP' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary LPIP', indent: 1, links: [{ text: 'Link to LPIP Result (Mr Febby)', url: '#' }] },

    { type: 'group', label: 'Commissioner LPIP' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary LPIP', indent: 1, links: [{ text: 'Link to LPIP Result (Mr Ivan)', url: '#' }] },
  ],

  finalScoring: [
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
    { type: 'badge', label: 'Bank Statement Analyzer', value: 'Valid' },
    { type: 'row', label: 'Credit Deviation', value: '0' },
    { type: 'row', label: 'Product Deviation', value: '0' },
    { type: 'badge', label: 'Final Score Result', value: 'Recommend to Approve' },
    { type: 'badge', label: 'Instant Approval', value: 'Yes' },
  ],
};
