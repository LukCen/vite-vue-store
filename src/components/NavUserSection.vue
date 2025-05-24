<script setup lang="ts">
import { ShoppingCart, User2 } from 'lucide-vue-next';




</script>

<template>
  <div class="flex items-center gap-8">
    <router-link class="flex text-nowrap gap-1 bg-blue-500 text-white px-4 py-2 rounded-xl" to="/profile"><User2/> Mój profil</router-link>
    <router-link class="flex text-nowrap gap-1 bg-blue-500 text-white px-4 py-2 rounded-xl" to="/basket"><ShoppingCart/>Koszyk</router-link>
  </div>
</template>
