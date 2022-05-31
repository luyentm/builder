<template>
  <div class="w-full min-h-screen flex flex-col bg-blue-500">
    <nuxt class="w-full h-full flex-1" />
    <div class="w-full bg-gray-700 flex justify-center space-x-1 py-1">
      <nuxt-link class="px-4 bg-gray-200" to="/">home</nuxt-link>
      <nuxt-link class="px-4 bg-gray-200" to="/builder">builder</nuxt-link>
      <nuxt-link class="px-4 bg-gray-200" to="/animate">animate</nuxt-link>
    </div>
  </div>
</template>