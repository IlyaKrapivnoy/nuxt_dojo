<template>
  <div>Product details for {{ id }}</div>
  <p>
    {{ product.title }}
  </p>
  <p>
    {{ product.price }}
  </p>
  <p>{{ console.log('product', product) }}</p>
</template>

<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri);

definePageMeta({
  layout: 'products',
});
</script>

<style scoped></style>
