<template>
<div class="works-wrap">

<pageTitle
 v-if="this.$store.state.contents.works.isGet"
 titleEn="Works"
 title="実績紹介"
>
</pageTitle>

<section>

<pageLead
 v-if="this.$store.state.contents.works.isGet"
 v-bind:text="this.$store.state.contents.works.data.contents.worksAchievementLead[0]"
>
</pageLead>

<works
 v-if="this.$store.state.contents.works.isGet"
 v-bind:id="this.$store.state.contents.works.data.contents.worksAchievementId"
 v-bind:titles="this.$store.state.contents.works.data.contents.worksAchievementTitle"
 v-bind:images="this.$store.state.contents.works.data.contents.worksAchievementImg"
 v-bind:urls="this.$store.state.contents.works.data.contents.worksAchievementLink"
 v-bind:charge="this.$store.state.contents.works.data.contents.worksAchievementCharge"
 v-bind:language="this.$store.state.contents.works.data.contents.worksAchievementProgrammingLanguage"
 v-bind:cms="this.$store.state.contents.works.data.contents.worksAchievementCms"
 v-bind:software="this.$store.state.contents.works.data.contents.worksAchievementSoftware"
 v-bind:texts="this.$store.state.contents.works.data.contents.worksAchievementText"
>
</works>

</section>

<section>

<pageLead
 v-if="this.$store.state.contents.works.isGet"
 v-bind:text="this.$store.state.contents.works.data.contents.worksHobbyLead[0]"
>
</pageLead>

<works
 v-if="this.$store.state.contents.works.isGet"
 v-bind:id="this.$store.state.contents.works.data.contents.worksHobbyId"
 v-bind:titles="this.$store.state.contents.works.data.contents.worksHobbyTitle"
 v-bind:images="this.$store.state.contents.works.data.contents.worksHobbyImg"
 v-bind:urls="this.$store.state.contents.works.data.contents.worksHobbyLink"
 v-bind:charge="this.$store.state.contents.works.data.contents.worksHobbyCharge"
 v-bind:language="this.$store.state.contents.works.data.contents.worksHobbyProgrammingLanguage"
 v-bind:cms="this.$store.state.contents.works.data.contents.worksHobbyCms"
 v-bind:software="this.$store.state.contents.works.data.contents.worksHobbySoftware"
 v-bind:texts="this.$store.state.contents.works.data.contents.worksHobbyText"
>
</works>

</section>

<contact v-if="this.$store.state.contents.works.isGet"></contact>

</div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue';
import PageLead from '~/components/PageLead.vue';
import Works from '~/components/Works.vue';
import Contact from '~/components/Contact.vue'

export default {
 head: function() {
  return {
   title: 'Works',
   meta: [
    {
     hid: 'description',
     name: 'description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のこれまでの制作物についてご紹介します。'
    },
    {
     hid: 'ogTitle',
     property: 'og:title',
     content: 'Works | After Works.'
    },
    {
     hid: 'ogUrl',
     property: 'og:url',
     content: 'https://afterworks.jp/works/'
    },
    {
     hid: 'ogSiteName',
     property: 'og:site_name',
     content: 'Works | After Works.'
    },
    {
     hid: 'ogDescription',
     property: 'og:description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のこれまでの制作物についてご紹介します。'
    },
    {
     hid: 'twitterDescription',
     name: 'twitter:description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のこれまでの制作物についてご紹介します。'
    }
   ],
   link: [
    {
     hid: 'canonical',
     rel: 'canonical',
     href: 'https://afterworks.jp/works/'
    }
   ]
  }
 },
 components: {
  PageTitle: PageTitle,
  PageLead: PageLead,
  Works: Works,
  Contact: Contact
 }
}
</script>

<style>
</style>
