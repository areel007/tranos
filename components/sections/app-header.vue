<template>
  <header class="fixed w-full bg-white z-50 h-50px md:h-70px top-0" :class="{'add-shadow': scrollPosition}">

    <Search
      :is-search="isSearch"
      @close-search="closeSearch"
      v-model="inputValue"
      :search-result="searchResult"
      @search-action="searchAction($event)"
    />

    <MobileMenu
      :is-mobile-menu-visible="isMobileMenuVisible"
      :nav-menu="navMenu"
      @close-mobile-menu="closeMobileMenu"
    />

    <div class="container flex items-center h-full mx-auto justify-between">
      <img src="/assets/images/TRANOS-LOGO.svg" alt="tranos" class="w-100px md:w-200 cursor-pointer" @click="$router.push('/')">
      <nav class="h-full hidden lg:block">
        <ul class="flex items-center gap-6 h-full">
          <li
            v-for="(_navMenu, index) in navMenu"
            :key="index"
            class="uppercase text-12 font-normal text-primary h-full flex items-center relative"
          >
            <div v-if="_navMenu.name==='Industries we serve'" class="product-menu h-full">
              <div class="flex items-center h-full">
                <a href="#">{{ _navMenu.name }}</a>
                <svg
                  class="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div class="product-menu__dropdown">
                <a
                  v-for="(_subMenu, index) in _navMenu.subMenu"
                  :key="index"
                  :href="_subMenu.path"
                  class="text-14 capitalize block hover:text-gray-400 hover:bg-white hover:text-primary mt-1"
                >
                  {{ _subMenu.name }}
                </a>
              </div>
            </div>
            <div v-if="_navMenu.name==='Products'" class="product-menu h-full">
              <div class="flex items-center h-full">
                <a href="#">{{ _navMenu.name }}</a>
                <svg
                  class="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div class="product-menu__dropdown">
                <a
                  v-for="(_subMenu, index) in _navMenu.subMenu"
                  :key="index"
                  :href="_subMenu.path"
                  class="text-14 capitalize block hover:text-gray-400 hover:bg-white hover:text-primary mt-1"
                >
                  {{ _subMenu.name }}
                </a>
              </div>
            </div>

            <div v-if="_navMenu.name==='Case Studies'" class="product-menu h-full">
              <div class="flex items-center h-full">
                <a href="/projects/all-categories">{{ _navMenu.name }}</a>
                <svg
                  class="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div class="product-menu__dropdown">
                <a
                  v-for="(_subMenu, index) in _navMenu.subMenu"
                  :key="index"
                  :href="_subMenu.path"
                  class="text-14 capitalize block hover:text-gray-400 hover:bg-white hover:text-primary mt-1"
                >
                  {{ _subMenu.name }}
                </a>
              </div>
            </div>
            <a v-if="_navMenu.name!=='Products' && _navMenu.name!=='Industries we serve' && _navMenu.name!== 'Case Studies'" :href="_navMenu.path">{{ _navMenu.name }}</a>
          </li>

        </ul>
      </nav>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer text-primary mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="openSearch"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          class="h-5 w-5 text-primary cursor-pointer block lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          v-if="!isMobileMenuVisible"
          @click="openMobileMenu"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          class="h-5 w-5 text-primary cursor-pointer block lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          v-else
          @click="closeMobileMenu"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

  </header>
</template>

<script>
import MobileMenu from '../sections/mobile-menu'
import Search from '../blocks/search'
import axios from "axios";

export default {
  name: "app-header",
  components: {
    MobileMenu,
    Search,
  },
  props: [
    'navMenu',
    'isVisible',
    'isMobileMenuVisible'
  ],
  data () {
    return {
      scrollPosition: null,
      isSearch: false,
      inputValue: '',
      searchResult: [],
    }
  },
  methods: {
    openMobileMenu() {
      this.$emit('open-mobile-menu')
    },
    closeMobileMenu() {
      this.$emit('close-mobile-menu')
    },
    hideDropdown() {
      this.$emit('hide-dropdown')
    },
    updateScroll () {
      const header = document.querySelector('header')
      if (this.scrollPosition < window.scrollY) {
        header.classList.add('going-up')
      } else {
        header.classList.remove('going-up')
      }
      this.scrollPosition = window.scrollY
    },
    openSearch () {
      this.isSearch = true
    },
    closeSearch () {
      this.isSearch = false
      this.inputValue = ''
      this.searchResult = []
    },
    async searchAction (event) {
      if (event.trim().length > 0) {
        const response = await axios.get('/db/search-DB.json')
        await this.$nextTick()
        this.searchResult = response.data.filter(_res => _res.name.toLowerCase().includes(event.toLowerCase()))
      } else {
        this.searchResult = []
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style scoped>
.container {
  width: 1200px;
  max-width: 95%;
  margin: 0 auto;
}
header {
  transition: top .5s ease;
  z-index: 1000;
}
.product-menu {
  position: relative;
  display: flex;
}
.product-menu__dropdown {
  position: absolute;
  top: 100%;
  min-width: auto;
  white-space: nowrap;
  /*padding: 10px 20px;*/
  background: #172673;
  color: white;
  display: none;
}
.product-menu:hover .product-menu__dropdown {
  display: block;
}
.product-menu__dropdown a {
  padding: 10px 20px;
}
.add-shadow {
  /*-webkit-box-shadow: 0 4px 6px -6px #b4b4b4;*/
  /*-moz-box-shadow: 0 4px 6px -6px #b4b4b4;*/
  /*box-shadow: 0 0 4px #595959;*/
  /*position: relative;*/
}
.going-up {
  top: -95px;
}
</style>
