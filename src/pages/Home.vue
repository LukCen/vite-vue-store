<script setup lang="ts">
// import Card from '../components/Card.vue';

import Carousel from '../components/common/Carousel.vue';
import HeroBanner from '../components/common/HeroBanner.vue';
import ProductCardContainer from '../components/products/ProductCardContainer.vue';

</script>

<template>
  <main class="gap-4 py-4">
    <HeroBanner/>
    <Suspense>
      <ProductCardContainer id="hotspot_1"/>
    </Suspense>
    <Carousel/>
  </main>

</template>
<style scoped>

</style>
