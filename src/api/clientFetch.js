import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: 'https://back-for-vue.b.goit.study',
})

clientFetch.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

clientFetch.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('Response error:', error.response?.status)

    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/auth/login'
    }

    return Promise.reject(error)
  },
)
