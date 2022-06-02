import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Account from '../views/Account.vue'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Store2 from '../views/Store2.vue'
import Library from '../views/Library.vue'
import Library2 from '../views/Library2.vue'
import Library3 from '../views/library3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/edit-account/1',
      name: 'EditAccount',
      component: () => import('../views/EditAccount.vue')
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: () => import('../views/ChangePassword.vue')
    },
    {
      path: '/delete-account/1',
      name: 'DeleteAccount',
      component: () => import('../views/DeleteAccount.vue')
    },
    {
      path: '/view-game-customer/1',
      name: 'ViewGameCustomer',
      component: () => import('../views/ViewGameCustomer.vue')
    },
    {
      path: '/view-game-developer/1',
      name: 'ViewGameDeveloper',
      component: () => import('../views/ViewGameDeveloper.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/create',
      name: 'CreateGame',
      component: () => import('../views/CreateGame.vue')
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/store2',
      name: 'Store2',
      component: Store2
    },
    {
      path: '/library',
      name: 'Library',
      component: Library
    },
    {
      path: '/library2',
      name: 'Library2',
      component: Library2
    },
    {
      path: '/library3',
      name: 'Library3',
      component: Library3
    },
    {
      path: '/store/edit/1',
      name: 'UpdateGame1',
      component: () => import('../views/UpdateGame.vue')
    },
    {
      path: '/store/delete/1',
      name: 'DeleteGame1',
      component: () => import('../views/DeleteGame.vue')
    },
  ]
})

export default router
