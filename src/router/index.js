import Contador from '@/components/Contador.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    */
    {
      path: '/contador',
      name: 'contador',
    
      component: () => import('../components/Contador.vue')
    }, 
    {
      path: '/listadetareas',
      name: 'listadetareas',
    
      component: () => import('../components/ListaDeTareas.vue')
    },
  ],
})

export default router
