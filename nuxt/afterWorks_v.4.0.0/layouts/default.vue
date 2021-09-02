<template>
  <div class="wrap-all">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// コンポーネント読み込み
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'

export default Vue.extend({
  name: 'Default',
  components: {
    Header: Header,
    Footer: Footer,
  },
})
</script>

<style lang="scss">
/* ページ遷移アニメーション */
.va-page {
  &-leave {
    &-active {
      transition: opacity 0.6s, filter 0.6s;
    }
    opacity: 1 !important;
    filter: blur(0) !important;
    &-to {
      opacity: 0 !important;
      filter: blur(16px) !important;
    }
  }
}
</style>
