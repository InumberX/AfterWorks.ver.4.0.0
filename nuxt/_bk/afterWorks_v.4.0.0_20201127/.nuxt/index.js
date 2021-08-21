import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_axios_7b4f77b8 from 'nuxt_plugin_axios_7b4f77b8' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_veevalidate_346f6561 from 'nuxt_plugin_veevalidate_346f6561' // Source: ../plugins/vee-validate (mode: 'client')
import nuxt_plugin_objectassign_8eecec6e from 'nuxt_plugin_objectassign_8eecec6e' // Source: ../plugins/object-assign (mode: 'client')
import nuxt_plugin_promise_bc9de6ea from 'nuxt_plugin_promise_bc9de6ea' // Source: ../plugins/promise.min (mode: 'client')
import nuxt_plugin_ga_22722969 from 'nuxt_plugin_ga_22722969' // Source: ../plugins/ga.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s | After Works.","htmlAttrs":{"lang":"ja","prefix":"og: http:\u002F\u002Fogp.me\u002Fns#"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"xUaCompatible","http-equiv":"X-UA-Compatible","content":"IE=edge"},{"hid":"telephone","name":"format-detection","content":"telephone=no"},{"hid":"googleSiteVerification","name":"google-site-verification","content":"kLXEZtzfT83BFaBZNnYYyVaz56QkXd4bWABqFhaCvhk"},{"hid":"description","name":"description","content":"東京都在住のフロントエンドエンジニア：N\u002FNE（ナイン）のポートフォリオ用Webサイトです。"},{"hid":"keywords","name":"keywords","content":"フロントエンドエンジニア,webデザイン,webデザイナー,ポートフォリオ,東京,html,css,javascript,web制作,フリーランス"},{"hid":"ogTitle","property":"og:title","content":"After Works."},{"hid":"ogType","property":"og:type","content":"website"},{"hid":"ogUrl","property":"og:url","content":"https:\u002F\u002Fafterworks.jp\u002F"},{"hid":"ogImage","property":"og:image","content":"https:\u002F\u002Fafterworks.jp\u002Fimg\u002Fimg_og_1.png"},{"hid":"ogSiteName","property":"og:site_name","content":"After Works."},{"hid":"ogDescription","property":"og:description","content":"東京都在住のフロントエンドエンジニア：N\u002FNE（ナイン）のポートフォリオ用Webサイトです。"},{"hid":"twitterCard","name":"twitter:card","content":"summary_large_image"},{"hid":"twitterSite","name":"twitter:site","content":"@InumberX"},{"hid":"twitterDescription","name":"twitter:description","content":"東京都在住のフロントエンドエンジニア：N\u002FNE（ナイン）のポートフォリオ用Webサイトです。"}],"link":[{"hid":"faviconIco","rel":"shortcut icon","type":"image\u002Fx-icon","href":"\u002Fimg\u002Ffavicon.ico"},{"hid":"faviconPng","rel":"icon","type":"image\u002Fpng","href":"\u002Fimg\u002Ffavicon.png"},{"hid":"appleTouchIcon","rel":"apple-touch-icon","href":"\u002Fimg\u002Ffavicon.png"},{"hid":"canonical","rel":"canonical","href":"https:\u002F\u002Fafterworks.jp\u002F"}],"script":[{"src":"\u002Fjs\u002Fscroll-magic.min.js?ver=20200715210046","type":"text\u002Fjavascript","body":true},{"src":"\u002Fjs\u002Fsmooth-scroll.polyfills.min.js?ver=20200715210046","type":"text\u002Fjavascript","body":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_axios_7b4f77b8 === 'function') {
    await nuxt_plugin_axios_7b4f77b8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_veevalidate_346f6561 === 'function') {
    await nuxt_plugin_veevalidate_346f6561(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_objectassign_8eecec6e === 'function') {
    await nuxt_plugin_objectassign_8eecec6e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_promise_bc9de6ea === 'function') {
    await nuxt_plugin_promise_bc9de6ea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_22722969 === 'function') {
    await nuxt_plugin_ga_22722969(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
