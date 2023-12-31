import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
      {
        path: 'bus',
        name: 'bus',
        component: () => import('pages/BusReport.vue'),
      },
      {
        path: 'station',
        name: 'station',
        component: () => import('pages/StationReport.vue'),
      },
      {
        path: 'point-details',
        name: 'point-details',
        component: () => import('pages/PointDetails.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
