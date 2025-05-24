<script setup lang="ts">
import { ref } from 'vue';
import { fetchProducts } from '../ProductFetcher';


const api = {
  base: "https://dummyjson.com",
  get products(){
    return this.base + "/products"
  },
  get categories(){
    return this.products + "/categories"
  }
}

const categories = await fetchProducts(api.categories)

const arrCats:Categories[] = Array.from(categories)

const fetchedCategories = ref<string[]>([])
for(let i = 0; i<5; i++){
  const randomNumber = Math.floor(Math.random() * arrCats.length)
  fetchedCategories.value.push(categories[randomNumber].slug)
}
</script>
<!-- individual item (column) containing links to individual entries -->
<template>
  <ul class="flex gap-5 w-full py-4">
    <li class="flex flex-[1_1_150px] bg-slate-700 rounded-xl text-slate-100" v-for="(item) in fetchedCategories">
     <a class="flex items-center justify-center w-full h-full" href="">{{ item }}</a>
    </li>
  </ul>
</template>
