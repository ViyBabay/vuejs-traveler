<script setup>
// import { ref } from 'vue'
// import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
// import NewPlaceModal from './components/NewPlaceModal/NewPlaceModal.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import MapboxMap from './components/MapboxMap/MapboxMap.vue'

// import HomeView from '../src/views/HomepageView/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'

// const isOpen = ref(false)
// const closeModal = () => {
//   isOpen.value = false
// }
// const openModal = () => {
//   isOpen.value = true
// }
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] overflow-auto pb-10">
      <FavoritePlaces />
    </div>
    <div class="w-full h-full">
      <MapboxMap />
    </div>
  </main>
</template>
