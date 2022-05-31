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
  removeToken() {
    localStorage.removeItem('access')
  }
}
export default new TokenService()