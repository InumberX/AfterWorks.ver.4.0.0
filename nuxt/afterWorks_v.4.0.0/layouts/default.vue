<template>
<div class="wrap-all">

<Header />

<main class="main-wrap">

<transition
 v-on:before-enter="pageTransitionBeforeEnter"
 appear
>
<nuxt />
</transition>

</main><!-- /.main-wrap -->

<Footer />

<div class="page-transition-curtain"></div>

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
 },
 // 各処理
 methods: {
  pageTransitionBeforeEnter: function() {
   let curtain = document.querySelector('.page-transition-curtain')
   curtain.classList.remove('is-active')
   curtain.classList.remove('is-enter')
   curtain.classList.add('is-active')
   setTimeout(function() {
    document.querySelector('.page-transition-curtain').classList.add('is-enter')
    setTimeout(function() {
     let curtain = document.querySelector('.page-transition-curtain')
     curtain.classList.remove('is-active')
     curtain.classList.remove('is-enter')
    }, 800)
   }, 400)
  }
 }
}
</script>

<style lang="scss" scoped>

/* ページ遷移時のアニメーション
*************************************************/
.page-transition-curtain {
 display: none;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 90;
 background-color: #fff;
 -webkit-transition: left .8s ease;
 transition: left .8s ease;
 &.is-active {
  display: block;
 }
 &.is-enter {
  left: 100%;
 }
}


</style>