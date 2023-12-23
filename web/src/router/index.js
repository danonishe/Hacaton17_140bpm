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

    path: '/categories',
    name: 'PlaceCategories',
    component: PlaceCategories
  },
  {

    path: '/home',
    name: 'HomePage',
    component: HomePage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
