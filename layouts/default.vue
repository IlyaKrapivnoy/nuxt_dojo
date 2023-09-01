<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-2xl">Nuxt Dojo</NuxtLink>
        <NavList :links="navLinks" />
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import NavList from '../components/NavList.vue';
import { navLinks } from '~/data/navData';
</script>
