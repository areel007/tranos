<template>
  <div class="single-blog">
    <h1>Single blog</h1>
    <vue-editor />
  </div>
</template>

<script>
import {VueEditor} from "vue2-editor"
export default {
  name: "single-blog",
  components: {VueEditor}
}
</script>

<style scoped>
.single-blog {
  position: relative;
  top: 70px;
}
</style>
