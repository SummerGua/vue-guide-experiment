<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import LinkBar from '@/components/LinkBar.vue';
import { createTour } from './tour';

createTour({
  route: {
    path: '/',
    mode: 'history',
  },
  // 步骤
  steps: [
    {
      target: '#tour-step-1',
      text: '第一步',
    },
    {
      target: '#tour-step-2',
      text: '第二步',
    },
    {
      target: '#tour-step-3',
      text: '第3步',
    },
  ],
});
</script>

<template>
  <div
    @click.stop="() => {}"
    class="flex flex-col justify-center dark:bg-[#121212] min-h-[100vh]"
  >
    <h1
      id="tour-step-1"
      class="self-center text-3xl mb-8 text-black dark:text-white"
    >
      TITLE
    </h1>
    <link-bar></link-bar>
    <router-view class="m-4" />
    <the-footer></the-footer>
  </div>
</template>
