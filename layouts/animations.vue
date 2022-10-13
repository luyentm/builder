<template>
  <div class="w-full h-screen flex flex-col bg-gray-800">
    <div class="flex-1 flex">
      <div class="w-1/5 border-r border-black p-3 flex flex-col space-y-1">
        <nuxt-link
          class="!outline-none text-gray-400 hover:text-orange-300"
          to="/animations/fade">fade</nuxt-link>
        <nuxt-link
          class="!outline-none text-gray-400 hover:text-orange-300"
          to="/animations/slide">slide</nuxt-link>
        <nuxt-link
          class="!outline-none text-gray-400 hover:text-orange-300"
          to="/animations/slide-over">slide-over</nuxt-link>
      </div>
      <div class="w-full flex-1 overflow-hidden">
        <nuxt />
      </div>
    </div>
    <div
      class="w-full h-10 flex justify-center items-center space-x-3 border-t border-black">
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/">home</nuxt-link>
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/builder">builder</nuxt-link>
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/animations/fade">animations</nuxt-link>
      <nuxt-link
        class="!outline-none text-gray-400 hover:text-orange-300"
        to="/components/menu">components</nuxt-link>
    </div>
  </div>
</template>
