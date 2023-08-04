<template>
  <div class="relative blog" v-if="blogPost!==null">
    <div class="our-services py-10 md:py-60px">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div class="blog-image">
            <img src="../../static/assets/images/dummy.jpg" alt="tranos" class="w-full h-full object-cover" v-if="blogPost===undefined">
            <img :src="blogPost.imageUrl" alt="tranos" class="w-full h-full object-cover" v-else>
          </div>
          <div class="blog-text">
            <p class="text-14 font-semibold mb-4">News & Insights</p>
            <div>
              <h3 class="text-lg md:text-2xl mb-4" v-if="blogPost===undefined">Coming soon</h3>
              <h3 class="text-lg md:text-2xl mb-4" v-else>{{blogPost.title}}</h3>
            </div>
            <p class="text-14 md:text-16 mb-4" v-if="blogPost!==undefined">{{blogPost.subtitle}}</p>
            <button class="p-3 bg-primary text-white cursor-pointer" @click="$router.push(`/news-and-insights/${blogPost._id}`)">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "blog-post",
  data() {
    return {
      blogPost: null
    }
  },
  methods: {
    async getBlog () {
      const blogPosts = await axios.get('https://tranos-api.onrender.com/api/v1/blog')
      this.blogPost = blogPosts.data.blogs[0]
    }
  },
  mounted() {
    this.getBlog()
  }
}
</script>

<style scoped>
.blog {
  background: #f5f5f5;
}
.container {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
}
.blog-image {
  height: 350px;
  width: 100%;
}
</style>
