<script setup lang="ts">
  import { ShoppingCart, User2 } from 'lucide-vue-next';
  import { onMounted, ref } from 'vue';
  import { fetchTableData, isLoggedIn } from '../utils/db';
  const accountClicked = ref(false)
  const menuUsername = ref('')
  onMounted(async () => {
    const table_Users:_User[] | null = await fetchTableData('users', '*')
    const user = await isLoggedIn()
    if(user){
      console.log(user.id)
      menuUsername.value = table_Users?.filter((e) => e.email === user?.email)[0].username as string ?? null
    }
    // fetching from my custom table, since Supabase' default for auth users doesn't seem to accept username props
    console.log(table_Users)
    if(table_Users){
      // yes this is always going to be a string, username is a mandatory field in the table
      
    }
  })

</script>

<template>
  <div class="flex items-center gap-8 flex-1/6">
    <div id="user-account" class="flex flex-1/2 h-full relative justify-center items-center text-nowrap font-medium gap-1 bg-blue-500 hover:bg-blue-600 hover:rounded-none duration-150 text-white px-4 py-2 rounded-xl" @mouseover="accountClicked = true" @mouseleave="accountClicked=false">
      <router-link class="flex items-center gap-1 text-white"
        to="/profile">
        <User2 /> {{ menuUsername ? menuUsername : "Guest" }}
      </router-link>
      <ul v-if="accountClicked"
        class="absolute top-full w-full bg-white text-blue-500 flex justify-center items-center shadow-md">
        <li class="bg-white w-full hover:bg-slate-100 duration-150 px-2 py-2 text-blue-500 hover:underline">
          <router-link to="/login" class="block w-full text-center">Register</router-link>
        </li>
      </ul>
    </div>
    <router-link
      class="flex flex-1/2 h-full justify-center items-center text-nowrap font-medium gap-1 bg-blue-500 hover:bg-blue-600 hover:rounded-none duration-150 text-white px-4 py-2 rounded-xl"
      to="/basket">
      <ShoppingCart />Cart
    </router-link>
  </div>
</template>
