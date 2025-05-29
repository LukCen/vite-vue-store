<script setup lang="ts">
import { ref } from 'vue';
import {useRouter } from 'vue-router';
import { HomeIcon } from 'lucide-vue-next';

  const basketEmpty = ref(false)
  if(localStorage.length > 0){
    basketEmpty.value === true
  }

 function parseBasketData():Record<string, string>[]{
  const returnedData:Record<string,string>[] = []
  for(let i = 0; i < localStorage.length; i++){
    if(localStorage){
      const key = localStorage.key(i)
      const value = key ? localStorage.getItem(key) : null // 
      if(value){
        returnedData.push(JSON.parse(value))
      }
    }
  }
  return returnedData
 }
 const basketDataItems = parseBasketData()
  console.log(basketDataItems)
  const route = useRouter()

  // console.dir(localStorage)
</script>
<template>
  <main class="flex flex-col gap-4">
    <div v-show="basketEmpty" class="basket-empty gap-2 flex items-center justify-center">
      Your basket is currently empty.
      Return to the <router-link class="flex gap-2 w-fit text-blue-500" to="/"><HomeIcon/> Main Page</router-link> to continue shopping!
    </div>

    <div class="flex flex-col gap-4">
      <div class="basket-content-container">
        <ul v-for="(item) in basketDataItems" class="flex flex-col gap-4">
          <li class="bg-white flex items-center gap-2 rounded-md shadow-xl">
            <p>{{ item.id }}</p>
            <p>{{ item.quantity }}</p>
            <p>{{ item.price }}</p>
          </li>

        </ul>
      </div>
    </div>

  </main>
  <button @click="route.go(-1)" class="bg-amber-500 px-4 py-2 rounded-xl text-center">Go back</button>
</template>
