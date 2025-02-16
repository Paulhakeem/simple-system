import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Darshboard1 from '@/views/Darshboard1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/darshboard1',
      name: 'darshboard1',
      component: Darshboard1
    }
  ],
})

export default router
