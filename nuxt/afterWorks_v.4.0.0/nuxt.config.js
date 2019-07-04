export default {
 mode: 'universal',
 
 router: {
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  // ページ遷移時の設定
  scrollBehavior: function (to, from, savedPosition) {
   // トップまでスクロールする
   return { x: 0, y: 0 }
  }
 },
 
 /*
 ** Headers of the page
 */
 head: {
  htmlAttrs: {
   lang: 'ja',
   prefix: 'og: http://ogp.me/ns#'
  },
  meta: [
   {
    charset: 'utf-8'
   },
   {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
   },
   {
    hid: 'xUaCompatible',
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge'
   },
   {
    hid: 'telephone',
    name: 'format-detection',
    content: 'telephone=no'
   },
   {
    hid: 'keywords',
    name: 'keywords',
    content: 'フロントエンドエンジニア,webデザイン,webデザイナー,ポートフォリオ,東京,html,css,javascript,web制作,フリーランス'
   }
  ],
  link: [
   {
    rel: 'shortcut icon',
    type: 'image/x-icon',
    href: '/img/favicon.ico'
   },
   {
    rel: 'icon',
    type: 'image/png',
    href: '/img/favicon.png'
   },
   {
    rel: 'apple-touch-icon',
    href: '/img/favicon.png'
   }
  ],
  script: [
   {
    src: '/js/scroll-magic.min.js',
    type: 'text/javascript',
    body: true
   },
   {
    src: '/js/smooth-scroll.polyfills.min.js',
    type: 'text/javascript',
    body: true
   }
  ]
 },
 /*
 ** Customize the progress-bar color
 */
 loading: {
  color: '#002984',
  height: '4px'
 },
 loadingIndicator: {
  name: '~/components/common/Loading.html'
 },
 /*
 ** Global CSS
 */
 css: [
  {
   src: '@/assets/css/common.scss',
   lang: 'scss',
  },
  {
   src: '@/assets/css/common_pc.scss',
   lang: 'scss'
  }
 ],
 /*
 ** Plugins to load before mounting the App
 */
 plugins: [
  {
   src: '@/plugins/vee-validate',
   ssr: false
  },
  {
   src: '@/plugins/object-assign',
   ssr: false
  },
  {
   src: '@/plugins/promise.min',
   ssr: false
  },
  {
   src: '@/plugins/ga.js',
   ssr: false
  }
 ],
 /*
 ** Nuxt.js modules
 */
 modules: [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
 ],
 /*
 ** Axios module configuration
 */
 axios: {
  // See https://github.com/nuxt-community/axios-module#options
 },
 /*
 ** Build configuration
 */
 build: {
  filenames: {
   app: () => '[name].js',
   chunk: () => '[name].js',
   css: () => '[path][name].css',
   img: () => '[path][name].[ext]',
   font: () => '[path][name].[ext]',
   video: () => '[path][name].[ext]'
  },
  /*
  ** You can extend webpack config here
  */
  extend(config, ctx) {
  }
 },
 /*
 ** Generate configuration
 */
 generate: {
  fallback: true
 }
}
