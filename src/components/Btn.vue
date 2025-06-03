
  <script setup lang="ts">
  // THIS SHOULD HAVE BEEN A SIMPLE CSS CLASS BUT IM STUPID AND WANTED MODULARITY FOR SOME REASON

import { type PropType } from 'vue';

  const props = defineProps({
    /** 
     * @param {string} as - determines what HTML tag is created  :
     * - 'button' creates a normal button element, which also accepts all button-specific parameters (like 'type') - this is the default option if no parameters are passed
     * TODO - actually implement the parameter parsing properly
     * 
     * - 'link' creates a router-link, which will also need a 'to' parameter with a valid router path
     * @param {string} to - a valid path to one of your pages from your vue router
    */
    
    as: {
      type: String as PropType<'button' | 'link'>,
      default: 'button'
    },
    to: {
      type: String, 
      default: ''
    }, 
    text: String
  })
  
  </script>


<template>
  <router-link  v-if="as === 'link' && to" :to="to">{{ text }}</router-link>

   <button v-else>{{ text }}</button>
</template>
