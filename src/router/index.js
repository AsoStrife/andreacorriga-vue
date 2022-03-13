import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/strife_coin',
        name: 'Strife Coin',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
