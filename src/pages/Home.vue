<script setup lang="ts">
// import Card from '../components/Card.vue';
import CardContainer from '../components/CardContainer.vue';
import HeroBanner from '../components/HeroBanner.vue';


</script>

<template>
  <main class="bg-gray-200 text-gray-900 h-screen w-screen">
    <HeroBanner/>
    <Suspense>
      <CardContainer id="hotspot_1"/>
    </Suspense>
  </main>
</template>

<style scoped>

</style>
