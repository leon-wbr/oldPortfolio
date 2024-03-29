module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Leon Weber',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/style.scss', lang: 'scss' }
  ],
  router: {
    base: '/portfolio',
    middleware: ['i18n', 'pageclass']
  },
  plugins: ['~/plugins/i18n.js'],
  /* generate: {
    routes: ['/', '/fr', '/de']
  }, */
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
