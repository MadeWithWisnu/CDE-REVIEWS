<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AccordionSection from './AccordionSection.vue';
import CaReviewUpload from './CaReviewUpload.vue';
import { getCdeType } from '../data/cdeTypes.js';
import { SECTION_LIBRARY, badgeTone } from '../data/sections.js';
import { CDE_DATA } from '../data/cdeData.js';
import { useEmbedGuard } from '../composables/useEmbedGuard.js';

const route = useRoute();
const router = useRouter();
const cdeKey = route.params.cdeKey;
const appNo = route.query.appNo || '';

const cdeType = getCdeType(cdeKey);
const currentData = CDE_DATA[cdeKey] || {};

// Guard for embed mode (opened inside the Confins iframe). If not embed, status
// is 'ready' right away and the page behaves normally (relies on the existing
// Miwanet login session).
const { isEmbed, status, validate } = useEmbedGuard();
onMounted(validate);

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

// Document Upload is always the LAST section in the accordion.
const uploadSectionOpen = reactive({ open: false });
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

    <div class="doc-header">
      <div class="doc-header-icon" :style="{ background: cdeType.bg, color: cdeType.color }">{{ cdeType.icon }}</div>
      <div>
        <div class="doc-header-name">{{ cdeType.name }}</div>
        <div class="doc-header-desc">{{ cdeType.description }}</div>
      </div>
      <div v-if="appNo" class="app-no-tag">App No<br /><b>{{ appNo }}</b></div>
    </div>

    <div v-if="currentData.verdict" class="verdict">
      <div class="verdict-left">
        <div class="label">Final Score Result</div>
        <div class="value">{{ currentData.verdict.result }}</div>
        <div class="verdict-meta">
          <div><b>{{ currentData.verdict.slikAggregate }}</b>SLIK Aggregate</div>
          <div><b>{{ currentData.verdict.surveyTreatment }}</b>Survey Treatment</div>
        </div>
      </div>
      <div class="verdict-pill" :class="badgeTone(currentData.verdict.instantApproval)">
        Instant Approval: {{ currentData.verdict.instantApproval }}
      </div>
    </div>

    <div class="accordion">
      <AccordionSection
        v-for="sec in activeSections" :key="sec.key"
        :meta="sec.meta"
        :rows="currentData[sec.key] || []"
        :is-open="openSections[sec.key]"
        @toggle="toggleSection(sec.key)"
      />

      <!-- Document Upload — always the last section -->
      <AccordionSection
        :meta="{ title: 'Document Upload', icon: '📎' }"
        :is-open="uploadSectionOpen.open"
        @toggle="uploadSectionOpen.open = !uploadSectionOpen.open"
      >
        <CaReviewUpload />
      </AccordionSection>
    </div>

    <footer class="note">Data shown reflects the latest screening result for {{ cdeType.name }}.</footer>
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

.doc-header {
  display: flex;
  align-items: center;
  gap: 18px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 20px;
}
.doc-header-icon {
  width: 52px; height: 52px; border-radius: 14px; flex: none;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
}
.doc-header-name { font-family: var(--font-head); font-weight: 800; font-size: 21px; color: var(--ink); }
.doc-header-desc { font-size: 14.5px; color: var(--ink-soft); margin-top: 3px; }
.app-no-tag {
  margin-left: auto;
  text-align: right;
  font-size: 12px;
  color: var(--ink-faint);
  text-transform: uppercase;
  letter-spacing: .05em;
  font-family: var(--font-mono);
}
.app-no-tag b {
  display: block;
  font-family: var(--font-head);
  font-size: 15px;
  color: var(--ink);
  text-transform: none;
  letter-spacing: 0;
  margin-top: 2px;
}

.verdict {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--navy);
  color: #fff; border-radius: var(--radius); padding: 24px 28px; margin-bottom: 22px;
  flex-wrap: wrap; gap: 16px;
}
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

footer.note { margin-top: 28px; font-size: 14px; color: var(--ink-faint); text-align: center; }
</style>
