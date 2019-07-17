<template>
<div class="works-wrap">

<pageTitle
 titleEn="Works"
 title="実績紹介"
>
</pageTitle>

<section>

<pageLead
 v-bind:text="response.contents.worksAchievementLead[0]"
>
</pageLead>

<works
 v-bind:id="response.contents.worksAchievementId"
 v-bind:titles="response.contents.worksAchievementTitle"
 v-bind:images="response.contents.worksAchievementImg"
 v-bind:urls="response.contents.worksAchievementLink"
 v-bind:charge="response.contents.worksAchievementCharge"
 v-bind:language="response.contents.worksAchievementProgrammingLanguage"
 v-bind:cms="response.contents.worksAchievementCms"
 v-bind:software="response.contents.worksAchievementSoftware"
 v-bind:texts="response.contents.worksAchievementText"
>
</works>

</section>

<section>

<pageLead
 v-bind:text="response.contents.worksHobbyLead[0]"
>
</pageLead>

<works
 v-bind:id="response.contents.worksHobbyId"
 v-bind:titles="response.contents.worksHobbyTitle"
 v-bind:images="response.contents.worksHobbyImg"
 v-bind:urls="response.contents.worksHobbyLink"
 v-bind:charge="response.contents.worksHobbyCharge"
 v-bind:language="response.contents.worksHobbyProgrammingLanguage"
 v-bind:cms="response.contents.worksHobbyCms"
 v-bind:software="response.contents.worksHobbySoftware"
 v-bind:texts="response.contents.worksHobbyText"
>
</works>

</section>

<contact></contact>

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
 },
 data: function() {
  return {
   response: ''
  }
 },
 async asyncData({$axios}) {
  let url = '/json/page/works.json'
  if(process.server) {
   url = 'https://afterworks.jp' + url
  }
  const res = await $axios.get(url)
  return {
   response: res.data
  }
 }
}
</script>

<style>
</style>
