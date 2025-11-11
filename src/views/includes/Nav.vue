<script setup>
import { ref, computed } from 'vue'
import { useDevice } from '@/composables/useDevice'

const isOpen = ref(false)
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const { device } = useDevice()
const isDesktop = computed(() => device.value === 'desktop')
const isMobileLike = computed(() => device.value !== 'desktop')
</script>

<template>
    <header class="sticky top-0 z-30 backdrop-blur border-b border-slate-200">
        <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <img src="@/assets/svgs/logo.svg" alt="Healthy Recipe Finder logo" />
            </div>
            <nav v-show="isDesktop" class="flex items-center gap-6">
                <RouterLink class="text-emerald-900 hover:text-emerald-700 transition" to="/">Home</RouterLink>
                <RouterLink class="text-emerald-900 hover:text-emerald-700 transition" to="/about">About</RouterLink>
                <RouterLink class="text-emerald-900 hover:text-emerald-700 transition" to="/recipes">Recipes
                </RouterLink>
            </nav>
            <RouterLink v-show="isDesktop"
                class="ml-4 rounded-md bg-emerald-800 px-3 py-2 text-white text-sm font-medium hover:bg-emerald-800 transition !no-underline"
                to="/recipes">
                Browse recipes
            </RouterLink>
            <button v-show="isMobileLike"
                @click="toggleMenu"
                :aria-expanded="isOpen ? 'true' : 'false'"
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                class="ml-3 inline-flex items-center justify-center w-10 h-10 rounded-md border-2 bg-gray-100 text-emerald-900 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                <img src="@/assets/icons/icon-hamburger-menu.svg" alt="Menu" />
            </button>
        </div>
        <div id="mobile-menu" v-if="isMobileLike && isOpen" class="border-t border-slate-200 bg-white">
            <nav class="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
                <RouterLink class="block py-2 text-emerald-900 hover:text-emerald-700 transition" to="/">
                    Home
                </RouterLink>
                <RouterLink class="block py-2 text-emerald-900 hover:text-emerald-700 transition" to="/about">
                    About
                </RouterLink>
                <RouterLink class="block py-2 text-emerald-900 hover:text-emerald-700 transition" to="/recipes">
                    Recipes
                </RouterLink>
                <RouterLink
                    class="mt-2  w-full text-center rounded-md bg-emerald-900 px-3 py-2 text-white text-sm font-medium hover:bg-emerald-800 transition"
                    to="/recipes">
                    Browse recipes
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped></style>
