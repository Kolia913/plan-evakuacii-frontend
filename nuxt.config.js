export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'order-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.scss'
  ],
  styleResources: {
    // your settings here
    sass: [],
    scss: [],
    less: [],
    stylus: []
   },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vuelidate', mode: 'client' },
    { src: '@/plugins/toastification', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://levelup.gitconnected.com/what-are-env-files-and-how-to-use-them-in-nuxt-7f194f083e3d
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
  },
  // https://www.npmjs.com/package/@nuxtjs/toast

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // Nuxt auth module configuration (https://auth.nuxtjs.org/guide/scheme)
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          // type: false
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post' },
          logout: { url: '/api/v1/auth/logout', method: 'post' },
          user: { url: '/api/v1/auth/me', method: 'get' }
        }
      }
    }
  }
}
