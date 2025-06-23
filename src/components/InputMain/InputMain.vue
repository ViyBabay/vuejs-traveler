<script setup>
import { ref } from 'vue'

const props = defineProps({
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

const inputText = ref('')

const changeInput = (event) => {
  inputText.value = event.target.value
}
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
        @input="changeInput"
      />
    </label>
  </div>
</template>
