<script setup>
import { ref, onBeforeUnmount } from 'vue';

/**
 * CaReviewUpload.vue
 * -------------------
 * Tombol upload PDF review dari CA + viewer inline (modal).
 *
 * CATATAN INTEGRASI BACKEND:
 * Saat ini file HANYA disimpan di memory browser (via URL.createObjectURL),
 * jadi hilang kalau halaman di-reload — ini cukup untuk demo/preview cepat.
 * Untuk pemakaian produksi, ganti bagian `onFileChange` supaya meng-upload
 * file ke endpoint API (mis. `ReportMLCI.Web` / storage), dan `pdfUrl` diisi
 * dari URL hasil upload (atau dari data yang sudah ada kalau CDE ini sudah
 * pernah di-review sebelumnya).
 */
const props = defineProps({
  // Opsional: kalau reviewnya sudah ada sebelumnya (dari backend), bisa
  // di-pass di sini supaya viewer langsung siap tanpa perlu upload ulang.
  existingUrl: { type: String, default: '' },
  existingName: { type: String, default: '' },
});

const fileInput = ref(null);
const fileName = ref(props.existingName);
const pdfUrl = ref(props.existingUrl);
const uploadedAt = ref(props.existingUrl ? 'tersimpan' : '');
const showViewer = ref(false);
const errorMsg = ref('');

function triggerFileSelect() {
  errorMsg.value = '';
  fileInput.value?.click();
}

function onFileChange(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  if (file.type !== 'application/pdf') {
    errorMsg.value = 'File harus berformat PDF.';
    e.target.value = '';
    return;
  }

  // revoke URL lama biar tidak bocor memory kalau ganti file
  if (pdfUrl.value && pdfUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(pdfUrl.value);
  }

  pdfUrl.value = URL.createObjectURL(file);
  fileName.value = file.name;
  uploadedAt.value = new Date().toLocaleString('id-ID');
  errorMsg.value = '';
  e.target.value = ''; // reset input biar bisa upload file sama lagi kalau perlu
}

function removeFile() {
  if (pdfUrl.value && pdfUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(pdfUrl.value);
  }
  pdfUrl.value = '';
  fileName.value = '';
  uploadedAt.value = '';
  showViewer.value = false;
}

function openViewer() { showViewer.value = true; }
function closeViewer() { showViewer.value = false; }

onBeforeUnmount(() => {
  if (pdfUrl.value && pdfUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(pdfUrl.value);
  }
});
</script>

<template>
  <div class="ca-upload">
    <input ref="fileInput" type="file" accept="application/pdf" class="hidden-input" @change="onFileChange" />

    <div v-if="!pdfUrl" class="upload-empty">
      <div class="upload-icon">📄</div>
      <div class="upload-text">
        <div class="upload-title">Review dari CA</div>
        <div class="upload-sub">Belum ada file PDF yang diupload untuk aplikasi ini.</div>
      </div>
      <button class="btn btn-primary" @click="triggerFileSelect">⬆ Upload PDF Review</button>
    </div>

    <div v-else class="upload-filled">
      <div class="file-icon">📄</div>
      <div class="file-info">
        <div class="file-name">{{ fileName || 'Review CA.pdf' }}</div>
        <div class="file-meta">{{ uploadedAt ? `Diupload ${uploadedAt}` : 'Tersimpan' }}</div>
      </div>
      <div class="file-actions">
        <button class="btn btn-secondary" @click="openViewer">👁 View PDF</button>
        <button class="btn btn-ghost" @click="triggerFileSelect">Ganti file</button>
        <button class="btn btn-ghost danger" @click="removeFile">Hapus</button>
      </div>
    </div>

    <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

    <Teleport to="body">
      <div v-if="showViewer" class="modal-backdrop" @click.self="closeViewer">
        <div class="modal-panel">
          <div class="modal-head">
            <span>{{ fileName || 'Review CA.pdf' }}</span>
            <button class="modal-close" @click="closeViewer">✕</button>
          </div>
          <iframe :src="pdfUrl" class="modal-frame" title="CA Review PDF"></iframe>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.ca-upload {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px 20px;
  margin-bottom: 20px;
  margin-top: 16px;
}
.hidden-input { display: none; }

.upload-empty, .upload-filled {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.upload-icon, .file-icon {
  width: 44px; height: 44px; border-radius: 12px; flex: none;
  display: flex; align-items: center; justify-content: center;
  background: var(--green-soft); color: var(--green);
  font-size: 20px;
}
.upload-text, .file-info { flex: 1; min-width: 160px; }
.upload-title, .file-name {
  font-family: var(--font-head); font-weight: 700; font-size: 16px; color: var(--ink);
}
.upload-sub, .file-meta { font-size: 13.5px; color: var(--ink-soft); margin-top: 2px; }

.file-actions { display: flex; gap: 8px; flex-wrap: wrap; }

.btn {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: .15s ease;
  white-space: nowrap;
}
.btn-primary { background: var(--navy); color: #fff; }
.btn-primary:hover { background: var(--navy-soft); }
.btn-secondary { background: var(--green); color: #fff; }
.btn-secondary:hover { opacity: .9; }
.btn-ghost { background: var(--bg); color: var(--ink-soft); }
.btn-ghost:hover { background: var(--line); }
.btn-ghost.danger { color: var(--risk); }

.error-msg { color: var(--risk); font-size: 13px; margin: 10px 0 0; }

.modal-backdrop {
  position: fixed; inset: 0; background: rgba(18, 35, 63, .55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 30px;
}
.modal-panel {
  background: #fff; border-radius: 14px; overflow: hidden;
  width: min(1000px, 100%); height: min(90vh, 1000px);
  display: flex; flex-direction: column;
  box-shadow: 0 24px 60px -20px rgba(0,0,0,.5);
}
.modal-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 18px; border-bottom: 1px solid var(--line);
  font-family: var(--font-head); font-weight: 700; font-size: 15px; color: var(--ink);
}
.modal-close {
  border: none; background: var(--bg); width: 32px; height: 32px; border-radius: 8px;
  cursor: pointer; font-size: 15px; color: var(--ink-soft);
}
.modal-close:hover { background: var(--line); }
.modal-frame { flex: 1; width: 100%; border: none; }

@media (max-width: 640px) {
  .upload-empty, .upload-filled { flex-direction: column; align-items: flex-start; }
  .file-actions { width: 100%; }
}
</style>
