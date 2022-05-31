<template>
  <div class="w-full min-h-screen flex flex-col bg-gray-700">
    <nuxt class="w-full h-full flex-1" />
    <div class="w-full  flex justify-center space-x-3  border-t bg-gray-700 border-black">
      <nuxt-link class="!outline-none text-gray-400 hover:text-orange-300" to="/">home</nuxt-link>
      <nuxt-link class="!outline-none text-gray-400 hover:text-orange-300" to="/builder">builder</nuxt-link>
      <nuxt-link class="!outline-none text-gray-400 hover:text-orange-300" to="/animate">animate</nuxt-link>
    </div>
  </div>
</template>