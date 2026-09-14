<script setup>
/**
 * RpAmount.vue
 * ------------
 * Render sebuah nilai/value: kalau formatnya nominal Rupiah ("Rp 1,100,000,000",
 * "Rp 24,166,667 / month", dst) maka "Rp" dipisah jadi kolom sendiri di kiri
 * dan angkanya di-align right (pakai tabular-nums) supaya semua nominal yang
 * ditumpuk sejajar sampai ke koma/titik ribuannya — layaknya kolom nominal di
 * ledger/akuntansi.
 *
 * Kalau value BUKAN nominal Rupiah, langsung ditampilkan apa adanya (tidak
 * ada perubahan tampilan sama sekali).
 */
import { computed } from 'vue';

const props = defineProps({
  value: { type: [String, Number, null], default: '' },
});

const parsed = computed(() => {
  const raw = props.value;
  if (typeof raw !== 'string') return null;
  // Contoh yang match: "Rp 1,100,000,000" / "Rp0" / "Rp 24,166,667 / month"
  const m = raw.trim().match(/^Rp\.?\s*([\d.,]+)\s*(.*)$/i);
  if (!m) return null;
  return { amount: m[1], suffix: m[2] || '' };
});
</script>

<template>
  <span v-if="parsed" class="rp-cell">
    <span class="rp-symbol">Rp</span>
    <span class="rp-figure">
      <span class="rp-number">{{ parsed.amount }}</span>
      <span v-if="parsed.suffix" class="rp-suffix">{{ parsed.suffix }}</span>
    </span>
  </span>
  <template v-else>{{ value }}</template>
</template>

<style scoped>
/* "Kolom Rp" sendiri: simbol Rp rata kiri, angka rata kanan (tabular-nums)
   supaya deretan nominal di bawahnya sejajar. */
.rp-cell {
  display: flex;
  width: 100%;
  align-items: baseline;
  gap: 6px;
}
.rp-symbol {
  flex: none;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.78em;
  letter-spacing: .02em;
  color: var(--ink-faint);
}
.rp-figure {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 5px;
  flex-wrap: wrap;
}
.rp-number {
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum' 1;
  text-align: right;
  white-space: nowrap;
}
.rp-suffix {
  font-size: 0.76em;
  font-weight: 500;
  color: var(--ink-faint);
  white-space: nowrap;
}
</style>
