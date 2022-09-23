<template>
  <div class="w-full h-full p-5">
    <div class="w-full h-200 flex rounded-xl overflow-hidden">
      <div class="flex-1 h-full bg-gray-500 overflow-hidden">
        <div class="w-full flex-col items-end justify-end w-full transform transition-all duration-200">
          <div class="w-full">
            <div @click="toggle = !toggle">
              <div class="w-10 h-10 cursor-pointer bg-yellow-400" />
              {{ toggle }}
            </div>
            <div class="px-5"> asdfjka ksjdfakjnfjksfllklkf lskdfjlk slkdf lskd flksdf lksd flksdfl ksdflk sdlfks dlfksl dkflsdk flksf lskd flks dflksd flskf lksd flksd flskdfn</div>
          </div>
        </div>
      </div>
      <div class="h-full bg-gray-600 transform transition-all duration-1000 overflow-hidden" :class="toggle ? 'w-2/3' : 'w-0'">
        <div @click="toggle = !toggle">
          <undo_icon class="w-10 h-10 cursor-pointer" />
          {{ toggle }}
        </div>
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
      hidebar: false
    }
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>
