<script setup>
import IconButton from './IconButton.vue'
import spriteUrl from '../../assets/img/sprite.svg'
</script>

<template>
  <section class="text-[#939393] mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" src="" alt="" />
      <div>
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">Палац Спорту</h2>
          <div class="flex gap-2">
            <IconButton>
              <svg class="w-4 h-4">
                <use :xlink:href="`${spriteUrl}#edit`"></use>
              </svg>
            </IconButton>
            <IconButton>
              <svg class="w-4 h-4">
                <use :xlink:href="`${spriteUrl}#delete`"></use>
              </svg>
            </IconButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          Київський палац спорту (КПС) — найбільша критa спортивно-видовищна споруда України,
          розташована у центральній частині міста Київ, біля підніжжя Черепанової гори.
        </p>
      </div>
    </div>
    <div class="h-[1px] w-full bg-[#ececec] mt-4"></div>
  </section>
</template>
