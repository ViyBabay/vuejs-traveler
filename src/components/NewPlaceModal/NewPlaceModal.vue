<script setup>
import { computed, reactive, ref } from 'vue'
import ButtonMain from '../ButtonMain/ButtonMain.vue'
import FileUploader from '../FileUploader/FileUploader.vue'
import InputMain from '../InputMain/InputMain.vue'
import ModalMain from '../ModalMain/ModalMain.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['close', 'submit'])

const imageUrl = ref('')
const formData = reactive({
  location: '',
  description: '',
  img: '',
})
const handleUpload = (url) => {
  formData.img = url
}

const uploadedText = computed(() => {
  return formData.img ? 'Натисніть тут,  щоб змінити фото' : 'Натисніть тут,  щоб додати фото'
})
</script>

<template>
  <ModalMain v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData)" class="min-w-[420px]">
      <div class="flex flex-row items-center justify-center gap-2 mb-10">
        <img src="../../assets/img/map-pin-small.svg" />
        <h2 class="font-bold text-center">Додати маркер</h2>
      </div>

      <InputMain
        label="Локація"
        class="mb-4"
        placeholder="Вкажіть локацію"
        v-model="formData.location"
      />
      <InputMain
        type="textarea"
        label="Опис"
        placeholder="Опишіть місце..."
        class="mb-4"
        v-model="formData.description"
      />
      <img
        v-if="formData.img"
        :src="formData.img"
        alt="Uploaded image"
        class="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <FileUploader class="mb-[42px]" @upload="handleUpload">{{ uploadedText }}</FileUploader>
      <ButtonMain class="w-full" variant="gradient">Додати</ButtonMain>
    </form>
  </ModalMain>
</template>
