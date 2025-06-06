<script setup>
import { Delete, LockOpenIcon, MoonIcon, RemoveFormatting, Trash2Icon, UserCircle2 } from 'lucide-vue-next';

</script>
<template>
  <main class="mx-auto p-6 space-y-8 bg-white rounded-md mb-2">
    <!-- Header -->
    <section class="flex items-center gap-4">
      <!-- Placeholder avatar -->
      <UserCircle2 color="#2b7fff" height="75" width="75"/>
      <div>
        <h2 class="text-2xl font-semibold">John Doe</h2>
        <p class="text-gray-500">jdoe@example.com</p>
        <p class="text-sm text-gray-400">Joined: 12.02.2023</p>
      </div>
    </section>

    <!-- Editable Info -->
    <section>
      <h3 class="text-xl font-medium mb-4">Dane konta</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="Last name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="tel" placeholder="Phone number" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 duration-150 text-white rounded-md">Save changes</button>
    </section>

    <!-- Preferences -->
    <section>
      <h3 class="text-xl font-medium mb-4">Preferences</h3>
      <div class="flex items-center gap-4">
        <!-- Placeholder for icon -->
         <MoonIcon/>
        <label class="flex items-center gap-2">
          <input type="checkbox" /> Dark Mode
        </label>
      </div>
    </section>

    <!-- Account Actions -->
    <section class="border-t pt-6">
      <h3 class="text-xl font-medium mb-4">Actions</h3>
      <div class="space-y-2">
        <button class="w-full px-4 py-2 bg-gray-100 rounded-md text-left flex items-center gap-2">
          <LockOpenIcon/>
          Change password
        </button>
        <button class="w-full px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2">
          <Trash2Icon/>
          Delete account
        </button>
      </div>
    </section>
  </main>
</template>



<style scoped>

</style>
