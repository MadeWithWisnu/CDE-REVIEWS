<script setup>
import { useRoute } from 'vue-router';
import AppShell from './components/AppShell.vue';

const route = useRoute();
</script>

<template>
  <AppShell>
    <template #topbar-title>{{ route.meta.title || 'CDE Review Center' }}</template>
    <router-view :key="route.fullPath" />
  </AppShell>
</template>
