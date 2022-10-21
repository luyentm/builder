<template>
  <div class="w-full h-full p-50 ">
    <div class="flex flex-row space-x-5">
      <div @mouseenter="toggle1 = true" @mouseleave="toggle1 = false">
        <div class="cursor-pointer flex ">
          <div class="relative">
            <div class="bg-gray-400 px-5 py-1 ">
              <slot name="label"></slot>
            </div>
            <div class="absolute left-1/2 pt-2 transition transform -translate-x-1/2" v-if="toggle1">
              <div class="bg-gray-400 relative rounded-md">
                <div class="w-0 h-0 bg-transparent border-10 border-transparent border-b-gray-400  absolute top-0  left-1/2 transition transform -translate-x-1/2 -translate-y-full">
                </div>
                <div class="rounded-md cursor-pointer min-w-max overflow-hidden">
                  <div class="hover:bg-gray-300 px-6 py-1">Toyota</div>
                  <div class="hover:bg-gray-300 px-6 py-1">Honda</div>
                  <div class="hover:bg-gray-300 px-6 py-1">Santafe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div @mouseenter="toggle2 = true" @mouseleave="toggle2 = false">
        <div class="cursor-pointer">
          <div class="relative">
            <div class="bg-gray-400 px-5 py-1 ">
              Phone
            </div>
            <div class="absolute left-1/2 pt-2 transition transform -translate-x-1/2" v-if="toggle2">
              <div class="bg-gray-400 relative rounded-md">
                <div class="w-0 h-0 bg-transparent border-10 border-transparent border-b-gray-400  absolute top-0  left-1/2 transition transform -translate-x-1/2 -translate-y-full">
                </div>
                <div class="rounded-md cursor-pointer min-w-max overflow-hidden">
                  <div class="transform transition-colors duration-600  hover:bg-gray-300 px-6 py-1">iPhone Xs Max</div>
                  <div class="transform transition-colors duration-600  hover:bg-gray-300 px-6 py-1">iPhone 13 Promax</div>
                  <div class="transform transition-colors duration-600  hover:bg-gray-300 px-6 py-1">Samsung Note 10 Plus</div>
                  <div class="transform transition-colors duration-600  hover:bg-gray-300 px-6 py-1">Bphone B86</div>
                  <div class="transform transition-colors duration-600  hover:bg-gray-300 px-6 py-1">Google Pixel 6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "components",
  data() {
    return {
      toggle1: false,
      toggle2: false,
    }
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>
