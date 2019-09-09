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
  let url = '/json/page/about.json' + process.env.cashBuster
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
 },
 mounted: function() {
  /*------------------------------------------
   Scrooll Magic
  --------------------------------------------*/
  let sMagicController = new ScrollMagic.Controller()

  let $sMagicFadeIn = document.querySelectorAll('.s-magic-fadein')
  const sMagicFadeInLength = $sMagicFadeIn.length

  if(sMagicFadeInLength > 0) {
   Array.prototype.forEach.call($sMagicFadeIn, function ($item, i) {
    let sMagicFadeInScene = new ScrollMagic.Scene({
     // 対象要素
     triggerElement: $item,
     triggerHook: 'onEnter',
     reverse: false,
     offset: 150
    }).addTo(sMagicController)
    
    // アニメーション開始時の処理
    sMagicFadeInScene.on('enter', function() {
     const delayTime = $sMagicFadeIn[i].dataset.pcIndex * 300
     $sMagicFadeIn[i].style.transitionDelay = delayTime + 'ms'
     setTimeout(function() {
      $sMagicFadeIn[i].style.transitionDelay = ''
     }, delayTime)
     $sMagicFadeIn[i].classList.add('s-magic-on')
    })

    // アニメーション完了時の処理
    sMagicFadeInScene.on('end', function() {
     sMagicFadeInScene.destroy(true)
    })
   
   })

  }
 }
}
</script>

<style>
</style>
