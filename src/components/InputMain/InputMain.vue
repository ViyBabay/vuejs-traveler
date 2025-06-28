<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String,
  },
})

defineOptions({
  inheritAttrs: false,
})

const emits = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="w-full text-dark">
    <label for="input" class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] py-2 px-3 border-[#2c2c2c1a] border-[1px] focus:outline-primary"
        v-bind="{
          ...$props,
          ...$attrs,
        }"
        :value="modelValue"
        @input="emits('update:modelValue', e.target.value)"
      />
    </label>
  </div>
</template>
