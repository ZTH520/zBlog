<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style>
:root {
  --zb-c-white-soft: #f5f5f7;
  --zb-c-text-0: #1d1d1f;
  --zb-c-text-sub: #6e6e73;
  --zb-c-text-1: var(--zb-c-text-light-1);
  --zb-c-text-2: var(--zb-c-text-light-2);
  --zb-c-text-light-1: var(--zb-c-indigo);
  --zb-c-divider-light: var(--zb-c-divider-light-2);
  --zb-c-text-light-2: rgba(60, 60, 60, 0.7);
  --zb-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --zb-c-indigo: #213547;
  --zb-layout-max-width: 1440px;
  --zb-layout-left-width: 320px;
  --zb-layout-right-width: 320px;
  --zb-nav-height-desktop: 72px;
  --zb-navbar-z-index: 10;
  --zb-sidebar-width: 272px;
}

body {
  background-color: var(--zb-c-white-soft);
}
</style>
