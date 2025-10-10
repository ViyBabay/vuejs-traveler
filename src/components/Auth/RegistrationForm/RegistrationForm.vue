<script setup>
import ButtonMain from '@/components/ButtonMain/ButtonMain.vue'
import InputMain from '@/components/InputMain/InputMain.vue'
import { reactive } from 'vue'

const emits = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>
<template>
  <form @submit.prevent="emits('submit', userData)">
    <InputMain class="mb-4" label="Ім'я" placeholder="Іван Франко" v-model="userData.name" />
    <InputMain
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="mail@mail.com"
      v-model="userData.email"
    />
    <InputMain label="Пароль" type="password" v-model="userData.password" />
    <ButtonMain class="mt-10 w-full" variant="gradient" type="submit"> Створити акаунт </ButtonMain>
  </form>
</template>
