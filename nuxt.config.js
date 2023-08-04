// const main_base_url = 'https://tranos-web.netlify.app'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: false,
  },

  sitemap: {
    hostname: process.env.HOST_NAME
  },
  env: {
    main_base_url: process.env.HOST_NAME,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tranos',
    titleTemplate: 'Tranos: %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Tranos is an engineering and manufacturing leader, we add value to lives through our innovative solutions.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: '/style.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    "vue2-editor/nuxt"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
