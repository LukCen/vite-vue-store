<script setup lang="ts">
import { ShoppingCart, User2 } from 'lucide-vue-next';




</script>

<template>
  <div class="flex items-center gap-8 flex-1/6">
    <router-link class="flex flex-1/2 h-full justify-center items-center text-nowrap font-medium gap-1 bg-blue-500 hover:bg-blue-600 hover:rounded-none duration-150 text-white px-4 py-2 rounded-xl" to="/profile"><User2/>Account</router-link>
    <router-link class="flex flex-1/2 h-full justify-center items-center text-nowrap font-medium gap-1 bg-blue-500 hover:bg-blue-600 hover:rounded-none duration-150 text-white px-4 py-2 rounded-xl" to="/basket"><ShoppingCart/>Cart</router-link>
  </div>
</template>
