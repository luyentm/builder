<template>
  <div class="w-full h-full flex flex-col mt-50 ">
    <button @click="show = !show">Toggle</button>
    <div class="w-50 overflow-hidden">
      <Transition name="slide-fade">
        <p class="text-yellow-500" v-if="show">hello</p>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      show: false
    }
  }
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>