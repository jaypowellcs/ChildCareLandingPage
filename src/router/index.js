import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricingView from '../views/PricingView.vue'
import FormView from '../views/FormView.vue'
import ContactUs from '../views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/forms',
      name: 'forms',
      component: FormView, 
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView, 
    },
    {
      path: '/contactus',
      name: 'contact',
      component: ContactUs, 
    },
  ]
})

export default router
