<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { register } from '@/api/user'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const {
  isLoading,
  error,
  auth: handleRegister,
} = useAuth({
  authFn: register,
  onSuccess: () => {
    router.replace('/map')
  },
  onError: () => {
    console.error('Registration failed')
  },
})
</script>
<template>
  <RegistrationForm @submit="handleRegister" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
