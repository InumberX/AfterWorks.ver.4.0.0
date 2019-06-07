<template>
<div class="lead-box">
<div class="inner">
<p v-html="replaceQuot(text)"></p>
</div><!-- /.inner -->
</div><!-- /.lead-box -->
</template>

<script>
export default {
 props: [
  'text'
 ],
 methods: {
  replaceQuot: function(value) {
   return value.replace(/&quot;/g, '"')
  }
 }
}
</script>

<style lang="scss" scoped>

/* ページタイトル
*************************************************/

/* SP
*************************************************/
.lead-box {
 p {
  margin: 80px auto 0;
  padding: 0 16px;
  font-size: 1.8rem;
  line-height: 1.7;
  text-align: center;
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.lead-box {
 p {
  margin-top: 120px;
  padding: 0;
  font-size: 2.4rem;
  line-height: 1.8;
 }
}

}

</style>
