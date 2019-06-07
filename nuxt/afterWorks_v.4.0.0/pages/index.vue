<template>
<div class="index-wrap">

<mainVisual></mainVisual>

<contentsLead
 v-if="this.$store.state.contents.index.isGet"
 v-bind:text="this.$store.state.contents.index.data.contents.indexMessage[0]"
>
</contentsLead>

<section>

<contentsTitle
 titleEn="Service"
 title="提供サービス"
>
</contentsTitle>

<cardList
 v-if="this.$store.state.contents.index.isGet"
 v-bind:titles="this.$store.state.contents.index.data.contents.indexServiceTitle"
 v-bind:texts="this.$store.state.contents.index.data.contents.indexServiceText"
 v-bind:classes="this.$store.state.contents.index.data.contents.indexServiceClass"
>
</cardList>

</section>

<section>

<contentsTitle
 titleEn="Contents"
 title="コンテンツ"
>
</contentsTitle>

<cardList
 v-if="this.$store.state.contents.index.isGet"
 v-bind:titles="this.$store.state.contents.index.data.contents.indexContentsTitle"
 v-bind:texts="this.$store.state.contents.index.data.contents.indexContentsText"
 v-bind:classes="this.$store.state.contents.index.data.contents.indexContentsClass"
 v-bind:links="this.$store.state.contents.index.data.contents.indexContentsLink"
 v-bind:linkTexts="this.$store.state.contents.index.data.contents.indexContentsLinkText"
>
</cardList>

</section>
</div>
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import ContentsLead from '~/components/ContentsLead.vue'
import ContentsTitle from '~/components/ContentsTitle.vue'
import CardList from '~/components/CardList.vue'

export default {
 head: {
  title: 'After Works.'
 },
 components: {
  MainVisual: MainVisual,
  ContentsLead: ContentsLead,
  ContentsTitle: ContentsTitle,
  CardList: CardList
 },
}
</script>

<style>
</style>
