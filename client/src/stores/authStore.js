import { defineStore } from 'pinia'
import TokenService from '../services/TokenService'

// fix logic to make it not return a promise
// async await functions return a promise
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

  if (!response.ok) {
    return 0
  }
  return 1
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    access: TokenService.getLocalAccessToken(),
  }),
  getters: {
    loggedIn() {
      // fix logic here
      // return 1 if true else 0 false
    }
  }
})