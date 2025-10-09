import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const HomepagePage = () => import('@/views/HomepageView.vue')
const LoginPage = () => import('@/views/LoginView.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  {
    path: '/auth',
    component: AuthPage,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegistrationPage },
    ],
  },
  { path: '/map', component: HomepagePage },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
