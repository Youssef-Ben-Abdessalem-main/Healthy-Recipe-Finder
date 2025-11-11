<script setup>
import { useDevice } from '@/composables/useDevice';
import { computed } from 'vue';

const { device } = useDevice()
const isMobileLike = computed(() => device.value !== 'desktop')
</script>

<template>
    <section class="mx-auto max-w-6xl  px-4 py-12">
    <div class="bg-white h-[400px]">
      <div class="relative overflow-hidden rounded-2xl bg-emerald-50 text-center p-10 sm:p-12 h-full flex flex-col items-center justify-center">
        
        <img src="@/assets/svgs/pattern-fork.svg" alt="Utensils" :class="['pointer-events-none absolute    opacity-100',isMobileLike ? 'h-3/5 left-[-100px] bottom-[-100px]' : 'h-full left-[-40px] bottom-[-40px]']"/>
        <img src="@/assets/svgs/pattern-knife.svg" alt="Utensils" :class="['pointer-events-none absolute   opacity-100',isMobileLike ? 'h-3/5 right-[-100px] top-[-100px]' : ' h-full right-[-40px] top -[-40px]']"/>

        <h3 class="text-2xl sm:text-3xl font-extrabold text-emerald-900">Ready to cook smarter?</h3>
        <p class="mt-2 text-emerald-900/70">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
        <RouterLink to="/recipes"
          class="mt-6 inline-block rounded-md bg-emerald-900 px-4 py-2 text-white font-semibold hover:bg-emerald-800 transition">
          Browse recipes
        </RouterLink>
      </div>
    </div>
  </section>  
</template>