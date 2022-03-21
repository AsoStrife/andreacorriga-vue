import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      mainNav: true,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue'),
      mainNav: true
    },
    {
        path: '/strife_coin',
        name: 'Strife Coin',
        component: () => import('../views/StrifeCoinView.vue'),
        mainNav: true
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () => import('../views/MoviesView.vue'),
        mainNav: false
    },
    {
        path: '/privacy_policy',
        name: 'Privacy Policy',
        component: () => import('../views/PrivacyPolicyView.vue'),
        mainNav: false
    }
  ]
})

export default router
