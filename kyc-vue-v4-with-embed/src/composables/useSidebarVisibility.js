/**
 * useSidebarVisibility.js
 * -------------------------
 * Tiny app-wide toggle for AppShell's sidebar. `hideSidebar` is created ONCE
 * at module scope, so every component that imports this shares the exact
 * same reactive ref — no Pinia/Vuex needed for something this small.
 *
 * AppShell.vue reads it to decide whether to render the sidebar; any page
 * (e.g. CdeDashboard's "Full Screen" toggle) can flip it.
 */
import { ref } from 'vue';

const hideSidebar = ref(false);

export function useSidebarVisibility() {
  function toggleSidebar() {
    hideSidebar.value = !hideSidebar.value;
  }
  return { hideSidebar, toggleSidebar };
}
