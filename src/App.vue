<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import LinkBar from '@/components/LinkBar.vue';
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
    <the-footer id="tour-step-4"></the-footer>
  </div>
</template>
