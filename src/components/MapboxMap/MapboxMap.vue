<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapboxSettings } from '@/config/mapbox.js'

defineProps({
  places: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <MapboxMap
    class="w-full h-full"
    :access-token="mapboxSettings.accessToken"
    :style="mapboxSettings.style"
    :center="mapboxSettings.center"
    :zoom="mapboxSettings.zoom"
  >
    <MapboxMarker v-for="place in places" :key="place.id" :lng-lat="place.lngLat">
      <img src="/src/assets/img/map-pin-small.svg" alt="Map Pin" />
    </MapboxMarker>
  </MapboxMap>
</template>
