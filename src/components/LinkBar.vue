<script setup lang="ts">
import { Home, MoreOne } from '@icon-park/vue-next';
</script>

<template>
  <div class="flex gap-4 justify-center p-2">
    <router-link to="/">
      <span
        class="flex gap-2 border-2 dark:text-gray-300 border-black dark:border-gray-300 p-2 hover:bg-gray-400"
      >
        HOME<home size="24" />
      </span>
    </router-link>
    <router-link to="/about">
      <span
        class="flex gap-1 border-2 dark:text-gray-300 border-black dark:border-gray-300 p-2 hover:bg-gray-400"
      >
        ABOUT
        <more-one class="dark:text-gray-white" theme="outline" size="24" />
      </span>
    </router-link>
  </div>
</template>
