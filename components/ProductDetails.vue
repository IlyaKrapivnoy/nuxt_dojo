<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" :alt="product.title" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7 font-bold">{{ product.title }}</h2>
        <p class="text-lg mb-3">
          Price - <span class="font-bold">${{ product.price }}</span>
        </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
