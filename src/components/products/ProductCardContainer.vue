<script setup lang="ts">

import ProductCard from './ProductCard.vue';

</script>
<template>
  <div class="flex container-wrapper w-full overflow-hidden">
    <div class="flex gap-5 max-w-fit min-h-[300px] justify-center p-2 overflow-scroll">
      <ProductCard v-for="n in 5" :key="n"/>
    </div>

  </div>
</template>
