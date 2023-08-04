<template>
  <div
    class="fixed top-0 left-0 w-90vw h-auto bg-primary mobile-menu p-5 text-white"
    :class="{'is-visible': isMobileMenuVisible}"
  >
    <img
      src="/assets/images/logo-white.png"
      alt="tranos"
      class="w-150 cursor-pointer mb-10"
    >
    <ul>
      <li
        v-for="_navMenu in navMenu"
        :key="_navMenu.name"
        class="mb-2 text-13 font-normal cursor-pointer dropdown__dropdown p-2 hover:bg-white hover:text-primary"
      >
        <div v-if="_navMenu.name.toLowerCase()==='products'">
          <div class="flex items-center" @click="displaySubProducts">
            <span>{{ _navMenu.name }}</span>
            <svg
              class="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul
            class="sub-products mt-2 drop__dropdown"
            :class="{'show-sub-products': showSubProducts}"
          >
            <li
              class="text-primary text-13 font-normal whitespace-nowrap mb-2"
              @click="closeMobileMenu"
              v-for="_subProduct in _navMenu.subMenu"
              :key="_subProduct.name"
            >
              <NuxtLink :to="_subProduct.path">{{ _subProduct.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div v-if="_navMenu.name.toLowerCase()==='industries we serve'">
          <div class="flex items-center" @click="displaySubProducts">
            <span>{{ _navMenu.name }}</span>
            <svg
              class="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul
            class="sub-products mt-2 drop__dropdown"
            :class="{'show-sub-products': showSubProducts}"
          >
            <li
              class="text-primary text-13 font-normal whitespace-nowrap mb-2"
              @click="closeMobileMenu"
              v-for="_subProduct in _navMenu.subMenu"
              :key="_subProduct.name"
            >
              <NuxtLink :to="_subProduct.path">{{ _subProduct.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div v-if="_navMenu.name.toLowerCase()==='case studies'">
          <div class="flex items-center" @click="displaySubProducts">
            <a href="/projects/all-categories">{{ _navMenu.name }}</a>
            <svg
              class="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul
            class="sub-products mt-2 drop__dropdown"
            :class="{'show-sub-products': showSubProducts}"
          >
            <li
              class="text-primary text-13 font-normal whitespace-nowrap mb-2"
              @click="closeMobileMenu"
              v-for="_subProduct in _navMenu.subMenu"
              :key="_subProduct.name"
            >
              <NuxtLink :to="_subProduct.path">{{ _subProduct.name }}</NuxtLink>
            </li>
          </ul>
        </div>


        <div v-if="_navMenu.name.toLowerCase()!=='products' && _navMenu.name.toLowerCase()!=='industries we serve' && _navMenu.name.toLowerCase()!=='case studies'">
          <a @click="closeMobileMenu" :href="_navMenu.path">{{ _navMenu.name }}</a>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobile-menu",
  props: ['isMobileMenuVisible', 'navMenu'],
  data() {
    return {
      showSubProducts: false,
      subProducts: [
        {
          name: 'Power Protection & Distribution',
          path: '/products/power-protection'
        },
        {
          name: 'Cable Management & Support System',
          path: '/products/cable-management'
        },
        {
          name: 'Enclosures',
          path: '/products/enclosures'
        },
        {
          name: 'Warehouse Storage System',
          path: '/warehouse-storage'
        },
        {
          name: 'Gaskets',
          path: '/gaskets'
        },
        {
          name: 'Power Generation & Backup',
          path: '/power-generation'
        },
        {
          name: 'Lights & Wiring Devices',
          path: '/products/lighting-and-wiring-devices'
        },
      ]
    }
  },
  methods: {
    displaySubProducts() {
      this.showSubProducts = !this.showSubProducts
    },
    closeMobileMenu() {
      this.$emit('close-mobile-menu')
      this.showSubProducts = false
    },
  }
}
</script>

<style scoped>
.mobile-menu {
  transform: translateX(-100%);
  transition: transform .5s ease;
}
.is-visible {
  transform: translateX(0);
}
.drop__dropdown {
  display: none;
}
.dropdown__dropdown:hover .drop__dropdown {
  display: block !important;
}
</style>
