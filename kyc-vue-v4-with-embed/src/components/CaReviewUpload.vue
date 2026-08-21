<script setup>
import { reactive, ref, onBeforeUnmount } from 'vue';

/**
 * CaReviewUpload.vue
 * -------------------
 * Document Upload section.
 * - "CA Review" is mandatory and always present as the first row.
 * - "+ Add Section" lets the user add extra upload slots for other files.
 * - Files stay in-memory only until "Send" is pressed — BACKEND INTEGRATION:
 *   replace the body of `sendAll()` with a real call to the DMS API, and
 *   `existingItems` prop can be used to hydrate already-sent files coming
 *   from the backend on load.
 * - Delete is only available BEFORE a file has been sent to DMS. Once sent,
 *   the only allowed action is Replace (uploading a new file overwrites it).
 */
const props = defineProps({
  existingItems: { type: Array, default: () => [] }, // [{ id, label, fileName, fileUrl, sent }]
});

let uid = 0;
function nextId() { return `doc-${Date.now()}-${uid++}`; }

function makeItem(overrides = {}) {
  return reactive({
    id: nextId(),
    label: 'Additional Document',
    mandatory: false,
    editableLabel: true,
    fileName: '',
    fileUrl: '',
    uploadedAt: '',
    sent: false,
    ...overrides,
  });
}

const items = reactive(
  props.existingItems.length
    ? props.existingItems.map(it => makeItem(it))
    : [makeItem({ label: 'CA Review', mandatory: true, editableLabel: false })]
);

const fileInputs = ref({});
const errorMsg = ref('');
const sendState = ref('idle'); // 'idle' | 'sending' | 'sent'
const viewerItem = ref(null);

function setFileInputRef(id, el) {
  if (el) fileInputs.value[id] = el;
}

function triggerFileSelect(id) {
  errorMsg.value = '';
  fileInputs.value[id]?.click();
}

function onFileChange(item, e) {
  const file = e.target.files?.[0];
  if (!file) return;

  if (file.type !== 'application/pdf') {
    errorMsg.value = 'File must be in PDF format.';
    e.target.value = '';
    return;
  }

  if (item.fileUrl && item.fileUrl.startsWith('blob:')) {
    URL.revokeObjectURL(item.fileUrl);
  }

  item.fileUrl = URL.createObjectURL(file);
  item.fileName = file.name;
  item.uploadedAt = new Date().toLocaleString('en-US');
  // Replacing a file after it was sent keeps it "sent" only if you want to
  // require re-sending — safest default: mark unsent so it gets re-submitted.
  item.sent = false;
  errorMsg.value = '';
  e.target.value = '';
}

function removeFile(item) {
  if (item.sent) return; // guard: delete not allowed after send
  if (item.fileUrl && item.fileUrl.startsWith('blob:')) {
    URL.revokeObjectURL(item.fileUrl);
  }
  item.fileUrl = '';
  item.fileName = '';
  item.uploadedAt = '';
}

function removeSection(item) {
  if (item.mandatory) return;
  const idx = items.findIndex(it => it.id === item.id);
  if (idx === -1) return;
  if (item.fileUrl && item.fileUrl.startsWith('blob:')) {
    URL.revokeObjectURL(item.fileUrl);
  }
  items.splice(idx, 1);
}

function addSection() {
  items.push(makeItem({ label: `Additional Document ${items.filter(i => !i.mandatory).length + 1}` }));
}

function openViewer(item) { viewerItem.value = item; }
function closeViewer() { viewerItem.value = null; }

const canSend = () => {
  const ca = items.find(i => i.mandatory);
  return !!ca?.fileUrl;
};

async function sendAll() {
  if (!canSend()) {
    errorMsg.value = 'CA Review file is mandatory before sending.';
    return;
  }

  errorMsg.value = '';
  sendState.value = 'sending';

  try {
    // TODO: replace with real DMS API call, e.g.:
    // for (const item of items.filter(i => i.fileUrl && !i.sent)) {
    //   await dmsApi.upload({ label: item.label, file: item.fileBlob });
    // }
    await new Promise(resolve => setTimeout(resolve, 600)); // simulate network

    items.forEach(item => {
      if (item.fileUrl) item.sent = true;
    });
    sendState.value = 'sent';
  } catch (err) {
    console.error('Failed to send documents to DMS:', err);
    errorMsg.value = 'Failed to send documents. Please try again.';
    sendState.value = 'idle';
  }
}

onBeforeUnmount(() => {
  items.forEach(item => {
    if (item.fileUrl && item.fileUrl.startsWith('blob:')) {
      URL.revokeObjectURL(item.fileUrl);
    }
  });
});
</script>

