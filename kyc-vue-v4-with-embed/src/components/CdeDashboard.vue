<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AccordionSection from './AccordionSection.vue';
import CaReviewUpload from './CaReviewUpload.vue';
import { getCdeType } from '../data/cdeTypes.js';
import { SECTION_LIBRARY, badgeTone } from '../data/sections.js';
import { CDE_DATA } from '../data/cdeData.js';
import { getCamType } from '../data/camTypes.js';
import { CAM_SECTION_LIBRARY } from '../data/camSections.js';
import { CAM_DATA } from '../data/camData.js';
import { useEmbedGuard } from '../composables/useEmbedGuard.js';

const route = useRoute();
const router = useRouter();
const cdeKey = route.params.cdeKey;
const appNo = route.query.appNo || '';

const cdeType = getCdeType(cdeKey);
const currentData = CDE_DATA[cdeKey] || {};

// Report CAM shares the SAME Application No as CDE — only the debtor type
// (personal/company) is needed to pick the matching CAM template. Both tabs
// on this page always refer to the one application being viewed.
const camType = cdeType ? getCamType(cdeType.debtorType) : null;
const camData = camType ? (CAM_DATA[camType.key] || {}) : {};

// Guard for embed mode (opened inside the Confins iframe). If not embed, status
// is 'ready' right away and the page behaves normally (relies on the existing
// Miwanet login session).
const { isEmbed, status, validate } = useEmbedGuard();
onMounted(validate);

// --- Tabs: CDE / Report CAM — same App No, different section set ---
const activeTab = ref('cde'); // 'cde' | 'cam'

const activeSections = (cdeType?.sectionOrder || []).map(key => ({
  key,
  meta: SECTION_LIBRARY[key],
}));
const openSections = reactive(
  Object.fromEntries(activeSections.map((s, i) => [s.key, i < 2]))
);
function toggleSection(key) {
  openSections[key] = !openSections[key];
}

// sectionOrder items can be a plain key (full-width section) OR an array of
// keys (rendered side-by-side in one row) — matches the source CAM report's
// own 2-column layout for some blocks (e.g. Finance Information sits next
// to Insurance/Notary/Agency, Asset Information next to Dealer Information).
const camSectionRows = (camType?.sectionOrder || []).map(item => {
  const keys = Array.isArray(item) ? item : [item];
  return keys.map(key => ({ key, meta: CAM_SECTION_LIBRARY[key] }));
});
const camAllKeys = camSectionRows.flat().map(s => s.key);
const openCamSections = reactive(
  Object.fromEntries(camAllKeys.map((key, i) => [key, i < 2]))
);
function toggleCamSection(key) {
  openCamSections[key] = !openCamSections[key];
}

// Document Upload is always the LAST section in the CDE tab.
const uploadSectionOpen = reactive({ open: false });

const currentVerdict = computed(() => (activeTab.value === 'cde' ? currentData.verdict : camData.verdict));
const verdictLabel = computed(() => (activeTab.value === 'cde' ? 'Final Score Result' : 'Credit Recommendation'));
</script>

