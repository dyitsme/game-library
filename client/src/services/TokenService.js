class TokenService {
  getLocalAccessToken() {
    return localStorage.getItem('access')
  }
  getLocalRefreshToken() {
    return localStorage.getItem('refresh')
  }
  updateLocalAccessToken(token) {
    localStorage.setItem('access', token)
  }
  getUser() {
    return localStorage.getItem('user')
  }
  setUser(user) {
    localStorage.setItem('user', user)
  }
  removeUser() {
    localStorage.removeItem('user')
  }
  removeTokens() {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
  }
}
export default new TokenService()