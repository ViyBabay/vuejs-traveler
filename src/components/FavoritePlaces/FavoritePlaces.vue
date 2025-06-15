<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import ButtonMain from '../ButtonMain/ButtonMain.vue'
</script>

<template>
  <div class="px-6">
    <h2 class="text-gray mb-4">Додані маркери</h2>
    <FavoritePlace v-for="n in 4" :key="n" />
    <ButtonMain class="mt-10 w-full"> Додати маркер</ButtonMain>
  </div>
</template>
