<template>
<section>

<contentsTitle
 titleEn="Contact"
 title="お問い合わせ"
>
</contentsTitle>

<div class="contact-box">
<div class="inner">
<div class="contact-tx">
<p>「ランディングページを制作してほしい」、「Wordpressを使って更新性の高いWebサイトを作りたい」、「JavaScriptを用いてWeb サイトにリッチな表現を取り入れてほしい」などお客様の様々なご要望にお応えいたします。<br>また、デザインのみ、コーディングのみ行ってほしいといったご依頼にも柔軟に対応できます。<br>まずはお気軽にお問い合わせください。</p>
</div><!-- /.contact-tx -->
<div class="btn-box">
<nuxt-link to="/contact/" class="btn-m1"><i class="icon icon-mail"></i>お問い合わせ</nuxt-link>
</div><!-- /.btn-box -->
</div><!-- /.inner -->
</div><!-- /.contact-box -->
</section>
</template>

<script>
import ContentsTitle from '~/components/ContentsTitle.vue'

export default {
 components: {
  ContentsTitle: ContentsTitle
 }
}
</script>

<style lang="scss" scoped>

/* お問い合わせリンク
*************************************************/

/* SP
*************************************************/
.contact-box {
 .contact-tx {
  margin: 24px 0 0;
 }
 .btn-box {
  .btn-m1 {
   margin-top: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   .icon-mail {
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    vertical-align: middle;
    margin-right: 8px;
   }
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.contact-box {
 .contact-tx {
  margin-top: 40px;
 }
 .btn-box {
  .btn-m1 {
   margin-top: 40px;
   .icon-mail {
    margin-right: 16px;
   }
  }
 }
}

}

</style>
