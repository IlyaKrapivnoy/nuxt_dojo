<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7 font-bold">{{ product.title }}</h2>
        <p class="text-lg mb-3">
          Price - <span class="font-bold">${{ product.price }}</span>
        </p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-6">{{ product.description }}</p>
        <button class="btn flex items-center">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
img {
  max-height: 300px;
}
</style>
