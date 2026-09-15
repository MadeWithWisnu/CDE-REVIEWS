/**
 * cbasData.js
 * -------------
 * Central lookup connecting a CBAS template `key` (from cbasTypes.js) to its
 * data. Same pattern as cdeData.js and camData.js.
 */
import { cbasCorporate } from './cbas/corporate.js';
import { cbasIndividual } from './cbas/individual.js';

export const CBAS_DATA = {
  corporate: cbasCorporate,
  individual: cbasIndividual,
};
