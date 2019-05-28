<template>

<footer class="footer-wrap">
<div class="foot-sub">
<div class="inner">

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

export default {
 data: function() {
  return {
   // 現在年
   currentYear: ''
  }
 },
 // インスタンスが作成された後に実行する処理
 created: function() {
  // 現在年を取得
  const now = new Date()
  const year = now.getFullYear()
  this.currentYear = year
 }
}

</script>

<style lang="scss" scoped>

/* フッター
*************************************************/
.footer-wrap {
 margin: 32px auto 0;
 padding: 0;
}

.copyright {
 text-align: center;
 border-top: 1px solid #ffeaea;
 margin: 16px 0 0;
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

</style>
