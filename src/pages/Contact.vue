<script setup lang="ts">
import { Mail, Phone } from 'lucide-vue-next';

</script>

<template>
  <main class="flex flex-col items-center gap-8 w-full min-h-screen">
    <h4>Have a question regarding your order, or need more information about a product you're interested in? Let's talk! Select one of the contact options below, and we'll be happy to provide whatever information you need!</h4>

    <ul class="flex flex-col gap-4">
      <li class="flex gap-2"><Mail/> shopville@address.com</li>
      <li class="flex gap-2"><Phone />111-222-333</li>
    </ul>
  </main>

  <span class="block font-bold text-center mb-4">Disclaimer - all contact data shown here are for display purposes only. They do not lead to valid communication channels.</span>
</template>
