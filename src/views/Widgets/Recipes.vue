<script setup>
import { ref, computed } from 'vue'
import RecipesCard from '@/components/RecipesCard.vue'

// your recipe data
const recipes = ref([
  {
    id: 1,
    name: 'Mediterranean Chickpea Salad',
    description: 'A power-packed chickpea salad tossed in a lemon-olive oil dressing.',
    servings: 2,
    prep: 10,
    cook: 0,
    image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg',
  },
  { id: 2, name: 'Avocado & Tomato Wholegrain Toast', description: 'Avocado spread on crunchy wholegrain bread, topped with juicy tomatoes.', servings: 1, prep: 5, cook: 0, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
  { id: 3, name: 'One-Pan Lemon Garlic Salmon', description: 'A simple weeknight dinner of flaky salmon and tender asparagus.', servings: 3, prep: 5, cook: 12, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
  { id: 4, name: 'Quinoa Veggie Power Bowl', description: 'A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.', servings: 4, prep: 10, cook: 15, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
  { id: 5, name: 'Sweet Potato Black Bean Tacos', description: 'Smoky roasted sweet potatoes and black beans served on warm tortillas.', servings: 3, prep: 15, cook: 15, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
  { id: 6, name: 'Greek Yogurt Berry Parfait', description: 'Layers of creamy yogurt, fresh berries and crunchy granola.', servings: 1, prep: 5, cook: 0, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
  { id: 7, name: 'Lentil & Spinach Soup', description: 'A hearty 30-minute soup rich in plant-protein and fiber.', servings: 4, prep: 10, cook: 20, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
  { id: 8, name: 'Banana Oat Pancakes', description: 'Flour-free pancakes sweetened naturally with banana and berries.', servings: 2, prep: 5, cook: 10, image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg' },
])

// dropdown states
const showPrepDropdown = ref(false)
const showCookDropdown = ref(false)

const prepOptions = [0, 5, 10, 15, 20]
const cookOptions = [0, 5, 10, 15, 20]

const selectedPrep = ref(null)
const selectedCook = ref(null)
const searchTerm = ref('')

// filtered recipes
const filteredRecipes = computed(() => {
  return recipes.value.filter(recipe => {
    const matchPrep = selectedPrep.value ? recipe.prep <= selectedPrep.value : true
    const matchCook = selectedCook.value ? recipe.cook <= selectedCook.value : true
    const matchSearch = recipe.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    return matchPrep && matchCook && matchSearch
  })
})

// toggle functions
function toggleDropdown(type) {
  if (type === 'prep') {
    showPrepDropdown.value = !showPrepDropdown.value
    showCookDropdown.value = false
  } else {
    showCookDropdown.value = !showCookDropdown.value
    showPrepDropdown.value = false
  }
}

function clearFilter(type) {
  if (type === 'prep') selectedPrep.value = null
  else selectedCook.value = null
}
</script>

<template>
  <main class="px-4 py-12">
    <section class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
        Explore our simple, healthy recipes
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover eight quick, whole-food dishes that fit real-life schedules and tastes.
      </p>
    </section>

    <!-- Filters -->
    <section class="flex flex-col md:flex-row justify-between mb-10 items-center gap-4">
      <div class="flex flex-col md:flex-row justify-start items-center gap-4 w-full md:w-max">
      
        <div class="relative w-full md:w-max">
          <button
          
            @click="toggleDropdown('prep')"
            class="flex items-center justify-between w-full md:w-44 bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            <span>
              {{ selectedPrep ? `≤ ${selectedPrep} mins` : 'Max Prep Time' }}
            </span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            v-if="showPrepDropdown"
            class="absolute mt-2 w-full md:w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-10"
          >
            <ul class="py-2 text-gray-700">
              <li v-for="time in prepOptions" :key="time">
                <label class="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="prepTime" :value="time" v-model="selectedPrep" class="mr-2">
                  {{ time }} minutes
                </label>
              </li>
              <li class="border-t mt-1">
                <button @click="clearFilter('prep')" class="w-full text-left px-4 py-2 text-sm text-emerald-600 hover:bg-gray-50">
                  Clear
                </button>
              </li>
            </ul>
          </div>
        </div>

    
        <div class="relative w-full md:w-max">
          <button
            @click="toggleDropdown('cook')"
            class="flex items-center justify-between w-full md:w-44 bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            <span>
              {{ selectedCook ? `≤ ${selectedCook} mins` : 'Max Cook Time' }}
            </span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            v-if="showCookDropdown"
            class="absolute mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-10"
          >
            <ul class="py-2 text-gray-700">
              <li v-for="time in cookOptions" :key="time">
                <label class="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="cookTime" :value="time" v-model="selectedCook" class="mr-2">
                  {{ time }} minutes
                </label>
              </li>
              <li class="border-t mt-1">
                <button @click="clearFilter('cook')" class="w-full text-left px-4 py-2 text-sm text-emerald-600 hover:bg-gray-50">
                  Clear
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div class="relative w-full md:w-max">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search by name or ingredient..."
          class="w-full bg-white border border-gray-300 text-gray-700 py-2 pl-10 pr-4 rounded-xl shadow-sm focus:outline-none focus:ring-2"
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- Recipe Cards -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RecipesCard v-for="(recipe, index) in filteredRecipes" :key="index" :recipe="recipe" />
    </section>
  </main>
</template>
