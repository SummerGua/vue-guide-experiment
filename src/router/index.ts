import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // 引入nprogress插件
import 'nprogress/nprogress.css'; // 这个nprogress样式必须引入

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutMe.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
