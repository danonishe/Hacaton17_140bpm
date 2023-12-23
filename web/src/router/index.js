import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PlaceCategories from '@/pages/PlaceCategories'
import HomePage from '@/pages/HomePage'
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {

    path: '/PlaceCategories',
    name: 'PlaceCategories',
    component: PlaceCategories
  },
  {

    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
