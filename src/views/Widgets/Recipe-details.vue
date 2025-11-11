<script setup>
import RecipesCard from '@/components/RecipesCard.vue';
import { ref } from 'vue';

const recipes = ref([
    {
        id: 1,
        name: 'Mediterranean Chickpea Salad',
        description: 'A power-packed chickpea salad tossed in a lemon-olive oil dressing.',
        servings: 2,
        prep: '10 Mins',
        cook: '0 Mins',
        image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg',
    },
    {
        id: 2,
        name: 'Avocado & Tomato Wholegrain Toast',
        description: 'Avocado spread on crunchy wholegrain bread, topped with juicy tomatoes.',
        servings: 1,
        prep: '5 Mins',
        cook: '0 Mins',
        image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg',
    },
    {
        id: 3,
        name: 'One-Pan Lemon Garlic Salmon',
        description: 'A simple weeknight dinner of flaky salmon and tender asparagus.',
        servings: 3,
        prep: '5 Mins',
        cook: '12 Mins',
        image: 'https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/16:9/w_1024%2Cc_limit/Burgers-Mumbai-Delivery.jpg',
    }
])
</script>

<template>
    <div class="px-4 py-12">
        <div class="flex flex-col">
            <div class="flex flex-row justify-start items-start gap-2">
                <span class="text-lg font-bold text-gray-500">Recipes</span>
                <span class="text-lg font-bold text-gray-900">/</span>
                <span class="text-lg font-bold text-gray-900">Mediterranean Chickpea Salad</span>
            </div>
            <div class="flex flex-col lg:flex-row mt-10">

                <div class="lg:w-1/2 h-[600px] rounded-2xl">
                    <img src="@/assets/images/recipes/mediterranean-chickpea-salad.webp"
                        alt="Mediterranean Chickpea Salad in a bowl with a lemon slice"
                        class="w-full h-full object-cover rounded-2xl">
                </div>

                <div class="lg:w-1/2 p-6 md:p-10">

                    <h1 class="text-3xl md:text-4xl font-extrabold mb-4 title-emerald-800 leading-tight">
                        Mediterranean Chickpea Salad
                    </h1>

                    <p class="text-gray-700 mb-6 text-md">
                        A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.
                    </p>

                    <div class="flex space-x-6 text-gray-700 mb-8">
                        <p class="flex items-center text-base gap-1">
                            <span class="text-xl align-middle"><img src="@/assets/icons/icon-servings.svg" alt="Serving"
                                    class="w-6 h-6" /></span>
                            <strong>Servings :</strong>
                            <span class="text-gray-500">2</span>
                        </p>
                        <p class="flex items-center text-base gap-1">
                            <span class="text-xl align-middle"><img src="@/assets/icons/icon-prep-time.svg"
                                    alt="Serving" class="w-6 h-6" /></span>
                            <strong>Prep :</strong>
                            <span class="text-gray-500">5 mins</span>
                        </p>
                        <p class="flex items-center text-base gap-1">
                            <span class="text-xl align-middle"><img src="@/assets/icons/icon-cook-time.svg"
                                    alt="Serving" class="w-6 h-6" /></span>
                            <strong>Cook :</strong>
                            <span class="text-gray-500">12 mins</span>
                        </p>
                    </div>

                    <hr class="border-gray-300 mb-6">

                    <div class="mb-8">
                        <h2 class="text-2xl font-bold mb-4 title-green">Ingredients:</h2>
                        <ul class="list-none space-y-2 text-gray-800 text-base">
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">1 can (400 g) chickpeas, drained & rinsed</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">1 small cucumber, diced</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">1 cup cherry tomatoes, halved</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">1/2 red bell pepper, diced</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">1/4 red onion, finely chopped</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">2 Tbsp fresh parsley, chopped</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">2 Tbsp extra-virgin olive oil</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">1 Tbsp fresh lemon juice</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">Sea salt & black pepper to taste</span>
                            </li>
                        </ul>
                    </div>

                    <hr class="border-gray-300 mb-6">

                    <div>
                        <h2 class="text-2xl font-bold mb-4 title-green">Instructions:</h2>
                        <ul class="list-none space-y-3 text-gray-800 text-base">
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper,
                                    red onion and
                                    parsley.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">Drizzle with olive oil and lemon juice.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">Season with salt and pepper; toss to coat.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="mr-2 text-lg leading-none title-green"><img
                                        src="@/assets/svgs/icon-bullet-point.svg" alt="Serving"
                                        class="w-6 h-6" /></span>
                                <span class="w-full">Serve immediately or chill up to 2 days.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="mt-10 flex flex-col">
                <span class="text-4xl font-bold mb-4 text-emerald-900">More recipes</span>
                <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <RecipesCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
                </section>
            </div>
        </div>
    </div>
</template>