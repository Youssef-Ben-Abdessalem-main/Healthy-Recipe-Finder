import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'underline decoration-orange-400 underline-offset-4 decoration-2',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Widgets/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Widgets/About.vue'),
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/Widgets/Recipes.vue'),
    },
    {
      path: '/recipes/:id', 
      name: 'recipe-details',
      component: () => import('../views/Widgets/Recipe-details.vue'),
    },
  ],
})

export default router
