<script setup>
import { computed, reactive } from 'vue';
import { badgeTone } from '../data/sections.js';
import RpAmount from './RpAmount.vue';

const props = defineProps({
  meta: { type: Object, required: true },   // { title, icon }
  rows: { type: Array, default: () => [] },
  isOpen: { type: Boolean, default: false },
  // When true, plain row/badge/group/links/note content renders as a
  // 2-column "Field | Value" table instead of the flex field-grid layout.
  // `peopleTable` rows already have named columns so they're unaffected.
  tableMode: { type: Boolean, default: false },
});

const emit = defineEmits(['toggle', 'contract-click']);

// Only show a badge in the section header when a row explicitly opts in via
// `summary: true` — picking the FIRST badge found anywhere in the section
// (the old behavior) could surface an unrelated/misleading value (e.g. a
// "Status: Available" badge from deep inside the section body).
const summaryBadge = computed(() => props.rows.find(r => r.type === 'badge' && r.summary) || null);

// Dipakai untuk kasih class tambahan ke `.field-value` (mode field-grid/kartu)
// supaya value nominal Rupiah bisa melebar sampai ke tepi kanan cell-nya —
// baru RpAmount di dalamnya bisa align-right dengan tepi yang konsisten
// antar baris (lihat CSS `.field-value.value-rp`).
function isRpValue(val) {
  return typeof val === 'string' && /^Rp\.?\s*[\d.,]+/i.test(val.trim());
}

// Local open/close state for nested `subAccordion` rows.
const openSubs = reactive({});
function toggleSub(i) {
  openSubs[i] = !openSubs[i];
}

// Local open/close state for `relationshipSummary` category detail tables —
// keyed by `${rowIndex}:${categoryIndex}` since one section can have
// multiple relationshipSummary rows, each with several clickable categories.
const openRelCats = reactive({});
function toggleRelCat(rowIndex, catIndex) {
  const key = `${rowIndex}:${catIndex}`;
  openRelCats[key] = !openRelCats[key];
}

