<script setup lang="ts">
import { reactive } from 'vue';

const tipHoleStyle = reactive({
  position: 'absolute',
  width: 0,
  height: 0,
  boxShadow: '0 0 0 2000px rgba(0, 0, 0, 0.5)',
  backgroundColor: 'transparent',
  zIndex: 9998,
  transition: 'all 0.4s',
});

const tipTextStyle = reactive({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 9998,
  fontSize: '1rem',
});

const tipText = '111';
</script>

<template>
  <div>
    <div :style="tipHoleStyle"></div>
    <div :style="tipTextStyle">{{ tipText }}</div>
  </div>
</template>
