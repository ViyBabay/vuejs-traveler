<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient'].includes(value)
    },
  },
  to: String,
})

const bgStyles = computed(() =>
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]',
)

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? 'RouterLink' : 'button'
})
</script>

<template>
  <component
    :is="componentName"
    :to="props.to"
    class="rounded-[12px] px-10 py-[12px] text-white font-bold tracking-tight hover:scale-103 duration-500 cursor-pointer"
    :class="bgStyles"
  >
    <slot></slot>
  </component>
</template>