<template>
  <div class="ca-upload">
    <div v-for="item in items" :key="item.id" class="upload-row">
      <input
        :ref="el => setFileInputRef(item.id, el)"
        type="file" accept="application/pdf" class="hidden-input"
        @change="onFileChange(item, $event)"
      />

      <div class="upload-row-head">
        <input
          v-if="item.editableLabel"
          v-model="item.label"
          class="label-input"
          placeholder="Document name"
        />
        <span v-else class="label-fixed">{{ item.label }}<span class="required-star">*</span></span>

        <span v-if="item.sent" class="sent-tag">Sent to DMS</span>
        <button
          v-if="!item.mandatory && !item.fileUrl"
          class="remove-section-btn" title="Remove this section"
          @click="removeSection(item)"
        >✕</button>
      </div>

      <div v-if="!item.fileUrl" class="upload-empty">
        <div class="upload-icon">📄</div>
        <div class="upload-text">
          <div class="upload-sub">No PDF file uploaded yet for this application.</div>
        </div>
        <button class="btn btn-primary" @click="triggerFileSelect(item.id)">⬆ Upload PDF</button>
      </div>

      <div v-else class="upload-filled">
        <div class="file-icon">📄</div>
        <div class="file-info">
          <div class="file-name">{{ item.fileName }}</div>
          <div class="file-meta">{{ item.uploadedAt ? `Uploaded ${item.uploadedAt}` : 'Saved' }}</div>
        </div>
        <div class="file-actions">
          <button class="btn btn-secondary" @click="openViewer(item)">👁 View PDF</button>
          <button class="btn btn-ghost" @click="triggerFileSelect(item.id)">Replace File</button>
          <!-- Delete is only shown BEFORE the file has been sent to the DMS API -->
          <button v-if="!item.sent" class="btn btn-ghost danger" @click="removeFile(item)">Delete</button>
        </div>
      </div>
    </div>

    <button class="btn btn-outline add-section-btn" @click="addSection">+ Add Section</button>

    <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

    <div class="send-bar">
      <span v-if="sendState === 'sent'" class="send-status sent">✓ Documents sent to DMS</span>
      <span v-else-if="!canSend()" class="send-status hint">CA Review file is required before sending</span>
      <button
        class="btn btn-send"
        :disabled="!canSend() || sendState === 'sending'"
        @click="sendAll"
      >
        {{ sendState === 'sending' ? 'Sending...' : 'Send' }}
      </button>
    </div>

    <Teleport to="body">
      <div v-if="viewerItem" class="modal-backdrop" @click.self="closeViewer">
        <div class="modal-panel">
          <div class="modal-head">
            <span>{{ viewerItem.fileName }}</span>
            <button class="modal-close" @click="closeViewer">✕</button>
          </div>
          <iframe :src="viewerItem.fileUrl" class="modal-frame" title="Document Viewer"></iframe>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.ca-upload { display: flex; flex-direction: column; gap: 14px; }
.hidden-input { display: none; }

.upload-row {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 14px 16px;
}

.upload-row-head { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.label-fixed { font-family: var(--font-head); font-weight: 700; font-size: 14.5px; color: var(--ink); }
.required-star { color: var(--risk); margin-left: 2px; }
.label-input {
  font-family: var(--font-head); font-weight: 700; font-size: 14.5px; color: var(--ink);
  border: 1px solid transparent; background: transparent; border-radius: 6px; padding: 3px 6px;
  flex: 1; min-width: 120px;
}
.label-input:hover, .label-input:focus { border-color: var(--line); background: #fff; outline: none; }

.sent-tag {
  font-size: 11.5px; font-weight: 700; color: var(--good); background: var(--good-bg);
  padding: 3px 10px; border-radius: 999px; font-family: var(--font-head);
}
.remove-section-btn {
  margin-left: auto; border: none; background: transparent; color: var(--ink-faint);
  cursor: pointer; font-size: 13px; width: 22px; height: 22px; border-radius: 6px;
}
.remove-section-btn:hover { background: var(--line); color: var(--risk); }

.upload-empty, .upload-filled {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.upload-icon, .file-icon {
  width: 40px; height: 40px; border-radius: 10px; flex: none;
  display: flex; align-items: center; justify-content: center;
  background: var(--green-soft); color: var(--green);
  font-size: 18px;
}
.upload-text, .file-info { flex: 1; min-width: 160px; }
.upload-title, .file-name {
  font-family: var(--font-head); font-weight: 700; font-size: 15px; color: var(--ink);
}
.upload-sub, .file-meta { font-size: 13px; color: var(--ink-soft); margin-top: 2px; }

.file-actions { display: flex; gap: 8px; flex-wrap: wrap; }

.btn {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 13.5px;
  padding: 9px 15px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  transition: .15s ease;
  white-space: nowrap;
}
.btn-primary { background: var(--navy); color: #fff; }
.btn-primary:hover { background: var(--navy-soft); }
.btn-secondary { background: var(--green); color: #fff; }
.btn-secondary:hover { opacity: .9; }
.btn-ghost { background: var(--bg); color: var(--ink-soft); border: 1px solid var(--line); }
.btn-ghost:hover { background: var(--line); }
.btn-ghost.danger { color: var(--risk); }

.add-section-btn { align-self: flex-start; }
.btn-outline { background: transparent; border: 1.5px dashed var(--line); color: var(--ink-soft); }
.btn-outline:hover { border-color: var(--green); color: var(--green-dark); }

.error-msg { color: var(--risk); font-size: 13px; margin: 0; }

.send-bar {
  display: flex; align-items: center; justify-content: flex-end; gap: 14px;
  border-top: 1px dashed var(--line); padding-top: 14px; margin-top: 4px;
}
.send-status { font-size: 13px; font-weight: 600; }
.send-status.sent { color: var(--good); }
.send-status.hint { color: var(--ink-faint); }
.btn-send {
  background: var(--green); color: #fff; padding: 10px 24px; font-size: 14px;
}
.btn-send:hover:not(:disabled) { background: var(--green-dark); }
.btn-send:disabled { background: var(--neutral-bg); color: var(--neutral); cursor: not-allowed; }

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
  .send-bar { justify-content: space-between; }
}
</style>
