<template>
  <div class="relative top-50px md:top-70px">
    <Hero />
    <Products />
    <OurServices />
    <Why />
    <Clients />
    <BlogPost />
    <Newsletter />
  </div>
</template>

<!--
Email: tranos.web@gmail.com
Password: TechTeam@Tranos

Database username & password
username: tranos
password: k1xwrNOIhX4qGoc8
yeah
-->

<script>
import Hero from '../components/sections/hero'
import Products from '../components/sections/products'
import OurServices from '../components/sections/our-services'
import Why from '../components/sections/why'
import Clients from '../components/sections/clients'
import Newsletter from '../components/sections/newsletter'
import BlogPost from "../components/sections/blog-post";
import axios from "axios";

export default {
  name: 'IndexPage',
  head: {
    title: 'Think further'
  },
  components: {
    BlogPost,
    Hero,
    Products,
    OurServices,
    Why,
    Clients,
    Newsletter,
  },
}
</script>
