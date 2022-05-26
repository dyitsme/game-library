import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import Account from '../views/Account.vue'
import Account2 from '../views/Account2.vue'
import Account3 from '../views/Account3.vue'
import Account4 from '../views/Account4.vue'
import Account5 from '../views/Account5.vue'

import SortButton from '../views/SortButton.vue'
import FilterButton from '../views/FilterButton.vue'

import ViewGameDeveloper from '../views/ViewGameDeveloper.vue'
import ViewGameDeveloper2 from '../views/ViewGameDeveloper2.vue'
import ViewGameDeveloper3 from '../views/ViewGameDeveloper3.vue'
import ViewGameDeveloper4 from '../views/ViewGameDeveloper4.vue'
import ViewGameDeveloper5 from '../views/ViewGameDeveloper5.vue'

import EditAccount1 from '../views/EditAccount1.vue'
import EditAccount2 from '../views/EditAccount2.vue'
import EditAccount3 from '../views/EditAccount3.vue'
import EditAccount4 from '../views/EditAccount4.vue'
import EditAccount5 from '../views/EditAccount5.vue'


import DeleteAccount from '../views/DeleteAccount.vue'
import DeleteAccount2 from '../views/DeleteAccount2.vue'
import DeleteAccount3 from '../views/DeleteAccount3.vue'
import DeleteAccount4 from '../views/DeleteAccount4.vue'
import DeleteAccount5 from '../views/DeleteAccount5.vue'

import ViewGameCustomer from '../views/ViewGameCustomer.vue'
import ViewGameCustomer2 from '../views/ViewGameCustomer2.vue'
import ViewGameCustomer3 from '../views/ViewGameCustomer3.vue'
import ViewGameCustomer4 from '../views/ViewGameCustomer4.vue'
import ViewGameCustomer5 from '../views/ViewGameCustomer5.vue'

import ChangePassword from '../views/ChangePassword.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/edit-account/1',
      name: 'EditAccount1',
      component: EditAccount1
    },
    {
      path: '/edit-account/2',
      name: 'EditAccount2',
      component: EditAccount2
    },
    {
      path: '/edit-account/3',
      name: 'EditAccount3',
      component: EditAccount3
    },
    {
      path: '/edit-account/4',
      name: 'EditAccount4',
      component: EditAccount4
    },
    {
      path: '/edit-account/5',
      name: 'EditAccount5',
      component: EditAccount5
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: ChangePassword
    },
    {
      path: '/delete-account/1',
      name: 'delete-account',
      component: DeleteAccount
    },
    {
      path: '/delete-account/2',
      name: 'delete-account2',
      component: DeleteAccount2
    },
    {
      path: '/delete-account/3',
      name: 'delete-account3',
      component: DeleteAccount3
    },
    {
      path: '/delete-account/4',
      name: 'delete-account4',
      component: DeleteAccount4
    },
    {
      path: '/delete-account/5',
      name: 'delete-account5',
      component: DeleteAccount5
    },

    {
      path: '/view-game-customer/1',
      name: 'view-game-customer',
      component: ViewGameCustomer
    },
    {
      path: '/view-game-customer/2',
      name: 'view-game-customer2',
      component: ViewGameCustomer2
    },
    {
      path: '/view-game-customer/3',
      name: 'view-game-customer3',
      component: ViewGameCustomer3
    },
    {
      path: '/view-game-customer/4',
      name: 'view-game-customer4',
      component: ViewGameCustomer4
    },
    {
      path: '/view-game-customer/5',
      name: 'view-game-customer5',
      component: ViewGameCustomer5
    },



    {
      path: '/view-game-developer/1',
      name: 'view-game-developer',
      component: ViewGameDeveloper
    },
    {
      path: '/view-game-developer/2',
      name: 'view-game-developer2',
      component: ViewGameDeveloper2
    },
    {
      path: '/view-game-developer/3',
      name: 'view-game-developer3',
      component: ViewGameDeveloper3
    },
    {
      path: '/view-game-developer/4',
      name: 'view-game-developer4',
      component: ViewGameDeveloper4
    },
    {
      path: '/view-game-developer/5',
      name: 'view-game-developer5',
      component: ViewGameDeveloper5
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
      path: '/account/2',
      name: 'account2',
      component: Account2
    },
    {
      path: '/account/3',
      name: 'account3',
      component: Account3
    },{
      path: '/account/4',
      name: 'account4',
      component: Account4
    },{
      path: '/account/5',
      name: 'account5',
      component: Account5
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
      component: () => import('../views/Store.vue')
    },
    {
      path: '/store2',
      name: 'Store2',
      component: () => import('../views/Store2.vue')
    },
    {
      path: '/library',
      name: 'Library',
      component: () => import('../views/Library.vue')
    },
    {
      path: '/library2',
      name: 'Library2',
      component: () => import('../views/Library2.vue')
    },
    {
      path: '/library3',
      name: 'Library3',
      component: () => import('../views/Library3.vue')
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
