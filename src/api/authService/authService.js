import { router } from '@/router/index.js'
import { clientFetch } from '../clientFetch.js'

export const TOKEN_KEY = 'authToken'

class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token || localStorage.getItem(TOKEN_KEY))
  }

  getToken() {
    return this.#token || localStorage.getItem(TOKEN_KEY)
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    this.#token = token
  }

  clearToken() {
    localStorage.removeItem(TOKEN_KEY)
    this.#token = null
  }

  async login(body) {
    const response = await clientFetch.post('/user/login', body)
    const token = response.token || response.data?.token || response.accessToken

    if (!token) {
      throw new Error('No token received')
    }

    this.setToken(token)
    return response
  }

  async register(body) {
    const response = await clientFetch.post('/user/register', body)
    const token = response.token || response.data?.token
    this.setToken(token)
    return response
  }

  async logout() {
    await clientFetch.get('/user/logout')
    this.clearToken()
  }

  async refresh() {
    const response = await clientFetch.post('/user/refresh')
    const token = response.token || response.data?.token
    this.setToken(token)
    return response
  }

  async getCurrent() {
    return await clientFetch.get('/user/me')
  }
}

export const authService = new AuthService()

clientFetch.interceptors.request.use((request) => {
  const token = authService.getToken()
  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return request
})

clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error?.response?.status
    if (errorCode === 401) {
      try {
        await authService.refresh()
      } catch (e) {
        router.push('/auth/login')
        return Promise.reject(e)
      }
    }
    return Promise.reject(error)
  },
)
