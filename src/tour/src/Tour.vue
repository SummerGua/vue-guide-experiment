<script setup lang="ts">
import { CSSProperties, computed, reactive, ref } from 'vue';
import { Step } from './types';
import { getOutlineSize, getPixel } from '../utils';

const props = defineProps<{
  steps: Step[];
}>();

const tipTop = ref(0);
const tipLeft = ref(0);
const tipWidth = ref(0);
const tipHeight = ref(0);

const tipHoleStyle = computed(() => {
  return {
    top: getPixel(tipTop.value - 2),
    left: getPixel(tipLeft.value - 2),
    width: getPixel(tipWidth.value + 4),
    height: getPixel(tipHeight.value + 4),
    transition: 'all 0.5s',
  };
});

const tipAreaStyle = computed(() => {
  return {
    top: getPixel(tipTop.value + tipHeight.value + 6),
    left: getPixel(tipLeft.value - 2),
    width: getPixel(tipWidth.value + 4),
    height: getPixel(tipHeight.value + 4),
    transition: 'all 0.5s',
  };
});

const currentStepNum = ref(0);
const prev = () => {
  currentStepNum.value > 0 && currentStepNum.value--;
  const { x, y, width, height } = getOutlineSize(
    props.steps[currentStepNum.value].target,
  );
  document
    .querySelector(props.steps[currentStepNum.value].target)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  tipTop.value = y;
  tipLeft.value = x;
  tipWidth.value = width;
  tipHeight.value = height;
};
const next = () => {
  currentStepNum.value < props.steps.length - 1 && currentStepNum.value++;
  const { x, y, width, height } = getOutlineSize(
    props.steps[currentStepNum.value].target,
  );
  document
    .querySelector(props.steps[currentStepNum.value].target)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  tipTop.value = y;
  tipLeft.value = x;
  tipWidth.value = width;
  tipHeight.value = height;
};
</script>

<template>
  <div>
    <div class="tour-hole" :style="tipHoleStyle"></div>
    <div class="tip-area" :style="tipAreaStyle">
      <div class="tip-text">{{ steps[currentStepNum].text }}</div>
      <div class="btn-area">
        <button v-if="currentStepNum > 0" class="btn" @click="prev">
          PREV
        </button>
        <div v-else></div>
        <button class="btn" @click="next">
          {{ currentStepNum < steps.length - 1 ? 'NEXT' : 'DONE' }}
        </button>
      </div>
    </div>
  </div>
  <div class="transparent-mask"></div>
</template>
<style scoped>
.tour-hole {
  position: absolute;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.tip-area {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 9998;
}

.transparent-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 9997;
}

.tip-text {
  padding: 2px 4px;
  background-color: white;
  width: fit-content;
  height: fit-content;
  font-size: 1rem;
}

.btn-area {
  display: flex;
  gap: 8px;
}
.btn {
  border: 2px solid black;
  background-color: white;
  padding: 4px 6px;
  &:hover {
    background-color: #e3e3e3;
  }
}
</style>
