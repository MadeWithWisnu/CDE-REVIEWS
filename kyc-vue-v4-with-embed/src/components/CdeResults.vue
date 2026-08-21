<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { filterCdeTypes, DEBTOR_TYPES, FINANCING_WAYS } from '../data/cdeTypes.js';

const route = useRoute();
const router = useRouter();

const appNo = computed(() => route.query.appNo || '');
const debtorType = computed(() => route.query.debtorType || '');
const financingWay = computed(() => route.query.financingWay || '');

const debtorLabel = computed(() => DEBTOR_TYPES.find(d => d.key === debtorType.value)?.label || debtorType.value);
const financingLabel = computed(() => FINANCING_WAYS.find(f => f.key === financingWay.value)?.label || financingWay.value);

const matches = computed(() => filterCdeTypes(debtorType.value, financingWay.value));

function openCde(key) {
  router.push({ path: `/cde/${key}`, query: { appNo: appNo.value } });
}
</script>

<template>
  <div class="results-page">
    <button class="back-link" @click="router.push('/')">← Edit search</button>

    <div class="summary-bar">
      <div class="summary-item">
        <span class="summary-label">App No</span>
        <span class="summary-value">{{ appNo || '—' }}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Debtor Type</span>
        <span class="summary-value">{{ debtorLabel }}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Way of Financing</span>
        <span class="summary-value">{{ financingLabel }}</span>
      </div>
      <div class="summary-count">{{ matches.length }} document(s) found</div>
    </div>

    <div v-if="matches.length === 0" class="empty-state">
      <div class="empty-icon">🔍</div>
      <p>No CDE documents match this filter combination.</p>
      <button class="back-link inline" @click="router.push('/')">← Try another filter</button>
    </div>

    <div v-else class="table-wrap">
      <table class="doc-table">
        <thead>
          <tr>
            <th>CDE Document</th>
            <th>Debtor Type</th>
            <th>Way of Financing</th>
            <th class="col-action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in matches" :key="t.key" class="doc-row" @click="openCde(t.key)">
            <td>
              <div class="doc-name-cell">
                <div class="doc-icon" :style="{ background: t.bg, color: t.color }">{{ t.icon }}</div>
                <div>
                  <div class="doc-name">{{ t.name }}</div>
                  <div class="doc-desc">{{ t.description }}</div>
                </div>
              </div>
            </td>
            <td><span class="tag">{{ t.debtorType === 'personal' ? 'Personal' : 'Company' }}</span></td>
            <td>
              <span v-for="fw in t.financingWays" :key="fw" class="tag tag-outline">{{ fw }}</span>
            </td>
            <td class="col-action">
              <button class="open-btn" @click.stop="openCde(t.key)">Open →</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.results-page { width: 100%; }

.back-link {
  display: inline-block;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14.5px;
  color: var(--ink-soft);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 16px;
}
.back-link:hover { color: var(--green-dark); }
.back-link.inline { margin-top: 14px; }

.summary-bar {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  background: var(--navy);
  color: #fff;
  border-radius: var(--radius);
  padding: 18px 24px;
  margin-bottom: 20px;
}
.summary-item { display: flex; flex-direction: column; gap: 3px; }
.summary-label { font-size: 11.5px; text-transform: uppercase; letter-spacing: .08em; opacity: .6; font-family: var(--font-mono); }
.summary-value { font-family: var(--font-head); font-weight: 700; font-size: 15.5px; }
.summary-count {
  margin-left: auto;
  font-size: 13.5px;
  background: rgba(255,255,255,.12);
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
}

.empty-state {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 50px 30px;
  text-align: center;
  color: var(--ink-soft);
  font-size: 16px;
}
.empty-icon { font-size: 32px; margin-bottom: 10px; }

.table-wrap {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

.doc-table { width: 100%; border-collapse: collapse; }
.doc-table thead tr {
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}
.doc-table th {
  text-align: left;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: var(--ink-soft);
  padding: 14px 20px;
}
.doc-table td { padding: 16px 20px; border-bottom: 1px solid var(--line); vertical-align: middle; }
.doc-row { cursor: pointer; transition: background .12s ease; }
.doc-row:hover { background: var(--green-soft); }
.doc-row:last-child td { border-bottom: none; }

.doc-name-cell { display: flex; align-items: center; gap: 14px; }
.doc-icon {
  width: 42px; height: 42px; border-radius: 11px; flex: none;
  display: flex; align-items: center; justify-content: center;
  font-size: 19px;
}
.doc-name { font-family: var(--font-head); font-weight: 700; font-size: 15.5px; color: var(--ink); }
.doc-desc { font-size: 13px; color: var(--ink-soft); margin-top: 2px; max-width: 420px; }

.tag {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 700;
  padding: 4px 11px;
  border-radius: 999px;
  background: var(--neutral-bg);
  color: var(--neutral);
  margin-right: 4px;
}
.tag-outline { background: transparent; border: 1.5px solid var(--line); color: var(--ink-soft); }

.col-action { text-align: right; }
.open-btn {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 13.5px;
  padding: 9px 16px;
  border-radius: 8px;
  border: none;
  background: var(--green);
  color: #fff;
  cursor: pointer;
}
.open-btn:hover { background: var(--green-dark); }

@media (max-width: 760px) {
  .doc-table thead { display: none; }
  .doc-table, .doc-table tbody, .doc-table tr, .doc-table td { display: block; width: 100%; }
  .doc-table td { border-bottom: none; padding: 8px 20px; }
  .doc-row { border-bottom: 1px solid var(--line); padding: 8px 0; }
  .col-action { text-align: left; padding-bottom: 16px !important; }
}
</style>
