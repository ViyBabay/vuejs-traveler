<script setup>
import { ref } from 'vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import MapboxMap from './components/MapboxMap/MapboxMap.vue'

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

const activeId = ref(null)

const setActiveId = (id) => {
  activeId.value = id
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" @set-active-id="setActiveId" />
    </div>
    <div class="w-full h-full">
      <MapboxMap :places="favoritePlaces" :active-id="activeId" @marker-click="setActiveId" />
    </div>
  </main>
</template>
