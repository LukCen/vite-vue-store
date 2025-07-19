<script setup></script>
<template>
  <footer class="bg-blue-500 text-white flex flex-col gap-4 justify-center items-center p-4">
    <ul class="grid grid-cols-3 gap-4 w-fit">

      <li><router-link class="w-full block hover:underline text-center" to="/about">About</router-link></li>
      <li><a class="w-full block hover:underline text-center" href="#">Blog</a></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <span class="text-slate-100 text-[10px]">Shopville by Łukasz Cena</span>
  </footer>
</template>
