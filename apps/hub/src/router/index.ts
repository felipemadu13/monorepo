import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { RhDashboard } from '@monorepo/rh'
import { SuporteDashboard } from '@monorepo/suporte'
import { FrotaDashboard } from '@monorepo/frota'
import { MedicamentosDashboard } from '@monorepo/medicamentos'
import { DocumentosDashboard } from '@monorepo/documentos'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rh',
      name: 'rh',
      component: RhDashboard,
    },
    {
      path: '/suporte',
      name: 'suporte',
      component: SuporteDashboard,
    },
    {
      path: '/frota',
      name: 'frota',
      component: FrotaDashboard,
    },
    {
      path: '/medicamentos',
      name: 'medicamentos',
      component: MedicamentosDashboard,
    },
    {
      path: '/documentos',
      name: 'documentos',
      component: DocumentosDashboard,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
