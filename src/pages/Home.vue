<script setup lang="ts">

import BaseCarousel from '../components/common/BaseCarousel.vue';
import HeroBanner from '../components/common/HeroBanner.vue';
import ProductCardContainer from '../components/products/ProductCardContainer.vue';


</script>

<template>
  <main class="gap-4 py-4">
    <HeroBanner/>
    <Suspense>
      <ProductCardContainer id="hotspot_1"/>
    </Suspense>

    <BaseCarousel :images="[
  { src: 'https://placehold.co/400x200?text=Hello+World&font=roboto', alt: 'Slide 1' },
  { src: 'https://placehold.co/400x200?text=Hello+World&font=montserrat', alt: 'Slide 2' },
  { src: 'https://placehold.co/400x200?text=Hello+World&font=playfair-display', alt: 'Slide 3' },
]"/>

  </main>

</template> 

