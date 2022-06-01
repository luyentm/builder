<template>
  <div class="w-full flex h-full">
    <div class="w-1/5 border-r border-black flex justify-center items-center">
      <input ref="file1" type="file" hidden @change="handleFileChange1" />
      <img
        v-if="file1"
        class="overflow-hidden cursor-pointer p-3 border-2 border-dashed rounded-md border-yellow-200 m-3"
        :src="file1"
        alt=""
        @click="$refs.file1.click()"
      />
      <button v-else class="w-full" @click="$refs.file1.click()">
        Choose image 1
      </button>
    </div>
    <div class="w-3/5 flex flex-col">
      <div class="flex-1 flex justify-center items-center">
        <img class="w-3/5 object-contain" src="/images/review.jpg" />
      </div>
      <div>
        <button class="px-5">preview</button>
      </div>
    </div>
    <div class="w-1/5 border-l border-black flex justify-center items-center">
      <input
        ref="file2"
        type="file"
        hidden
        @change="handleFileChange2"
        @click="$refs.file2.click()"
      />
      <img
        v-if="file2"
        class="overflow-hidden cursor-pointer p-3 border-2 border-dashed rounded-md border-yellow-200 m-3"
        :src="file2"
        alt=""
        @click="$refs.file2.click()"
      />
      <button v-else class="w-full" @click="$refs.file2.click()">
        Choose image 2
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      file1: "",
      file2: "",
    };
  },
  methods: {
    handleFileChange1() {
      let localFile = this.$refs.file1.files[0];
      console.log("file change");
      let self = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        var contents = e.target.result;
        console.log(
          "🚀 ~ file: builder.vue ~ line 60 ~ handleFileChange1 ~ contents",
          contents
        );
        self.file1 = contents;
      };
      reader.readAsDataURL(localFile);
    },
    handleFileChange2() {
      let localFile = this.$refs.file2.files[0];
      let self = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        var contents = e.target.result;
        self.file2 = contents;
      };
      reader.readAsDataURL(localFile);
    },
  },
};
</script>
