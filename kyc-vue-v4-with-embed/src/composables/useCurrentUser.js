/**
 * useCurrentUser.js
 * -------------------
 * Mock "who's logged in" singleton — same module-scope-ref pattern as
 * useSidebarVisibility.js. There's no real auth/session in this frontend
 * yet, so this stands in for it: AppShell's topbar user badge and the
 * Document Upload section's "Uploaded by" / permission checks (Replace is
 * only allowed for the person who uploaded the file) both read from here.
 *
 * BACKEND INTEGRATION: replace `currentUser` with the actual logged-in
 * user's name from the real session/auth once it's wired up — everything
 * that reads `currentUser.value` keeps working unchanged.
 */
import { ref } from 'vue';

// Demo roster so the "only the uploader can Replace" rule can actually be
// tried out without a real login — swap the active user from the Document
// Upload section's "Viewing as" control.
export const DEMO_USERS = ['System Admin', 'Dian Chaerani', 'Budi Santoso'];

const currentUser = ref(DEMO_USERS[0]);

export function useCurrentUser() {
  return { currentUser, DEMO_USERS };
}
