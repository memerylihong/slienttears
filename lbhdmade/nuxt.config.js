module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'lbhdmade',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"'
      },

      { hid: 'description', name: 'description', content: 'labelhood' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Build configuration
	*/
  build: {
  /*
  ** Run ESLint on save
  */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('postcss-easings'),
      require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
      })
    ]
  },
  vendor: ['velocity-animate-server'],

  // 全局的样式
  css: [
    { src: '~assets/style/global.less', lang: 'less' }
  ],
  modules: [
    '@nuxtjs/proxy', '@nuxtjs/axios'
  ],
  proxy: [
    ['http://wx.labelhood.com/api', { changeOrigin: true }]
  ],
  axios: {
    baseURL: 'http://wx.labelhood.com/api',
    browserBaseURL: '/api',
    credentials: false
  }
}
