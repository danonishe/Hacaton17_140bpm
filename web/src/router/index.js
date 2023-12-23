import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import CategoryPage from '@/pages/CategoryPage'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainPage
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
