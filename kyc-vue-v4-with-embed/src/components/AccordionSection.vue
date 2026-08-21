<script setup>
import { computed } from 'vue';
import { badgeTone } from '../data/sections.js';

const props = defineProps({
  meta: { type: Object, required: true },   // { title, icon }
  rows: { type: Array, default: () => [] },
  isOpen: { type: Boolean, default: false },
});

const emit = defineEmits(['toggle']);

const summaryBadge = computed(() => props.rows.find(r => r.type === 'badge') || null);
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
            <div class="field-value"><span class="badge" :class="badgeTone(row.value)">{{ row.value }}</span></div>
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
                  <th>Name</th>
                  <th>Position / Status</th>
                  <th>Check Result</th>
                  <th>Summary Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(p, pi) in row.people" :key="pi">
                  <td class="pt-name">{{ p.name }}</td>
                  <td class="pt-position">{{ p.positionStatus || '—' }}</td>
                  <td><span class="badge" :class="badgeTone(p.result)">{{ p.result }}</span></td>
                  <td>
                    <a v-if="p.summaryUrl" class="link" :href="p.summaryUrl">View Summary</a>
                    <span v-else class="pt-muted">—</span>
                  </td>
                </tr>
              </tbody>
            </table>
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

/* body ala tabel side-by-side: label & value dalam 1 baris (max 2 baris info per cell),
   grid auto-fill supaya field ke-3 dst otomatis nempel di samping, bukan turun ke bawah */
.field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
  align-items: baseline;
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
  max-width: 46%;
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
  flex: 1;
  min-width: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: right;
}
.field-value.mono { font-family: var(--font-mono); font-weight: 500; font-size: 13.5px; }
.field-cell.wide .field-value { text-align: left; }

.badge { display: inline-block; font-size: 13px; font-weight: 700; padding: 3px 12px; border-radius: 999px; white-space: nowrap; }
.badge.good { color: var(--good); background: var(--good-bg); }
.badge.mid { color: var(--mid); background: var(--mid-bg); }
.badge.risk { color: var(--risk); background: var(--risk-bg); }
.badge.neutral { color: var(--neutral); background: var(--neutral-bg); }

.links { display: flex; flex-direction: column; gap: 5px; align-items: flex-end; }
.field-cell.wide .links { align-items: flex-start; }
.link { color: var(--green-dark); font-weight: 700; font-size: 14px; text-decoration: none; white-space: nowrap; }
.link:hover { text-decoration: underline; }

/* Elongated SLIK-style table: Name | Position/Status | Check Result | Summary Link */
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
.pt-name { font-weight: 700; }
.pt-position { color: var(--ink-soft); font-weight: 500; font-size: 13.5px; }
.pt-muted { color: var(--ink-faint); }

@media (max-width: 640px) {
  .field-grid { grid-template-columns: 1fr; }
  .people-table { display: block; overflow-x: auto; white-space: nowrap; }
}
</style>
