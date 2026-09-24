/**
 * Dukcapil check fields — shared by every person card (Customer, Spouse,
 * Guarantor, and any additional Guarantor added later). `mandatory: true`
 * marks the 4 primary identity-match criteria.
 */
const DUKCAPIL_FIELDS = [
  { key: 'nik', label: 'NIK', mandatory: true },
  { key: 'namaLengkap', label: 'Nama Lengkap', mandatory: true },
  { key: 'tanggalLahir', label: 'Tanggal Lahir', mandatory: true },
  { key: 'jenisKelamin', label: 'Jenis Kelamin', mandatory: true },
  { key: 'tempatLahir', label: 'Tempat Lahir' },
  { key: 'alamat', label: 'Alamat' },
  { key: 'namaProvinsi', label: 'Nama Provinsi' },
  { key: 'namaKabupaten', label: 'Nama Kabupaten' },
  { key: 'namaKecamatan', label: 'Nama Kecamatan' },
  { key: 'namaKelurahan', label: 'Nama Kelurahan' },
  { key: 'rt', label: 'RT' },
  { key: 'rw', label: 'RW' },
  { key: 'statusPerkawinan', label: 'Status Perkawinan' },
  { key: 'jenisPekerjaan', label: 'Jenis Pekerjaan' },
  { key: 'namaLengkapIbu', label: 'Nama Lengkap Ibu' },
];
const DUKCAPIL_MANDATORY_KEYS = DUKCAPIL_FIELDS.filter(f => f.mandatory).map(f => f.key);

/**
 * buildDukcapilPerson(name, raw)
 * --------------------------------
 * Business rule: if ANY of the 4 mandatory fields (NIK, Nama Lengkap,
 * Tanggal Lahir, Jenis Kelamin) is Not Match, the ENTIRE person's Dukcapil
 * check cascades to Not Match — every field shows Not Match, not just the
 * failing one. To add a new Guarantor, just call this again and push it
 * into the `people` array below; a new small card appears automatically.
 */
function buildDukcapilPerson(name, raw) {
  const failed = DUKCAPIL_MANDATORY_KEYS.some(k => raw[k] !== 'Match');
  const values = {};
  for (const key in raw) values[key] = failed ? 'Not Match' : raw[key];
  return { name, overall: failed ? 'Not Match' : 'Match', values };
}

