<template>
  <h2>About</h2>
  <h4 class="text-2xl">Client Info:</h4>
  <p class="mb-10">{{ data.message }}</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias aliquid asperiores autem
    cupiditate distinctio dolores doloribus eius est maiores modi necessitatibus nostrum, quidem sed similique totam
    velit veniam.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut debitis doloremque doloribus
    velit voluptate.
  </p>
</template>

<script setup>
useHead({
  title: 'Nuxt Dojo | About',
  meta: [
    {
      name: 'description',
      content: 'Nuxt 3 Merch',
    },
  ],
});

const { data } = await useFetch('/api/ninja?name=ilya', {
  method: 'post',
  body: { age: 30 },
});
</script>

<style scoped>
h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  margin: 20px 0;
}
</style>
