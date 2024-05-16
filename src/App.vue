<script setup lang="ts">
import { ref } from 'vue';
import TheFooter from '@/components/TheFooter.vue';
import LinkBar from '@/components/LinkBar.vue';

const left = ref(100);
const top = ref(100);
</script>

<template>
  <div
    class="flex flex-col justify-center bg-white dark:bg-[#121212] min-h-[100vh]"
  >
    <h1 class="self-center text-3xl mb-8 text-black dark:text-white">1</h1>
    <link-bar></link-bar>
    <router-view class="m-4" />
    <the-footer></the-footer>
  </div>
  <div class="guide" :style="{ left: `${left}px`, top: `${top}px` }"></div>
</template>
<style scoped>
.guide {
  width: 120px;
  height: 70px;
  position: absolute;
  z-index: 9999;
  background-color: transparent;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}
</style>
