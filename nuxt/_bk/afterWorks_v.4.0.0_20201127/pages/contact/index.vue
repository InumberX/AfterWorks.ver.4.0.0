<template>
<div class="contact-wrap">

<pageTitle titleEn="Contact" title="お問い合わせ"></pageTitle>

<pageLead
 v-bind:text="'制作の依頼・ご相談などお気軽にお問い合わせください。'"
>
</pageLead>

<section>

<no-ssr>
<contactInput></contactInput>
</no-ssr>

</section>

</div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageLead from '~/components/PageLead.vue'
import ContactInput from '~/components/ContactInput.vue'

export default {
 head: function() {
  return {
   title: 'Contact',
   meta: [
    {
     hid: 'description',
     name: 'description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。お問い合わせはこちらのページからお気軽にご連絡ください。'
    },
    {
     hid: 'ogTitle',
     property: 'og:title',
     content: 'Contact | After Works.'
    },
    {
     hid: 'ogUrl',
     property: 'og:url',
     content: 'https://afterworks.jp/contact/'
    },
    {
     hid: 'ogSiteName',
     property: 'og:site_name',
     content: 'Contact | After Works.'
    },
    {
     hid: 'ogDescription',
     property: 'og:description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。お問い合わせはこちらのページからお気軽にご連絡ください。'
    },
    {
     hid: 'twitterDescription',
     name: 'twitter:description',
     content: '東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。お問い合わせはこちらのページからお気軽にご連絡ください。'
    }
   ],
   link: [
    {
     hid: 'canonical',
     rel: 'canonical',
     href: 'https://afterworks.jp/contact/'
    }
   ]
  }
 },
 components: {
  PageTitle: PageTitle,
  PageLead: PageLead,
  ContactInput: ContactInput
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
