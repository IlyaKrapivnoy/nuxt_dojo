<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold text-2xl">Nuxt Dojo Merge</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <NavList :links="navLinks" />
    </footer>
  </div>
</template>

<script setup>
import NavList from '~/components/NavList.vue';
import { navLinks } from '~/data/navData';
</script>
