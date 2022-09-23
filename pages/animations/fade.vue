<template>
  <div class="w-full h-full flex flex-col mt-50 ">
    <button @click="show = !show">Toggle</button>
    <div class="w-50 overflow-hidden">
      <Transition name="slide-fade">
        <p class="text-yellow-500 text-5xl" v-if="show">hello</p>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: "animations",
  data() {
    return {
      show: false
    }
  }
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s ease-in;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>