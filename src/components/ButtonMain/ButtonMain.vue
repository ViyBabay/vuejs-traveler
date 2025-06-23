<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient'].includes(value)
    },
  },
})
const bgStyles =
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]'
</script>

<template>
  <button
    class="rounded-[12px] px-10 py-[12px] text-white font-bold tracking-tighter hover:scale-103 duration-500 cursor-pointer"
    :class="bgStyles"
  >
    <slot></slot>
  </button>
</template>
