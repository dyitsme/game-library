import { useAuthStore } from '../stores/authStore'
import { createRouter, createWebHistory } from 'vue-router'
import { validToken } from '../utils/validToken'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Account from '../views/Account.vue'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Store2 from '../views/Store2.vue'
import Library from '../views/Library.vue'
import Library2 from '../views/Library2.vue'
import Library3 from '../views/library3.vue'
import CreateGame from '../views/CreateGame.vue'
import UpdateGame from '../views/UpdateGame.vue'
import ViewGameDeveloper from '../views/ViewGameDeveloper.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      component: CreateGame,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/store',
      name: 'Store',
      component: Store,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/store2',
      name: 'Store2',
      component: Store2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/library',
      name: 'Library',
      component: Library,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/library2',
      name: 'Library2',
      component: Library2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/library3',
      name: 'Library3',
      component: Library3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-game',
      name: 'UpdateGame',
      component: UpdateGame,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/delete-game',
      name: 'DeleteGame',
      component: () => import('../views/DeleteGame.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-account',
      name: 'EditAccount',
      component: () => import('../views/EditAccount.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: () => import('../views/ChangePassword.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/delete-account',
      name: 'DeleteAccount',
      component: () => import('../views/DeleteAccount.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/view-game-customer',
      name: 'ViewGameCustomer',
      component: () => import('../views/ViewGameCustomer.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/view-game-developer/',
      name: 'ViewGameDeveloper',
      component: ViewGameDeveloper,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/404.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  
  // to fix this
  // let logged
  // validToken().then(value => logged = value).catch(logged = false)
  // console.log(logged)
  let token = localStorage.getItem('access')
  if (to.meta.requiresAuth && !token) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router
