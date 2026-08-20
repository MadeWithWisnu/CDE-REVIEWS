<template>
  <div class="doc-viewer-wrapper">
    <div v-if="loading" class="doc-viewer-state">
      Memuat dokumen...
    </div>

    <div v-else-if="error" class="doc-viewer-state doc-viewer-error">
      {{ error }}
      <button class="retry-btn" @click="fetchViewerUrl">Coba Lagi</button>
    </div>

    <iframe
      v-else
      :src="viewerUrl"
      class="doc-viewer-frame"
      title="Document Viewer"
      sandbox="allow-scripts allow-same-origin allow-forms"
      referrerpolicy="no-referrer"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  docId: { type: String, required: true },
  docType: { type: String, default: '' },
  // Endpoint Confins Gateway (BE), BUKAN Miwanet langsung
  apiBaseUrl: { type: String, default: '/api' }
})

const loading = ref(true)
const error = ref('')
const viewerUrl = ref('')

let refreshTimer = null

async function fetchViewerUrl() {
  loading.value = true
  error.value = ''

  try {
    const { data } = await axios.get(
      `${props.apiBaseUrl}/documents/${encodeURIComponent(props.docId)}/viewer-url`,
      { params: { docType: props.docType } }
    )

    viewerUrl.value = data.viewerUrl

    // Token short-lived (mis. 5 menit) - jadwalkan refresh sebelum expired
    // supaya kalau user membuka dokumen lama, iframe tetap bisa direfresh otomatis.
    scheduleRefresh(data.expiresAtUtc)
  } catch (err) {
    console.error('Gagal memuat viewer URL:', err)
    error.value = 'Gagal memuat dokumen. Silakan coba lagi.'
  } finally {
    loading.value = false
  }
}

function scheduleRefresh(expiresAtUtc) {
  clearTimeout(refreshTimer)

  const expiresAt = new Date(expiresAtUtc).getTime()
  const now = Date.now()
  // Refresh 30 detik sebelum expired, minimal delay 5 detik
  const delay = Math.max(expiresAt - now - 30_000, 5_000)

  refreshTimer = setTimeout(fetchViewerUrl, delay)
}

watch(() => [props.docId, props.docType], () => {
  fetchViewerUrl()
})

onMounted(fetchViewerUrl)
onBeforeUnmount(() => clearTimeout(refreshTimer))
</script>

<style scoped>
.doc-viewer-wrapper {
  width: 100%;
  height: 100%;
  min-height: 600px;
  position: relative;
}

.doc-viewer-frame {
  width: 100%;
  height: 100%;
  min-height: 600px;
  border: none;
}

.doc-viewer-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  gap: 0.75rem;
  color: #4b5563;
  font-size: 0.95rem;
}

.doc-viewer-error {
  color: #b00020;
}

.retry-btn {
  padding: 0.4rem 1rem;
  border: 1px solid #b00020;
  background: transparent;
  color: #b00020;
  border-radius: 4px;
  cursor: pointer;
}

.retry-btn:hover {
  background: #fdecea;
}
</style>
