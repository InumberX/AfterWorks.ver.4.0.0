<template>

<div class="main-visual-box">

<transition
 name="main-visual"
 appear
>

<div class="inner">

<div class="main-visual-bg">

<transition
 name="main-visual-title"
 v-on:before-enter="mainVisualTitleBeforeEnter"
 v-on:enter="mainVisualTitleEnter"
 appear
>

<h2>From design<br>to coding</h2>

</transition>

</div>

</div><!-- /.inner -->

</transition>

</div><!-- /.main-visual-box -->

</template>

<script>
export default {
 // 各処理
 methods: {
  // メインビジュアル表示用アニメーション
  mainVisualTitleBeforeEnter: function(el) {
   el.style.width = '0'
  },
  mainVisualTitleEnter: function(el) {
   el.style.width = document.querySelector('.main-visual-bg').scrollWidth + 'px'
   setTimeout(function() {
    el.style.width = ''
   }, 2000)
  }
 }
}
</script>

<style lang="scss" scoped>

/* メインビジュアル
*************************************************/

/* SP
*************************************************/
.main-visual-box {
 height: 450px;
 .main-visual-bg {
  display: flex;
  align-items: center;
  height: 450px;
  background-image: url(/img/img_main_sp.jpg);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  h2 {
   margin: 0 auto;
   padding: 0;
   font-size: 4.8rem;
   color: #fff;
   font-weight: bold;
   text-align: center;
   white-space: nowrap;
   overflow: hidden;
  }
 }
}

/* メインビジュアル表示用アニメーション */
.main-visual-enter-active {
transition: 0.6s height;
transition-delay: 0.2s;
overflow: hidden;
}
.main-visual-enter {
height: 0 !important;
}
.main-visual-enter-to {
height: 450px !important;
}

.main-visual-title-enter-active {
transition: 1.0s width;
transition-delay: 0.8s;
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.main-visual-box {
 height: 600px;
 .inner {
  padding: 0;
  .main-visual-bg {
   height: 600px;
   background-image: url(/img/img_main_pc.jpg);
   background-position: top center;
   h2 {
    font-size: 8.0rem;
    letter-spacing: 6px;
   }
  }
 }
}

/* メインビジュアル表示用アニメーション */
.main-visual-enter-active {
transition: 0.8s height;
}
.main-visual-enter-to {
height: 600px !important;
}

.main-visual-title-enter-active {
transition: 1.2s width;
transition-delay: 0.6s;
}

}

</style>
