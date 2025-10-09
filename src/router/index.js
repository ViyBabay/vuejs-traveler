import { createRouter, createWebHistory } from 'vue-router'
import GreetingView from '@/views/GreetingView.vue'
import AuthView from '@/views/AuthView.vue'
import HomepageView from '@/views/HomepageView.vue'

const routes = [
  { path: '/', component: GreetingView },
  { path: '/auth', component: AuthView },
  { path: '/map', component: HomepageView },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