// Parse a "Rp 1,234,567" style string back into a plain number so
// per-group (category) and grand totals can be summed, then re-formatted
// into the same "Rp ..." shape RpAmount already knows how to render.
function parseRp(val) {
  if (typeof val !== 'string') return 0;
  const m = val.trim().match(/^Rp\.?\s*([\d.,]+)/i);
  if (!m) return 0;
  return parseInt(m[1].replace(/[.,]/g, ''), 10) || 0;
}
function formatRp(n) {
  return 'Rp ' + Math.round(n || 0).toLocaleString('en-US');
}
// Per-category (per-group) subtotal — shown as a "Total" row under each
// category's expanded contract table.
function categoryTotal(cat) {
  const contracts = cat.contracts || [];
  return {
    totalNetFinance: formatRp(contracts.reduce((s, c) => s + parseRp(c.totalNetFinance), 0)),
    outstanding: formatRp(contracts.reduce((s, c) => s + parseRp(c.outstanding), 0)),
  };
}
// Grand total across every category (Debtor + Spouse + Emergency Contact +
// Board/Management, etc.), regardless of which ones are currently expanded.
function grandTotal(categories) {
  const all = (categories || []).flatMap(cat => cat.contracts || []);
  return {
    totalNetFinance: formatRp(all.reduce((s, c) => s + parseRp(c.totalNetFinance), 0)),
    outstanding: formatRp(all.reduce((s, c) => s + parseRp(c.outstanding), 0)),
  };
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

      <!-- Table mode: plain row/badge/group/links/note render as a 2-column
           Field | Value table. peopleTable already has named columns so it
           keeps rendering as its own table either way. -->
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
              <td class="ft-value" :class="{ mono: row.mono }"><RpAmount :value="row.value" /></td>
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

            <!-- Highlighted result banner (e.g. Pre Scoring Result + Survey Treatment,
                 Final Score + Instant Approval) — pulled out visually from the plain
                 field list since these are the section's main takeaway. -->
            <tr v-else-if="row.type === 'highlight'">
              <td colspan="2" class="ft-highlight-cell">
                <div class="highlight-bar">
                  <div v-for="(it, hi) in row.items" :key="hi" class="highlight-item">
                    <div class="highlight-label">{{ it.label }}</div>
                    <div class="highlight-value" :class="it.tone ? `hv-${it.tone}` : ''">{{ it.value }}</div>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Knockout-style list: each entry shows its reason if present,
                 otherwise its result. Shows "-" when there's nothing to list. -->
            <tr v-else-if="row.type === 'knockoutList'">
              <td colspan="2" class="ft-nested-table-cell">
                <div v-if="row.label" class="grp-label">{{ row.label }}</div>
                <div v-if="!row.items || row.items.length === 0" class="knockout-empty">-</div>
                <ul v-else class="knockout-list">
                  <li v-for="(it, ki) in row.items" :key="ki">
                    <span v-if="it.result" class="badge" :class="badgeTone(it.result)">{{ it.result }}</span>
                    <span class="knockout-text">{{ it.reason || it.result }}</span>
                  </li>
                </ul>
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
                        <button
                          v-else-if="col.key === 'contractNo' && p[col.key] && p[col.key] !== '—'"
                          type="button" class="link contract-link" :title="'View CAM report for contract ' + p[col.key]"
                          @click="emit('contract-click', p)"
                        >{{ p[col.key] }}</button>
                        <RpAmount v-else :value="p[col.key] || '—'" />
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
                            <td class="ft-value" :class="{ mono: sr.mono }"><RpAmount :value="sr.value" /></td>
                          </tr>
                          <tr v-else-if="sr.type === 'badge'" :class="{ indent: sr.indent }">
                            <td class="ft-field">{{ sr.label }}</td>
                            <td class="ft-value"><span class="badge" :class="badgeTone(sr.value)" :title="sr.value">{{ sr.value }}</span></td>
                          </tr>
                          <tr v-else-if="sr.type === 'knockoutList'">
                            <td colspan="2" class="ft-nested-table-cell">
                              <div v-if="sr.label" class="grp-label">{{ sr.label }}</div>
                              <div v-if="!sr.items || sr.items.length === 0" class="knockout-empty">-</div>
                              <ul v-else class="knockout-list">
                                <li v-for="(it, ki) in sr.items" :key="ki">
                                  <span v-if="it.result" class="badge" :class="badgeTone(it.result)">{{ it.result }}</span>
                                  <span class="knockout-text">{{ it.reason || it.result }}</span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Relationship Check summary (table mode): category counts, click a count to reveal its contract detail table -->
            <tr v-else-if="row.type === 'relationshipSummary'">
              <td colspan="2" class="ft-nested-table-cell">
                <div v-if="row.label" class="grp-label">{{ row.label }}</div>
                <div class="rel-summary">
                  <template v-for="(cat, ci) in row.categories" :key="ci">
                    <div class="rel-summary-row">
                      <span class="rel-summary-label">{{ cat.name }}</span>
                      <span class="rel-summary-sep">:</span>
                      <button
                        class="rel-summary-count"
                        :class="{ zero: !cat.count }"
                        :disabled="!cat.count"
                        @click="toggleRelCat(i, ci)"
                      >{{ cat.count }}</button>
                    </div>
                    <div v-if="openRelCats[`${i}:${ci}`] && cat.contracts?.length" class="rel-detail-wrap">
                      <table class="people-table rel-detail-table">
                        <thead>
                          <tr>
                            <th>Contract No.</th>
                            <th>Customer Name</th>
                            <th>Total Net Finance</th>
                            <th>Outstanding</th>
                            <th>Disbursement Date</th>
                            <th>Status</th>
                            <th>Loss</th>
                            <th>Amount Loss</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(c, cci) in cat.contracts" :key="cci">
                            <td class="mono">
                              <button
                                v-if="c.contractNo && c.contractNo !== '—'"
                                type="button" class="link contract-link" :title="'View CAM report for contract ' + c.contractNo"
                                @click="emit('contract-click', c)"
                              >{{ c.contractNo }}</button>
                              <span v-else>{{ c.contractNo }}</span>
                            </td>
                            <td>{{ c.customerName }}</td>
                            <td><RpAmount :value="c.totalNetFinance" /></td>
                            <td><RpAmount :value="c.outstanding" /></td>
                            <td>{{ c.disbursementDate }}</td>
                            <td><span class="badge" :class="badgeTone(c.status)">{{ c.status }}</span></td>
                            <td><RpAmount :value="c.loss" /></td>
                            <td><RpAmount :value="c.amountLoss" /></td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr class="rel-total-row">
                            <td colspan="2" class="rel-total-label">Total — {{ cat.name }}</td>
                            <td><RpAmount :value="categoryTotal(cat).totalNetFinance" /></td>
                            <td><RpAmount :value="categoryTotal(cat).outstanding" /></td>
                            <td colspan="5"></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </template>

                  <!-- Grand Total: Total Net Finance & Outstanding summed across EVERY
                       category above (Debtor + Spouse + Emergency Contact + Board/Management...),
                       regardless of which category tables are currently expanded. -->
                  <div v-if="row.categories?.length" class="rel-grandtotal">
                    <span class="rel-grandtotal-label">Grand Total</span>
                    <span class="rel-grandtotal-item">
                      <span class="rel-grandtotal-key">Total Net Finance</span>
                      <RpAmount :value="grandTotal(row.categories).totalNetFinance" />
                    </span>
                    <span class="rel-grandtotal-item">
                      <span class="rel-grandtotal-key">Outstanding</span>
                      <RpAmount :value="grandTotal(row.categories).outstanding" />
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Repeating small person cards (e.g. Dukcapil Customer/Spouse/Guarantor...) —
                 add/remove entries in row.people and cards appear/disappear automatically.
                 If any of a person's mandatory fields is Not Match, the whole card cascades
                 to Not Match (this is computed in the data, not here — see row.people[].overall). -->
            <tr v-else-if="row.type === 'personFieldCards'">
              <td colspan="2" class="ft-nested-table-cell">
                <div v-if="row.label" class="grp-label">{{ row.label }}</div>
                <div class="person-cards">
                  <div v-for="(p, pi) in row.people" :key="pi" class="person-card">
                    <div class="person-card-head">
                      <span>{{ p.name }}</span>
                      <span class="badge" :class="badgeTone(p.overall)">{{ p.overall }}</span>
                    </div>
                    <div class="person-card-body">
                      <div v-for="f in row.fields" :key="f.key" class="person-card-row">
                        <span class="pc-label">{{ f.label }}<span v-if="f.mandatory" class="pc-star">*</span></span>
                        <span class="pc-value" :class="'tone-' + badgeTone(p.values[f.key])"><RpAmount :value="p.values[f.key]" /></span>
                      </div>
                    </div>
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
            <div class="field-value" :class="{ mono: row.mono, 'value-rp': isRpValue(row.value) }"><RpAmount :value="row.value" /></div>
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

          <div v-else-if="row.type === 'highlight'" class="field-cell wide">
            <div class="highlight-bar">
              <div v-for="(it, hi) in row.items" :key="hi" class="highlight-item">
                <div class="highlight-label">{{ it.label }}</div>
                <div class="highlight-value" :class="it.tone ? `hv-${it.tone}` : ''">{{ it.value }}</div>
              </div>
            </div>
          </div>

          <div v-else-if="row.type === 'knockoutList'" class="field-cell wide">
            <div v-if="row.label" class="grp-label" style="grid-column:auto;border:none;margin:0;padding:0;">{{ row.label }}</div>
            <div v-if="!row.items || row.items.length === 0" class="knockout-empty">-</div>
            <ul v-else class="knockout-list">
              <li v-for="(it, ki) in row.items" :key="ki">
                <span v-if="it.result" class="badge" :class="badgeTone(it.result)">{{ it.result }}</span>
                <span class="knockout-text">{{ it.reason || it.result }}</span>
              </li>
            </ul>
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
                    <button
                      v-else-if="col.key === 'contractNo' && p[col.key] && p[col.key] !== '—'"
                      type="button" class="link contract-link" :title="'View CAM report for contract ' + p[col.key]"
                      @click="emit('contract-click', p)"
                    >{{ p[col.key] }}</button>
                    <RpAmount v-else :value="p[col.key] || '—'" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Nested sub-accordion -->
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
                    <div class="field-value" :class="{ mono: sr.mono, 'value-rp': isRpValue(sr.value) }"><RpAmount :value="sr.value" /></div>
                  </div>
                  <div v-else-if="sr.type === 'badge'" class="field-cell" :class="{ indent: sr.indent }">
                    <div class="field-label">{{ sr.label }}</div>
                    <div class="field-value"><span class="badge" :class="badgeTone(sr.value)" :title="sr.value">{{ sr.value }}</span></div>
                  </div>
                  <div v-else-if="sr.type === 'knockoutList'" class="field-cell wide">
                    <div v-if="!sr.items || sr.items.length === 0" class="knockout-empty">-</div>
                    <ul v-else class="knockout-list">
                      <li v-for="(it, ki) in sr.items" :key="ki">
                        <span v-if="it.result" class="badge" :class="badgeTone(it.result)">{{ it.result }}</span>
                        <span class="knockout-text">{{ it.reason || it.result }}</span>
                      </li>
                    </ul>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- Repeating small person cards (flex mode) -->
          <div v-else-if="row.type === 'personFieldCards'" class="field-cell wide">
            <div v-if="row.label" class="grp-label">{{ row.label }}</div>
            <div class="person-cards">
              <div v-for="(p, pi) in row.people" :key="pi" class="person-card">
                <div class="person-card-head">
                  <span>{{ p.name }}</span>
                  <span class="badge" :class="badgeTone(p.overall)">{{ p.overall }}</span>
                </div>
                <div class="person-card-body">
                  <div v-for="f in row.fields" :key="f.key" class="person-card-row">
                    <span class="pc-label">{{ f.label }}<span v-if="f.mandatory" class="pc-star">*</span></span>
                    <span class="pc-value" :class="'tone-' + badgeTone(p.values[f.key])"><RpAmount :value="p.values[f.key]" /></span>
                  </div>
                </div>
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
  font-size: var(--fs-header-1);
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
.section.open .section-body { max-height: 6000px; }

/* Table mode: plain Field | Value table */
.field-table {
  width: 100%;
  border-collapse: collapse;
  padding: 6px 20px 18px;
}
.field-table td { padding: 10px 14px; border-bottom: 1px solid #F0F2F7; vertical-align: top; }
.field-table tr.indent .ft-field { padding-left: 32px; }

.ft-field {
  font-family: var(--font-mono);
  font-size: var(--fs-field-label);
  letter-spacing: .03em;
  text-transform: uppercase;
  color: #05153b;
  width: 38%;
  white-space: normal;
  font-weight: bolder;
}
.ft-value {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: var(--fs-field-value);
  color: var(--ink);
  white-space: normal;
  word-break: break-word;
}
.ft-value.mono { font-family: var(--font-mono); font-weight: 500; font-size: var(--fs-field-value-mono); }

.field-table tbody tr:nth-child(even):not(.ft-group-row):not(.ft-note-row) { background: var(--bg); }

.ft-group-row td {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: var(--fs-header-2);
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

.ft-highlight-cell { padding: 14px !important; background: var(--surface); }

.sub-field-table { padding: 4px 14px 14px; }
.sub-field-table .ft-field { width: 42%; }

.field-table > tbody > tr:first-child > td { padding-top: 14px; }
.field-table > tbody > tr:last-child > td { border-bottom: none; padding-bottom: 4px; }

/* Highlighted result banner — used for the section's main takeaway
   (Pre Scoring Result + Survey Treatment, Final Score + Instant Approval) */
.highlight-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  background: var(--navy);
  border-radius: 12px;
  padding: 16px 20px;
}
.highlight-item { flex: 1; min-width: 160px; }
.highlight-label {
  font-family: var(--font-mono);
  font-size: var(--fs-field-label);
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(255,255,255,.65);
  margin-bottom: 4px;
}
.highlight-value {
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 19px;
  color: #fff;
}
.highlight-value.hv-good { color: #8FE3B6; }
.highlight-value.hv-mid { color: #F7D48A; }
.highlight-value.hv-risk { color: #F5A3A3; }

/* Knockout list: dash when empty, bulleted reason/result list otherwise */
.knockout-empty { font-family: var(--font-head); font-size: var(--fs-field-value); color: var(--ink-faint); padding: 4px 0; }
.knockout-list { list-style: none; margin: 4px 0 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.knockout-list li { display: flex; align-items: center; gap: 10px; }
.knockout-text { font-family: var(--font-head); font-size: 14px; color: var(--ink); }

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
  font-size: var(--fs-header-2);
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
  font-size: var(--fs-field-label);
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
  font-size: var(--fs-field-value);
  color: var(--ink);
  flex: 0 1 auto;
  min-width: 0;
  white-space: normal;
  word-break: break-word;
  text-align: left;
}
.field-value.mono { font-family: var(--font-mono); font-weight: 500; font-size: var(--fs-field-value-mono); }
.field-cell.wide .field-value { text-align: left; }

/* Value nominal Rupiah: biarkan melebar sampai tepi kanan cell supaya
   RpAmount di dalamnya bisa align-right dengan tepi yang konsisten
   antar baris di kolom grid yang sama. */
.field-value.value-rp { flex: 1 1 auto; }

.badge {
  display: inline-block;
  font-size: 13.5px;
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

.links { display: flex; flex-direction: column; gap: 5px; align-items: baseline; }
.field-cell.wide .links { align-items: flex-start; }
.link { color: var(--green-dark); font-weight: 700; font-size: 14px; text-decoration: none; white-space: nowrap; }
.link:hover { text-decoration: underline; }
.contract-link {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
  text-align: inherit;
}

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
  font-size: var(--fs-header-3);
  color: var(--navy);
  flex: 1;
}
.sub-chevron { color: var(--ink-faint); transition: transform .2s ease; flex: none; }
.sub-accordion.open .sub-chevron { transform: rotate(180deg); }

.sub-body { max-height: 0; overflow: hidden; transition: max-height .2s ease; }
.sub-accordion.open .sub-body { max-height: 2000px; }

.sub-field-grid {
  padding: 4px 14px 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.sub-field-grid > .grp-label:first-child { margin-top: 0; }

.people-table-wrap { grid-column: 1 / -1; margin-top: 4px; }

/* Relationship Check summary — label : clickable count, expands to a contract detail table */
.rel-summary-wrap { grid-column: 1 / -1; }
.rel-summary {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 4px 16px;
  margin-top: 4px;
}
.rel-summary-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 0;
  border-bottom: 1px solid #E7EAF0;
}
.rel-summary-row:last-of-type { border-bottom: none; }
.rel-summary-label { font-family: var(--font-head); font-weight: 700; font-size: 14px; color: var(--ink); }
.rel-summary-sep { color: var(--ink-faint); }
.rel-summary-count {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14px;
  color: var(--green-dark);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 2px;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.rel-summary-count:hover:not(:disabled) { color: var(--green); }
.rel-summary-count.zero, .rel-summary-count:disabled {
  color: var(--ink-faint);
  cursor: default;
  text-decoration: none;
}
.rel-detail-wrap { padding: 4px 0 14px; }
.rel-detail-wrap .people-table { margin-top: 0; }

/* Per-category (per-group) subtotal row, shown under each category's
   expanded contract table — "aggregate per group" totals. */
.rel-detail-table tfoot .rel-total-row { background: var(--bg); border-top: 1.5px solid var(--line); }
.rel-detail-table tfoot td { padding: 9px 10px; font-family: var(--font-head); border-bottom: none; }
.rel-total-label {
  font-weight: 700;
  color: var(--ink-soft);
  text-transform: uppercase;
  font-size: var(--fs-field-label);
  letter-spacing: .03em;
}

/* Grand Total bar — Total Net Finance & Outstanding summed across every
   category in this Relationship Check group. */
.rel-grandtotal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 2px;
  padding: 10px 2px 12px;
  border-top: 2px solid var(--line);
}
.rel-grandtotal-label { font-family: var(--font-head); font-weight: 800; font-size: 14px; color: var(--ink); margin-right: auto; }
.rel-grandtotal-item { display: flex; align-items: center; gap: 6px; font-family: var(--font-head); font-weight: 700; font-size: var(--fs-field-value); color: var(--ink); }
.rel-grandtotal-key { font-family: var(--font-mono); font-size: var(--fs-field-label); text-transform: uppercase; letter-spacing: .03em; color: var(--ink-faint); }

/* Repeating small person cards (e.g. Dukcapil Customer/Spouse/Guarantor...) —
   data-driven: add/remove an entry in row.people and a card appears/disappears
   automatically, no template changes needed. */
.person-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
  margin-top: 6px;
}
.person-card {
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  background: var(--surface);
}
.person-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 12px;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  font-family: var(--font-head);
  font-weight: 700;
  font-size: var(--fs-header-3);
  color: var(--ink);
}
.person-card-body { padding: 2px 12px 8px; }
.person-card-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px dashed #EEF0F4;
}
.person-card-row:last-child { border-bottom: none; }
.pc-label {
  font-family: var(--font-mono);
  font-size: var(--fs-field-label);
  letter-spacing: .02em;
  text-transform: uppercase;
  color: var(--ink-faint);
  flex: none;
  max-width: 55%;
}
.pc-star { color: var(--risk); margin-left: 1px; }
.pc-value { font-family: var(--font-head); font-weight: 700; font-size: var(--fs-field-value); text-align: right; white-space: normal; word-break: break-word; }
.pc-value.tone-good { color: var(--good); }
.pc-value.tone-mid { color: var(--mid); }
.pc-value.tone-risk { color: var(--risk); }
.pc-value.tone-neutral { color: var(--ink); }

@media (max-width: 640px) {
  .person-cards { grid-template-columns: 1fr; }
}
.people-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
.people-table thead tr { border-bottom: 1.5px solid var(--line); }
.people-table th {
  text-align: left;
  font-family: var(--font-mono);
  font-size: var(--fs-field-label);
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--ink-faint);
  padding: 8px 10px;
}
.people-table td {
  padding: 10px 10px;
  border-bottom: 2px solid #F0F2F7;
  font-family: var(--font-head);
  font-size: var(--fs-field-value);
  color: var(--ink);
  vertical-align: middle;
}
.people-table tbody tr:nth-child(even) { background: var(--bg); }
.people-table tbody tr:hover { background: var(--green-soft); }
.pt-name { font-weight: 700; }
.pt-position { color: var(--ink-soft); font-weight: 500; font-size: var(--fs-field-value-mono); }
.pt-muted { color: var(--ink-faint); }

@media (max-width: 640px) {
  .field-grid { grid-template-columns: 1fr; }
  .people-table { display: block; overflow-x: auto; white-space: nowrap; }
  .highlight-bar { flex-direction: column; }
}
</style>
