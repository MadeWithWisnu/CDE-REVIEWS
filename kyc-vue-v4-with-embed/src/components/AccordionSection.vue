<script setup>
import { computed, reactive } from 'vue';
import { badgeTone } from '../data/sections.js';

const props = defineProps({
  meta: { type: Object, required: true },   // { title, icon }
  rows: { type: Array, default: () => [] },
  isOpen: { type: Boolean, default: false },
  // When true, plain row/badge/group/links/note content renders as a
  // 2-column "Field | Value" table instead of the flex field-grid layout —
  // used for Report CAM to give it a denser, form-like table appearance.
  // `peopleTable` rows already have named columns so they're unaffected.
  tableMode: { type: Boolean, default: false },
});

const emit = defineEmits(['toggle']);

const summaryBadge = computed(() => props.rows.find(r => r.type === 'badge') || null);

// Local open/close state for nested `subAccordion` rows (e.g. Credit Deviation /
// Product Deviation living inside Final Scoring). Independent from the parent
// section's own open state, keyed by row index.
const openSubs = reactive({});
function toggleSub(i) {
  openSubs[i] = !openSubs[i];
}

// Default columns for `peopleTable` rows that don't specify their own
// `columns` — keeps existing SLIK-style tables working unchanged.
const defaultPeopleTableColumns = [
  { key: 'name', label: 'Name' },
  { key: 'positionStatus', label: 'Position / Status' },
  { key: 'result', label: 'Check Result', badge: true },
  { key: 'summaryUrl', label: 'Summary Link', link: true, linkText: 'View Summary' },
];
</script>

