<script setup>
/**
 * ContractCamModal.vue
 * ----------------------
 * Full-screen popup that shows a "Report CAM"-style view for a contract the
 * user clicked on elsewhere (Collateral Check > Asset Financing History, or
 * KYC Screening > Relationship Check > Contract(s) Related with Customer).
 *
 * There's no real per-contract CAM backend yet, so this reuses the SAME CAM
 * template/data (by debtor type, exactly like the "Report CAM" tab) and
 * overwrites just the handful of fields we actually know about the clicked
 * contract (Contract No, Customer Name, OTR/Net Finance amount) so the
 * popup clearly reflects THAT contract rather than the current application.
 * Swap `camData` below for a real per-contract fetch once the backend
 * exists — the rendering (AccordionSection + camType.sectionOrder) stays
 * the same either way.
 */
import { reactive, computed, onMounted, onUnmounted } from 'vue';
import AccordionSection from './AccordionSection.vue';
import { getCamType } from '../data/camTypes.js';
import { CAM_SECTION_LIBRARY } from '../data/camSections.js';
import { CAM_DATA } from '../data/camData.js';

const props = defineProps({
  contract: { type: Object, required: true },
  // 'company' | 'personal' — which CAM template to use. Falls back to
  // 'company' if not given so the modal always has something to show.
  debtorType: { type: String, default: 'company' },
});
const emit = defineEmits(['close']);

const camType = computed(() => getCamType(props.debtorType) || getCamType('company'));

// Section key -> { row label -> contract field } — only fields we actually
// have from the clicked contract get overwritten; everything else in the
// CAM template stays as the illustrative example data.
const OVERRIDE_MAP = {
  applicationInfo: { 'Contract No': 'contractNo', 'Application No': 'contractNo' },
  customer: { 'Customer Name': 'customerName', 'Name in Akta': 'customerName' },
  finance: { 'Asset Value': 'otrAmount', 'Net Finance': 'totalNetFinance' },
  disbursement: { 'Asset Value': 'otrAmount' },
};

const camData = computed(() => {
  const base = CAM_DATA[camType.value?.key] || {};
  const clone = JSON.parse(JSON.stringify(base));
  for (const sectionKey in OVERRIDE_MAP) {
    const rows = clone[sectionKey];
    if (!Array.isArray(rows)) continue;
    const fieldMap = OVERRIDE_MAP[sectionKey];
    for (const row of rows) {
      if (row.type !== 'row' && row.type !== 'badge') continue;
      const contractField = fieldMap[row.label];
      const val = contractField ? props.contract[contractField] : null;
      if (val) row.value = val;
    }
  }
  return clone;
});

const camSectionRows = computed(() => (camType.value?.sectionOrder || []).map(item => {
  const keys = Array.isArray(item) ? item : [item];
  return keys.map(key => ({ key, meta: CAM_SECTION_LIBRARY[key] }));
}));
const camAllKeys = computed(() => camSectionRows.value.flat().map(s => s.key));
const openCamSections = reactive({});
camAllKeys.value.forEach((key) => { openCamSections[key] = true; });
function toggleCamSection(key) {
  openCamSections[key] = !openCamSections[key];
}

// Nested contract click (e.g. a "Contract Number" cell inside the CAM data
// itself, like Obligor/Subsidy) opens ANOTHER copy of this same modal on
// top — Vue SFCs can reference themselves recursively by filename, no
// explicit import needed.
const nestedModal = reactive({ open: false, contract: null });
function openNested(c) {
  nestedModal.contract = c;
  nestedModal.open = true;
}
function closeNested() {
  nestedModal.open = false;
}

function close() {
  emit('close');
}
function onOverlayMousedown(e) {
  if (e.target === e.currentTarget) close();
}
function onKeydown(e) {
  if (e.key === 'Escape') close();
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
  document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <div class="ccm-overlay" @mousedown="onOverlayMousedown">
      <div class="ccm-panel">
        <div class="ccm-header">
          <div class="ccm-header-main">
            <div class="ccm-eyebrow">📄 Report CAM — Related Contract</div>
            <div class="ccm-title">Contract No: <span class="ccm-mono">{{ contract.contractNo || '—' }}</span></div>
            <div v-if="contract.customerName || contract.customerNo || contract.status" class="ccm-sub">
              <span v-if="contract.customerName">{{ contract.customerName }}</span>
              <span v-else-if="contract.customerNo">{{ contract.customerNo }}</span>
              <span v-if="contract.status"> · {{ contract.status }}</span>
            </div>
          </div>
          <button class="ccm-close" type="button" @click="close" aria-label="Close">✕</button>
        </div>

        <div class="ccm-body">
          <div
            v-for="(row, ri) in camSectionRows" :key="ri"
            class="ccm-accordion-row" :class="{ 'side-by-side': row.length > 1 }"
          >
            <AccordionSection
              v-for="sec in row" :key="sec.key"
              :meta="sec.meta"
              :rows="camData[sec.key] || []"
              :is-open="openCamSections[sec.key]"
              table-mode
              @toggle="toggleCamSection(sec.key)"
              @contract-click="openNested"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Recursive: clicking a Contract No inside this modal's own CAM data opens another one on top -->
    <ContractCamModal
      v-if="nestedModal.open"
      :contract="nestedModal.contract"
      :debtor-type="debtorType"
      @close="closeNested"
    />
  </Teleport>
</template>

<style scoped>
.ccm-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(13, 19, 30, .6);
  display: flex;
}
.ccm-panel {
  width: 100%;
  height: 100%;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ccm-header {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--navy);
  color: #fff;
  padding: 18px 26px;
}
.ccm-header-main { min-width: 0; }
.ccm-eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .08em;
  text-transform: uppercase;
  opacity: .7;
  margin-bottom: 4px;
}
.ccm-title {
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 19px;
}
.ccm-mono { font-family: var(--font-mono); font-weight: 700; }
.ccm-sub {
  font-family: var(--font-head);
  font-size: 13.5px;
  opacity: .85;
  margin-top: 4px;
}
.ccm-close {
  flex: none;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,.12);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background .15s ease;
}
.ccm-close:hover { background: rgba(255,255,255,.24); }

.ccm-body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 20px 26px 48px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ccm-accordion-row { display: flex; flex-direction: column; gap: 14px; }
.ccm-accordion-row.side-by-side {
  flex-direction: row;
  align-items: flex-start;
}
.ccm-accordion-row.side-by-side > * { flex: 1; min-width: 0; }

@media (max-width: 900px) {
  .ccm-accordion-row.side-by-side { flex-direction: column; }
}
@media (max-width: 640px) {
  .ccm-header { padding: 14px 16px; }
  .ccm-title { font-size: 16.5px; }
  .ccm-body { padding: 14px 14px 32px; }
}
</style>
