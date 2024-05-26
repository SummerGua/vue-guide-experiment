import router from './router';

export const tourConf = {
  router: router,
  routeName: 'about',
  // 步骤
  steps: [
    {
      target: '#tour-step-1',
      text: '第一步',
    },
    {
      target: '#tour-step-2',
      text: '第二步',
    },
    {
      target: '#tour-step-3',
      text: '第3步',
    },
  ],
};
