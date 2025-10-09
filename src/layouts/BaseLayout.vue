<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white max-w-[500px] w-full">
        <slot></slot>
      </div>
    </section>
    <section class="flex-1">
      <img src="../assets/img/Map.png" class="object-cover h-full w-full" />
    </section>
  </main>
</template>
