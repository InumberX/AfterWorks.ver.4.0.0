<template>
<div class="index-wrap" v-if="!this.$store.state.isLoading">

<mainVisual></mainVisual>

<contentsLead
 v-if="this.$store.state.contents.index.isGet"
 v-bind:text="this.$store.state.contents.index.data.contents.indexMessage[0]"
>
</contentsLead>

<section v-if="this.$store.state.contents.index.isGet">

<contentsTitle
 titleEn="Service"
 title="提供サービス"
>
</contentsTitle>

<cardList
 v-bind:titles="this.$store.state.contents.index.data.contents.indexServiceTitle"
 v-bind:texts="this.$store.state.contents.index.data.contents.indexServiceText"
 v-bind:classes="this.$store.state.contents.index.data.contents.indexServiceClass"
>
</cardList>

</section>

<section v-if="this.$store.state.contents.index.isGet">

<contentsTitle
 titleEn="Contents"
 title="コンテンツ"
>
</contentsTitle>

<cardList
 v-bind:titles="this.$store.state.contents.index.data.contents.indexContentsTitle"
 v-bind:texts="this.$store.state.contents.index.data.contents.indexContentsText"
 v-bind:classes="this.$store.state.contents.index.data.contents.indexContentsClass"
 v-bind:links="this.$store.state.contents.index.data.contents.indexContentsLink"
 v-bind:linkTexts="this.$store.state.contents.index.data.contents.indexContentsLinkText"
>
</cardList>

</section>

<contact v-if="this.$store.state.contents.index.isGet"></contact>

</div>
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import ContentsLead from '~/components/ContentsLead.vue'
import ContentsTitle from '~/components/ContentsTitle.vue'
import CardList from '~/components/CardList.vue'
import Contact from '~/components/Contact.vue'

export default {
 head: {
  title: 'After Works.'
 },
 components: {
  MainVisual: MainVisual,
  ContentsLead: ContentsLead,
  ContentsTitle: ContentsTitle,
  CardList: CardList,
  Contact: Contact
 }
}
</script>

<style>
</style>
