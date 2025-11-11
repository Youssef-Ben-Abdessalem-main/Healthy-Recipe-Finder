<script setup>
import { computed } from 'vue'
import { useDevice } from '@/composables/useDevice'
import Cta from '@/components/Cta.vue'

const { device } = useDevice()
const isMobileLike = computed(() => device.value !== 'desktop')

const whyItems = [
  {
    title: 'Cut through the noise.',
    description:
      'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.'
  },
  {
    title: 'Empower home kitchens.',
    description:
      'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.'
  },
  {
    title: 'Make healthy look good.',
    description:
      'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.'
  }
]

const philosophyItems = [
  {
    title: 'Whole ingredients first.',
    description:
      'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.'
  },
  {
    title: 'Flavor without compromise.',
    description:
      'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.'
  },
  {
    title: 'Respect for time.',
    description:
      'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.'
  },
  {
    title: 'Sustainable choices.',
    description:
      'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.'
  }
]

const beyondPlatePoints = [
  'Encourage family dinners and social cooking.',
  'Reduce reliance on single-use packaging and delivery waste.',
  'Spark curiosity about seasonal produce and local agriculture.'
]
</script>

<template>
  <div class="bg-emerald-50/20">

    <section class="px-4 py-16">
      <div :class="['grid gap-12 items-center gap-10', isMobileLike ? 'grid-cols-1' : 'grid-cols-2']">
        <div>
          <span
            class="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 rounded-md text-sm font-semibold text-emerald-900 mb-4">Our
            mission</span>
          <h1 class="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-900 leading-tight">
            Help more people cook nourishing meals, more often.
          </h1>
          <p class="mt-6 text-emerald-900/80 text-lg leading-relaxed">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely
            delicious.
          </p>
          <p class="mt-4 text-emerald-900/80 text-lg leading-relaxed">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed
            shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop"
            alt="Person preparing vegetables" class="w-full rounded-2xl object-cover shadow-xl">
        </div>
      </div>
    </section>


    <section class="px-4 py-16">
      <div :class="['grid gap-12', isMobileLike ? 'grid-cols-1' : 'grid-cols-2']">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-900">
          Why we exist
        </h2>
        <div class="space-y-8 flex flex-col gap-y-10">
          <article v-for="item in whyItems" :key="item.title" class="flex gap-4 items-start">
            <span class="text-dark-green text-xl mr-4 mt-1">
              <img src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"/>
            </span>
            <div class="w-full">
              <h3 class="text-xl font-semibold text-emerald-900">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-emerald-900/70 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>


    <section class="px-4 py-16">
      <div :class="['grid gap-12', isMobileLike ? 'grid-cols-1' : 'grid-cols-2']">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-900">
          Our food philosophy
        </h2>
        <div class=" flex flex-col gap-y-10">
          <article v-for="item in philosophyItems" :key="item.title" class="flex gap-4 items-start">
            <span class="text-dark-green text-xl mr-4 mt-1">
              <img src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"/>
            </span>
            <div class="w-full">
              <h3 class="text-lg font-semibold text-emerald-900">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-emerald-900/70 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>


    <section class="px-4 py-16">
      <div :class="['grid gap-12 items-start', isMobileLike ? 'grid-cols-1' : 'grid-cols-2-1']">
        <div class="flex flex-col">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-900">
            Beyond the plate
          </h2>
          <p class="mt-4 text-emerald-900/80 leading-relaxed text-lg">
            We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
          </p>
          <ul class="mt-6 space-y-3">
            <li v-for="point in beyondPlatePoints" :key="point" class="flex gap-3 text-emerald-900/80">
              <span
                class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12l6 6L20 6" />
                </svg>
              </span>
              <span class="leading-relaxed">{{ point }}</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop"
            alt="Family cooking together" class="w-full rounded-2xl object-cover shadow-xl">
        </div>
      </div>
    </section>

    <Cta />
  </div>
</template>

<style scoped></style>
