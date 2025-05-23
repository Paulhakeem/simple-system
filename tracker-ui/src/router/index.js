import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Darshboard1 from '@/views/Darshboard1.vue'
import notFound from '@/views/notFound.vue'
import userDashboard from '@/views/userDashboard.vue'

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
    },
    {
      path: '/user-dashboard',
      name: 'userDashboard',
      component: userDashboard
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: notFound
    }
  ],
})

export default router
