<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapboxSettings } from '@/config/mapbox.js'
</script>

<template>
  <MapboxMap
    class="w-full h-full"
    :access-token="mapboxSettings.accessToken"
    :style="mapboxSettings.style"
    :center="mapboxSettings.center"
    :zoom="mapboxSettings.zoom"
  >
    <MapboxMarker />
  </MapboxMap>
</template>
