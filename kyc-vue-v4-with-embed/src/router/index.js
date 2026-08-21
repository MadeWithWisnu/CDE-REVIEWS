import { createRouter, createWebHistory } from 'vue-router';
import CdeFilterForm from '../components/CdeFilterForm.vue';
import CdeResults from '../components/CdeResults.vue';
import CdeDashboard from '../components/CdeDashboard.vue';

const routes = [
  { path: '/', name: 'filter', component: CdeFilterForm, meta: { title: 'Search CDE — Order Lookup' } },
  { path: '/results', name: 'results', component: CdeResults, meta: { title: 'Select CDE Document' } },
  { path: '/cde/:cdeKey', name: 'cde-dashboard', component: CdeDashboard, meta: { title: 'CDE Detail' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
