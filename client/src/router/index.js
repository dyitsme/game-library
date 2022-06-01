import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('../views/Account.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
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
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')
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
