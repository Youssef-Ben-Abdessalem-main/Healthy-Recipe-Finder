<script setup>
import Cta from '@/components/Cta.vue'
import IndicatorBehindText from '@/components/IndicatorBehindText.vue'
import { useDevice } from '@/composables/useDevice'
import { computed } from 'vue'
const { device } = useDevice()
const isMobileLike = computed(() => device.value !== 'desktop')

const featureIconPaths = {
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
}

const features = [
  {
    title: 'Whole-food recipes',
    description: 'Each dish uses everyday, unprocessed ingredients.',
    icon: 'bolt',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100'
  },
  {
    title: 'Minimum fuss',
    description: 'All recipes are designed to make eating healthy quick and easy.',
    icon: 'bolt',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100'
  },
  {
    title: 'Search in seconds',
    description: 'Filter by name or ingredient and jump straight to the recipe you need.',
    icon: 'search',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-100'
  }
] 
</script>

<template>

  <section>
    <div :class="['px-4 py-20',isMobileLike ? 'text-left' : 'text-center']">
      <h1
      :class="[
        ' gap-2 text-4xl sm:text-6xl font-extrabold tracking-tight text-emerald-900',
        isMobileLike ? 'justify-start' : 'justify-center'
      ]">
        <div class="relative w-max inline-block">
          Healthy
          <IndicatorBehindText bgColor="bg-orange-500" height="h-3/5" translateY="translate-y-1" />
        </div>
        meals, zero fuss
      </h1>
      <p :class="['mt-4 text-slate-600',isMobileLike ? 'text-left text-xl' : 'text-center  max-w-md mx-auto']">
        Discover quick, whole‑food recipes you can cook tonight—no processed junk, no guesswork.
      </p>
      <div class="mt-8">
        <RouterLink to="/recipes"
          class="rounded-md bg-emerald-900 px-5 py-3 text-white font-semibold hover:bg-emerald-800 transition">
          Start exploring
        </RouterLink>
      </div>
      <div class="mt-10 rounded-2xl overflow-hidden shadow-lg p-2">
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop"
          alt="Cooking" class="w-full h-[560px] object-cover rounded-2xl">
      </div>
      <img src="@/assets/svgs/pattern-squiggle-1.svg" alt="Utensils" class="pointer-events-none absolute left-0 bottom-[-200px] z-[-1]  h-full opacity-100"/>
    </div>
  </section>


  <section :class="[isMobileLike ? 'py-0' : 'py-16']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="['mb-12',isMobileLike ? 'text-left' : 'text-center']">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What you'll get
        </h2>
      </div>

      <div :class="['flex justify-between items-start space-y-10',isMobileLike ? 'flex-col gap-y-5' : 'flex-row']">
        <div v-for="feature in features" :key="feature.title"
          :class="['flex-1',isMobileLike ? 'text-left' : 'text-center']">
          <div
            :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4', feature.iconBg, isMobileLike ? '' : 'mx-auto md:mx-0']">
            <svg class="w-6 h-6" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path v-if="feature.icon === 'bolt'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                :d="featureIconPaths.bolt"></path>
              <path v-else-if="feature.icon === 'search'" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" :d="featureIconPaths.search"></path>
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-emerald-900 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>


  <section class="bg-emerald-50/30">
    <div class="px-4 py-16">
      <div :class="['grid gap-10',isMobileLike ? 'grid-cols-1' : 'grid-cols-2']">
        <div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-900">
            Built for real life
          </h2>
          <p class="mt-4 text-emerald-700 text-xl">
            Cooking shouldn’t be complicated. These recipes come in under
            <span class="relative inline-block w-max whitespace-nowrap align-baseline text-emerald-900 font-bold">30&nbsp;minutes
              <IndicatorBehindText bgColor="bg-orange-500" height="h-3/5" translateY="translate-y" />
            </span>
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p class="mt-4 text-emerald-700 text-xl">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
            alt="Chopping greens on a board"
            class="w-full h-[320px] sm:h-[420px] object-cover">
        </div>
      </div>
    </div>
  </section>


 <Cta />
</template>

<style scoped></style>
