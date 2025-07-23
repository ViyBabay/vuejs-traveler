<script setup>
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import ModalMain from './components/ModalMain/ModalMain.vue'

// import HomeView from '../src/views/HomepageView/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'

const isOpen = ref(false)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <button @click="openModal">модалка клац</button>
  <RegistrationForm @submit="console.log('Registration submitted')" />
  <LoginForm @submit="console.log('Login submitted')" />
  <ModalMain v-if="isOpen" @close="closeModal">Це модалка</ModalMain>
</template>
