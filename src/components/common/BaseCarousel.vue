<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';
import { ref } from 'vue';
import { onBeforeUnmount, onMounted } from 'vue';


const props = defineProps({
  images: {
    type: Array<CarouselItem>,
    required: true
  },
  delay: {
    type: Number,
    required: false
  }
})
let currentIndex = ref(0)
let intervalId = ref<ReturnType<typeof setInterval> | null>(null)


function startAutoRotation() {
  if (props.images.length === 0) return
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }, props.delay ?? 5000)
  console.log('rotating')
}

function stopAutoRotation() {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

onMounted(() => {
  startAutoRotation()
})
onBeforeUnmount(() => {
  stopAutoRotation()
})
</script>

<template>
  <div class="carousel relative overflow-hidden w-full">
    <div v-if="images.length === 0" class="w-full h-full bg-gray-200 flex items-center justify-center">
      No images provided
    </div>
    <div v-else class="flex transition-transform duration-1000 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="relative w-full flex-shrink-0">
        <router-link :to="`/productlist/${image.url}`">
          <picture>
            <source media="(max-width: 1023px)" :srcset="image.src.mobile">
            <source media="(min-width: 1024px)" :srcset="image.src.desktop">
            <img :src="image.src.mobile" :alt="image.alt || 'Carousel image'" class="w-full h-full brightness-50" />
          </picture>
          <div
            class="absolute flex flex-col gap-4 desktop:top-1/2 desktop:max-w-1/3 left-[40px] text-white max-w-full top-1/2 -translate-y-1/2 ">
            <h3 class="text-semibold">
              {{ image.header }}
            </h3>
            <p>{{ image.text }}</p>
            <span class="flex gap-2 bg-blue-500 hover:bg-blue-600 duration-150 px-4 py-2 rounded-md w-fit mt-4">See more
              <ChevronRight />
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