<template>
  <div class="section" :class="{ open: isOpen }">
    <div class="section-head" @click="emit('toggle')">
      <span class="sec-icon">{{ meta.icon }}</span>
      <span class="sec-title">{{ meta.title }}</span>

      <span v-if="summaryBadge" class="sec-badge badge" :class="badgeTone(summaryBadge.value)">
        {{ summaryBadge.value }}
      </span>

      <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <div class="section-body">
      <!-- Custom slot content (e.g. the Document Upload section) bypasses the data-driven field grid entirely -->
      <slot v-if="$slots.default" />

      <!-- Table mode (Report CAM): plain row/badge/group/links/note render as a
           2-column Field | Value table. peopleTable already has named columns
           so it keeps rendering as its own table either way. -->
      <table v-else-if="tableMode" class="field-table">
        <tbody>
          <template v-for="(row, i) in rows" :key="i">

            <tr v-if="row.type === 'note'" class="ft-note-row">
              <td colspan="2">{{ row.label }}</td>
            </tr>

            <tr v-else-if="row.type === 'group'" class="ft-group-row">
              <td colspan="2">{{ row.label }}</td>
            </tr>

            <tr v-else-if="row.type === 'row'" :class="{ indent: row.indent }">
              <td class="ft-field">{{ row.label }}</td>
              <td class="ft-value" :class="{ mono: row.mono }">{{ row.value }}</td>
            </tr>

            <tr v-else-if="row.type === 'badge'" :class="{ indent: row.indent }">
              <td class="ft-field">{{ row.label }}</td>
              <td class="ft-value"><span class="badge" :class="badgeTone(row.value)" :title="row.value">{{ row.value }}</span></td>
            </tr>

            <tr v-else-if="row.type === 'links'" :class="{ indent: row.indent }">
              <td class="ft-field">{{ row.label }}</td>
              <td class="ft-value">
                <div class="links">
                  <a v-for="(l, li) in row.links" :key="li" class="link" :href="l.url">{{ l.text }}</a>
                </div>
              </td>
            </tr>

            <!-- peopleTable: own table with named columns, nested full-width -->
            <tr v-else-if="row.type === 'peopleTable'">
              <td colspan="2" class="ft-nested-table-cell">
                <div v-if="row.label" class="grp-label">{{ row.label }}</div>
                <table class="people-table">
                  <thead>
                    <tr>
                      <th v-for="col in (row.columns || defaultPeopleTableColumns)" :key="col.key">{{ col.label }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(p, pi) in row.people" :key="pi">
                      <td v-for="col in (row.columns || defaultPeopleTableColumns)" :key="col.key"
                          :class="{ 'pt-name': col.key === 'name' }">
                        <span v-if="col.badge" class="badge" :class="badgeTone(p[col.key])" :title="p[col.key]">{{ p[col.key] }}</span>
                        <template v-else-if="col.link">
                          <a v-if="p[col.key]" class="link" :href="p[col.key]">{{ col.linkText || 'View' }}</a>
                          <span v-else class="pt-muted">—</span>
                        </template>
                        <span v-else>{{ p[col.key] || '—' }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- subAccordion: nested collapsible, its own body also renders as a field table -->
            <tr v-else-if="row.type === 'subAccordion'">
              <td colspan="2" class="ft-nested-table-cell">
                <div class="sub-accordion" :class="{ open: openSubs[i] }">
                  <div class="sub-head" @click="toggleSub(i)">
                    <span v-if="row.icon" class="sub-icon">{{ row.icon }}</span>
                    <span class="sub-title">{{ row.title }}</span>
                    <svg class="chevron sub-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="sub-body">
                    <table class="field-table sub-field-table">
                      <tbody>
                        <template v-for="(sr, si) in row.rows" :key="si">
                          <tr v-if="sr.type === 'group'" class="ft-group-row"><td colspan="2">{{ sr.label }}</td></tr>
                          <tr v-else-if="sr.type === 'row'" :class="{ indent: sr.indent }">
                            <td class="ft-field">{{ sr.label }}</td>
                            <td class="ft-value" :class="{ mono: sr.mono }">{{ sr.value }}</td>
                          </tr>
                          <tr v-else-if="sr.type === 'badge'" :class="{ indent: sr.indent }">
                            <td class="ft-field">{{ sr.label }}</td>
                            <td class="ft-value"><span class="badge" :class="badgeTone(sr.value)" :title="sr.value">{{ sr.value }}</span></td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>

          </template>
        </tbody>
      </table>

      <div v-else class="field-grid">
        <template v-for="(row, i) in rows" :key="i">

          <div v-if="row.type === 'note'" class="note-label">{{ row.label }}</div>

          <div v-else-if="row.type === 'group'" class="grp-label">{{ row.label }}</div>

          <div v-else-if="row.type === 'row'" class="field-cell" :class="{ indent: row.indent }">
            <div class="field-label">{{ row.label }}</div>
            <div class="field-value" :class="{ mono: row.mono }">{{ row.value }}</div>
          </div>

          <div v-else-if="row.type === 'badge'" class="field-cell" :class="{ indent: row.indent }">
            <div class="field-label">{{ row.label }}</div>
            <div class="field-value"><span class="badge" :class="badgeTone(row.value)" :title="row.value">{{ row.value }}</span></div>
          </div>

          <div v-else-if="row.type === 'links'" class="field-cell wide" :class="{ indent: row.indent }">
            <div class="field-label">{{ row.label }}</div>
            <div class="field-value links">
              <a v-for="(l, li) in row.links" :key="li" class="link" :href="l.url">{{ l.text }}</a>
            </div>
          </div>

          <!-- Elongated table: Name | Position/Status | Check Result | Summary Link -->
          <div v-else-if="row.type === 'peopleTable'" class="people-table-wrap">
            <div v-if="row.label" class="grp-label">{{ row.label }}</div>
            <table class="people-table">
              <thead>
                <tr>
                  <th v-for="col in (row.columns || defaultPeopleTableColumns)" :key="col.key">{{ col.label }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(p, pi) in row.people" :key="pi">
                  <td v-for="col in (row.columns || defaultPeopleTableColumns)" :key="col.key"
                      :class="{ 'pt-name': col.key === 'name' }">
                    <span v-if="col.badge" class="badge" :class="badgeTone(p[col.key])" :title="p[col.key]">{{ p[col.key] }}</span>
                    <template v-else-if="col.link">
                      <a v-if="p[col.key]" class="link" :href="p[col.key]">{{ col.linkText || 'View' }}</a>
                      <span v-else class="pt-muted">—</span>
                    </template>
                    <span v-else>{{ p[col.key] || '—' }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Nested sub-accordion (e.g. Credit Deviation / Product Deviation inside Final Scoring) -->
          <div v-else-if="row.type === 'subAccordion'" class="sub-accordion" :class="{ open: openSubs[i] }">
            <div class="sub-head" @click="toggleSub(i)">
              <span v-if="row.icon" class="sub-icon">{{ row.icon }}</span>
              <span class="sub-title">{{ row.title }}</span>
              <svg class="chevron sub-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="sub-body">
              <div class="field-grid sub-field-grid">
                <template v-for="(sr, si) in row.rows" :key="si">
                  <div v-if="sr.type === 'group'" class="grp-label">{{ sr.label }}</div>
                  <div v-else-if="sr.type === 'row'" class="field-cell" :class="{ indent: sr.indent }">
                    <div class="field-label">{{ sr.label }}</div>
                    <div class="field-value" :class="{ mono: sr.mono }">{{ sr.value }}</div>
                  </div>
                  <div v-else-if="sr.type === 'badge'" class="field-cell" :class="{ indent: sr.indent }">
                    <div class="field-label">{{ sr.label }}</div>
                    <div class="field-value"><span class="badge" :class="badgeTone(sr.value)" :title="sr.value">{{ sr.value }}</span></div>
                  </div>
                </template>
              </div>
            </div>
          </div>

        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

/* header ala "View Detail Assignment" — bar navy penuh */
.section-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;
  background: var(--navy);
  color: #fff;
}
.section-head:hover { background: var(--navy-soft); }
.sec-icon { font-size: 16px; }
.sec-title {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 15.5px;
  flex: 1;
  letter-spacing: .01em;
}
.sec-badge {
  font-size: 12.5px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  font-family: var(--font-head);
}
.chevron { color: rgba(255,255,255,.7); transition: transform .2s ease; flex: none; }
.section.open .chevron { transform: rotate(180deg); }

.section-body { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
.section.open .section-body { max-height: 4000px; }

/* Table mode (Report CAM): plain Field | Value table */
.field-table {
  width: 100%;
  border-collapse: collapse;
  padding: 6px 20px 18px;
}
.field-table td { padding: 10px 14px; border-bottom: 1px solid #F0F2F7; vertical-align: top; }
.field-table tr.indent .ft-field { padding-left: 32px; }

.ft-field {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: var(--ink-faint);
  width: 38%;
  white-space: normal;
}
.ft-value {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14.5px;
  color: var(--ink);
  white-space: normal;
  word-break: break-word;
}
.ft-value.mono { font-family: var(--font-mono); font-weight: 500; font-size: 13.5px; }

.field-table tbody tr:nth-child(even):not(.ft-group-row):not(.ft-note-row) { background: var(--bg); }

.ft-group-row td {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14.5px;
  color: var(--navy);
  background: var(--surface);
  border-top: 1px dashed var(--line);
  border-bottom: 1px solid var(--line);
  padding-top: 14px;
}
.field-table tbody tr:first-child.ft-group-row td { border-top: none; }

.ft-note-row td {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 13px;
  color: var(--green-dark);
  background: var(--green-soft);
}

.ft-nested-table-cell { padding: 12px 14px !important; background: var(--surface); }
.ft-nested-table-cell .people-table { margin-top: 4px; }

.sub-field-table { padding: 4px 14px 14px; }
.sub-field-table .ft-field { width: 42%; }

.field-table > tbody > tr:first-child > td { padding-top: 14px; }
.field-table > tbody > tr:last-child > td { border-bottom: none; padding-bottom: 4px; }

/* body ala tabel side-by-side: label & value dalam 1 baris (max 2 baris info per cell),
   grid auto-fill supaya field ke-3 dst otomatis nempel di samping, bukan turun ke bawah */
.field-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  padding: 6px 20px 18px;
  align-items: start;
}

.grp-label {
  grid-column: 1 / -1;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14.5px;
  color: var(--navy);
  margin: 16px 0 2px;
  padding-top: 14px;
  border-top: 1px dashed var(--line);
}
.field-grid > .grp-label:first-child,
.field-grid > .note-label:first-child { border-top: none; padding-top: 0; margin-top: 6px; }

.note-label {
  grid-column: 1 / -1;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 13px;
  color: var(--green-dark);
  background: var(--green-soft);
  display: inline-block;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 6px;
  margin: 16px 0 2px;
}

.field-cell {
  padding: 10px 14px 10px 0;
  border-bottom: 1px solid #F0F2F7;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
}
.field-cell.wide { grid-column: 1 / -1; }
.field-cell.indent { padding-left: 18px; }

.field-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: var(--ink-faint);
  flex: none;
  max-width: 66%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.field-value {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14.5px;
  color: var(--ink);
  flex: 0 1 auto;
  min-width: 0;
  white-space: normal;
  word-break: break-word;
  text-align: left;
}
.field-value.mono { font-family: var(--font-mono); font-weight: 500; font-size: 13.5px; }
.field-cell.wide .field-value { text-align: left; }

.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 999px;
  white-space: nowrap;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
.badge.good { color: var(--good); background: var(--good-bg); white-space: normal; text-align: center; }
.badge.mid { color: var(--mid); background: var(--mid-bg); }
.badge.risk { color: var(--risk); background: var(--risk-bg); }
.badge.neutral { color: var(--neutral); background: var(--neutral-bg); }

.links { display: flex; flex-direction: column; gap: 5px; align-items: flex-end; }
.field-cell.wide .links { align-items: flex-start; }
.link { color: var(--green-dark); font-weight: 700; font-size: 14px; text-decoration: none; white-space: nowrap; }
.link:hover { text-decoration: underline; }

/* Elongated SLIK-style table: Name | Position/Status | Check Result | Summary Link */
/* Nested sub-accordion (Credit Deviation / Product Deviation inside Final Scoring) */
.sub-accordion {
  grid-column: 1 / -1;
  margin: 10px 0 2px;
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg);
}
.sub-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  cursor: pointer;
  user-select: none;
}
.sub-head:hover { background: #fff; }
.sub-icon { font-size: 14px; }
.sub-title {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 13.5px;
  color: var(--navy);
  flex: 1;
}
.sub-chevron { color: var(--ink-faint); transition: transform .2s ease; flex: none; }
.sub-accordion.open .sub-chevron { transform: rotate(180deg); }

.sub-body { max-height: 0; overflow: hidden; transition: max-height .2s ease; }
.sub-accordion.open .sub-body { max-height: 1200px; }

.sub-field-grid {
  padding: 4px 14px 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.sub-field-grid > .grp-label:first-child { margin-top: 0; }

.people-table-wrap { grid-column: 1 / -1; margin-top: 4px; }
.people-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
.people-table thead tr { border-bottom: 1.5px solid var(--line); }
.people-table th {
  text-align: left;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--ink-faint);
  padding: 8px 10px;
}
.people-table td {
  padding: 10px 10px;
  border-bottom: 1px solid #F0F2F7;
  font-family: var(--font-head);
  font-size: 14px;
  color: var(--ink);
  vertical-align: middle;
}
.people-table tbody tr:nth-child(even) { background: var(--bg); }
.people-table tbody tr:hover { background: var(--green-soft); }
.pt-name { font-weight: 700; }
.pt-position { color: var(--ink-soft); font-weight: 500; font-size: 13.5px; }
.pt-muted { color: var(--ink-faint); }

@media (max-width: 640px) {
  .field-grid { grid-template-columns: 1fr; }
  .people-table { display: block; overflow-x: auto; white-space: nowrap; }
}
</style>
