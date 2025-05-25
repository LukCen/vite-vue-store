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
  },
  get categoryProductList(){
    return this.products + "/category"
  }
}

const productsByCategory = await fetchProducts(api.categories)


// const categoryNamesArray:string[] = [] //justa  helper object to keep stuff close, do I don't need to use endless dot notation

// categories.forEach((e:Record<string, string>) => {categoryNamesArray.push(e.name)})

// oh god help me


const categoriesContainer: Record<string, string[]> = {
  mens: [
  "Mens Shirts",
  "Mens Shoes",
  "Mens Watches",
  ], 
  womens: [
  "Womens Bags",
  "Womens Dresses",
  "Womens Jewellery",
  "Womens Shoes",
  "Womens Watches",
  ],
  electronics: [
  "Smartphones",
  "Laptops",
  "Tablets",
  ]
}


// builds top menu from keys in object above
const fetchedCategories = ref<string[]>([])
fetchedCategories.value.push(...Object.keys(categoriesContainer))

const hoverIndex = ref<number | null>(null)

</script>

<template>
  <ul class="flex gap-5 w-full py-4">
    <!-- menu dropdown - main categories -->
    <li v-for="(item, index) in fetchedCategories" :key="item" @mouseover="hoverIndex = index" @mouseleave="hoverIndex = null" class="flex flex-[1_1_150px] bg-slate-700 rounded-sm text-slate-100 relative">
     <a class="flex items-center justify-center w-full h-full" href="">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</a>
     <ul class="flex flex-col w-full rounded-sm top-full absolute overflow-hidden">
      <!-- submenu - individual subcategories -->
      <li v-show="hoverIndex===index" v-for="(subitem) in categoriesContainer[item]" :key="subitem" class="flex w-full bg-slate-600 hover:bg-slate-800 text-slate-100 p-4 justify-center">
        <router-link :to="`/productlist/${subitem}`">{{ subitem }}</router-link>
      </li>
     </ul>  
    </li>
  </ul>
</template>
