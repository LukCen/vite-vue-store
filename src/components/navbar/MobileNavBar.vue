<script setup lang="ts">
import NavDropdown from './NavDropdown.vue';
import NavUserSection from './NavUserSection.vue';


</script>
<template>
  <aside class="bg-blue-800 text-black flex w-full absolute items-center flex-col gap-4 py-2 top-full right-0 shadow-2xl">
    <NavDropdown/>
    <NavUserSection class="flex justify-between"/>
</aside>
</template>

<style scoped>
aside {
  --padding: 16px; /*p-4 in tailwind */
  transform: translateY(60px + var(--padding))
}
</style>
