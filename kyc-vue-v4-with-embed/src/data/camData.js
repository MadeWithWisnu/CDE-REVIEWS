/**
 * camData.js
 * -----------
 * Central lookup connecting a CAM template `key` (from camTypes.js) to its
 * data. Same pattern as cdeData.js.
 */
import { camCorporate } from './cam/corporate.js';
import { camIndividual } from './cam/individual.js';

export const CAM_DATA = {
  corporate: camCorporate,
  individual: camIndividual,
};