export const leasingIndividual = {
  verdict: {
    result: 'Recommend to Approve',
    slikAggregate: 'Good',
    surveyTreatment: 'SO and Surveyor',
    instantApproval: 'Yes',
  },

  rating: [
    { type: 'group', label: 'SALES RATING' },
    { type: 'row', label: 'Sales Name', value: 'Budi Santoso', indent: 1 },
    { type: 'badge', label: 'Rating', value: 'Green', indent: 1 },
    {
      type: 'peopleTable',
      columns: [
        { key: 'fpd', label: 'FPD' },
        { key: 'f3pd', label: 'F3PD' },
        { key: 'fid6', label: 'FID 6' },
        { key: 'achBooking', label: 'Ach Booking' },
        { key: 'rejectReturn', label: 'Reject Return' },
      ],
      people: [
        { fpd: '1%', f3pd: '1%', rejectReturn: '1%', fid6: '1%', achBooking: '1%' },
      ],
    },

    { type: 'group', label: 'BRANCH RATING' },
    { type: 'row', label: 'Branch Name', value: 'Kelapa Gading', indent: 1 },
    { type: 'badge', label: 'Rating', value: 'Green', indent: 1 },
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

    { type: 'group', label: 'DEALER RATING' },
    {
      type: 'rowPair', indent: 1,
      left: { label: 'Supplier Name', value: 'Auto 2000 Kemang' },
      right: { label: 'Group Supplier', value: 'Astra International, PT.' },
    },
    {
      type: 'rowPair', indent: 1,
      left: { label: 'Rating', value: 'Green', badge: true },
      right: { label: 'Group Rating', value: 'Green', badge: true },
    },
    {
      type: 'rowPair', indent: 1,
      left: { label: 'Supplier Status', value: 'Dealer' },
      right: { label: 'Group Status', value: 'Dealer' },
    },
    {
      type: 'rowPair', indent: 1,
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
    { type: 'group', label: 'DUKCAPIL' },
    {
      type: 'personFieldCards',
      fields: DUKCAPIL_FIELDS,
      // To add a new Guarantor, just push another buildDukcapilPerson(...)
      // entry here — a new small card appears automatically, no other
      // code changes needed.
      people: [
        buildDukcapilPerson('Customer', {
          nik: 'Match', namaLengkap: 'Match', tanggalLahir: 'Match', jenisKelamin: 'Match',
          tempatLahir: 'Match', alamat: 'Match', namaProvinsi: 'Match', namaKabupaten: 'Match',
          namaKecamatan: 'Match', namaKelurahan: 'Match', rt: 'Match', rw: 'Match', statusPerkawinan: 'Match', jenisPekerjaan: 'Match',
          namaLengkapIbu: 'Match',
        }),
        buildDukcapilPerson('Spouse', {
          nik: 'Match', namaLengkap: 'Match', tanggalLahir: 'Match', jenisKelamin: 'Match',
          tempatLahir: 'Match', alamat: 'Match', namaProvinsi: 'Match', namaKabupaten: 'Match',
          namaKecamatan: 'Match', namaKelurahan: 'Match', rt: 'Match', rw: 'Match', statusPerkawinan: 'Match', jenisPekerjaan: 'Match',
          namaLengkapIbu: 'Match',
        }),
        // Example: NIK doesn't match → cascades to Not Match across every field for this person
        buildDukcapilPerson('Guarantor', {
          nik: 'Not Match', namaLengkap: 'Match', tanggalLahir: 'Match', jenisKelamin: 'Match',
          tempatLahir: 'Match', alamat: 'Match', namaProvinsi: 'Match', namaKabupaten: 'Match',
          namaKecamatan: 'Match', namaKelurahan: 'Match', rt: 'Match', rw: 'Match', statusPerkawinan: 'Match', jenisPekerjaan: 'Match',
          namaLengkapIbu: 'Match',
        }),
      ],
    },

    { type: 'group', label: 'Phone Verification' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'entity', label: 'Entity' },
        { key: 'typeName', label: 'Type' },
        { key: 'idMatch', label: 'ID Match', badge: true },
        { key: 'phoneAge', label: 'Phone Age' },
      ],
      people: [
        { entity: 'Customer Name', typeName: 'Customer', idMatch: 'Match', phoneAge: '(>12 months)' },
        { entity: 'Spouse Name', typeName: 'Spouse', idMatch: 'Match', phoneAge: '(>12 months)' },
        { entity: 'Guarantor Name', typeName: 'Guarantor', idMatch: 'Match', phoneAge: '(>12 months)' },
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

    // Relationship Check — click a count to reveal the related contract list
    { type: 'group', label: 'Relationship Check' },
    {
      type: 'relationshipSummary',
      label: 'Contract(s) Related with Customer',
      categories: [
        {
          name: 'Debtor',
          count: 5,
          contracts: [
            { contractNo: '23018804011', customerName: 'Aswar Pasaribu', totalNetFinance: 'Rp 412,500,000', outstanding: 'Rp 550,000,000', disbursementDate: '08 Jan 2023', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '22045501002', customerName: 'Aswar Pasaribu', totalNetFinance: 'Rp 336,000,000', outstanding: 'Rp 420,000,000', disbursementDate: '24 Feb 2022', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '22091203045', customerName: 'Aswar Pasaribu', totalNetFinance: 'Rp 210,000,000', outstanding: 'Rp 320,000,000', disbursementDate: '15 Sep 2022', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '21076602087', customerName: 'Aswar Pasaribu', totalNetFinance: 'Rp 196,000,000', outstanding: 'Rp 280,000,000', disbursementDate: '24 Nov 2021', status: 'WO', loss: '-', amountLoss: '-' },
            { contractNo: '20115509033', customerName: 'Aswar Pasaribu', totalNetFinance: 'Rp 133,000,000', outstanding: 'Rp 190,000,000', disbursementDate: '03 Nov 2020', status: 'WO', loss: '-', amountLoss: '-' },
          ],
        },
        {
          name: 'Spouse',
          count: 0,
          contracts: [],
        },
        {
          name: 'Emergency Contact',
          count: 5,
          contracts: [
            { contractNo: '23018804011', customerName: 'Budi Santoso', totalNetFinance: 'Rp 412,500,000', outstanding: 'Rp 550,000,000', disbursementDate: '08 Jan 2023', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '22045501002', customerName: 'Darman Pasaribu', totalNetFinance: 'Rp 336,000,000', outstanding: 'Rp 420,000,000', disbursementDate: '24 Feb 2022', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '22091203045', customerName: 'Rina Kartika', totalNetFinance: 'Rp 210,000,000', outstanding: 'Rp 320,000,000', disbursementDate: '15 Sep 2022', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '21076602087', customerName: 'Ahmad Fauzi', totalNetFinance: 'Rp 196,000,000', outstanding: 'Rp 280,000,000', disbursementDate: '24 Nov 2021', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '20115509033', customerName: 'Siti Marlina', totalNetFinance: 'Rp 133,000,000', outstanding: 'Rp 190,000,000', disbursementDate: '03 Nov 2020', status: 'WO', loss: '-', amountLoss: '-' },
          ],
        },
        {
          name: 'Board / Management',
          count: 5,
          contracts: [
            { contractNo: '23018804011', customerName: 'PT Mitra Logistik Jaya', totalNetFinance: 'Rp 412,500,000', outstanding: 'Rp 550,000,000', disbursementDate: '08 Jan 2023', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '22045501002', customerName: 'CV. Anugerah Mandiri', totalNetFinance: 'Rp 336,000,000', outstanding: 'Rp 420,000,000', disbursementDate: '24 Feb 2022', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '22091203045', customerName: 'CV. Anugerah Mandiri', totalNetFinance: 'Rp 210,000,000', outstanding: 'Rp 320,000,000', disbursementDate: '15 Sep 2022', status: 'Outstanding', loss: '-', amountLoss: '-' },
            { contractNo: '21076602087', customerName: 'PT Mitra Logistik Jaya', totalNetFinance: 'Rp 196,000,000', outstanding: 'Rp 280,000,000', disbursementDate: '24 Nov 2021', status: 'WO', loss: '-', amountLoss: '-' },
            { contractNo: '20115509033', customerName: 'CV. Anugerah Mandiri', totalNetFinance: 'Rp 133,000,000', outstanding: 'Rp 190,000,000', disbursementDate: '03 Nov 2020', status: 'WO', loss: '-', amountLoss: '-' },
          ],
        },
      ],
    },

    // Biometric Check — Personal debtor only.
    { type: 'group', label: 'Biometric Check' },
    { type: 'note', label: 'Selfie Photo requires ≥75% match to be considered Verified.' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Item' },
        { key: 'input', label: 'Input' },
        { key: 'score', label: 'Match Score' },
        { key: 'status', label: 'Status', badge: true },
      ],
      people: [
        { name: 'Name', input: 'Aswar Pasaribu', score: '99%', status: 'Verified' },
        { name: 'Place and Date of Birth', input: 'Sibolga, 06-06-1969', score: '100%', status: 'Verified' },
        { name: 'Selfie Photo', input: 'Live Selfie Capture ID Photo Reference (KTP)', score: '83%', status: 'Verified' },
      ],
    },

    // Negative Debtor — Blacklist / Watchlist screening. If a check does not
    // pass, the reason is shown in the Reason column; otherwise it's "—".
    { type: 'group', label: 'Negative Debtor' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'blacklist', label: 'Blacklist'},
        { key: 'watchlist', label: 'Watchlist'},
      ],
      people: [
        { name: 'Customer', blacklist: 'Not Listed', watchlist: 'Not Listed' },
        { name: 'Spouse', blacklist: 'DTTOT', watchlist: '3 Consecutive Late Payment (OD 10 Days)' },
        { name: 'Guarantor', blacklist: 'Not Listed', watchlist: 'Not Listed' },
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
    { type: 'group', label: 'SLIK SCORE' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'status', label: 'Status', badge: true },
        { key: 'grade', label: 'Grade', badge: true },
        { key: 'summaryUrl', label: 'Summary Link', link: true, linkText: 'View Summary' },
      ],
      people: [
        { name: 'Customer', status: 'Available', grade: 'Good', summaryUrl: '#' },
        { name: 'Spouse', status: 'Available', grade: 'Medium-Good', summaryUrl: '#' },
        { name: 'Guarantor', status: 'Available', grade: 'Good', summaryUrl: '#' },
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
        { key: 'customerName', label: 'Customer Name' },
        { key: 'otrAmount', label: 'OTR Amount', currency: true },
        { key: 'totalNetFinance', label: 'Total Net Finance', currency: true },
        { key: 'disbursementDate', label: 'Disbursement Date' },
        { key: 'finishDate', label: 'Finish Date' },
      ],
      people: [
        { contractNo: '22045501002', customerName: 'Dewi Anggraini', otrAmount: 'Rp 420,000,000', totalNetFinance: 'Rp 336,000,000', disbursementDate: '24 Feb 2022', finishDate: '24 Feb 2026' },
      ],
    },
  ],

  apuppt: [
    { type: 'group', label: 'AML News' },
    { type: 'badge', label: 'Status', value: 'Listed', indent: 1 },
    { type: 'links', label: 'AML News Link', indent: 1, links: [{ text: 'Link to AML News', url: '#' }] },
    { type: 'group', label: 'AML-CFT Customer Classification' },
    { type: 'row', label: 'Occupation / Business Type', value: 'Wiraswasta — Perdagangan Retail', indent: 1 },
    { type: 'badge', label: 'PEP', value: 'Exact', indent: 1 },
    { type: 'row', label: 'Identification & Verification Process', value: 'Enhanced Due Diligence (EDD)', indent: 1 },
    { type: 'badge', label: 'Rating', value: 'Medium Risk', indent: 1 },
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

  lpip: [
    { type: 'group', label: 'Customer' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary Bureau', indent: 1, links: [{ text: 'Link to BUREAU Result', url: '#' }] },

    { type: 'group', label: 'Spouse' },
    { type: 'badge', label: 'Status', value: 'Available', indent: 1 },
    { type: 'row', label: 'Score', value: '123', indent: 1 },
    { type: 'badge', label: 'Grade', value: 'Low Risk', indent: 1 },
    { type: 'links', label: 'Summary Bureau', indent: 1, links: [{ text: 'Link to BUREAU Result', url: '#' }] },
  ],

  finalScoring: [
    {
      type: 'highlight',
      items: [
        { label: 'Final Score Result', value: 'Recommend to Approve', tone: 'good' },
        { label: 'Instant Approval', value: 'Yes', tone: 'good' },
      ],
    },
    { type: 'group', label: 'SLIK SCORE FINAL' },
    {
      type: 'peopleTable',
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

    { type: 'group', label: 'BANK STATEMENT ANALYZER' },
    {
      type: 'peopleTable',
      columns: [
        { key: 'name', label: 'DOCUMENT LIST' },
        { key: 'validity', label: 'Validity', badge: true },
      ],
      people: [
        { name: '22212609005-other3-view4.pdf', validity: 'Valid' },
        { name: '22212609005-other3-view2.pdf', validity: 'Valid' },
        { name: '22212609005-other3-view3.pdf', validity: 'Potentially Modified' },
        { name: '22212609005-other3-view1.pdf', validity: 'Potentially Modified' },
      ],
    },
  ],
};
