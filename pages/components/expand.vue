<template>
  <div class="w-full h-full text-white font-bold">
    <div class="w-full">
      <expand>
        <template slot="header">
          Hello list
        </template>
      </expand>
    </div>
  </div>

</template>
<script>
import Expand from '../../components/Expand.vue';
export default {
  layout: "components",
  data() {
    return {
    };
  },
  methods: {},
  components: { Expand }
}
</script>