<script setup>
import { computed } from 'vue';
import { badgeTone } from '../data/sections.js';

const props = defineProps({
  meta: { type: Object, required: true },   // { title, icon }
  rows: { type: Array, required: true },
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
      <div class="field-grid">
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

/* body ala tabel 2-kolom: label kecil di atas, value tebal di bawah */
.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 6px 20px 18px;
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
  padding: 12px 14px 12px 0;
  border-bottom: 1px solid #F0F2F7;
}
.field-cell.wide { grid-column: 1 / -1; }
.field-cell.indent { padding-left: 18px; }

.field-label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 5px;
}
.field-value {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 15px;
  color: var(--ink);
}
.field-value.mono { font-family: var(--font-mono); font-weight: 500; font-size: 14px; }

.badge { display: inline-block; font-size: 13.5px; font-weight: 700; padding: 3px 12px; border-radius: 999px; }
.badge.good { color: var(--good); background: var(--good-bg); }
.badge.mid { color: var(--mid); background: var(--mid-bg); }
.badge.risk { color: var(--risk); background: var(--risk-bg); }
.badge.neutral { color: var(--neutral); background: var(--neutral-bg); }

.links { display: flex; flex-direction: column; gap: 5px; }
.link { color: var(--green-dark); font-weight: 700; font-size: 14.5px; text-decoration: none; }
.link:hover { text-decoration: underline; }

@media (max-width: 640px) {
  .field-grid { grid-template-columns: 1fr; }
}
</style>
