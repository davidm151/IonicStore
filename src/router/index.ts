import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/catalogue/grid'
  },
  {
    path: '/catalogue/grid',
    component: () => import ('../views/CatalogueGrid.vue')
  },
  {
    path: '/catalogue/list',
    component: () => import ('../views/CatalogueList.vue')
  },
  {
    path: '/detail/:id',
    component: () => import ('../views/Detail.vue')
  },
  {
    path: '/catalogue/form',
    component: () => import ('../views/Form.vue')
  },
  {
    path: '/catalogue/prova',
    component: () => import ('../views/Prova.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
