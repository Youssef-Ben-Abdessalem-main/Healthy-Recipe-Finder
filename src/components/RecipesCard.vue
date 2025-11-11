<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-200 flex flex-col p-2"
  >

    <div class="h-48 w-full overflow-hidden rounded-2xl sm:h-64">
      <img class="w-full h-full object-cover" :src="recipe.image" :alt="recipe.name" />
    </div>


    <div class="py-1 flex flex-col justify-between flex-grow">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          {{ recipe.name }}
        </h3>
        <p class="text-sm text-gray-600 mb-4 leading-snug">
          {{ recipe.description }}
        </p>


        <div class="text-sm text-gray-700 grid lg:grid-cols-2 grid-cols-3 gap-2">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-5h-5M3 15h5v5H3M3 9h5V4H3m14 5h5V4h-5" />
            </svg>
            <span>
              <span class="font-semibold">Servings:</span> {{ recipe.servings }}
            </span>
          </div>

          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <span class="font-semibold">Prep:</span> {{ recipe.prep }}
            </span>
          </div>

          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <span class="font-semibold">Cook:</span> {{ recipe.cook }}
            </span>
          </div>
        </div>
      </div>


      <button
        @click="$router.push(`/recipes/${recipe.id}`)"
        class="w-full bg-emerald-900 text-white font-semibold py-2.5 rounded-full mt-5  transition duration-200"
      >
        View Recipe
      </button>
    </div>
  </div>
</template>
