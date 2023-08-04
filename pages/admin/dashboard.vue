<template>
  <div class="dashboard">
    <header class="p-5 shadow">
      <div class="header__inner">
        <img src="../../static/assets/images/logo.jpg" alt="tranos" @click="$router.push('/')" class="cursor-pointer w-150">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer" @click="handleLogout">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>

      </div>
    </header>
    <div class="dashboard__body">
      <aside>
        <div class="tab" @click="$router.push('/admin/dashboard/news-and-insights/all-blogs')">Blog</div>
<!--        <div class="tab" @click="$router.push('/admin/dashboard/application')">Application</div>-->
        <div class="tab" @click="$router.push('/admin/dashboard/pages/home')">Home</div>
        <div class="tab" @click="$router.push('/admin/dashboard/pages/about')">About</div>
        <div class="tab" @click="$router.push('/admin/dashboard/pages/services')">Services</div>
        <div class="tab" @click="$router.push('/admin/dashboard/pages/case-studies')">Case studies</div>
      </aside>
      <div class="dashboard__main" v-if="$route.path==='/admin/dashboard'">
        <p>Welcome to the dashboard</p>
      </div>
      <Nuxt v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: 'auth',
  methods: {
    handleLogout() {
      sessionStorage.removeItem('isLoggedIn')
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 10px 0;
}
.header__inner {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dashboard__body {
  height: calc(100vh - 51px);
  display: grid;
  grid-template-columns: 250px 1fr;
}
aside {
  height: 100%;
  background: #f5f5f5;
}
.tab {
  padding: 10px;
  background: #172673;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
}
.tab:last-child {
  margin-bottom: 0;
}
.dashboard__main {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.dashboard__main p {
  font-size: 24px;
}
</style>
