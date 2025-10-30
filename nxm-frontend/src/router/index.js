import { createRouter, createWebHistory } from 'vue-router'
import appEndpoint from '@/config/appEndpoint.js'

// Layouts
import UsersLayout from '../layouts/UsersLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

// Views
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CommissionsView from '@/views/CommissionsView.vue'
import DistributorsView from '@/views/DistributorsView.vue'

const routes = [
  {
    path: appEndpoint.home || '/',
    component: UsersLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      }
    ],
  },
  {
    path: '/'+appEndpoint.admin,
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin',
        component: CommissionsView,
      },
      {
        path: appEndpoint.distributors?.replace(/^\//, '') || 'distributors',
        name: 'distributors',
        component: DistributorsView,
      }
    ],
  },
  {
    path: appEndpoint.notFoundPage || '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
