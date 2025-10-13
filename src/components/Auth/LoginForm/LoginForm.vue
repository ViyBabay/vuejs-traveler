<script setup>
import ButtonMain from '@/components/ButtonMain/ButtonMain.vue'
import InputMain from '@/components/InputMain/InputMain.vue'
import { reactive } from 'vue'

const props = defineProps({
  isLoading: { type: Boolean, default: false },
})
const emits = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emits('submit', userData)">
    <InputMain
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="mail@mail.com"
      v-model="userData.email"
    />
    <InputMain label="Пароль" type="password" v-model="userData.password" />
    <ButtonMain class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading">
      Увійти
    </ButtonMain>
  </form>
</template>
