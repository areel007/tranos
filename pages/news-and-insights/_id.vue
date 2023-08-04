<template>
<div class="single-blog">
  <div class="single-blog__inner">
    <div>
      <div v-if="blog.title===undefined" class="flex justify-center">
        <Loading />
      </div>
      <div v-else  class="blog__wrapper">
        <h3 class="capitalize">{{ blog.title }}</h3>
        <div class="image">
          <img :src="blog.imageUrl" alt="tranos" class="w-full h-full object-cover">
        </div>
        <p v-html="blog.content"></p>
        <button class="bg-black text-white p-4" @click="$router.push('/contacts')">Contact us</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import Loading from "../../components/sections/Loading";

export default {
  name: "id",
  components: {Loading},
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    async getBlogPost() {
      const blog = await axios.get(`https://tranos-api.onrender.com/api/v1/blog/${this.$route.params.id}`)
      this.blog = blog.data.blog
    }
  },
  mounted() {
    this.getBlogPost()
  }
}
</script>

<style scoped>
.single-blog {
  position: relative;
  top: 70px;
  padding: 50px 0;
}

.single-blog__inner {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}

.blog__wrapper {
  width: 100%;
  max-width: 850px;
}

h3 {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
}

.image {
  height: 400px;
  width: 100%;
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .single-blog {
    top: 50px;
  }
}

</style>
