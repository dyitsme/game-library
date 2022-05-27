import { defineStore } from 'pinia'
import TokenService from '../services/TokenService'

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    access: TokenService.getLocalAccessToken(),
    refresh: TokenService.getLocalRefreshToken()
  }),
  actions: {
    
  }
})