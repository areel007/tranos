<template>
  <div>
    <AppHeader
      :nav-menu="navMenu"
      :is-visible="isVisible"
      @toggle-menu="toggleMenu"
      :is-mobile-menu-visible="isMobileMenuVisible"
      @open-mobile-menu="openMobileMenu"
      @close-mobile-menu="closeMobileMenu"
      @hide-dropdown="hideDropdown"
      v-if="!isAdminRoute"
    />
    <Nuxt />
<!--    <ChatCTAButton />-->
    <AppFooter v-if="!isAdminRoute" />
    <!-- Start of HubSpot Embed Code -->
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26489163.js"></script>
    <!-- End of HubSpot Embed Code -->
  </div>
</template>

<script>
import AppHeader from '../components/sections/app-header'
import AppFooter from '../components/sections/app-footer'
// import ChatCTAButton from '../components/sections/ChatCTAButton'

export default {
  name: "default",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      navMenu: [
        { path: '/about', name: 'About' },
        {
          path: '/products',
          name: 'Products',
          subMenu: [
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
              path: '/products/warehouse-storage'
            },
            {
              name: 'Gaskets',
              path: '/products/gaskets/'
            },
            {
              name: 'Power Generation & Backup',
              path: '/products/power-generation'
            },
            {
              name: 'Lights & Wiring Devices',
              path: '/products/lighting-and-wiring-devices'
            },
          ]
        },
        {
          path: '/industry-we-serve',
          name: 'Industries we serve',
          subMenu: [
            {
              name: 'Power & Energy',
              path: '/industry-we-serve/power-and-energy/'
            },
            {
              name: 'Oil & Gas',
              path: '/industry-we-serve/'
            },
            {
              name: 'Residential & Commercial',
              path: '/industry-we-serve/residential-and-commercial/'
            },
            {
              name: 'Industrial & Manufacturing',
              path: '/industry-we-serve/industrial-and-manufacturing/'
            },
            {
              name: 'Telecommunications',
              path: '/industry-we-serve/telecommunications'
            },
          ]
        },
        { path: '/our-services', name: 'Services' },
        {
          path: '/',
          name: 'Case Studies',
          subMenu: [
            {
              name: 'Power & Energy',
              path: '/projects/power-and-energy'
            },
            {
              name: 'Oil & Gas',
              path: '/projects/oil-and-gas'
            },
            {
              name: 'Aviation',
              path: '/projects/aviation'
            },
            // {
            //   name: 'Residential & Commercial',
            //   path: '/projects/residential-and-commercial'
            // },
            {
              name: 'Industrial & Manufacturing',
              path: '/projects/industrial-and-manufacturing/'
            },
            {
              name: 'Telecommunications',
              path: '/projects/telecomms'
            },
          ]
        },
        { path: '/careers', name: 'Careers' },
        { path: '/contacts', name: 'Contacts' },
        { path: '/news-and-insights', name: 'News & Insights' },
      ],
      isVisible: false,
      isMobileMenuVisible: false,
    }
  },
  computed: {
    isAdminRoute() {
      return this.$route.path.startsWith('/admin');
    },
  },
  methods: {
    toggleMenu() {
      this.isVisible = !this.isVisible
    },
    openMobileMenu() {
      this.isMobileMenuVisible = true
    },
    closeMobileMenu() {
      this.isMobileMenuVisible = false
    },
    hideDropdown() {
      this.isVisible = false
    }
  },
}
</script>

<style scoped>

</style>
