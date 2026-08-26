export const leasingIndividual = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  kyc: [
    {
      type : 'peopleTable',
      label: 'Dukcapil',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'result', label: 'Check Result', badge: true },
      ],
      people: [
        { name: 'Customer', result: 'Match' },
        { name: 'Spouse', result: 'Match' },
        { name: 'Guarantor', result: 'Match' },
      ],
    },

    {
      type: 'peopleTable',
      label: 'Phone Verification',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'idMatch', label: 'ID Match' },
        { key: 'phoneAge', label: 'Phone Age' },
      ],
      people: [
        { name: 'Customer Name - Customer', idMatch: 'Match - Not Match', phoneAge: '(>12 months)' },
        { name: 'Spouse Name - Spouse', idMatch: 'Match - Not Match', phoneAge: '(>12 months)' },
        { name: 'Guarantor Name - Guarantor', idMatch: 'Match - Not Match', phoneAge: '(>12 months)' },
      ],
    },

    { type: 'group', label: 'Location Verification' },
    { type: 'row', label: 'Location Verification (House)', value: '0 - 200 meter' },
    { type: 'row', label: 'Location Verification (Office)', value: '0 - 200 meter' },
  ],

  preScoring: [
    {
      type: 'peopleTable',
      label: 'SLIK Score',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'result', label: 'Check Result', badge: true },
        { key: 'summaryUrl', label: 'Summary Link', link: true, linkText: 'View Summary' },
      ],
      people: [
        { name: 'Customer', result: 'Good', summaryUrl: '#' },
        { name: 'Spouse', result: 'Medium-Good', summaryUrl: '#' },
        { name: 'Guarantor', result: 'Good', summaryUrl: '#' },
        { name: 'Aggregate', result: 'Good', summaryUrl: '' },
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

    { type: 'group', label: 'Spouse LPIP' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary LPIP', indent: 1, links: [{ text: 'Link to LPIP Result', url: '#' }] },

    { type: 'group', label: 'Guarantor LPIP' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary LPIP', indent: 1, links: [{ text: 'Link to LPIP Result', url: '#' }] },
  ],

  finalScoring: [
    {
      type: 'peopleTable',
      label: 'SLIK Score Final',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'result', label: 'Check Result', badge: true },
        { key: 'summaryUrl', label: 'Summary Link', link: true, linkText: 'View Summary' },
      ],
      people: [
        { name: 'Customer', result: 'Good', summaryUrl: '#' },
        { name: 'Spouse', result: 'Medium-Good', summaryUrl: '#' },
        { name: 'Guarantor', result: 'Good', summaryUrl: '#' },
        { name: 'Aggregate', result: 'Good', summaryUrl: '' },
      ],
    },
     { type: 'group', label: 'Bank Statement Analyzer' },
    { type: 'badge', label: 'Status', value: 'Valid' },

    {
      type: 'subAccordion',
      title: 'Credit Deviation',
      icon: '📉',
      rows: [
        { type: 'row', label: 'Age', value: '0', indent: 1 },
        { type: 'row', label: 'Tenor', value: '0', indent: 1 },
        { type: 'row', label: 'Down Payment Percentage', value: '0', indent: 1 },
        { type: 'row', label: 'Installment to Income Ratio', value: '0', indent: 1 },
        { type: 'badge', label: 'Total Credit Deviation', value: '0' },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Product Deviation',
      icon: '📦',
      rows: [
        { type: 'row', label: 'Unit Price', value: '0', indent: 1 },
        { type: 'row', label: 'Manufacture Year', value: '0', indent: 1 },
        { type: 'row', label: 'Residual Value', value: '0', indent: 1 },
        { type: 'badge', label: 'Total Product Deviation', value: '0' },
      ],
    },

    { type: 'badge', label: 'Final Score Result', value: 'Recommend to Approve' },
    { type: 'badge', label: 'Instant Approval', value: 'Yes' },
  ],
};
