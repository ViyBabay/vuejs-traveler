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
const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Place description',
    img: '',
    lngLat: [35.0452, 48.4887],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Place description',
    img: '',
    lngLat: [35.0552, 48.4227],
  },
]
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" />
    </div>
    <div class="w-full h-full">
      <MapboxMap :places="favoritePlaces" />
    </div>
  </main>
</template>
