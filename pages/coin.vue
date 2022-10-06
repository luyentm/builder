<template>
  <div class="w-full h-full relative px-14">
    <div class="absolute z-0 w-full h-full">
      <div class=" relative w-full h-full">
        <div class="absolute top-0 w-500 h-500 grad2 transform -translate-y-1/2 translate-x-1/4"> </div>
        <div class="absolute bottom-0 w-500 h-full grad1 transform translate-y-2/3 -translate-x-1/4"> </div>
      </div>
    </div>
    <div class="relative w-full h-full flex flex-col justify-center items-center z-50 ">
      <div class="w-full h-18 flex items-center justify-between ">
        <div>
          <img src="/builder/images/logo.png" alt="">
        </div>
        <div class="flex items-center justify-between space-x-4 h-full">
          <div class="flex justify-center items-center space-x-8 px-8 text-white font-semibold">
            <div>
              <span>Token</span>
            </div>
            <div>
              <span>Litepaper</span>
            </div>
            <div>
              <span>Blog</span>
            </div>
          </div>
          <div class="h-2/3 w-1px bg-white"></div>
          <div>
            <img class="h-4" src="/builder/images/discord.png" alt="">
          </div>
          <div>
            <img class="h-4" src="/builder/images/telegram.png" alt="">
          </div>
          <div>
            <img class="h-4" src="/builder/images/twitter.png" alt="">
          </div>
        </div>
      </div>
      <div class="w-4/5 lg:w-3/5 flex-1 flex flex-col justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-full relative">
            <div class="relative w-150 z-50">
              <img src="/builder/images/53124.png" alt="">
            </div>
            <div class="absolute z-1 right-0 top-1/2 h-28 mt-10 w-2/3 transform -translate-y-1/2 bg-white/10 border-1 rounded-lg border-gray-500">
              <div class="flex h-full justify-end items-center pr-12">
                <div class="px-8 py-2 bg-gradient-to-r from-green-[#650960] to-yellow-[#F70D73] rounded-xl">
                  <span class="text-white font-bold text-xl">Connect Wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/3">
          <div class="text-white font-semibold my-1">Sign up</div>
          <div class="flex h-12 justify-center items-center">
            <div class="flex-1 h-full pr-10">
              <input type="text" class="w-full h-full bg-transparent border_color">
            </div>
            <div class="flex h-full justify-end items-center px-8 h-full  bg-blue bg-gradient-to-r from-[#650960] to-yellow-[#F70D73]">
              <div class="text-white font-bold text-xl">Approve</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header.vue"
export default {
  name: 'Coin',
  layout: "coin",
  components: { MyHeader },
  data() {
    return {
      aaaaa: [
      ],
      data: {
        "1234": {
          name: "iNet"
        }
      }
    }
  },
  methods: {
    addHeader() {
      this.aaaaa.push({
        type: "MyHeader",
        data_id: "1234"
      })
    },
    getData(data_id) {
      return this.data[data_id]
    }
  }
}
</script>

<style scoped>
.grad1 {
  background-image: radial-gradient(#D41479, transparent, transparent);
}

.grad2 {
  background-image: radial-gradient(#5C3E97, transparent, transparent);
}

.border_color {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #D41479, #5C3E97) 1;
}
</style>