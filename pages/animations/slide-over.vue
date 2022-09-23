<template>
  <div class="w-full h-full relative overflow-hidden">
    <div class="p-5">
      <h1 class="text-xl">This is title</h1>
      <h1 class="text-lg">This is title</h1>
      <div @click="toggle = !toggle" class="w-10 h-10 bg-yellow-300 cursor-pointer"></div>
    </div>
    <div class="w-full h-full absolute top-0 left-full transform transition duration-500 flex" :class="toggle?'-translate-x-full':''">
      <div class="w-2/3 h-full bg-transparent" @click="toggle = !toggle">
      </div>
      <div class="w-1/3 h-full bg-gray-400">
        <h1 class="text-xl">Slide</h1>
        <div @click="toggle = !toggle" class="w-10 h-10 bg-yellow-300 cursor-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "animations",
  data() {
    return {
      toggle: false,
    }
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>

