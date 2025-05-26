<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchProducts } from '../ProductFetcher'
import { watch, ref } from 'vue'

const api = {
  base: "https://dummyjson.com",
  get products(){
    return this.base + "/products"
  },
  get categories(){
    return this.products + "/categories"
  }
}

const route = useRoute()
const products = ref<Product[]>([]) // rename this to something less generic later

async function fetchCategoryProducts(cat:string | string[]){
  const result = await fetchProducts(api.products + `/category/${cat}`)
  // console.log(result.products)
  products.value = result.products
}

// when site reloads for a new category, fetch data for new category
watch(
  () => route.params.category,
  (newCategory) => {
    fetchCategoryProducts(newCategory)

  },
  {immediate: true}
)

</script>
<template>
  <h1>THIS IS A PRODUCT LIST PAGE - UNDER CONSTRUCTION</h1>
  <main class="flex flex-col gap-4">
    <router-link :to="`/product/${prod.id}`" v-for="(prod) in products" class="product_block flex gap-2 bg-white p-4 rounded-xl shadow-xl">
      <img class="max-h-[150px] max-w-[150px]" v-bind:src="prod.images?.[0]" alt="">
      <div class="product_text_info flex flex-col gap-2">
        <h2>{{ prod.title }}</h2>
        <p>$ {{ prod.price }}</p>
        <p>Rating: {{ prod.rating }} / 5</p>
        <p></p>
      </div>
    </router-link>
  </main>
</template>
