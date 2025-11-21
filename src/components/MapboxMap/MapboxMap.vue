<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapboxSettings } from '@/config/mapbox.js'
import { ref } from 'vue'

defineProps({
  places: {
    type: Array,
    default: () => [],
  },
})

const mapMarkerLngLat = ref(null)

const emit = defineEmits(['marker-click'])
const setActiveId = (id) => {
  emit('marker-click', id)
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}
</script>

<template>
  <MapboxMap
    class="w-full h-full"
    :access-token="mapboxSettings.accessToken"
    :mapStyle="mapboxSettings.style"
    :center="mapboxSettings.center"
    :zoom="mapboxSettings.zoom"
    @mb-click="handleMapClick"
  >
    <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
      <button @click="setActiveId(place.id)">
        <img src="/src/assets/img/map-pin-small.svg" alt="Map Pin" />
      </button>
    </MapboxMarker>
    <MapboxMarker v-for="place in places" :key="place.id" :lng-lat="place.lngLat" anchor="bottom">
      <button @click="setActiveId(place.id)">
        <img src="/src/assets/img/map-pin-small.svg" alt="Map Pin" />
      </button>
    </MapboxMarker>
  </MapboxMap>
</template>
