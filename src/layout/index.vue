<template>
  <navbar />
  <main class="main">
    <router-view />
  </main>
  <n-watermark
    content="学什么前端，回家养猪"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  max-width: var(--zb-layout-max-width);
  margin: 10px auto 0;
  padding-top: var(--zb-nav-height-desktop);
}
</style>
