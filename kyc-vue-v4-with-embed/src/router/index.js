import { createRouter, createWebHistory } from 'vue-router';
import CdeFilterForm from '../components/CdeFilterForm.vue';
import CdeResults from '../components/CdeResults.vue';
import CdeDashboard from '../components/CdeDashboard.vue';
import CamFilterForm from '../components/CamFilterForm.vue';
import CamDashboard from '../components/CamDashboard.vue';

const routes = [
  { path: '/', name: 'filter', component: CdeFilterForm, meta: { title: 'Search CDE — Order Lookup' } },
  { path: '/results', name: 'results', component: CdeResults, meta: { title: 'Select CDE Document' } },
  { path: '/cde/:cdeKey', name: 'cde-dashboard', component: CdeDashboard, meta: { title: 'CDE Detail' } },

  { path: '/cam', name: 'cam-filter', component: CamFilterForm, meta: { title: 'Search Report CAM' } },
  { path: '/cam/:appNo', name: 'cam-dashboard', component: CamDashboard, meta: { title: 'Report CAM Detail' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
