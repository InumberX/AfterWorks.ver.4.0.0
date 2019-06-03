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
.lead-box {
 p {
  margin: 64px auto 0;
  padding: 0;
  font-size: 1.8rem;
  text-align: center;
 }
}

</style>
