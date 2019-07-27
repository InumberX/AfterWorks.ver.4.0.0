import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/common.scss'

import '../assets/css/common_pc.scss'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"titleTemplate":"%s | After Works.","htmlAttrs":{"lang":"ja","prefix":"og: http:\u002F\u002Fogp.me\u002Fns#"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"xUaCompatible","http-equiv":"X-UA-Compatible","content":"IE=edge"},{"hid":"telephone","name":"format-detection","content":"telephone=no"},{"hid":"description","name":"description","content":"東京都在住のフロントエンドエンジニア：N\u002FNE（ナイン）のポートフォリオ用Webサイトです。"},{"hid":"keywords","name":"keywords","content":"フロントエンドエンジニア,webデザイン,webデザイナー,ポートフォリオ,東京,html,css,javascript,web制作,フリーランス"},{"hid":"ogTitle","property":"og:title","content":"After Works."},{"hid":"ogType","property":"og:type","content":"website"},{"hid":"ogUrl","property":"og:url","content":"https:\u002F\u002Fafterworks.jp\u002F"},{"hid":"ogImage","property":"og:image","content":"https:\u002F\u002Fafterworks.jp\u002Fimg\u002Fimg_og_1.png"},{"hid":"ogSiteName","property":"og:site_name","content":"After Works."},{"hid":"ogDescription","property":"og:description","content":"東京都在住のフロントエンドエンジニア：N\u002FNE（ナイン）のポートフォリオ用Webサイトです。"},{"hid":"twitterCard","name":"twitter:card","content":"summary_large_image"},{"hid":"twitterSite","name":"twitter:site","content":"@InumberX"},{"hid":"twitterDescription","name":"twitter:description","content":"東京都在住のフロントエンドエンジニア：N\u002FNE（ナイン）のポートフォリオ用Webサイトです。"}],"link":[{"hid":"faviconIco","rel":"shortcut icon","type":"image\u002Fx-icon","href":"\u002Fimg\u002Ffavicon.ico"},{"hid":"faviconPng","rel":"icon","type":"image\u002Fpng","href":"\u002Fimg\u002Ffavicon.png"},{"hid":"appleTouchIcon","rel":"apple-touch-icon","href":"\u002Fimg\u002Ffavicon.png"},{"hid":"canonical","rel":"canonical","href":"https:\u002F\u002Fafterworks.jp\u002F"}],"script":[{"src":"\u002Fjs\u002Fscroll-magic.min.js?ver=20190719004858","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fsmooth-scroll.polyfills.min.js?ver=20190719004858","type":"text\u002Fjavascript","body":true}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
