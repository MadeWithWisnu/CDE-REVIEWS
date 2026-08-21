import { kycCorporateCommon, apupptCorporateCommon, slikCheckCorporateCommon } from '../../shared/corporateCommon.js';
import { vehicleCollateralOnTheRoad } from '../../shared/vehicleCollateral.js';

// NOTE: backend determines the asset category for this application (On The
// Road vs Off The Road) and returns only one — swap to
// `vehicleCollateralOffTheRoad` when wiring real data if that's the result.
export const reviewCfCorporate = {
  kyc: kycCorporateCommon,
  apuppt: apupptCorporateCommon,
  slikCheck: slikCheckCorporateCommon,
  collateral: vehicleCollateralOnTheRoad,
};
