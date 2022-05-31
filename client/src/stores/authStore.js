import { defineStore } from 'pinia'
import TokenService from '../services/TokenService'

async function validToken() {
  const url = 'http://localhost:3000/api/auth/valid-token'
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: TokenService.getLocalAccessToken()
    }),
  })

  if (response.ok) {
    return true
  }
  return false
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    access: TokenService.getLocalAccessToken(),
    logged: false
  }),
  getters: {
    loggedIn() {
      return this.logged
    }
  },
  actions: {
    checkLoggedIn() {
      if (validToken) {
        this.logged = true
      }
    },
    logoutUser() {
      TokenService.removeToken()
      this.logged = false
    }
  }
})