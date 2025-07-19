<script setup lang="ts">

import ProductCard from './ProductCard.vue';

</script>
<template>
  <div class="flex gap-5 min-h-[300px] justify-center p-2">
    <ProductCard v-for="n in 5" :key="n"/>
  </div>
</template>
