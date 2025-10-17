<script setup>
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { login } from '@/api/user'

import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const {
  isLoading,
  error,
  auth: handleLogin,
} = useAuth({
  authFn: login,
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
