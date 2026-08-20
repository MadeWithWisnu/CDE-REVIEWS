import { kycCorporateCommon, apupptCorporateCommon, slikCheckCorporateCommon } from '../../shared/corporateCommon.js';

export const mouCwrCorporate = {
  kyc: kycCorporateCommon,
  apuppt: apupptCorporateCommon,
  slikCheck: slikCheckCorporateCommon,
  // sengaja tidak ada 'collateral' — sectionOrder di cdeTypes.js untuk
  // 'mou-cwr' juga tidak menyertakan key 'collateral', jadi otomatis
  // section itu tidak dirender.
};
