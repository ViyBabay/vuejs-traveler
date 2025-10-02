<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import ButtonMain from '../ButtonMain/ButtonMain.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeId: {
    default: null,
    type: Number,
  },
})

const emit = defineEmits(['set-active-id'])
const handlePlaceClick = (id) => {
  emit('set-active-id', id)
}
</script>

<template>
  <div class="px-6">
    <h2 class="text-gray mb-4">Додані маркери</h2>
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
      @click="handlePlaceClick(place.id)"
    />
    <ButtonMain class="mt-10 w-full"> Додати маркер</ButtonMain>
  </div>
</template>
