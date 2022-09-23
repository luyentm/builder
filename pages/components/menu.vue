<template>
  <div class="w-full h-full p-50">
    <div @mouseenter="toggle = true" @mouseleave="toggle = false">
      <div class="cursor-pointer flex ">
        <div class="relative">
          <div class="bg-gray-400 px-5 py-1 ">
            Menu
          </div>
          <div class="absolute left-1/2 pt-2 transition transform -translate-x-1/2" v-if="toggle">
            <div class="bg-gray-400 relative rounded-md">
              <div class="w-3 h-3 bg-gray-400 absolute top-0  left-1/2 transition transform -translate-x-1/2 -translate-y-1/2 rotate-45">
              </div>
              <div class="rounded-md cursor-pointer overflow-hidden">
                <div class="hover:bg-gray-300 px-6 py-1">Menusdfsdfdsfd</div>
                <div class="hover:bg-gray-300 px-6 py-1">Menusdfsdfdsfd</div>
                <div class="hover:bg-gray-300 px-6 py-1">Menusdfsdfdsfd</div>
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
      toggle: true,
    }
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>
