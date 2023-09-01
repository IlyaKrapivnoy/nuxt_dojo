<template>
  <ul class="flex gap-4 items-center">
    <li v-for="{ to, text } in links" :key="text">
      <NuxtLink :to="to" :class="{ btn: text === 'Products' }">{{ text }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
