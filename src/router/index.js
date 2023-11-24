import { createRouter, createWebHistory } from 'vue-router'
import ViewClients from "@/views/ViewClients.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/Home.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: ViewClients
    },
    {
      path: '/clients/add',
      name: 'add',
      component: ()=>import('@/views/AddClient.vue')
    },
    {
      path: '/clients/edit/:id',
      name: 'edit',
      component: () => import('@/views/UpdateClient.vue')
    },
    {
      path: '/interiors',
      name: 'interiors',
      component: () => import('@/views/ViewInteriors.vue')
    },
    {
      path: '/interiors/add',
      name: 'interiorsAdd',
      component: () => import('@/views/AddInterior.vue')
    },
    {
      path: '/interiors/edit/:id',
      name: 'interiorsEdit',
      component: () => import('@/views/UpdateInterior.vue')
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('@/views/ViewEmployees.vue')
    },
    {
      path: '/employees/add',
      name: 'employeesAdd',
      component: () => import('@/views/AddEmployees.vue')
    },
    {
      path: '/employees/edit/:id',
      name: 'employeesEdit',
      component: () => import('@/views/UpdateEmployee.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ViewProjects.vue')
    },
    {
      path: '/projects/add',
      name: 'projectsAdd',
      component: () => import('@/views/AddProject.vue')
    },
    {
      path: '/projects/edit/:id',
      name: 'projectsEdit',
      component: () => import('@/views/UpdateProject.vue')
    },
    {
      path: '/payments',
      name: 'payments',
      component: () => import('@/views/ViewPayments.vue')
    },
    {
      path: '/payments/add',
      name: 'paymentsAdd',
      component: () => import('@/views/AddPayments.vue')
    },
    {
      path: '/payments/edit/:id',
      name: 'paymentsEdit',
      component: () => import('@/views/UpdatePayment.vue')
    }
  ]
})

export default router
