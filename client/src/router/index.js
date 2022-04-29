import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})

export default router
