import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgregarLibroView from '@/views/AgregarLibroView.vue'
import ModificarLibroView from '@/views/ModificarLibroView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: AgregarLibroView
  },
  { path: '/modificar/:index', 
    name: 'modificar', 
    component: ModificarLibroView, 
    props: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
