import {
  setElementContent,
  setTipPosition,
  moveTipTextPosition,
} from '../utils';
import { type TourConfig } from './types';
import Tour from './Tour.vue';
import { createApp } from 'vue';

const initTour = (config: TourConfig) => {
  if (!config) throw new Error('tour config is empty');

  const { steps } = config;

  const mask = initMask();
  const { tipHole, tipText } = initTip();

  let index = 0;
  document.body.addEventListener('click', () => {
    const tourContainer = document.createElement('div');
    tourContainer.setAttribute('id', 'vue-tour-container');
    document.body.appendChild(tourContainer);
    const tour = createApp(Tour);
    tour.mount('#vue-tour-container');
    if (index === steps.length) {
      removeElements([tipHole, mask, tipText]);
      return;
    } else {
      const target = steps[index].target;
      const targetEle = document.querySelector(target);
      if (!targetEle) throw new Error(`target ${target} not found`);
      const rect = targetEle.getBoundingClientRect();
      setTipPosition(tipHole, rect);
      moveTipTextPosition(tipText, rect);
      setElementContent(tipText, steps[index].text);
      index++;
    }
  });
};

const initMask = () => {
  const transparentMask = document.createElement('div');
  const maskStyle = `position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity:1;
    z-index:9997;`;
  transparentMask.setAttribute('style', maskStyle);
  document.body.appendChild(transparentMask);
  return transparentMask;
};

const initTip = () => {
  const tipHole = document.createElement('div');
  tipHole.setAttribute(
    'style',
    ` position: absolute;
      z-index: 9998;
      background-color: transparent;
      box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
      width: 0;
      height: 0;
      transition: all 0.4s;`,
  );
  const tipText = document.createElement('div');
  tipText.setAttribute(
    'style',
    `
    color: #fff;
    font-size: 14px;
    position:absolute;
    width: fit-content;
    height: 0;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.4s;`,
  );
  document.body.appendChild(tipHole);
  document.body.appendChild(tipText);
  return { tipHole, tipText };
};

const removeElements = (elements: HTMLElement[]) => {
  elements.forEach((e) => {
    e && document.body.removeChild(e);
  });
};

export const createTour = (config: TourConfig) => {
  const { router, routeName } = config;
  router.afterEach((to, from) => {
    if (to.name !== from.name && to.name === routeName) {
      initTour(config);
    }
  });
};
