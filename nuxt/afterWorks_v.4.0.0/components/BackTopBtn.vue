<template>

<transition
 name="contents"
 appear
>

<div class="back-top-btn-box">
<div class="inner">
<nuxt-link v-bind:to="'/'" class="btn-m1 btn-arrow-right">トップページ</nuxt-link>
</div><!-- /.inner -->
</div><!-- /.back-top-btn-box -->

</transition>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

/* コンテンツタイトル
*************************************************/

/* SP
*************************************************/
.back-top-btn-box {
 .btn-m1 {
  margin-top: 40px;
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.back-top-btn-box {
 .btn-m1 {
  margin-top: 80px;
 }
}

}

</style>
