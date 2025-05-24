<script setup lang="ts">
import NavDropdown from './NavDropdown.vue'
import NavUserSection from './NavUserSection.vue';

</script>

<template>
  <nav class="flex max-h-[150px] gap-4">
    <router-link to="/">
      <img src="https://placehold.co/100x100/002299/FFFFFF/png?text=Logo" alt="">
    </router-link>
      <div class="nav-content w-full flex gap-4 px-4">
        <NavDropdown  />
        <NavUserSection />
      </div>

  </nav>
</template>
