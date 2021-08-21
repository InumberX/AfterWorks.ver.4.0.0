<template>

<transition
 name="contents"
 appear
>

<div class="page-lead-box s-magic-fadein">
<div class="inner">
<p v-html="replaceNewLine(text)"></p>
</div><!-- /.inner -->
</div><!-- /.page-lead-box -->

</transition>

</template>

<script>
export default {
 props: [
  'text'
 ],
 methods: {
  replaceNewLine: function(value) {
   return value.replace(/\r?\n/g, '<br>')
  }
 }
}
</script>

<style lang="scss" scoped>

/* 前文
*************************************************/

/* SP
*************************************************/
.page-lead-box {
 p {
  margin: 32px auto 0;
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.page-lead-box {
 p {
  margin-top: 40px;
 }
}

}

</style>
