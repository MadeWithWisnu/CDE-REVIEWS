export const leasingIndividual = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  kyc: [
    { type: 'group', label: 'Dukcapil' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'nikMatch', label: 'ID Number', badge: true },
        { key: 'dobMatch', label: 'Birth Date', badge: true },
        { key: 'genderMatch', label: 'Gender', badge: true },
        { key: 'placeOfBirthMatch', label: 'Place of Birth', badge: true },
        { key: 'addressMatch', label: 'Full Address', badge: true },
        { key: 'provinceMatch', label: 'Province', badge: true },
        { key: 'regencyMatch', label: 'Regency', badge: true },
        { key: 'districtMatch', label: 'District', badge: true },
        { key: 'subdistrictMatch', label: 'Sub District', badge: true },
        { key: 'RTMatch', label: 'RT', badge: true },
        { key: 'RWMatch', label: 'RW', badge: true },
        { key: 'MaritalStatusMatch', label: 'Marital Status', badge: true },
        { key: 'OccupationMatch', label: 'Occupation', badge: true },


      ],
      people: [
        { name: 'Customer', nikMatch: 'Match', dobMatch: 'Match', genderMatch: 'Match', placeOfBirthMatch: 'Match', addressMatch: 'Match', provinceMatch: 'Match', regencyMatch: 'Match', districtMatch: 'Match', subdistrictMatch: 'Match', RTMatch: 'Match', RWMatch: 'Match', MaritalStatusMatch: 'Match', OccupationMatch: 'Match' },
        { name: 'Spouse', nikMatch: 'Match', dobMatch: 'Match', genderMatch: 'Match', placeOfBirthMatch: 'Match', addressMatch: 'Match', provinceMatch: 'Match', regencyMatch: 'Match', districtMatch: 'Match', subdistrictMatch: ' Match', RTMatch: ' Match', RWMatch: ' Match', MaritalStatusMatch: 'Match', OccupationMatch: 'Match' },
        { name: 'Guarantor', nikMatch: 'Match', dobMatch: 'Match', genderMatch: 'Match', placeOfBirthMatch: 'Match', addressMatch: 'Match', provinceMatch: 'Match', regencyMatch: 'Match', districtMatch: 'Match', subdistrictMatch: ' Match', RTMatch: ' Match', RWMatch: ' Match', MaritalStatusMatch: ' Match', OccupationMatch: ' Match' },
      ],
    },

    { type: 'group', label: 'Phone Verification' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'typeName', label: 'Type' },
        { key: 'idMatch', label: 'ID Match', badge: true },
        { key: 'phoneAge', label: 'Phone Age' },
      ],
      people: [
        { name: 'Customer Name', typeName: 'Customer', idMatch: 'Match', phoneAge: '(>12 months)' },
        { name: 'Spouse Name', typeName: 'Spouse', idMatch: 'Match', phoneAge: '(>12 months)' },
        { name: 'Guarantor Name', typeName: 'Guarantor', idMatch: 'Match', phoneAge: '(>12 months)' },
      ],
    },

    { type: 'group', label: 'Location Verification' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'address', label: 'Full Address' },
        { key: 'typeName', label: 'Type Location' },
        { key: 'rangeMatch', label: 'Range' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { address: 'Jl. Merdeka No. 123', typeName: 'House', rangeMatch: '0 - 200 meter', status: 'Verified' },
        { address: 'Jl. MH. Thamrin No. 123', typeName: 'Office', rangeMatch: '0 - 200 meter', status: 'Verified' },
      ],
    },

    { type: 'group', label: 'Relationship Check' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Relationship' },
        { key: 'relatedTo', label: 'Related To' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { name: 'Spouse', relatedTo: 'Customer', status: 'Verified' },
        { name: 'Guarantor', relatedTo: 'Customer', status: 'Verified' },
      ],
    },

    // Biometric Check — Personal debtor only.
    { type: 'group', label: 'Biometric Check' },
    { type: 'note', label: 'Selfie Photo requires ≥75% match to be considered Verified.' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'score', label: 'Match Score' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { name: 'Name', score: '99%', status: 'Verified' },
        { name: 'Place and Date of Birth', score: '100%', status: 'Verified' },
        { name: 'Selfie Photo', score: '83%', status: 'Verified' },
      ],
    },
  ],

  preScoring: [
    {
      type: 'highlight',
      items: [
        { label: 'Pre Scoring Result', value: 'Tend to Approve', tone: 'good' },
        { label: 'Survey Treatment', value: 'SO and Surveyor' },
      ],
    },

    { type: 'group', label: 'SLIK Score' },
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

    {
      type: 'knockoutList',
      label: 'Knockout',
      items: [
        { result: 'Passed', reason: 'Customer age within acceptable range (25–55 years old)' },
      ],
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
        { contractNo: '22045501002', customerNo: 'CUST-88213', otrAmount: 'Rp 420,000,000', totalNetFinance: 'Rp 336,000,000', disbursementDate: '02-2022', finishDate: '02-2026' },
      ],
    },
  ],

  apuppt: [
    { type: 'group', label: 'AML News' },
    { type: 'badge', label: 'Status', value: 'Listed', indent: 1 },
    { type: 'links', label: 'AML News Link', indent: 1, links: [{ text: 'Link to AML News', url: '#' }] },

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

    { type: 'group', label: 'Spouse LPIP' },
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
    { type: 'badge', label: 'Status', value: 'Valid', indent: 1 },

    { type: 'group', label: 'Document Validity' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Document' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { name: 'KTP Customer', status: 'Valid' },
        { name: 'KTP Spouse', status: 'Valid' },
        { name: 'Kartu Keluarga', status: 'Valid' },
        { name: 'NPWP', status: 'Not Valid' },
      ],
    },

    {
      type: 'subAccordion',
      title: 'Credit Deviation',
      icon: '📉',
      rows: [
        {
          type: 'knockoutList',
          items: [], // no deviation on this application — renders as "-"
        },
      ],
    },
    {
      type: 'subAccordion',
      title: 'Product Deviation',
      icon: '📦',
      rows: [
        {
          type: 'knockoutList',
          items: [
            { result: 'Deviated', reason: 'Unit manufacture year is 1 year older than policy standard' },
          ],
        },
      ],
    },
  ],
};
