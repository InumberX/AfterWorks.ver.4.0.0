<template>
<div class="title-box">
<div class="inner">
<h3>{{ titleEn }}<em>{{ title }}</em></h3>
</div><!-- /.inner -->
</div><!-- /.title-box -->
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

/* コンテンツタイトル
*************************************************/

/* SP
*************************************************/
.title-box {
 h3 {
  margin: 80px auto 0;
  padding: 0 0 10px;
  position: relative;
  font-size: 4.8rem;
  color: #F2F2F2;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  em {
   position: absolute;
   font-size: 2.4rem;
   color: #2E2E2E;
   z-index: 1;
   left: 0;
   bottom: 0;
   font-weight: bold;
   font-style: normal;
   width: 100%;
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.title-box {
 h3 {
  margin-top: 120px;
  font-size: 8.0rem;
  em {
   font-size: 4.0rem;
  }
 }
}

}

</style>
