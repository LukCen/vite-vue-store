<script setup lang="ts">
// import Card from '../components/Card.vue';

import CardContainer from '../components/CardContainer.vue';
import Carousel from '../components/Carousel.vue';
import HeroBanner from '../components/HeroBanner.vue';

</script>

<template>
  <main class="bg-gray-200 text-gray-900 max-h-fit w-screen gap-8 p-5">
    <HeroBanner/>
    <Suspense>
      <CardContainer id="hotspot_1"/>
    </Suspense>
    <Carousel/>
  </main>

</template>
<style scoped>

</style>
