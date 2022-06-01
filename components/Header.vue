<template>
  <div class="w-full border-1 border-white border-dashed bg-transparent my-3 p-1">
    <p class="font-bold text-white">{{ data.name }}</p>
  </div>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
    }
  }
}
</script>
