<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section class="max-w-[500px] w-full bg-white p-10 rounded-2xl">
      <div class="flex justify-center gap-11 mb-10 font-bold">
        <RouterLink :to="{ name: 'login' }" class="text-gray" active-class="text-primary"
          >Увійти</RouterLink
        >
        <RouterLink :to="{ name: 'registration' }" class="text-gray" active-class="text-primary"
          >Створити акаунт</RouterLink
        >
      </div>
      <RouterView />
    </section>
  </BaseLayout>
</template>
