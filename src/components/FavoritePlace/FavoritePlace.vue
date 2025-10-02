<script setup>
import IconButton from './IconButton.vue'
import spriteUrl from '../../assets/img/sprite.svg'

const props = defineProps({
  title: {
    requred: true,
    type: String,
  },
  description: {
    requred: true,
    type: String,
  },
  img: String,
  isActive: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['click'])
</script>

<template>
  <section class="text-[#939393] mb-6 last:mb-0" @click="$emit('click')">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" :src="props.img" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <IconButton>
              <svg class="w-4 h-4">
                <use :xlink:href="`${spriteUrl}#edit`"></use>
              </svg>
            </IconButton>
            <IconButton>
              <svg class="w-4 h-4">
                <use :xlink:href="`${spriteUrl}#delete`"></use>
              </svg>
            </IconButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div
      class="h-[1px] w-full bg-[#ececec] mt-4"
      :class="{ 'bg-primary h-[2px]': props.isActive, 'bg-[#ececec]': !props.isActive }"
    ></div>
  </section>
</template>
