import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// URL base Miwanet.DocAccess.Api - sesuaikan per environment (dev/staging/prod).
// Sebaiknya pindahkan ke .env (import.meta.env.VITE_MIWANET_API_BASE_URL) saat deploy.
const MIWANET_API_BASE_URL = import.meta.env.VITE_MIWANET_API_BASE_URL || 'https://localhost:5001';

/**
 * useEmbedGuard()
 * ----------------
 * Dipakai di halaman yang bisa diakses dalam 2 mode:
 *  - Mode normal (langsung dibuka di Miwanet, user sudah login lewat sesi Miwanet biasa)
 *  - Mode embed (dibuka di dalam <iframe> oleh Confins, lewat ?embed=1&token=xxx)
 *
 * Saat embed=1, halaman WAJIB punya token valid sebelum menampilkan data apapun.
 * Token divalidasi ke Miwanet BE (GET /api/v1/cde-access-token/validate) - endpoint ini
 * publik/tanpa API Key karena memang dipanggil dari browser, tapi tetap aman karena
 * yang divalidasi adalah signature + expiry JWT-nya.
 */
export function useEmbedGuard() {
  const route = useRoute();

  const isEmbed = computed(() => route.query.embed === '1');
  const token = computed(() => route.query.token || '');

  const status = ref(isEmbed.value ? 'checking' : 'ready'); // 'checking' | 'ready' | 'invalid'
  const validatedCdeKey = ref('');
  const validatedAppNo = ref('');

  async function validate() {
    if (!isEmbed.value) {
      status.value = 'ready';
      return;
    }

    if (!token.value) {
      status.value = 'invalid';
      return;
    }

    status.value = 'checking';

    try {
      const res = await fetch(
        `${MIWANET_API_BASE_URL}/api/v1/cde-access-token/validate?token=${encodeURIComponent(token.value)}`
      );
      const data = await res.json();

      if (!data.valid) {
        status.value = 'invalid';
        return;
      }

      validatedCdeKey.value = data.cdeKey;
      validatedAppNo.value = data.appNo;
      status.value = 'ready';
    } catch (err) {
      console.error('Gagal validasi embed token:', err);
      status.value = 'invalid';
    }
  }

  return { isEmbed, token, status, validatedCdeKey, validatedAppNo, validate };
}
