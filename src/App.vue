<script setup lang="ts">
import NavBar from './components/navbar/NavBar.vue';
import Footer from './components/common/Footer.vue';
</script>

<template>
  <section class="bg-gray-200 text-gray-900 max-h-fit w-screen gap-8">
    <Suspense>
      <NavBar />
    </Suspense>
    <Suspense>
      <router-view/>
    </Suspense>
    <Footer></Footer>
  </section>
</template>



