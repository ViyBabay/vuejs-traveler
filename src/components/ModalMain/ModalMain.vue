<script setup>
import { onMounted, onUnmounted, ref, Teleport } from 'vue'
import FileUploader from '../FileUploader/FileUploader.vue'

const emit = defineEmits(['close'])
const imageUrl = ref('')

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = 'initial'
})
</script>
<template>
  <component :is="Teleport" to="body">
    <div
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
      @click.self="emit('close')"
    >
      <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button @click="emit('close')">
          <svg class="absolute right-3 top-3 w-6 h-6">
            <use href="../../assets/img/sprite.svg#close"></use>
          </svg>
        </button>
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
        <FileUploader
          @upload="
            (base64) => {
              imageUrl = base64
            }
          "
        />
        <slot></slot>
      </div>
    </div>
  </component>
</template>
