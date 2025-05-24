<script setup>
import {useRouter } from 'vue-router';

  const route = useRouter()
</script>
<template>
  This is a Basket page - content will be displayed here
  <button @click="route.go(-1)" class="bg-amber-500 px-4 py-2 rounded-xl text-center">Go back</button>
</template>
