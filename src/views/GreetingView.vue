<script setup>
import ButtonMain from '@/components/ButtonMain/ButtonMain.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img src="../assets/img/map-pin.svg" class="inline mb-6" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="leading-6 mb-11">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <ButtonMain to="/auth/registration">Почати роботу</ButtonMain>
    </div>
  </BaseLayout>
</template>
