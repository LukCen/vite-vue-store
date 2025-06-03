<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchProducts } from '../utils/ProductFetcher'
import { watch, ref } from 'vue'
import { ChevronRight, Loader } from 'lucide-vue-next'
import { api } from '../utils/HandleBasketData'

const isLoaded = ref(false) // for loading skeletons/temporary assets to avoid empty components
const route = useRoute()
const products = ref<Product[]>([]) // rename this to something less generic later

async function fetchCategoryProducts(cat:string | string[]){
  const result = await fetchProducts(api.products + `/category/${cat}`)
  // console.log(result.products)
  products.value = result.products
}
let headerText: string;
// when site reloads for a new category, fetch data for new category
watch(
  () => route.params.category,
  (newCategory) => {
    fetchCategoryProducts(newCategory)
    isLoaded.value = false
    headerText = route.params.category as string // there's gotta be a better way to handle this, but i'll leave it for later
  },
  {immediate: true}
)

</script>
<template>
  <h1 class="text-center mb-5">We offer best priced {{ headerText.replace("-", " ") }} around!</h1>
  <main class="flex flex-col gap-4">
    <router-link :to="`/product/${prod.id}`" v-for="(prod) in products" class="product_block flex gap-2 bg-white hover:scale-105 duration-150 p-4 rounded-xl shadow-xl">
      <Loader height="150" width="150" class="animate-spin" v-if="isLoaded === false" />
      <img v-show="isLoaded===true" @load="isLoaded = true" class="max-h-[150px] max-w-[150px]" v-bind:src="prod.images?.[0]" alt="">
      <div class="product_text_info flex flex-col gap-2">
        <h2>{{ prod.title }}</h2>
        <p>$ {{ prod.price }}</p>
        <p>Rating: {{ prod.rating }} / 5</p>
        <span class="flex bg-primary hover:scale-105 duration-250 text-white px-2 py-1 rounded-xl w-fit">Check <ChevronRight/></span>
      </div>
    </router-link>
  </main>
</template>
