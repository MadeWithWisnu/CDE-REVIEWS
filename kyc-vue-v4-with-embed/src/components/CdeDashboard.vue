<script setup>
import { reactive, ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AccordionSection from './AccordionSection.vue';
import ContractCamModal from './ContractCamModal.vue';
import CaReviewUpload from './CaReviewUpload.vue';
import { getCdeType } from '../data/cdeTypes.js';
import { SECTION_LIBRARY, badgeTone } from '../data/sections.js';
import { CDE_DATA } from '../data/cdeData.js';
import { getCamType } from '../data/camTypes.js';
import { CAM_SECTION_LIBRARY } from '../data/camSections.js';
import { CAM_DATA } from '../data/camData.js';
import { getCbasType } from '../data/cbasTypes.js';
import { CBAS_SECTION_LIBRARY } from '../data/cbasSections.js';
import { CBAS_DATA } from '../data/cbasData.js';
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

// Summary CBAS — same App No/debtor type again, third tab.
const cbasType = cdeType ? getCbasType(cdeType.debtorType) : null;
const cbasData = cbasType ? (CBAS_DATA[cbasType.key] || {}) : {};

// Guard for embed mode (opened inside the Confins iframe). If not embed, status
// is 'ready' right away and the page behaves normally (relies on the existing
// Miwanet login session).
const { isEmbed, status, validate } = useEmbedGuard();
onMounted(validate);

// --- Tabs: CDE / Report CAM / Summary CBAS — same App No, different section set ---
const activeTab = ref('cde'); // 'cde' | 'cam' | 'cbas'

const activeSections = (cdeType?.sectionOrder || []).map(key => ({
  key,
  meta: SECTION_LIBRARY[key],
}));
const openSections = reactive(
  Object.fromEntries(activeSections.map((s) => [s.key, true]))
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
  Object.fromEntries(camAllKeys.map((key) => [key, true]))
);
function toggleCamSection(key) {
  openCamSections[key] = !openCamSections[key];
}

// Summary CBAS — flat list, single section (Credit Facilities Summary).
const cbasActiveSections = (cbasType?.sectionOrder || []).map(key => ({
  key,
  meta: CBAS_SECTION_LIBRARY[key],
}));
const openCbasSections = reactive(
  Object.fromEntries(cbasActiveSections.map((s) => [s.key, true]))
);
function toggleCbasSection(key) {
  openCbasSections[key] = !openCbasSections[key];
}

// Document Upload is always the LAST section in the CDE tab.
const uploadSectionOpen = reactive({ open: false });

// --- Floating right-side section nav — one per tab (CDE / Report CAM /
// Summary CBAS), each listing that tab's own accordion sections. Clicking
// an entry scrolls + opens that section; scrollspy highlights whichever is
// currently in view. Each tab keeps its own set of DOM anchors since a
// section key (e.g. "customer") can appear in more than one tab. ---
const sectionAnchors = { cde: {}, cam: {}, cbas: {} };
function setSectionAnchor(tab, key, el) {
  if (el) sectionAnchors[tab][key] = el;
}
function sectionMeta(tab, key) {
  if (tab === 'cde') return key === 'documentUpload' ? { title: 'Document Upload', icon: '📎' } : SECTION_LIBRARY[key];
  if (tab === 'cam') return CAM_SECTION_LIBRARY[key];
  if (tab === 'cbas') return CBAS_SECTION_LIBRARY[key];
  return null;
}
const navKeysByTab = {
  cde: [...activeSections.map((s) => s.key), 'documentUpload'],
  cam: camAllKeys,
  cbas: cbasActiveSections.map((s) => s.key),
};
const currentNavKeys = computed(() => navKeysByTab[activeTab.value] || []);
const activeSectionKey = ref(currentNavKeys.value[0] || '');

function openSectionByKey(tab, key) {
  if (tab === 'cde') {
    if (key === 'documentUpload') uploadSectionOpen.open = true;
    else openSections[key] = true;
  } else if (tab === 'cam') {
    openCamSections[key] = true;
  } else if (tab === 'cbas') {
    openCbasSections[key] = true;
  }
}
function scrollToSection(key) {
  const el = sectionAnchors[activeTab.value]?.[key];
  if (!el) return;
  openSectionByKey(activeTab.value, key);
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function updateActiveSection() {
  const tab = activeTab.value;
  const keys = currentNavKeys.value;
  const anchors = sectionAnchors[tab] || {};
  const offset = (isEmbed.value ? 0 : 64) + 90; // topbar + sticky tab-bar
  let current = keys[0] || '';
  for (const key of keys) {
    const el = anchors[key];
    if (!el) continue;
    if (el.getBoundingClientRect().top - offset <= 0) current = key;
  }
  activeSectionKey.value = current;
}
watch(activeTab, () => nextTick(updateActiveSection));

// Side nav can be hidden by the user — one shared preference, remembered
// across reloads (only one tab's nav is ever shown at a time anyway).
function readSideNavHidden() {
  try { return localStorage.getItem('sideNavHidden') === '1'; }
  catch { return false; }
}
const sideNavHidden = ref(readSideNavHidden());
function toggleSideNav() {
  sideNavHidden.value = !sideNavHidden.value;
  try { localStorage.setItem('sideNavHidden', sideNavHidden.value ? '1' : '0'); }
  catch { /* storage unavailable (e.g. blocked in embed iframe) — ignore */ }
}

// Contract No popup — "seperti Report CAM" full-screen view, opened by
// clicking a Contract No in Asset Financing History or Relationship Check
// (Contract(s) Related with Customer). See AccordionSection's
// `contract-click` emit and ContractCamModal.vue.
const contractModal = reactive({ open: false, contract: null });
function openContractModal(contract) {
  contractModal.contract = contract;
  contractModal.open = true;
}
function closeContractModal() {
  contractModal.open = false;
}

const currentVerdict = computed(() => {
  if (activeTab.value === 'cde') return currentData.verdict;
  if (activeTab.value === 'cam') return camData.verdict;
  return null; // Summary CBAS shows its own highlight inside the section instead
});
const verdictLabel = computed(() => (activeTab.value === 'cde' ? 'Final Score Result' : 'Credit Recommendation'));

// --- Scroll-to-top button: shows once the page has been scrolled down a
// bit, hidden near the top. Listens on window since the page itself
// scrolls (the sidebar/topbar are sticky, not the content). ---
const showScrollTop = ref(false);
function onWindowScroll() {
  showScrollTop.value = window.scrollY > 320;
  updateActiveSection();
}
onMounted(() => window.addEventListener('scroll', onWindowScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onWindowScroll));
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
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

    <!-- Tab switcher: CDE / Report CAM — same App No, different section set.
         Sticky so it stays visible (freezes at the top) while the section
         list below is scrolled — top offset accounts for the sticky topbar
         (absent in embed mode). -->
    <div class="tab-bar" :style="{ top: isEmbed ? '0px' : '64px' }">
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
      <button
        class="tab-btn" :class="{ active: activeTab === 'cbas' }"
        :disabled="!cbasType"
        @click="cbasType && (activeTab = 'cbas')"
      >
        🏦 Summary CBAS
      </button>
    </div>

    <div v-if="currentVerdict" class="verdict">
      <div class="verdict-left">
        <div v-if="appNo" class="verdict-appno">App No: <b>{{ appNo }}</b></div>
        <div class="verdict-appno">Source Data: Mobile Order</div>
        <div class="label">{{ verdictLabel }}</div>
        <div class="value">{{ currentVerdict.result }}</div>
        <div class="verdict-meta">
          <div class="vm-item">
            <div class="vm-label">SLIK Aggregate</div>
            <div class="vm-value">{{ currentVerdict.slikAggregate }}</div>
          </div>
          <div class="vm-item">
            <div class="vm-label">Survey Treatment</div>
            <div class="vm-value">{{ currentVerdict.surveyTreatment }}</div>
          </div>
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
        :ref="(el) => setSectionAnchor('cde', sec.key, el?.$el || el)"
        :style="{ scrollMarginTop: (isEmbed ? 0 : 64) + 90 + 'px' }"
        :meta="sec.meta"
        :rows="currentData[sec.key] || []"
        :is-open="openSections[sec.key]"
        table-mode
        @toggle="toggleSection(sec.key)"
        @contract-click="openContractModal"
      />

      <!-- Document Upload — always the last section of the CDE tab -->
      <AccordionSection
        :ref="(el) => setSectionAnchor('cde', 'documentUpload', el?.$el || el)"
        :style="{ scrollMarginTop: (isEmbed ? 0 : 64) + 90 + 'px' }"
        :meta="{ title: 'Document Upload', icon: '📎' }"
        :is-open="uploadSectionOpen.open"
        table-mode
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
          :ref="(el) => setSectionAnchor('cam', sec.key, el?.$el || el)"
          :style="{ scrollMarginTop: (isEmbed ? 0 : 64) + 90 + 'px' }"
          :meta="sec.meta"
          :rows="camData[sec.key] || []"
          :is-open="openCamSections[sec.key]"
          table-mode
          @toggle="toggleCamSection(sec.key)"
          @contract-click="openContractModal"
        />
      </div>
    </div>

    <!-- Summary CBAS tab -->
    <div v-else-if="activeTab === 'cbas' && cbasType" class="accordion">
      <AccordionSection
        v-for="sec in cbasActiveSections" :key="sec.key"
        :ref="(el) => setSectionAnchor('cbas', sec.key, el?.$el || el)"
        :style="{ scrollMarginTop: (isEmbed ? 0 : 64) + 90 + 'px' }"
        :meta="sec.meta"
        :rows="cbasData[sec.key] || []"
        :is-open="openCbasSections[sec.key]"
        table-mode
        @toggle="toggleCbasSection(sec.key)"
      />
    </div>

    <!-- Floating right-side section nav — same one for whichever tab is
         active (CDE / Report CAM / Summary CBAS), listing that tab's own
         sections. Hidden state is shared and remembered across reloads. -->
    <nav v-if="currentNavKeys.length && !sideNavHidden" class="side-nav" aria-label="Section navigation">
      <div class="side-nav-head">
        <div class="side-nav-title">Sections</div>
        <button type="button" class="side-nav-hide" title="Hide" aria-label="Hide sections nav" @click="toggleSideNav">✕</button>
      </div>
      <button
        v-for="key in currentNavKeys" :key="key"
        type="button"
        class="side-nav-item"
        :class="{ active: activeSectionKey === key }"
        :title="sectionMeta(activeTab, key)?.title"
        @click="scrollToSection(key)"
      >
        <span class="side-nav-icon">{{ sectionMeta(activeTab, key)?.icon }}</span>
        <span class="side-nav-label">{{ sectionMeta(activeTab, key)?.title }}</span>
      </button>
    </nav>

    <!-- Re-open pill, shown when the sections nav has been hidden -->
    <button
      v-if="currentNavKeys.length && sideNavHidden"
      type="button"
      class="side-nav-reopen"
      title="Show sections"
      aria-label="Show sections nav"
      @click="toggleSideNav"
    >
      📑
    </button>

    <footer class="note">
      Data shown reflects the latest {{ activeTab === 'cde' ? 'screening result' : activeTab === 'cam' ? 'Credit Approval Memorandum' : 'credit bureau (SLIK) summary' }} for App No {{ appNo || cdeKey }}.
    </footer>

    <!-- Scroll-to-top: appears after scrolling down, jumps smoothly back up -->
    <Transition name="scroll-top-fade">
      <button
        v-if="showScrollTop"
        type="button"
        class="scroll-top-btn"
        title="Back to top"
        aria-label="Back to top"
        @click="scrollToTop"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </Transition>
  </template>

  <!-- Contract No popup — full-screen "Report CAM"-style view -->
  <ContractCamModal
    v-if="contractModal.open"
    :contract="contractModal.contract"
    :debtor-type="cdeType ? cdeType.debtorType : 'company'"
    @close="closeContractModal"
  />
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
  position: sticky;
  z-index: 9;
  box-shadow: 0 6px 14px rgba(30, 41, 71, 0.08);
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
.vm-label { font-size: 12px; letter-spacing: .06em; text-transform: uppercase; opacity: .65; font-family: var(--font-mono); }
.vm-value { font-family: var(--font-head); font-size: 16px; font-weight: 700; margin-top: 3px; }

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

/* Floating right-side section nav (Report CAM tab) */
.side-nav {
  position: fixed;
  right: clamp(10px, 2vw, 22px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
  width: 208px;
  max-height: 74vh;
  overflow-y: auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 8px 22px rgba(30, 41, 71, 0.12);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.side-nav-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 4px 4px 8px 8px;
}
.side-nav-title {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
.side-nav-hide {
  flex: none;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: none;
  background: var(--bg);
  color: var(--ink-faint);
  font-size: 11px;
  line-height: 1;
  cursor: pointer;
  transition: background .15s ease, color .15s ease;
}
.side-nav-hide:hover { background: var(--line); color: var(--ink); }
.side-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  border-radius: 8px;
  padding: 8px 8px;
  font-family: var(--font-head);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-soft);
  cursor: pointer;
  transition: background .15s ease, color .15s ease;
}
.side-nav-item:hover { background: var(--bg); color: var(--ink); }
.side-nav-item.active { background: var(--navy); color: #fff; }
.side-nav-icon { flex: none; font-size: 14px; line-height: 1; }
.side-nav-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 1240px) {
  .side-nav { display: none; }
  .side-nav-reopen { display: none; }
}

/* Re-open pill for the hidden sections nav */
.side-nav-reopen {
  position: fixed;
  right: clamp(10px, 2vw, 22px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  font-size: 17px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(30, 41, 71, 0.16);
  transition: background .15s ease, transform .15s ease;
}
.side-nav-reopen:hover { background: var(--bg); transform: translateY(-50%) translateX(-2px); }

/* Floating "back to top" button */
.scroll-top-btn {
  position: fixed;
  right: clamp(16px, 3vw, 32px);
  bottom: clamp(16px, 3vw, 32px);
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: none;
  background: var(--navy);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(30, 41, 71, 0.28);
  z-index: 20;
  transition: background .15s ease, transform .15s ease;
}
.scroll-top-btn:hover { background: var(--green-dark); transform: translateY(-2px); }
.scroll-top-fade-enter-active, .scroll-top-fade-leave-active { transition: opacity .18s ease, transform .18s ease; }
.scroll-top-fade-enter-from, .scroll-top-fade-leave-to { opacity: 0; transform: translateY(8px); }

@media (max-width: 640px) {
  .tab-bar { width: 100%; }
  .tab-btn { flex: 1; padding: 10px 12px; font-size: 13.5px; }
  .scroll-top-btn { width: 42px; height: 42px; }
}
</style>
