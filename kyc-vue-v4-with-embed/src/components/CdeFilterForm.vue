<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { DEBTOR_TYPES, FINANCING_WAYS } from '../data/cdeTypes.js';

const router = useRouter();

const appNo = ref('');
const debtorType = ref('');
const financingWay = ref('');
const touched = ref(false);

const isValid = () => appNo.value.trim() && debtorType.value && financingWay.value;

function submit() {
  touched.value = true;
  if (!isValid()) return;

  router.push({
    path: '/results',
    query: {
      appNo: appNo.value.trim(),
      debtorType: debtorType.value,
      financingWay: financingWay.value,
    },
  });
}
</script>

<template>
  <div class="search-page">
    <div class="search-bar">
      <div class="field">
        <label>App No</label>
        <input
          v-model="appNo" type="text" placeholder="mis. APP-2026-00123"
          class="input" :class="{ invalid: touched && !appNo.trim() }"
          @keyup.enter="submit"
        />
      </div>

      <div class="field">
        <label>Debtor Type / Model</label>
        <select v-model="debtorType" class="select" :class="{ invalid: touched && !debtorType }">
          <option value="" disabled>Pilih debtor type</option>
          <option v-for="d in DEBTOR_TYPES" :key="d.key" :value="d.key">{{ d.label }}</option>
        </select>
      </div>

      <div class="field">
        <label>Way of Financing</label>
        <select v-model="financingWay" class="select" :class="{ invalid: touched && !financingWay }">
          <option value="" disabled>Pilih way of financing</option>
          <option v-for="f in FINANCING_WAYS" :key="f.key" :value="f.key">{{ f.label }}</option>
        </select>
      </div>

      <button class="search-btn" @click="submit">
        <span class="search-icon">🔍</span> Search
      </button>
    </div>

    <p v-if="touched && !isValid()" class="form-error">Lengkapi App No, Debtor Type, dan Way of Financing dulu.</p>

    <div class="hint-panel">
      <div class="hint-title">Cara pakai</div>
      <ol class="hint-list">
        <li>Masukkan <b>App No</b> aplikasi yang mau di-review.</li>
        <li>Pilih <b>Debtor Type</b> — Personal atau Company.</li>
        <li>Pilih <b>Way of Financing</b> — IF, FMU, atau FL.</li>
        <li>Klik <b>Search</b> untuk melihat dokumen CDE yang sesuai.</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.search-page { width: 100%; }

.search-bar {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 22px;
  flex-wrap: wrap;
}

.field { display: flex; flex-direction: column; gap: 7px; flex: 1; min-width: 190px; }
.field label {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 12.5px;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: .04em;
}

.input, .select {
  font-family: var(--font-body);
  font-size: 15.5px;
  padding: 11px 14px;
  border-radius: 9px;
  border: 1.5px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  outline: none;
  transition: border-color .15s ease;
  height: 46px;
}
.select { cursor: pointer; }
.input:focus, .select:focus { border-color: var(--green); background: #fff; }
.input.invalid, .select.invalid { border-color: var(--risk); }

.search-btn {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 15.5px;
  padding: 0 26px;
  height: 46px;
  border-radius: 9px;
  border: none;
  background: var(--green);
  color: #fff;
  cursor: pointer;
  transition: background .15s ease;
  flex: none;
}
.search-btn:hover { background: var(--green-dark); }
.search-icon { font-size: 14px; }

.form-error { color: var(--risk); font-size: 14px; margin: 12px 2px 0; }

.hint-panel {
  margin-top: 22px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 4px solid var(--green);
  border-radius: var(--radius);
  padding: 20px 24px;
  max-width: 560px;
}
.hint-title { font-family: var(--font-head); font-weight: 700; font-size: 15px; color: var(--ink); margin-bottom: 10px; }
.hint-list { margin: 0; padding-left: 20px; color: var(--ink-soft); font-size: 14.5px; line-height: 1.9; }
.hint-list b { color: var(--ink); }
</style>
