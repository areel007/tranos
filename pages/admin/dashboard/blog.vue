<template>
  <div class="blog">
    <header>
      <router-link to="/admin/dashboard/blog/all-blogs" :class="$route.path==='/admin/dashboard/news-and-insights/all-blogs'?'font-semibold':null">All blog</router-link>
      <router-link to="/admin/dashboard/blog/add" :class="$route.path==='/admin/dashboard/news-and-insights/add'?'font-semibold':null">Add blog</router-link>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "blog"
}
</script>

<style scoped>
header {
  padding: 10px;
  background: #f5f5f5;
  display: flex;
  gap: 10px;
}

a {
  font-size: 14px;
}

a:hover {
  font-weight: 600;
}
</style>
