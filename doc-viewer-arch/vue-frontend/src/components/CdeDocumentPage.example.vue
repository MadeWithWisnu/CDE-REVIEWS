<!--
  Contoh pemakaian DocViewerIframe.vue di halaman CDE / hasil pencarian dokumen.
  Ganti nama file ini (hapus .example) dan sesuaikan dengan struktur cdeTypes.js / cdeData.js existing.
-->
<template>
  <div class="cde-document-page">
    <h2>{{ selectedDoc?.title }}</h2>

    <DocViewerIframe
      v-if="selectedDoc"
      :doc-id="selectedDoc.applicationNo"
      :doc-type="selectedDoc.docType"
      api-base-url="/api"
    />

    <div v-else class="empty-state">
      Pilih dokumen dari hasil pencarian untuk melihat preview.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DocViewerIframe from './DocViewerIframe.vue'

// selectedDoc didapat dari hasil pencarian CDE (mis. via cdeData.js / API pencarian existing)
// Contoh bentuk data:
// { applicationNo: 'APP-2025-00123', docType: 'PerjanjianIF', title: 'Perjanjian Pembiayaan IF' }
const selectedDoc = ref(null)
</script>

<style scoped>
.cde-document-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.empty-state {
  padding: 2rem;
  color: #6b7280;
  text-align: center;
}
</style>
