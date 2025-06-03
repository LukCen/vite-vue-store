<script setup></script>
<template>
  <div class="skeleton-loader flex gap-4 bg-gray-500 rounded-xl min-h-full min-w-full px-10 py-4 items-center">

    <div class="image flex flex-1/4 h-full w-full rounded-[50%] bg-gray-600 items-stretch animate-pulse"></div>
    <div class="text flex flex-col gap-10 flex-3/4">
      <div class="text-line bg-gray-800 h-2 w-full rounded-4xl animate-pulse"></div>
      <div class="text-line bg-gray-800 h-2 w-full rounded-4xl animate-pulse"></div>
      <div class="text-line bg-gray-800 h-2 w-full rounded-4xl animate-pulse"></div>
    </div>
  </div>
</template>
