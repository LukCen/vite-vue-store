<script setup lang="ts">

import BaseCarousel from '../components/common/BaseCarousel.vue';
import HeroBanner from '../components/common/HeroBanner.vue';
import ProductCardContainer from '../components/products/ProductCardContainer.vue';


</script>

<template>
  <main class="gap-4 py-4">
    <HeroBanner />
    <Suspense>
      <ProductCardContainer id="hotspot_1" />
    </Suspense>

    <BaseCarousel :delay=10000 :images="[
      {
        src: {
          desktop: 'src/assets/carousel_laptops.webp',
          mobile: 'src/assets/carousel_laptops_mobile.webp'
        },
        alt: 'Laptops',
        header: 'Laptops at best prices!',
        text: 'Lenovo, Apple or Dell? No matter what you\'re looking for, we offer best deals!',
        url: 'laptops'
      },
      {
        src: {
          desktop: 'src/assets/carousel_shoes.webp',
          mobile: 'src/assets/carousel_shoes_mobile.webp'
        },
        alt: 'Shoes',
        header: 'Stylish shoes for every budget!',
        text: 'Bussiness meeting? Casual date? Check our best deals to match any situation!',
        url: 'mens-shoes'
      }
    ]" />

  </main>

</template>
