<template>
<div class="main-visual-box">
<div class="inner">
<div class="main-visual-bg">
<h2>From design<br>to coding</h2>
</div>
</div><!-- /.inner -->
</div><!-- /.main-visual-box -->
</template>

<script>
</script>

<style lang="scss" scoped>

/* メインビジュアル
*************************************************/

/* SP
*************************************************/
.main-visual-box {
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
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.main-visual-box {
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

}

</style>
