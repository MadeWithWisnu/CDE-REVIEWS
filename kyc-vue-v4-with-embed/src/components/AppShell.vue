<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// When opened as an embedded iframe from Confins (?embed=1), hide the Miwanet
// chrome (sidebar, topbar) so only the CDE content shows inside the iframe.
const isEmbed = computed(() => route.query.embed === '1');

const navItems = [
  { label: 'Search CDE', icon: '🔍', to: '/', active: r => r === 'filter' || r === 'results' || r === 'cde-dashboard' },
  { label: 'Report CAM', icon: '📄', to: '/cam', active: r => r === 'cam-filter' || r === 'cam-dashboard' },
  { label: 'Task Order', icon: '🗂️', comingSoon: true },
  { label: 'Monitoring', icon: '📊', comingSoon: true },
  { label: 'Report', icon: '📁', comingSoon: true },
];

function isActive(item) {
  return item.active ? item.active(route.name) : false;
}
</script>

<template>
  <div class="shell" :class="{ 'shell-embed': isEmbed }">
    <aside v-if="!isEmbed" class="sidebar">
      <div class="brand">
        <div class="brand-mark">C</div>
        <div class="brand-text">
          <div class="brand-name">CDE ORDER</div>
          <div class="brand-sub">Review System</div>
        </div>
      </div>

      <nav class="nav">
        <template v-for="item in navItems" :key="item.label">
          <router-link v-if="!item.comingSoon" :to="item.to" class="nav-item" :class="{ active: isActive(item) }">
            <span class="nav-icon">{{ item.icon }}</span>{{ item.label }}
          </router-link>
          <div v-else class="nav-item disabled">
            <span class="nav-icon">{{ item.icon }}</span>{{ item.label }}
            <span class="soon-tag">Coming Soon</span>
          </div>
        </template>
      </nav>

      <div class="sidebar-foot">MLCI · Credit Decisions Engine</div>
    </aside>

    <div class="main">
      <header v-if="!isEmbed" class="topbar">
        <div class="topbar-title">
          <slot name="topbar-title">CDE Review Center</slot>
        </div>
        <div class="topbar-user">
          <div class="user-avatar">SA</div>
          <div class="user-info">
            <div class="user-name">System Admin</div>
            <div class="user-role">Credit Decisions Engine · Head Office</div>
          </div>
        </div>
      </header>

      <main class="content" :class="{ 'content-embed': isEmbed }">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

/* ---------- Sidebar ---------- */
.sidebar {
  width: var(--sidebar-w);
  flex: none;
  background: var(--navy);
  color: #fff;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 22px 20px;
  border-bottom: 1px solid var(--navy-line);
}
.brand-mark {
  width: 36px; height: 36px; border-radius: 10px; flex: none;
  background: var(--green);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 800; font-size: 17px; color: #fff;
}
.brand-name { font-family: var(--font-head); font-weight: 800; font-size: 14.5px; letter-spacing: .02em; }
.brand-sub { font-size: 11.5px; opacity: .6; margin-top: 1px; }

.nav { padding: 16px 12px; display: flex; flex-direction: column; gap: 3px; flex: 1; }
.nav-item {
  display: flex; align-items: center; gap: 11px;
  padding: 11px 14px;
  border-radius: 9px;
  color: rgba(255,255,255,.72);
  text-decoration: none;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: .15s ease;
}
.nav-item:hover { background: var(--navy-soft); color: #fff; }
.nav-item.active { background: var(--green); color: #fff; }
.nav-item.disabled { opacity: .45; cursor: default; position: relative; }
.nav-item.disabled:hover { background: transparent; color: rgba(255,255,255,.72); }
.nav-icon { font-size: 15.5px; }
.soon-tag {
  margin-left: auto;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  background: rgba(255,255,255,.12);
  padding: 2px 6px;
  border-radius: 5px;
}

.sidebar-foot {
  padding: 16px 20px;
  font-size: 11px;
  color: rgba(255,255,255,.4);
  border-top: 1px solid var(--navy-line);
}

/* ---------- Main / topbar ---------- */
.main { flex: 1; display: flex; flex-direction: column; min-width: 0; }

.topbar {
  height: 64px;
  flex: none;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;
  position: sticky;
  top: 0;
  z-index: 10;
}
.topbar-title {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 16.5px;
  color: var(--ink);
}
.topbar-user { display: flex; align-items: center; gap: 10px; }
.user-avatar {
  width: 34px; height: 34px; border-radius: 999px;
  background: var(--navy); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 700; font-size: 12.5px;
}
.user-name { font-family: var(--font-head); font-weight: 700; font-size: 13.5px; color: var(--ink); }
.user-role { font-size: 11.5px; color: var(--ink-faint); }

.content {
  flex: 1;
  padding: 28px clamp(20px, 3vw, 44px) 90px;
  width: 100%;
}
.content-embed {
  padding: 16px 18px 32px;
}
.shell-embed { min-height: auto; }

@media (max-width: 860px) {
  .sidebar { display: none; }
  .user-info { display: none; }
}
</style>
