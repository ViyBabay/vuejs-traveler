<script setup>
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import ModalMain from './components/ModalMain/ModalMain.vue'

// import HomeView from '../src/views/HomepageView/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <RegistrationForm @submit="console.log('Registration submitted')" />
  <LoginForm @submit="console.log('Login submitted')" />
  <ModalMain />

  <!-- <HomeView /> -->
</template>
