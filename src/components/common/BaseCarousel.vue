<script setup>
import { ref } from 'vue';
import { onBeforeUnmount, onMounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
})
let currentIndex = ref(0)
let intervalId = ref(null)

function startAutoRotation(){
  if(props.images.length === 0) return
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }, 5000)
  console.log('rotating')
}

function stopAutoRotation(){
  if(intervalId.value){
    clearInterval(intervalId.value)
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
  <div class="relative overflow-hidden w-full">
    <div v-if="images.length === 0" class="w-full h-full bg-gray-200 flex items-center justify-center">
      No images provided
    </div>
    <div v-else
      class="flex transition-transform duration-1000 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="relative w-full flex-shrink-0">
        <img
          :src="image.src"
          :alt="image.alt || 'Carousel image'"
          class="w-full h-full"
        />
        <p class="absolute top-1/2 left 1/2">This is an example text</p>
      </div>
    </div>
  </div>
</template>

