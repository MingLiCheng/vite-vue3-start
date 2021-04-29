import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/vuex',
    name: 'VuexPage',
    component: () => import('@/views/vuex.vue')
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import('@/views/test.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
