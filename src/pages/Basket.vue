<script setup lang="ts">
import { ref } from 'vue';
import {useRouter } from 'vue-router';
import { HomeIcon, Trash2 } from 'lucide-vue-next';

import { useStore } from '../store/store';
const route = useRouter()
const store = useStore()
// console.log(store.getTotalItems)

  const basketEmpty = ref(true)
  if(store.getTotalItems > 0){
    basketEmpty.value = false
  }

 function parseBasketData(){
  const returnedData:BasketDataItem[] = store.getAllItems
  return returnedData
 }
 const basketDataItems = parseBasketData()

// data fetching for the basket contents

const basketContentsData = await Promise.all(
  basketDataItems.map(e => fetch(`https://dummyjson.com/products/${encodeURIComponent(e.id)}`).then(res=>res.json()))
)

function fetchParamsForBasketProduct(itemId:string | number){
  const product = basketContentsData.find((i) => i.id === itemId)
  if(product){
    return product
  }
}


</script>
<template>
  <main class="flex flex-col gap-4">
    <!-- message to show if basket empty -->
    <div v-show="basketEmpty" class="basket-empty gap-2 flex items-center justify-center">
      Your basket is currently empty.
      Return to the <router-link class="flex gap-2 w-fit text-blue-500" to="/"><HomeIcon/> Main Page</router-link> to continue shopping!
    </div>
    <!-- contents to show if basket has content in it -->
    <div class="flex flex-col gap-4">
      <div v-show="basketEmpty===false" class="basket-content-container flex flex-col gap-4">
        <h2 class="mt-2">Your basket currently holds: </h2>
        <ul class="flex flex-col gap-4">
          <li v-for="(item) in basketDataItems"  class="bg-white flex items-center justify-between gap-4 px-4 rounded-md shadow-xl">
            <div class="basket-contents-basic-info flex gap-4 items-center">
              <img class="max-w-[75px] max-h-[75px]" v-bind:src="fetchParamsForBasketProduct(item.id)?.images?.[0]" alt="">
              <p class="flex flex-col gap-2">Name <br>{{ fetchParamsForBasketProduct(item.id)?.title }}</p>
            </div>
            <div class="basket-content-details flex gap-4">
              <p class="flex flex-col gap-2">ID <br>{{ item.id }}</p>
              <p class="flex flex-col gap-2">Quantity <br>{{ item.quantity }}</p>
              <p class="flex flex-col gap-2">Price $<br>{{ (item.price * item.quantity).toFixed(2)  }}</p>
              <button @click="store.removeItem(Number(item.id))" class="bg-red-500 px-6 py-2 hover:bg-red-700 duration-150"><Trash2 color="#fff"/></button>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </main>
  <button @click="route.go(-1)" class="bg-amber-500 px-4 py-2 rounded-xl text-center">Go back</button>
</template>
