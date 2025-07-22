<script setup lang="ts">

import ProductCard from './ProductCard.vue';

</script>
<template>
  <div class="card_container_outer flex container-wrapper desktop:justify-center w-full overflow-hidden">
    <div class="card_container_inner flex gap-5 max-w-fit min-h-[300px] desktop:justify-center p-2 overflow-scroll">
      <ProductCard v-for="n in 5" :key="n"/>
    </div>

  </div>
</template>
