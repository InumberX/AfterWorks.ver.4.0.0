<template>
<div class="wrap-all">

<Header />

<main class="main-wrap">

<transition name="page-transition">
<nuxt />
</transition>

</main><!-- /.main-wrap -->

<Footer />

</div><!-- /.wrap-all -->
</template>

<script>
// コンポーネント読み込み
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'

export default {
 // コンポーネント設定
 components: {
  Header: Header,
  Footer: Footer
 },
 created: function() {
  console.log('created')
  this.$store.dispatch('getContents')
 }
}
</script>

<style>
</style>