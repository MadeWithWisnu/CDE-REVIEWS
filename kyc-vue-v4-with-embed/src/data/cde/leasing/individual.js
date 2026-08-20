export const leasingIndividual = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  kyc: [
    { type: 'group', label: 'Dukcapil:' },
    { type: 'row', label: 'Customer', value: 'Match', indent: 1 },
    { type: 'row', label: 'Spouse', value: 'Match', indent: 1 },

    { type: 'group', label: 'Phone Verification (ID Match)' },
    { type: 'row', label: 'Customer Name - Customer', value: 'Match - Not Match', indent: 1 },
    { type: 'row', label: 'Spouse Name - Spouse', value: 'Match - Not Match', indent: 1 },

    { type: 'group', label: 'Phone Verification (Phone Age)' },
    { type: 'row', label: 'Customer Name - Customer', value: '(>12 months)', indent: 1 },
    { type: 'row', label: 'Spouse Name - Spouse', value: '(>12 months)', indent: 1 },

    { type: 'row', label: 'Location Verification (House)', value: '0 - 200 meter' },
    { type: 'row', label: 'Location Verification (Office)', value: '0 - 200 meter' },
  ],

  preScoring: [
    { type: 'group', label: 'SLIK Score:' },
    { type: 'badge', label: 'Customer', value: 'Good', indent: 1 },
    { type: 'badge', label: 'Spouse', value: 'Medium-Good', indent: 1 },
    { type: 'badge', label: 'Aggregate', value: 'Good', indent: 1 },
    {
      type: 'links', label: 'Summary SLIK', indent: 1, links: [
        { text: 'Link to dashboard Customer', url: '#' },
        { text: 'Link to dashboard Spouse', url: '#' },
      ]
    },
    { type: 'row', label: 'Pre Scoring Result', value: 'Tend to Approve' },
    { type: 'row', label: 'Survey Treatment', value: 'SO and Surveyor' },
  ],

  collateral: [
    { type: 'group', label: 'Rapindo:' },
    { type: 'row', label: 'Chassis No', value: 'MJEC1JG43J1234567', mono: true, indent: 1 },
    { type: 'row', label: 'Engine No', value: 'W04DTRR12345', mono: true, indent: 1 },
    { type: 'row', label: 'Vehicle Type', value: 'Dutro 130 HD', indent: 1 },
    { type: 'row', label: 'License Type', value: 'H 1234 HC', mono: true, indent: 1 },
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
  ],

  finalScoring: [
    { type: 'group', label: 'SLIK Score Final:' },
    { type: 'badge', label: 'Customer', value: 'Good', indent: 1 },
    { type: 'badge', label: 'Spouse', value: 'Medium-Good', indent: 1 },
    { type: 'badge', label: 'Aggregate', value: 'Good', indent: 1 },
    {
      type: 'links', label: 'Summary SLIK', indent: 1, links: [
        { text: 'Link to dashboard Customer', url: '#' },
        { text: 'Link to dashboard Spouse', url: '#' },
      ]
    },
    { type: 'badge', label: 'Bank Statement Analyzer', value: 'Valid' },
    { type: 'row', label: 'Credit Deviation', value: '0' },
    { type: 'row', label: 'Product Deviation', value: '0' },
    { type: 'badge', label: 'Final Score Result', value: 'Recommend to Approve' },
    { type: 'badge', label: 'Instant Approval', value: 'Yes' },
  ],
};
