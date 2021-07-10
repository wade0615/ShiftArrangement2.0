import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    redirect: {
      name: 'storeSetting',
    },
    children: [
      {
        path: '/StoreSetting',
        name: 'storeSetting',
        components: {
          features: () => import('../views/StoreSetting.vue'),
        },
      },
      {
        path: '/StaffSetting',
        name: 'staffSetting',
        components: {
          features: () => import('../views/StaffSetting.vue'),
        },
      },
      {
        path: '/ScheduleSetting',
        name: 'scheduleSetting',
        components: {
          features: () => import('../views/ScheduleSetting.vue'),
        },
      },
      {
        path: '/ViewArrangement',
        name: 'viewArrangement',
        components: {
          features: () => import('../views/ViewArrangement.vue'),
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
