import { onMounted } from 'vue';
import { type TourConfig } from './types';

const initTour = (config: TourConfig) => {
  if (!config) throw new Error('config is empty');
  const { route, steps } = config;
  if (route.mode === 'hash') {
    window.onhashchange = (e) => {
      console.log(e);
    };
  } else {
    window.onpopstate = (e) => {
      console.log(e);
    };
  }
  const mask = setMask();
  const tip = initTip();

  let index = 0;
  document.body.addEventListener('click', () => {
    if (index === steps.length) {
      removeTip(tip, mask);
      return;
    } else {
      const target = steps[index].target;
      const targetEle = document.querySelector(target);
      if (!targetEle) throw new Error(`target ${target} not found`);
      const rect = targetEle.getBoundingClientRect();
      setTipPosition(tip, rect);
      index++;
    }
  });
};

const setMask = () => {
  const transparentMask = document.createElement('div');
  const maskStyle = `position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    opacity:1;
    z-index:9997;`;
  transparentMask.setAttribute('style', maskStyle);
  document.body.appendChild(transparentMask);
  return transparentMask;
};

const setTipPosition = (div: HTMLElement, rect: DOMRect) => {
  div.style.left = `${rect.left}px`;
  div.style.top = `${rect.top}px`;
  div.style.width = `${rect.width}px`;
  div.style.height = `${rect.height}px`;
  div.style.transform = 'scale(1.1)';
};

const initTip = () => {
  const tip = document.createElement('div');
  tip.setAttribute(
    'style',
    ` position: absolute;
      z-index: 9998;
      background-color: transparent;
      box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
      width: 0;
      height: 0;
      transition: all 0.4s;`,
  );
  const text = document.createElement('p');
  text.setAttribute(
    'style',
    `
  color: #fff;
  font-size: 14px;
  position:absolute;
  z-index: 9998;
  top:200px;
  left:200px`,
  );
  text.innerText = 'texttext';
  document.body.appendChild(tip);
  document.body.appendChild(text);
  return tip;
};

const removeTip = (tip: HTMLElement, mask: HTMLElement) => {
  document.body.removeChild(tip);
  document.body.removeChild(mask);
};

export const createTour = (config: TourConfig) => {
  onMounted(() => {
    initTour(config);
  });
};
