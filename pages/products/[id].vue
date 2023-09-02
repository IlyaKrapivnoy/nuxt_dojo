<template>
  <ProductDetails :product="product" />
</template>

<script setup>
import ProductDetails from '~/components/ProductDetails.vue';

const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri);

definePageMeta({
  layout: 'products',
});
</script>
