<script setup lang="ts">
import NavDropdown from './NavDropdown.vue'
import NavUserSection from './NavUserSection.vue';

</script>
<!-- TODO - replace logo with something more permanent, fix the  -->
<template>
  <nav class="flex max-h-[80px] gap-4 bg-blue-500 border-1 border-black">
    <router-link to="/" class="w-fit">
      <img src="https://placehold.co/80x80/002299/FFFFFF/png?text=Logo" alt="">
    </router-link>
      <div class="nav-content flex flex-5/6 w-full gap-4 px-2">
        <NavDropdown  />
        <NavUserSection />
      </div>

  </nav>
</template>
