import { type TourConfig } from './types';
import Tour from './Tour.vue';
import { App, h, render } from 'vue';

const initTour = (config: TourConfig) => {
  const { steps } = config;
  const tourComponent = h(Tour, { steps });
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(tourComponent, container);
};

export default {
  install(app: App, config: TourConfig) {
    if (!config) throw new Error('tour config is empty');
    const { router, routeName } = config;
    router.afterEach((to, from) => {
      if (to.name !== from.name && to.name === routeName) {
        initTour(config);
      }
    });
  },
};
