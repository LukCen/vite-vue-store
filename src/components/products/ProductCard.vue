<script setup lang="ts">
import { ref } from 'vue';
import { fetchProducts } from '../../utils/ProductFetcher';
import { Loader } from 'lucide-vue-next';
// import Btn from './Btn.vue';

const api = {
  base: "https://dummyjson.com",
  get products(){
    return this.base + "/products"
  },
  get categories(){
    return this.products + "/categories"
  }
}


const product = await fetchProducts(api.products)
async function fetchProductByIndex(index:number){
  const productData:ProductCardData = {
    id: product.products[index].id,
    name: product.products[index].title,
    price: product.products[index].price,
    image: product.products[index].images[0] ?? "https://placehold.co/200x200/303030/FFFFFF/png?text=MISSING+PRODUCT+IMAGE",
  }
  return productData
}

const isLoaded = ref(false)

const randomIndex = Math.floor(Math.random() * 30)

const newProduct = await fetchProductByIndex(randomIndex)
</script>
<template>
  <div v-bind:title="newProduct.name" class="card flex flex-col gap-4 p-4 desktop:w-[200px] desktop:min-w-auto min-w-2/5 bg-white shadow-xl rounded-xl">
    <img v-show="isLoaded===true" v-bind:src="newProduct.image" alt="" @load="isLoaded = true" height="150" width="150">
    <Loader height="150" width="150" class="animate-spin" v-if="isLoaded === false" />
    <div class="product-info flex flex-col gap-2">
      <h3 class="line-clamp-2">{{ newProduct.name }}</h3>
      <p class="font-bold">$ {{ newProduct.price }}</p>
      <router-link class="bg-blue-500 hover:bg-blue-600 duration-150 text-white flex justify-center px-4 py-2 w-fit rounded-xl mx-auto my-0" as="link" :to="`/product/${newProduct.id}`" text="See more"/>
    </div>
  </div>
</template>
