<script setup lang="ts">
import { MenuIcon } from 'lucide-vue-next';
import NavDropdown from './NavDropdown.vue'
import NavUserSection from './NavUserSection.vue';
import MobileNavBar from './MobileNavBar.vue';
import { ref } from 'vue';

const menuMobileOpen = ref(false)
let canToggle = true
function menuMobileToggle(){
  if(!canToggle) return

  menuMobileOpen.value = !menuMobileOpen.value
  console.log(menuMobileOpen.value)

  canToggle = false
// prevents spamming the button -> prevents weird DOM-related behaviour
  setTimeout(() => {
    canToggle=true
  }, 150)
}


</script>
<!-- TODO - replace logo with something more permanent, fix the  -->
<template>
  <!-- desktop -->
  <nav class="hidden desktop:flex max-h-[80px] gap-4 bg-blue-500 border-1 border-black sticky top-0">
    <router-link to="/" class="w-fit">
      <img src="https://placehold.co/80x80/002299/FFFFFF/png?text=Logo" alt="">
    </router-link>
      <div class="nav-content flex flex-5/6 w-full gap-4 px-2">
        <NavDropdown  />
        <NavUserSection />
      </div>
  </nav>
  <!-- mobile -->
   <nav class="flex desktop:hidden min-h-[60px] nav gap-4 bg-blue-700 z-10 w-full justify-between sticky top-0">
    <div class="logo w-fit">
      <router-link to="/" class="flex w-fit items-center gap-4">
        <img src="https://placehold.co/60x60/002299/FFFFFF/png?text=Logo" alt=""> 
        <span class="block text-white font-bold">
          Shopville
        </span>
      </router-link>
    </div>
    <div class="right-side-container relative flex flex-col w-fit px-8 justify-center items-center bg-blue-800">
      <button @click="menuMobileToggle">
        <MenuIcon color="#fff"/>
      </button>
    </div>
    <MobileNavBar v-show="menuMobileOpen"/>
   </nav>
</template>
