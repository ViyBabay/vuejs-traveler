<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { register } from '@/api/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isLoading = ref(false)

const handleSubmit = async (formData) => {
  isLoading.value = true
  try {
    await register(formData)
    router.replace('/map')
  } catch (error) {
    console.error('Registration failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <RegistrationForm @submit="handleSubmit" :is-loading="isLoading" />
</template>
