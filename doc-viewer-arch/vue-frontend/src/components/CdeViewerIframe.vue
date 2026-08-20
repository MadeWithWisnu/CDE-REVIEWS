<template>
  <div class="cde-iframe-wrapper">
    <div v-if="loading" class="state">Memuat CDE...</div>
    <div v-else-if="error" class="state error">
      {{ error }}
      <button @click="fetchViewerUrl">Coba Lagi</button>
    </div>
    <iframe
      v-else
      :src="viewerUrl"
      class="cde-frame"
      title="CDE Viewer"
      sandbox="allow-scripts allow-same-origin allow-forms"
      referrerpolicy="no-referrer"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  cdeKey: { type: String, required: true },   // mis: 'leasing-individual', 'fl', 'factory'
  appNo: { type: String, required: true },
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
      `${props.apiBaseUrl}/cde/${encodeURIComponent(props.cdeKey)}/viewer-url`,
      { params: { appNo: props.appNo } }
    )
    viewerUrl.value = data.viewerUrl
    scheduleRefresh(data.expiresAtUtc)
  } catch (err) {
    console.error('Gagal memuat viewer URL CDE:', err)
    error.value = 'Gagal memuat CDE. Silakan coba lagi.'
  } finally {
    loading.value = false
  }
}

function scheduleRefresh(expiresAtUtc) {
  clearTimeout(refreshTimer)
  const delay = Math.max(new Date(expiresAtUtc).getTime() - Date.now() - 30_000, 5_000)
  refreshTimer = setTimeout(fetchViewerUrl, delay)
}

watch(() => [props.cdeKey, props.appNo], fetchViewerUrl)
onMounted(fetchViewerUrl)
onBeforeUnmount(() => clearTimeout(refreshTimer))
</script>

<style scoped>
.cde-iframe-wrapper { width: 100%; height: 100%; min-height: 700px; }
.cde-frame { width: 100%; height: 100%; min-height: 700px; border: none; }
.state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .75rem; min-height: 400px; color: #4b5563; }
.state.error { color: #b00020; }
.state button { padding: .4rem 1rem; border: 1px solid #b00020; background: transparent; color: #b00020; border-radius: 4px; cursor: pointer; }
</style>
