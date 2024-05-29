import { createRouter, createWebHistory } from 'vue-router'
import FormsPage from '@/views/FormsPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegPage from '@/components/RegPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import IndexPage from '@/views/IndexPage.vue'
import SendToken from '@/components/SendToken.vue'

const routes = [
  {
    path: '/',
    name: 'Crypto Wallet',
    component: IndexPage
  },
  {
    path: '/form',
    name: 'form',
    component: FormsPage,
    children: [
      {
        path: "sign_in",
        name: "Crypto Wallet | Sign In",
        component: LoginPage
      },
      {
        path: "sign_up",
        name: "Crypto Wallet | Sign Up",
        component: RegPage
      }
    ]  
  },
  {
    path: '/profile',
    name: 'Crypto Wallet | Profile',
    component: ProfilePage,
    children: [
      {
        path: 'dashboard',
        name: 'Crypto Wallet | Dashboard',
      },
      {
        path: 'withdraw',
        name: 'Crypto Wallet | Withdraw',
        component: SendToken
      },
      {
        path: 'deposit',
        name: 'Crypto Wallet | Deposit'
      },
      {
        path: 'user',
        name: 'Crypto Wallet | Profile'
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
