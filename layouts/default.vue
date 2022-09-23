<template>
  <div class="w-full h-screen flex flex-col bg-gray-800">
    <nuxt class="w-full flex-1" />
    <div
      class="w-full flex justify-center items-center space-x-3 border-t border-black">
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/">home</nuxt-link>
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/builder">builder</nuxt-link>
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/animations/fade">animations</nuxt-link>
    </div>
  </div>
</template>
