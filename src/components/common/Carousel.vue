<script setup lang="ts">
// todo - will probably replace with my own solution at some point
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'



const slides = [
  {
    title: 'Laptops',
    content: 'Find the best laptops at lowest prices!',
    path: '/productlist/laptops',
    image: 'https://i.postimg.cc/593Z6fsG/carousel-laptops.webp'
  },
  {
    title: 'Best shoes for gentlemen!',
    content: 'Come find your perfect pair!',
    path: '/productlist/mens-shoes',
    image: "https://i.postimg.cc/HkNpRMjG/carousel-menshoes.webp"
  }
]

</script>
<script lang="ts">
export default {
  components: {VueperSlides, VueperSlide}
}
</script>

<style scoped>
/* container for the text inside the slider (both title and content params) */


</style>

<template>
  <vueper-slides>
    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" :link="slide.path" :image="slide.image" class="text-white text-xl bg-contain"  >
    </vueper-slide>
  </vueper-slides>
</template>


