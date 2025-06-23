<script setup>
import ButtonMain from '@/components/ButtonMain/ButtonMain.vue'
import InputMain from '@/components/InputMain/InputMain.vue'

const emits = defineEmits(['submit'])
</script>
<template>
  <form @submit.prevent="emits('submit')" class="max-w-[500px] w-full bg-white p-10 rounded-2xl">
    <InputMain class="mb-4" label="Ім'я" placeholder="Іван Франко" />
    <InputMain class="mb-4" label="Електронна пошта" type="email" placeholder="mail@mail.com" />
    <InputMain label="Пароль" type="password" />
    <ButtonMain class="mt-10 w-full" variant="gradient" type="submit"> Створити акаунт </ButtonMain>
  </form>
</template>
