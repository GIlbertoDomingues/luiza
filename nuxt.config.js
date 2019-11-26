
export default {
  mode: 'spa',
  head: {
    title: 'Arbi-ON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { mobileAppIOS: true },
      { hid: 'description', name: 'description', content: 'Resolva suas disputas online com efeitos legais reconhecidos pela legislação brasileira.' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:type', content: 'website' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: '#e76243' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: this.title },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'ICBM', content: '-25.4284,-49.2733' },
      { name: 'geo.position', content: 'latitude;longitude' },
      { name: 'geo.region', content: 'pt_BR-PR' },
      { name: 'geo.placename', content: 'Curitiba/Paraná' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/icon.png' }
    ]
  },
  manifest: {
    name: 'Arbi-ON',
    short_name: 'Arbi-ON',
    theme_color: '#e76243',
    background_color: '#fff',
    display: 'standalone',
    description: 'Resolva suas disputas online com efeitos legais reconhecidos pela legislação brasileira.',
    icons: [
      {
        'src': '/icon.png',
        'sizes': '500x500',
        'type': 'image/png'
      }
    ],
    'splash_pages': '/splashscreens/splash.png'
  },
  loading: { color: '#e76243' },
  plugins: [
    '~/plugins/scrollactive',
    { src: '~/plugins/youtube', mode: 'client' },
    { src: '~/plugins/i18n', mode: 'client' },
    { src: '~/plugins/carousel', mode: 'client' },
    { src: '~/plugins/toggle', mode: 'client' },
    { src: '~/plugins/instagram', mode: 'client' },
    { src: '~/plugins/scrollbar', mode: 'client' },
    { src: '~/plugins/webfonts', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
    // ['@nuxtjs/google-analytics', { id: 'UA-152074239-1' }]
  ],

  router: {
    middleware: 'i18n'
  },

  generate: {
    routes: ['/', '/pt-br']
  }
}
