<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {addUser, fetchTableData, loginUser} from '../utils/db.ts'

const log_username = ref('')
const log_password = ref('')
const loginEmail = ref('')

const registeredUser = reactive({
  username: '',
  email: '',
  password: '',
})

async function handleNewUser() {
  try {
    const newUser: _User = {
      username: registeredUser.username,
      email: registeredUser.email,
      password: registeredUser.password,
    }
    await addUser(newUser)
    
  } catch(e){
    console.error(e)
  }
}

async function handleLogin(){
   const table_Users:_User[] | null = await fetchTableData('users', '*')
    if(table_Users){
      // a bit awkward but Supabase registration explicitly wants only an email, so I needed to query a custom table and match username from there
      const loginUserEmail = table_Users.find((e) => e.username === log_username.value)?.email
      loginEmail.value = loginUserEmail ?? ""
    }
  try {
    const currentUser: _User = {
      username: log_username.value,
      email: loginEmail.value,
      password: log_password.value
    }
    await loginUser(currentUser)
  }
  catch (e){
    console.error('Error logging in - ' + e)
  }
  location.reload()
}

</script>
<template>
  <section class="bg-white flex flex-col gap-4 justify-center items-center">
  <form @submit.prevent id="user-register" class="flex flex-col gap-4 p-4 items-center w-[800px] mx-0 my-auto">
    <h2>Not a user? Make a free account below!</h2>
       <div class="row-block w-full flex flex-col gap-2 p-2 rounded-2xl">
      <label for="register-username">Username</label>
      <input v-model="registeredUser.username" class="border border-blue-500 px-4 py-2 rounded-xl" id="register-password" placeholder="New User">
    </div>
    <div class="row-block flex w-full flex-col gap-2 p-2 rounded-2xl">
      <label for="register-email">E-mail</label>
      <input v-model="registeredUser.email" class="border border-blue-500 px-4 py-2 rounded-xl" id="register-email" type="email" placeholder="email@example.org">
    </div>
    <div class="row-block w-full flex flex-col gap-2 p-2 rounded-2xl">
      <label for="register-password">Password</label>
      <input v-model="registeredUser.password" class="border border-blue-500 px-4 py-2 rounded-xl" id="register-password" type="password" placeholder="loremipsum">
    </div>

    <button type="button" @click="handleNewUser" class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 duration-150 text-center">Register account</button>
  </form>
  <form id="user-login" class="flex flex-col gap-4 p-4 items-center w-[800px] mx-0 my-auto">
    <h2>Already have an account? Log in and start exploring the store!</h2>
      <div class="row-block w-full flex flex-col gap-2 p-2">
        <label for="login-username">Username or email</label>
        <input v-model="log_username" id="login-username" class="border border-blue-500 px-4 py-2 rounded-xl" type="text" placeholder="John Doe">
      </div>

      <div class="row-block w-full flex flex-col gap-2 p-2">
        <label for="login-password">Password</label>
        <input v-model="log_password" id="login-password" class="border border-blue-500 px-4 py-2 rounded-xl" type="password" placeholder="loremipsum">
      </div>
      <button type="button" @click="handleLogin" class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 duration-150 text-center">Log in</button>
  </form>
  </section>
</template>
