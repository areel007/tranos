<template>
  <div class="add-blog">
    <div class="add-blog-inner">
      <input type="text" placeholder="title" v-model="title">
      <input type="text" placeholder="subtitle" v-model="subtitle">
      <input type="file" @change="onFileSelected">
      <div class="content">
        <vue-editor v-model="content" />
      </div>
      <button @click="handleSubmit">Post</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {VueEditor} from "vue2-editor"
export default {
  name: "add",
  components: {VueEditor},
  data() {
    return {
      selectedFile: null,
      title: '',
      subtitle: '',
      content: ''
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0];
    },
    async handleSubmit () {
      const fd = new FormData();

      fd.append("title", this.title);
      fd.append("subtitle", this.subtitle);
      fd.append("content", this.content);
      fd.append("imageUrl", this.selectedFile);
      await axios.post("https://tranos-api.onrender.com/api/v1/blog", fd);

      this.title = "";
      this.subtitle = "";
      this.content = "";
      this.selectedFile = null;
    }
  }
}
</script>

<style scoped>
.add-blog {
  width: 100%;
  padding: 20px;
}

.add-blog-inner {
  width: 100%;
  max-width: 600px;
}

input {
  padding: 15px;
  display: block;
  margin-bottom: 20px;
  border: 1px solid black;
  width: 100%;
}

.content {
  margin-bottom: 20px;
}

button {
  padding: 15px;
  background: #172673;
  color: white;
  width: 150px;
}
</style>
