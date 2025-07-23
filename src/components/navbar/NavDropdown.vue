<script setup lang="ts">
import { ref } from 'vue';
import { fetchProducts } from '../../utils/ProductFetcher';
import { api } from '../../utils/HandleBasketData';



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

const apiCall = await fetchProducts(api.categories)

function fetchProductSlug(n: string) {
  if (apiCall) {
    return apiCall.find((e: Record<string, string>) => e.name === n)?.slug
  }
}

// builds top menu from keys in object above
const fetchedCategories = ref<string[]>([])

fetchedCategories.value.push(...Object.keys(categoriesContainer))

const hoverIndex = ref<number | null>(null)

</script>

<template>
  <!-- desktop -->
  <ul class="menu_desktop hidden desktop:flex gap-5 flex-5/6">
    <!-- menu dropdown - main categories -->
    <li v-for="(item, index) in fetchedCategories" :key="item" @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = null"
      class="flex min-w-[150px] px-4 w-fit duration-150 text-white font-semibold relative">
      <a class="flex items-center justify-center w-full h-full" href="/">{{ item.charAt(0).toUpperCase() + item.slice(1)
        }}</a>
      <ul class="flex flex-col w-full top-full left-0 absolute overflow-hidden shadow-2xl">
        <!-- submenu - individual subcategories -->
        <li v-show="hoverIndex === index" v-for="(subitem) in categoriesContainer[item]" :key="subitem"
          class="subitem flex w-full bg-blue-500 hover:bg-blue-600 text-white p-4 justify-center text-center cursor-pointer">
          <router-link :to="`/productlist/${fetchProductSlug(subitem)}`">{{ subitem }}</router-link>
        </li>
      </ul>
    </li>
  </ul>

  <!-- mobile -->
  <ul class="menu_mobile flex desktop:hidden w-full flex-col gap-5 flex-5/6">
    <!-- menu dropdown - main categories -->
    <li v-for="(item, index) in fetchedCategories" :key="item" @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = null"
      class="product_cat flex flex-col min-w-[150px] px-4 w-full duration-150 text-white font-semibold relative">
      <a class="flex items-center justify-center w-full h-full" href="/">{{ item.charAt(0).toUpperCase() + item.slice(1)
        }}</a>
      <ul class="product_subcat flex flex-col w-full top-full gap-2 left-0 overflow-hidden shadow-2xl">
        <!-- submenu - individual subcategories -->
        <li v-for="(subitem) in categoriesContainer[item]" :key="subitem"
          class="subitem flex w-full bg-blue-500 hover:bg-blue-600 text-white p-2 font-normal justify-center cursor-pointer">
          <router-link :to="`/productlist/${fetchProductSlug(subitem)}`">{{ subitem }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped>
li.subitem:not(last-child) {
  border-bottom: 2px solid var(--color-blue-700);
}
li.subitem:first-child {
  border-top: 1px solid var(--color-blue-700)
}
</style>
