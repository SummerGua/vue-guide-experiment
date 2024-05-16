<script setup lang="ts">
import { ref } from 'vue';
const techs = ref([
  'Vue 3 / Vue-router 4 / Pinia',
  'VueUse',
  'TailwindCSS',
  'IconPark',
  'NProgress',
]);
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="grow-0 text-2xl mb-2">Powered by</h1>
    <div>
      <ul class="flex flex-col items-center">
        <li v-for="(item, index) in techs" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
