<script setup>
import ButtonMain from '../../components/ButtonMain/ButtonMain.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white text-center">
        <img src="../../assets/img/map-pin.svg" class="inline mb-6" />
        <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
        <p class="leading-6 mb-11">
          Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
          ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
        </p>
        <ButtonMain>Почати роботу</ButtonMain>
      </div>
    </section>
    <section class="flex-1">
      <img src="../../assets/img/Map.png" class="object-cover h-full" />
    </section>
  </main>
</template>
