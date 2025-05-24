<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Suspense>
    <NavBar />
  </Suspense>
  <Suspense>
    <router-view/>
  </Suspense>
  <Footer></Footer>
</template>



