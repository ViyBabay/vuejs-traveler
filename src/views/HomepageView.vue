<script setup>
import { getFavoritePlaces } from '@/api/places'
import FavoritePlaces from '@/components/FavoritePlaces/FavoritePlaces.vue'
import MapboxMap from '@/components/MapboxMap/MapboxMap.vue'
import { onMounted, ref } from 'vue'

const favoritePlaces = ref([])
const activeId = ref(null)
const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat, zoom: 14 })
}

onMounted(async () => {
  try {
    const data = await getFavoritePlaces()

    favoritePlaces.value = Array.isArray(data) ? data : data?.data || []
  } catch (error) {
    console.error('Failed to load places:', error)
    favoritePlaces.value = []
  }
})
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] overflow-auto pb-10">
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        @set-active-id="changeActiveId"
        @place-click="changePlace"
      />
    </div>
    <div class="w-full h-full">
      <MapboxMap
        :places="favoritePlaces"
        :active-id="activeId"
        @marker-click="changeActiveId"
        @mb-created="(mapInstance) => (map = mapInstance)"
      />
    </div>
  </main>
</template>