<template>
  <!-- Embed mode: checking token with Miwanet BE, don't show anything yet -->
  <div v-if="isEmbed && status === 'checking'" class="not-found">
    <p>Loading...</p>
  </div>

  <!-- Embed mode: token missing / invalid / expired -->
  <div v-else-if="isEmbed && status === 'invalid'" class="not-found">
    <p>Access invalid or expired. Please reopen this from Confins.</p>
  </div>

  <div v-else-if="!cdeType" class="not-found">
    <p>CDE document <code>{{ cdeKey }}</code> not found.</p>
    <button class="back-link" @click="router.push('/')">← Back to search</button>
  </div>

  <template v-else>
    <button v-if="!isEmbed" class="back-link" @click="router.back()">← Back to document list</button>

    <!-- Tab switcher: CDE / Report CAM — same App No, different section set -->
    <div class="tab-bar">
      <button class="tab-btn" :class="{ active: activeTab === 'cde' }" @click="activeTab = 'cde'">
        🔍 CDE
      </button>
      <button
        class="tab-btn" :class="{ active: activeTab === 'cam' }"
        :disabled="!camType"
        @click="camType && (activeTab = 'cam')"
      >
        📄 Report CAM
      </button>
    </div>

    <div v-if="currentVerdict" class="verdict">
      <div class="verdict-left">
        <div v-if="appNo" class="verdict-appno">App No: <b>{{ appNo }}</b></div>
        <div class="label">{{ verdictLabel }}</div>
        <div class="value">{{ currentVerdict.result }}</div>
        <div class="verdict-meta">
          <div><b>{{ currentVerdict.slikAggregate }}</b>SLIK Aggregate</div>
          <div><b>{{ currentVerdict.surveyTreatment }}</b>Survey Treatment</div>
        </div>
      </div>
      <div class="verdict-pill" :class="badgeTone(currentVerdict.instantApproval)">
        Instant Approval: {{ currentVerdict.instantApproval }}
      </div>
    </div>

    <!-- CDE tab -->
    <div v-if="activeTab === 'cde'" class="accordion">
      <AccordionSection
        v-for="sec in activeSections" :key="sec.key"
        :meta="sec.meta"
        :rows="currentData[sec.key] || []"
        :is-open="openSections[sec.key]"
        @toggle="toggleSection(sec.key)"
      />

      <!-- Document Upload — always the last section of the CDE tab -->
      <AccordionSection
        :meta="{ title: 'Document Upload', icon: '📎' }"
        :is-open="uploadSectionOpen.open"
        @toggle="uploadSectionOpen.open = !uploadSectionOpen.open"
      >
        <CaReviewUpload />
      </AccordionSection>
    </div>

    <!-- Report CAM tab -->
    <div v-else-if="activeTab === 'cam' && camType" class="accordion">
      <div
        v-for="(row, ri) in camSectionRows" :key="ri"
        class="accordion-row" :class="{ 'side-by-side': row.length > 1 }"
      >
        <AccordionSection
          v-for="sec in row" :key="sec.key"
          :meta="sec.meta"
          :rows="camData[sec.key] || []"
          :is-open="openCamSections[sec.key]"
          table-mode
          @toggle="toggleCamSection(sec.key)"
        />
      </div>
    </div>

    <footer class="note">
      Data shown reflects the latest {{ activeTab === 'cde' ? 'screening result' : 'Credit Approval Memorandum' }} for App No {{ appNo || cdeKey }}.
    </footer>
  </template>
</template>

<style scoped>
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

.not-found {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 34px;
  text-align: center;
  color: var(--ink-soft);
  font-size: 16px;
}

.tab-bar {
  display: flex;
  gap: 6px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 20px;
  width: fit-content;
}
.tab-btn {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14.5px;
  padding: 10px 22px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
  transition: background .15s ease, color .15s ease;
}
.tab-btn:hover:not(:disabled):not(.active) { background: var(--bg); }
.tab-btn.active { background: var(--navy); color: #fff; }
.tab-btn:disabled { opacity: .4; cursor: not-allowed; }

.verdict {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--navy);
  color: #fff; border-radius: var(--radius); padding: 24px 28px; margin-bottom: 22px;
  flex-wrap: wrap; gap: 16px;
}
.verdict-appno {
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: .04em;
  opacity: .7;
  margin-bottom: 8px;
}
.verdict-appno b { font-family: var(--font-head); font-weight: 700; opacity: 1; letter-spacing: 0; }
.verdict-left .label { font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase; opacity: .65; font-family: var(--font-mono); }
.verdict-left .value { font-family: var(--font-head); font-size: 24px; font-weight: 800; margin-top: 4px; }
.verdict-pill { font-family: var(--font-head); font-weight: 700; font-size: 15px; padding: 11px 20px; border-radius: 999px; white-space: nowrap; }
.verdict-pill.good { background: #DFF6E9; color: #0F5C39; }
.verdict-pill.mid { background: #FBEBCC; color: #8A5A0E; }
.verdict-pill.risk { background: #FBDADA; color: #8E2222; }
.verdict-meta { display: flex; gap: 26px; margin-top: 16px; flex-wrap: wrap; }
.verdict-meta div { font-size: 14px; opacity: .85; }
.verdict-meta b { display: block; font-family: var(--font-head); font-size: 16px; font-weight: 700; opacity: 1; }

.accordion { display: flex; flex-direction: column; gap: 14px; }

.accordion-row { display: flex; flex-direction: column; gap: 14px; }
.accordion-row.side-by-side {
  flex-direction: row;
  align-items: flex-start;
}
.accordion-row.side-by-side > * { flex: 1; min-width: 0; }

@media (max-width: 900px) {
  .accordion-row.side-by-side { flex-direction: column; }
}

footer.note { margin-top: 28px; font-size: 14px; color: var(--ink-faint); text-align: center; }

@media (max-width: 640px) {
  .tab-bar { width: 100%; }
  .tab-btn { flex: 1; padding: 10px 12px; font-size: 13.5px; }
}
</style>
