<template>
  <div class="w-full h-full p-50">
    <Menu>
      <template slot="label">Cars</template>
    </Menu>
    <Menu>
      <template slot="label">Cars</template>
    </Menu>
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
