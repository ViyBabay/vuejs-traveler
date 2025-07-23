<script setup>
import { ref } from 'vue'

const emit = defineEmits(['upload'])
const errorMessage = ref('')

const handleUpload = (event) => {
  const file = event.target.files[0]
  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Файл занадто великий. Максимальний розмір - 3 МБ.'
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.onload = () => {
    errorMessage.value = ''
    emit('upload', reader.result)
  }
}
</script>

<template>
  <label class="cursor-pointer hover:text-primary">
    <input type="file" accept="image/*" class="hidden" @change="handleUpload" />
    <span class="flex gap-2 items-center">
      <svg class="w-4 h-4">
        <use href="../../assets/img/sprite.svg#attachment"></use>
      </svg>
      <span class="underline text-xs">Натисність тут, щоб додати фото</span>
    </span>
  </label>
  <div v-if="errorMessage" class="text-red-500 text-xs mt-2">{{ errorMessage }}</div>
</template>
