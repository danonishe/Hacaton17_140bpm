import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PlaceCategories from '@/pages/PlaceCategories'
import HomePage from '@/pages/HomePage'
import NearPage from '@/pages/home/NearPage';
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
  {

    path: '/home/near',
    name: 'HomePage',
    component: NearPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
