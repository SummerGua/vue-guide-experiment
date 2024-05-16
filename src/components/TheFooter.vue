<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { SunOne, Moon, GithubOne } from '@icon-park/vue-next';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex gap-4 justify-center">
    <moon
      v-if="!isDark"
      class="text-black hover:text-gray-400 hover:cursor-pointer"
      size="30"
      theme="outline"
      @click="toggleDark()"
    />
    <sun-one
      v-if="isDark"
      class="text-white hover:text-gray-400 hover:cursor-pointer"
      size="30"
      theme="outline"
      @click="toggleDark()"
    />
    <a
      class="text-[#333] hover:text-gray-300 dark:text-white hover:cursor-pointer"
      target="_blank"
      href="https://github.com/summergua/vue-starter"
    >
      <github-one theme="outline" size="30" />
    </a>
  </div>
</template>
