<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import TheFooter from '@/components/TheFooter.vue';
import LinkBar from '@/components/LinkBar.vue';

const tourPosition = reactive({
  left: 100,
  top: 100,
  width: 100,
  height: 100,
});

let stepOne: HTMLElement, stepTwo, stepThree;
let domArr: HTMLElement[];
onMounted(() => {
  stepOne = document.querySelector('#step-one') as HTMLElement;
  stepTwo = document.querySelector('#step-two') as HTMLElement;
  stepThree = document.querySelector('#step-three') as HTMLElement;
  domArr = [stepOne, stepTwo, stepThree];

  let index = 0;
  document.body.addEventListener('click', () => {
    if (index > 2) index = 0;
    const rect = domArr[index++].getBoundingClientRect();
    setDomPosition(rect);
  });
});

const setDomPosition = (rect: DOMRect) => {
  tourPosition.left = rect.x - 2;
  tourPosition.top = rect.y - 2;
  tourPosition.width = rect.width + 4;
  tourPosition.height = rect.height + 4;
};
</script>

<template>
  <div class="flex flex-col justify-center dark:bg-[#121212] min-h-[100vh]">
    <h1
      id="step-one"
      class="self-center text-3xl mb-8 text-black dark:text-white"
    >
      TITLE
    </h1>
    <link-bar></link-bar>
    <router-view class="m-4" />
    <the-footer></the-footer>
  </div>
  <div
    class="guide"
    :style="{
      left: `${tourPosition.left}px`,
      top: `${tourPosition.top}px`,
      width: `${tourPosition.width}px`,
      height: `${tourPosition.height}px`,
    }"
  ></div>
</template>
<style scoped>
.guide {
  position: absolute;
  z-index: 9999;
  background-color: transparent;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
</style>
