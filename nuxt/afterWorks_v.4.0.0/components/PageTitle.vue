<template>
<div class="page-title-box">
<div class="inner">
<h2>
<transition
 name="page-title"
 v-on:before-enter="pageTitleBeforeEnter"
 v-on:enter="pageTitleEnter"
 appear
>
<span>{{ titleEn }}</span>
</transition>
<transition
 name="page-sub-title"
 v-on:before-enter="pageTitleBeforeEnter"
 v-on:enter="pageSubTitleEnter"
 appear
>
<em>{{ title }}</em>
</transition>
</h2>
</div><!-- /.inner -->
</div><!-- /.page-title-box -->
</template>

<script>
export default {
 props: [
  'titleEn',
  'title'
 ],
 // 各処理
 methods: {
  // ページタイトル表示アニメーション
  pageTitleBeforeEnter: function(el) {
   el.style.width = '0'
  },
  pageTitleEnter: function(el) {
   el.style.width = el.scrollWidth + 'px'
   setTimeout(function() {
    el.style.width = ''
   }, 600)
  },
  pageSubTitleEnter: function(el) {
   el.style.width = el.scrollWidth + 'px'
   setTimeout(function() {
    el.style.width = ''
   }, 800)
  }
 }
}
</script>

<style lang="scss" scoped>

/* ページタイトル
*************************************************/

/* SP
*************************************************/
.page-title-box {
 h2 {
  margin: 24px auto 0;
  padding: 0 0 10px;
  position: relative;
  font-size: 4.8rem;
  color: #F2F2F2;
  line-height: 1;
  font-weight: bold;
  span {
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
  }
  em {
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
   position: absolute;
   font-size: 2.4rem;
   color: #2E2E2E;
   z-index: 1;
   left: 16px;
   bottom: 0;
   font-weight: bold;
   font-style: normal;
  }
 }
}

/* ページタイトル表示用アニメーション */
.page-title-enter-active,
.page-title-leave-active {
transition: 0.4s width;
transition-delay: 0.2s;
}
.page-sub-title-enter-active,
.page-sub-title-leave-active {
transition: 0.4s width;
transition-delay: 0.4s;
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.page-title-box {
 h2 {
  margin-top: 40px;
  font-size: 8.0rem;
  em {
   font-size: 4.0rem;
  }
 }
}

}

</style>
