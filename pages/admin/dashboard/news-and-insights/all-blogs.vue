<template>
  <div class="all-blogs">
    <div v-if="blogPosts.length===0" class="mb-8">There is no blog post presently...</div>
    <div v-else class="blog" v-for="(_blog, index) in blogPosts" :key="index">
      <span>{{_blog.title}}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer"
        @click="handleDelete(_blog._id)"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </div>

    <button class="py-2 px-10 bg-primary text-white" @click="$router.push('/admin/dashboard/news-and-insights/add')">Add News & Insights</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "all-blog",
  data() {
    return {
      blogPosts: []
    }
  },
  methods: {
    async getBlogPost() {
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/blog')
      this.blogPosts = response.data.blogs
    },
    async handleDelete(e) {
      await axios.delete(`https://tranos-api.onrender.com/api/v1/blog/${e}`)
      await this.getBlogPost()
    }
  },
  mounted() {
    this.getBlogPost()
  }
}
</script>

<style scoped>
.all-blogs {
  padding: 20px;
}
.blog {
  padding: 10px;
  background: #f5f5f5;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
}
.blog:last-child {
  margin-bottom: 0;
}
</style>
