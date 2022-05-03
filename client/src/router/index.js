import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Account from '../views/Account.vue'
import SortButton from '../views/SortButton.vue'
import FilterButton from '../views/FilterButton.vue'
import ViewGameDeveloper from '../views/ViewGameDeveloper.vue'
import DeleteAccount from '../views/DeleteAccount.vue'
import DeleteAccount2 from '../views/DeleteAccount2.vue'
import DeleteAccount3 from '../views/DeleteAccount3.vue'
import DeleteAccount4 from '../views/DeleteAccount4.vue'
import DeleteAccount5 from '../views/DeleteAccount5.vue'
import ViewGameCustomer from '../views/ViewGameCustomer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/delete-account',
      name: 'delete-account',
      component: DeleteAccount
    },
    {
      path: '/delete-account2',
      name: 'delete-account2',
      component: DeleteAccount2
    },{
      path: '/delete-account3',
      name: 'delete-account3',
      component: DeleteAccount3
    },{
      path: '/delete-account4',
      name: 'delete-account4',
      component: DeleteAccount4
    },{
      path: '/delete-account5',
      name: 'delete-account5',
      component: DeleteAccount5
    },
    {
      path: '/view-game-customer',
      name: 'view-game-customer',
      component: ViewGameCustomer
    },
    {
      path: '/view-game-developer',
      name: 'view-game-developer',
      component: ViewGameDeveloper
    },
    {
      path: '/sort-button',
      name: 'sort-button',
      component: SortButton
    },
    {
      path: '/filter-button',
      name: 'filter-button',
      component: FilterButton
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
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
      path: '/store/edit/1',
      name: 'UpdateGame1',
      component: () => import('../views/UpdateGame1.vue')
    },
    {
      path: '/store/edit/2',
      name: 'UpdateGame2',
      component: () => import('../views/UpdateGame2.vue')
    },
    {
      path: '/store/edit/3',
      name: 'UpdateGame3',
      component: () => import('../views/UpdateGame3.vue')
    },
    {
      path: '/store/edit/4',
      name: 'UpdateGame4',
      component: () => import('../views/UpdateGame4.vue')
    },
    {
      path: '/store/edit/5',
      name: 'UpdateGame5',
      component: () => import('../views/UpdateGame5.vue')
    },
    {
      path: '/store/delete/1',
      name: 'DeleteGame1',
      component: () => import('../views/DeleteGame1.vue')
    },
    {
      path: '/store/delete/2',
      name: 'DeleteGame2',
      component: () => import('../views/DeleteGame2.vue')
    },
    {
      path: '/store/delete/3',
      name: 'DeleteGame3',
      component: () => import('../views/DeleteGame3.vue')
    },
    {
      path: '/store/delete/4',
      name: 'DeleteGame4',
      component: () => import('../views/DeleteGame4.vue')
    },
    {
      path: '/store/delete/5',
      name: 'DeleteGame5',
      component: () => import('../views/DeleteGame5.vue')
    },
  ]
})

export default router
