<template>
  <div class="login">
    <form>
      <div class="close" @click="$router.push('/')">X</div>
      <p class="text-red-600" v-if="message">{{message}}</p>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <button @click.prevent="handleLogin">Sign in</button>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'Login',
  middleware: 'login-guard',
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async handleLogin() {

      try {
        const response = await axios.post('https://tranos-api.onrender.com/api/v1/auth/login', {
          username: this.username,
          password: this.password
        });

        const { token } = response.data;

        if (!token) {
          this.message = response.data.msg; // Set the error message from the server response
        } else {
          this.message = ''; // Clear the error message if login is successful
          sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
          await this.$router.push('/admin/dashboard/news-and-insights/all-blogs');
        }
      } catch (error) {
        console.error(error);
        this.message = error.message=== 'Request failed with status code 400' ? 'Invalid credentials' : error.message; // Display a generic error message for other errors
      }

      // if (this.username === 'tranos_admin' && this.password === '1$xYas456dxd') {
      //   sessionStorage.setItem('isLoggedIn', 'true');
      // }

    },
  },
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
}

.login form {
  width: 90%;
  max-width: 350px;
  margin: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f5f5f5;
  position: relative;
}

.login form input {
  padding: 10px;
  outline: none;
  border: 1px solid black;

}

.login form button {
  background: #172673;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
}

.close {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  background: #172673;
  color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
