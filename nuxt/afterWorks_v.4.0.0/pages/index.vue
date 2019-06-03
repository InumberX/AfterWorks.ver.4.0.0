<template>
<div class="index-wrap">
<mainVisual></mainVisual>
<lead v-if="this.$store.state.contents.index.isGet" v-bind:text="this.$store.state.contents.index.data.contents.indexMessage[0]"></lead>
<section style="margin-top: 100px;">
INDEX：{{ this.$store.state.contents.index }}
ABOUT：{{ this.$store.state.contents.about }}
WORKS：{{ this.$store.state.contents.works }}
</section>
</div>
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import Lead from '~/components/Lead.vue'

export default {
 head: {
  title: 'After Works.'
 },
 components: {
  MainVisual: MainVisual,
  Lead: Lead
 },
}
</script>

<style>
</style>
