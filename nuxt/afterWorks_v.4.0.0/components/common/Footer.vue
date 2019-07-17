<template>

<footer class="footer-wrap">

<div class="page-top">
<div class="inner">
<button v-on:click="scroll('body')">PAGE TOP</button>
</div><!-- /.inner -->
</div><!-- /.page-top -->

<div class="foot-sub">
<div class="inner">
<snsList v-bind:className="'footer'"></snsList>
</div><!-- /.inner -->
</div><!-- /.foot-sub -->

<div class="copyright">
<div class="inner">
<div class="copyright-info">
<p>&copy; <i class="c-year">{{ currentYear }}</i> N/NE, All rights reserved.</p>
</div>
</div><!-- /.inner -->
</div><!-- /.copyright -->

</footer>

</template>

<script>
import SnsList from '~/components/SnsList.vue';

export default {
 components: {
  SnsList: SnsList
 },
 data: function() {
  return {
   // 現在年
   currentYear: '',
   // スムーススクロール
   smoothScroll: '',
   smoothScrollOption: ''
  }
 },
 // インスタンスが作成された後に実行する処理
 created: function() {
  // 現在年を取得
  const now = new Date()
  const year = now.getFullYear()
  this.currentYear = year

  if (process.browser) {
   // スムーススクロール
   this.smoothScroll = new SmoothScroll()
   this.smoothScrollOption = {
    header: '#HEADER',
    offset: 20,
    updateURL: false
   }
  }
 },
 // 各処理
 methods: {
  // スムーススクロールを行う処理
  scroll: function(target) {
   // スクロール先が存在する場合
   if(document.querySelectorAll(target).length > 0) {
    const anchor = document.querySelector(target)
    this.smoothScroll.animateScroll(anchor, '', this.smoothScrollOption)
    return false
   }
  }
 }
}

</script>

<style lang="scss">

/* フッター
*************************************************/

/* SP
*************************************************/
.footer-wrap {
 margin: 40px auto 0;
 padding: 0;
}

.page-top {
 text-align: center;
 margin: 80px 0 0;
 button {
  margin: 0;
  padding: 40px 40px 0;
  display: inline-block;
  outline: 0;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: normal;
  color: #002984;
  position: relative;
  transition: 0.3s all;
  &:before {
   content: '';
   width: 16px;
   height: 16px;
   border: 0px;
   border-top: 2px solid #002984;
   border-right: 2px solid #002984;
   -webkit-transform: rotate(-45deg);
   transform: rotate(-45deg);
   position: absolute;
   top: 14px;
   left: 50%;
   margin-left: -8px;
   transition: 0.3s all;
  }
  &:hover:before {
   top: 8px;
  }
 }
}

.foot-sub {
 padding: 40px 0 0;
 margin: 40px 0 0;
 border-top: 1px solid #ffeaea;
}

.copyright {
 text-align: center;
 border-top: 1px solid #ffeaea;
 margin: 40px 0 0;
 padding: 16px 0;
 .copyright-info {
  p {
   font-size: 1.0rem;
   margin: 0;
  }
  .c-year {
   font-style: normal;
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.footer-wrap {
 margin-top: 80px;
}

.page-top {
 margin-top: 120px;
}

.foot-sub {
 padding-top: 64px;
 margin-top: 64px;
}

.copyright {
 margin-top: 64px;
 padding: 24px 0;
 .copyright-info {
  p {
   font-size: 1.2rem;
   margin: 0;
  }
 }
}

}

</style>
