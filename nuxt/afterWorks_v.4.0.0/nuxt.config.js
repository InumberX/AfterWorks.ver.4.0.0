export default {
 mode: 'spa',
 
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
    rel: 'icon',
    type: 'image/x-icon',
    href: '/img/favicon.ico'
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
 loading: '~/components/common/Loading.vue'
 ,
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
  /*
  ** You can extend webpack config here
  */
  extend(config, ctx) {
  }
 }
}
