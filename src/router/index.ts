import { createWebHashHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/home/index.vue'),
      },
    ],
  },
  {
    path: '/skill',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/skill/index.vue'),
      },
    ],
  },
  {
    path: '/study',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/study/index.vue'),
      },
    ],
  },
  {
    path: '/course',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/course/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
