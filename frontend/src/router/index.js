import { createRouter, createWebHistory } from 'vue-router'
import FormsPage from '@/views/FormsPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegPage from '@/components/RegPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SendToken from '@/components/SendToken.vue'

const routes = [
  {
    path: '/',
    name: 'index',
  },
  {
    path: '/form',
    name: 'form',
    component: FormsPage,
    children: [
      {
        path: "sign_in",
        name: "Login Form",
        component: LoginPage
      },
      {
        path: "sign_up",
        name: "Reg Form",
        component: RegPage
      }
    ]  
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: SendToken
      },
      {
        path: 'deposit',
        name: 'deposit'
      },
      {
        path: 'user',
        name: 'user'
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
