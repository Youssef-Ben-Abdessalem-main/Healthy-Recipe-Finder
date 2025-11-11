<script setup>
import Footer from './views/includes/footer.vue';
import Nav from './views/includes/Nav.vue';

</script>

<template>
  <div class="min-h-screen text-slate-800">
    <Nav />

    <main class="mx-auto max-w-6xl">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
