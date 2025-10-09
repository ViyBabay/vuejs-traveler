import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const HomepagePage = () => import('@/views/HomepageView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/auth', component: AuthPage },
  { path: '/map', component: HomepagePage },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
