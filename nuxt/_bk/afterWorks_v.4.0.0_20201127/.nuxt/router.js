import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6df3973e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _df005812 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _5aeb29d6 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _cb958484 = () => interopDefault(import('../pages/contact/finish.vue' /* webpackChunkName: "pages/contact/finish" */))
const _2e83e1b4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6df3973e,
    name: "about"
  }, {
    path: "/contact",
    component: _df005812,
    name: "contact"
  }, {
    path: "/works",
    component: _5aeb29d6,
    name: "works"
  }, {
    path: "/contact/finish",
    component: _cb958484,
    name: "contact-finish"
  }, {
    path: "/",
    component: _2e83e1b4,
    name: "index"
  }, {
    path: "*",
    component: _2e83e1b4,
    name: "notFound"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
