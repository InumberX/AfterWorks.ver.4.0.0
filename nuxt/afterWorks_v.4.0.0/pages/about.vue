<template>
<div class="about-wrap">

<pageTitle
 titleEn="About"
 title="経歴紹介"
>
</pageTitle>

<pageLead
 v-bind:text="response.contents.aboutLead[0]"
>
</pageLead>

<section>

<profile
 v-bind:name="response.contents.aboutName[0]"
 v-bind:certificateNames="response.contents.aboutCertificateName"
 v-bind:certificateUrls="response.contents.aboutCertificateUrl"
 v-bind:skills="[
  response.contents.aboutSkillFrontendProgrammingLanguage[0],
  response.contents.aboutSkillCms[0],
  response.contents.aboutSkillServerSideProgrammingLanguage[0],
  response.contents.aboutSkillSoftware[0]
 ]"
>
</profile>

</section>

<section>

<history
 v-bind:dates="response.contents.aboutHistoryDate"
 v-bind:titles="response.contents.aboutHistoryTitle"
 v-bind:positions="response.contents.aboutHistoryPositions"
 v-bind:tools="response.contents.aboutHistoryTools"
>
</history>

</section>

<contact></contact>

</div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageLead from '~/components/PageLead.vue'
import Profile from '~/components/Profile.vue'
import History from '~/components/History.vue'
import Contact from '~/components/Contact.vue'

export default {
 head: function() {
  return {
   title: 'About',
   meta: [
    {
     hid: 'description',
     name: 'description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。'
    },
    {
     hid: 'ogTitle',
     property: 'og:title',
     content: 'About | After Works.'
    },
    {
     hid: 'ogUrl',
     property: 'og:url',
     content: 'https://afterworks.jp/about/'
    },
    {
     hid: 'ogSiteName',
     property: 'og:site_name',
     content: 'About | After Works.'
    },
    {
     hid: 'ogDescription',
     property: 'og:description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。'
    },
    {
     hid: 'twitterDescription',
     name: 'twitter:description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。'
    }
   ],
   link: [
    {
     hid: 'canonical',
     rel: 'canonical',
     href: 'https://afterworks.jp/about/'
    }
   ]
  }
 },
 components: {
  PageTitle: PageTitle,
  PageLead: PageLead,
  Profile: Profile,
  History: History,
  Contact: Contact
 },
 data: function() {
  return {
   response: ''
  }
 },
 async asyncData({$axios}) {
  const now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  month = ('0' + month).slice(-2)
  let day = now.getDate()
  day = ('0' + day).slice(-2)
  let hour = now.getHours()
  hour = ('0' + hour).slice(-2)
  let minute = now.getMinutes()
  minute = ('0' + minute).slice(-2)
  let second = now.getSeconds()
  second = ('0' + second).slice(-2)
  const cashBuster = '?ver=' + year + month + day + hour + minute + second
  let url = '/json/page/about.json' + cashBuster
  if(process.server) {
   url = 'https://afterworks.jp' + url
  }
  else {
   let hostname = location.hostname
   if(hostname === 'localhost') {
    hostname += ':3000'
   }
   url = location.protocol + '//' + hostname + url
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
