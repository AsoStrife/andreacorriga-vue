import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      mainNav: true
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue'),
      mainNav: true
    },
    {
        path: '/strife_coin',
        name: 'Strife Coin',
        component: () => import('../views/StrifeCoin.vue'),
        mainNav: true
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () => import('../views/Movies.vue'),
        mainNav: true
    },
    {
        path: '/privacy_policy',
        name: 'Privacy Policy',
        component: () => import('../views/PrivacyPolicy.vue'),
        mainNav: false
    }
  ]
})

export default router
