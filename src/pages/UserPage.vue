<script setup lang="ts">
import { LockOpenIcon, MoonIcon, Trash2Icon, UserCircle2 } from 'lucide-vue-next';
import { fetchTableData, isLoggedIn } from '../utils/db';
import { onMounted } from 'vue';
import { ref } from 'vue';


const currentUser = await isLoggedIn().then(e => e)


// cba with a better fix now, Supabase seems to always return this as a string anyway
const createdAt = new Date(currentUser?.confirmed_at as string)

const userCreatedAt = createdAt ? `${createdAt.getDate()}-${createdAt.getMonth()}-${createdAt.getFullYear()}` : "N/A"

const currentUserUsername = ref('')
onMounted(async () => {
  const table_Users: _User[] | null = await fetchTableData('users', '*')
  if (table_Users) {
    // yes this is always going to be a string, username is a mandatory field in the table
    // also this throws an error in the console, will fix later - conditional seems to do fine
    currentUserUsername.value = table_Users?.filter((e) => e.email === currentUser?.email)[0].username as string ?? null
  }
})



</script>
<template>
  <main class="mx-auto p-6 space-y-8 bg-white rounded-md mb-2">
    <!-- Header -->
    <section class="flex items-center gap-4">
      <!-- Placeholder avatar -->
      <UserCircle2 color="#2b7fff" height="75" width="75" />
      <div>
        <h2 class="text-2xl font-semibold">{{ currentUserUsername ? currentUserUsername : "Guest" }}</h2>
        <p class="text-gray-500">{{ currentUser?.email }}</p>
        <p class="text-sm text-gray-400">Joined: {{ userCreatedAt }}</p>
      </div>
    </section>

    <!-- Editable Info -->
    <section>
      <h3 class="text-xl font-medium mb-4">Dane konta</h3>
      <span class="text-center">This will contain some data once I get around to knowing what I even want to put in
        here</span>
    </section>

    <!-- Preferences -->
    <section>
      <h3 class="text-xl font-medium mb-4">Preferences</h3>
      <div class="flex items-center gap-4">
        <!-- Placeholder for icon -->
        <MoonIcon />
        <label class="flex items-center gap-2">
          <input type="checkbox" /> Dark Mode - TO BE IMPLEMENTED
        </label>
      </div>
    </section>

    <!-- Account Actions -->
    <section class="border-t pt-6">
      <h3 class="text-xl font-medium mb-4">Actions</h3>
      <div class=" flex gap-5">
        <button class="w-full px-4 py-2 bg-gray-100 rounded-md text-left flex items-center gap-2">
          <LockOpenIcon />
          Change password - TO BE IMPLEMENTED
        </button>
        <button class="w-full px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2">
          <Trash2Icon />
          Delete account - TO BE IMPLEMENTED
        </button>
      </div>
    </section>
  </main>
</template>



<style scoped></style>
