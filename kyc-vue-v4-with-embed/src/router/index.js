import { createRouter, createWebHistory } from 'vue-router';
import CdeFilterForm from '../components/CdeFilterForm.vue';
import CdeResults from '../components/CdeResults.vue';
import CdeDashboard from '../components/CdeDashboard.vue';

const routes = [
  { path: '/', name: 'filter', component: CdeFilterForm, meta: { title: 'Cari CDE — Pencarian Order' } },
  { path: '/results', name: 'results', component: CdeResults, meta: { title: 'Pilih Dokumen Kontrak (CDE)' } },
  { path: '/cde/:cdeKey', name: 'cde-dashboard', component: CdeDashboard, meta: { title: 'Detail CDE' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
