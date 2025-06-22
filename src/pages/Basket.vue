<script setup lang="ts">
import { ref } from 'vue';
import {useRouter } from 'vue-router';
import { HomeIcon } from 'lucide-vue-next';

  const basketEmpty = ref(true)
  if(localStorage.length > 0){
    basketEmpty.value = false
  }

 function parseBasketData():Record<string, string>[]{
  const returnedData:Record<string,string>[] = []
  for(let i = 0; i < localStorage.length; i++){
    if(localStorage){
      const key = localStorage.key(i)
      const value = key ? localStorage.getItem(key) : null // 
      // PATCH JOB - FIX LATER
      const correctKeyFormat = /^\d{1,9}$/;
      if(value && correctKeyFormat.test(key as string)){
        returnedData.push(JSON.parse(value))
      }
    }
  }
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
console.log(basketContentsData)

  const route = useRouter()


</script>
<template>
  <main class="flex flex-col gap-4">
    <div v-show="basketEmpty" class="basket-empty gap-2 flex items-center justify-center">
      Your basket is currently empty.
      Return to the <router-link class="flex gap-2 w-fit text-blue-500" to="/"><HomeIcon/> Main Page</router-link> to continue shopping!
    </div>

    <div class="flex flex-col gap-4">
      <div v-show="basketEmpty===false" class="basket-content-container">
        <h2>Your basket currently holds: </h2>
        <ul class="flex flex-col gap-4">
          <li v-for="(item) in basketDataItems"  class="bg-white flex items-center gap-4 rounded-md shadow-xl">
            <img class="max-w-[75px] max-h-[75px]" v-bind:src="fetchParamsForBasketProduct(item.id)?.images?.[0]" alt="">
            <p class="flex flex-col gap-2">Name <br>{{ fetchParamsForBasketProduct(item.id)?.title }}</p>
            <p class="flex flex-col gap-2">ID <br>{{ item.id }}</p>
            <p class="flex flex-col gap-2">Quantity <br>{{ item.quantity }}</p>
            <p class="flex flex-col gap-2">Price $<br>{{ (parseInt(item.price) * parseInt(item.quantity)).toFixed(2)  }}</p>
          </li>

        </ul>
      </div>
    </div>

  </main>
  <button @click="route.go(-1)" class="bg-amber-500 px-4 py-2 rounded-xl text-center">Go back</button>
</template>
