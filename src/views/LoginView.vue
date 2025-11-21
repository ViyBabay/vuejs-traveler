<script setup>
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'

import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { authService } from '@/api/authService/authService'

const router = useRouter()
const {
  isLoading,
  error,
  auth: handleLogin,
} = useAuth({
  authFn: (data) => authService.login(data),
  onSuccess: () => {
    router.replace('/map')
  },
  onError: () => {
    console.error('Login failed')
  },
})
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
