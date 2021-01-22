import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/cataleg/list'
  },
  {
    path: '/cataleg/grid',
    component: () => import ('../views/grid.vue')
  },
  {
    path: '/cataleg/list',
    component: () => import ('../views/list.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router