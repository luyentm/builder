<template>
  <div class="w-full h-full p-5 bg-red-100">
    <div class="w-full h-full bg-blue-200 flex justify-center items-center flex-col">
      <button @click="show =!show">show</button>

      <div v-for="i in 50" :key="i">
        <span>
          linelinelinelinelineline linelinelinelinelineline {{i}}
        </span>
      </div>
    </div>
    <!-- pop up -->
    <div v-if="show" class="h-screen w-full bg-black/60 fixed top-0 left-0 flex flex-col justify-center items-center" @click.self="show =!show">
      <div class="min-w-50 min-h-50 max-h-4/5 shadow-lg rounded-md overflow-y-auto bg-white p-5">
        <div v-for="i in 50" :key="i">
          linelinelinelinelineline linelinelinelinelineline {{i}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "scroll",
  data() {
    return {
      show: false
    }
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>
