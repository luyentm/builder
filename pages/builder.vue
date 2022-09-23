<template>
  <div class="w-full h-full flex overflow-hidden">
    <div class="w-1/5 border-r border-black p-3 flex flex-col space-y-1">
      <button class="bg-gray-800 px-2 text-gray-400 w-full" @click="addHeader()">Add Header</button>
      <button class="bg-gray-800 px-2 text-gray-400 w-full">EDIT</button>
    </div>
    <div class="w-4/5 overflow-y-auto flex flex-col bg-gray-900">
      <component v-for="(i, index) in aaaaa" v-bind:is="i.type" :key="index" :data="getData(i.data_id)" />
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header.vue"
export default {
  name: 'IndexPage',
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