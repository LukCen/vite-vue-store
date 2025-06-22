<script setup lang="ts">
// import Card from '../components/Card.vue';

import CardContainer from '../components/CardContainer.vue';
import Carousel from '../components/Carousel.vue';
import HeroBanner from '../components/HeroBanner.vue';

</script>

<template>
  <main class="gap-4 py-4">
    <HeroBanner/>
    <Suspense>
      <CardContainer id="hotspot_1"/>
    </Suspense>
    <Carousel/>
  </main>

</template>
<style scoped>

</style>
