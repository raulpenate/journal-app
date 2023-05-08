import { createRouter, createWebHashHistory } from 'vue-router'
import dayBookRouter from '../modules/daybook/router'
import authRouter from '../modules/auth/router'
import isAutenticatedGuard from '@/modules/auth/router/auth-guard'

const routes = [
  {
    path: '/',
    ...authRouter,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/daybook',
    beforeEnter: [isAutenticatedGuard],
    ...dayBookRouter,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
