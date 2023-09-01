<template>
  <div>Product details for {{ id }}</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem ea incidunt libero magnam magni mollitia, nam
    nemo non nulla porro provident quaerat quas qui quidem sequi tempore temporibus voluptatibus!
  </p>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: 'products',
});
</script>

<style scoped></style>
