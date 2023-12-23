import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PlaceCategories from '@/pages/PlaceCategories'
const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainPage
  },
  {
    path: '/PlaceCategories',
    name: 'PlaceCategories',
    component: PlaceCategories
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
