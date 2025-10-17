import { ref } from 'vue'

export const useAuth = ({ authFn, onSuccess, onError }) => {
  const data = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const auth = async (...args) => {
    isLoading.value = true
    try {
      data.value = await authFn(...args)
      error.value = null
      onSuccess?.(data.value)
    } catch (err) {
      error.value = err
      onError?.(error)
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, error, auth }
}
