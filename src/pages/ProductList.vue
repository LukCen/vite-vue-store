<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchProducts } from '../ProductFetcher'




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

const product = await fetchProducts(api.products)

</script>
<template>
  <h1>THIS IS A PRODUCT LIST PAGE - UNDER CONSTRUCTION</h1>
  <main class="flex flex-col gap-4">
    <div class="product_block flex gap-2 bg-white p-4 rounded-xl shadow-xl">
      <img v-bind:src="product.images?.[0]" alt="">
      <div class="product_text_info"></div>
    </div>
  </main>
</template>
