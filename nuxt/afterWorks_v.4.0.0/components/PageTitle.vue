<template>
<div class="page-title-box">
<div class="inner">
<h2>{{ titleEn }}<em>{{ title }}</em></h2>
INDEX：{{ this.$store.state.contents.index }}
ABOUT：{{ this.$store.state.contents.about }}
WORKS：{{ this.$store.state.contents.works }}
</div><!-- /.inner -->
</div><!-- /.page-title-box -->
</template>

<script>
export default {
 props: [
  'titleEn',
  'title'
 ]
}
</script>

<style lang="scss" scoped>

/* ページタイトル
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
  em {
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

</style>
