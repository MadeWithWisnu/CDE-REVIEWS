export const leasingIndividual = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  kyc: [
    { type: 'group', label: 'Dukcapil:' },
    {
      type: 'subAccordion',
      title: 'Customer KYC',
      icon: '📦',
      rows: [
        { type: 'row', label: 'Name', value: 'Match', indent: 1 },
        { type: 'row', label: 'Nomor Induk Kependudukan', value: 'Match', indent: 1 },
        { type: 'row', label: 'Birth Of Date', value: 'Match', indent: 1 },
        { type: 'row', label: 'Gender', value: 'Match', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Spouse KYC',
      icon: '📦',
      rows: [
        { type: 'row', label: 'Name', value: 'Match', indent: 1 },
        { type: 'row', label: 'Nomor Induk Kependudukan', value: 'Match', indent: 1 },
        { type: 'row', label: 'Birth Of Date', value: 'Match', indent: 1 },
        { type: 'row', label: 'Gender', value: 'Match', indent: 1 },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Guarantor KYC',
      icon: '📦',
      rows: [
        { type: 'row', label: 'Name', value: 'Match', indent: 1 },
        { type: 'row', label: 'Nomor Induk Kependudukan', value: 'Match', indent: 1 },
        { type: 'row', label: 'Birth Of Date', value: 'Match', indent: 1 },
        { type: 'row', label: 'Gender', value: 'Match', indent: 1 },
      ],
    },

    {
      type: 'peopleTable',
      label: 'Phone Verification',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'typeName', label: 'Type' },
        { key: 'idMatch', label: 'ID Match' },
        { key: 'phoneAge', label: 'Phone Age' },
      ],
      people: [
        { type: 'Badge',name: 'Customer Name', typeName: 'Customer', idMatch: 'Match', phoneAge: '(>12 months)' },
        { name: 'Spouse Name', typeName: 'Spouse', idMatch: 'Match', phoneAge: '(>12 months)' },
        { name: 'Guarantor Name', typeName: 'Guarantor', idMatch: 'Match', phoneAge: '(>12 months)' },
      ],
    },

    {
      type: 'peopleTable',
      label: 'Location Verification',
      columns: [
        { key: 'address', label: ' Full Address' },
        { key: 'typeName', label: 'Type Location' },
        { key: 'rangeMatch', label: 'Range' },
        { key: 'status', label: 'Status' },

      ],
      people: [
        { address: 'Jl. Merdeka No. 123', typeName: 'House', rangeMatch: '0 - 200 meter', status: 'Verified' },
        { address: 'Jl. MH. Thamrin No. 123', typeName: 'Office', rangeMatch: '0 - 200 meter', status: 'Verified' },
      ],
    },

    
  ],

  preScoring: [
    {
      type: 'group',
      label: 'SLIK Score'
    },
    { type: 'group', label: 'Customer' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Good', indent: 1 },
    { type: 'links', label: 'Summary SLIK', indent: 1, links: [{ text: 'Link to SLIK Result', url: '#' }] },

    { type: 'group', label: 'Spouse' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Medium-Good', indent: 1 },
    { type: 'links', label: 'Summary SLIK', indent: 1, links: [{ text: 'Link to SLIK Result', url: '#' }] },

    { type: 'group', label: 'Guarantor' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Good', indent: 1 },
    { type: 'links', label: 'Summary SLIK', indent: 1, links: [{ text: 'Link to SLIK Result', url: '#' }] },

    { type: 'row', label: 'Pre Scoring Result', value: 'Tend to Approve' },
    { type: 'row', label: 'Survey Treatment', value: 'SO and Surveyor' },
    { type: 'row', label: 'Knockout Result', value: 'Tend to Approve' },
    { type: 'row', label: 'Knockout Reason', value: 'Tend to Approve' },
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
    { type: 'group', label: 'AML News' },
    { type: 'badge', label: 'Status', value: 'Listed', indent: 1 },
    { type: 'links', label: 'AML News Link', indent: 1, links: [{ text: 'Link to AML News', url: '#' }] },
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
