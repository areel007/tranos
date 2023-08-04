<template>
  <div class="blog">
    <div class="blog__inner">
      <div class="search">
        <div class="search__box">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" placeholder="search...">
        </div>
      </div>
      <div class="blog__list">
        <figure class="blog__post" @click="$router.push(`/news-and-insights/${_blog._id}`)" v-for="(_blog, index) in blogPosts" :key="index">
          <div class="img__wrapper">
            <img :src="_blog.imageUrl" alt="tranos" >
          </div>
          <figcaption>{{_blog.title}}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "blog",
  data() {
    return {
      blogPosts: []
    }
  },
  methods: {
    async getBlogPosts() {
      const blogs = await axios.get('https://tranos-api.onrender.com/api/v1/blog')
      this.blogPosts = blogs.data.blogs
    }
  },
  mounted() {
    this.getBlogPosts()
  }
}
</script>

<style scoped>
.blog {
  position: relative;
  top: 70px;
}

.blog__inner {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 0;
}

.search__box {
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  margin-bottom: 40px;
}

.search input {
  padding: 10px;
  border: none;
  outline: none;
}

.blog__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.blog__list figure {
  width: 100%;
  cursor: pointer;
  position: relative;
}

.img__wrapper {
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
}

.img__wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog__list figure figcaption {

}

@media screen and (max-width: 800px) {
  .blog__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .blog {
    top: 50px;
  }

  .search__box {
    max-width: 100%;
  }

  .blog__list {

  }
}
</style>
