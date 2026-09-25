/**
 * cdeData.js
 * -----------
 * Titik pusat yang menghubungkan `cdeKey` (dari cdeTypes.js) ke DATA-nya
 * secara LANGSUNG (flat) — karena tiap CDE key sekarang sudah 1:1 dengan
 * satu template (Individual dan Corporate adalah key terpisah).
 *
 * Menambah template CDE baru? Import data barunya di sini, lalu tambahkan
 * entry-nya di CDE_DATA (key harus sama dengan `key` di cdeTypes.js).
 */
import { leasingIndividualConsumptive } from './cde/leasing/individual-consumptive.js';
import { leasingIndividualProductive } from './cde/leasing/individual-productive.js';
import { leasingCorporate } from './cde/leasing/corporate.js';
import { reviewCfCorporate } from './cde/review-cf/corporate.js';
import { flCorporate } from './cde/fl/corporate.js';
import { factoryCorporate } from './cde/factory/corporate.js';
import { mouCwrCorporate } from './cde/mou-cwr/corporate.js';

export const CDE_DATA = {
  'leasing-individual-consumptive': leasingIndividualConsumptive,
  'leasing-individual-productive': leasingIndividualProductive,
  'leasing-corporate': leasingCorporate,
  'review-cf': reviewCfCorporate,
  fl: flCorporate,
  factory: factoryCorporate,
  'mou-cwr': mouCwrCorporate,
};
