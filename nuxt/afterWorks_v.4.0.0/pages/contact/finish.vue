<template>
<div class="contact-wrap">

<pageTitle titleEn="Contact" title="お問い合わせ完了"></pageTitle>

<pageLead
 v-bind:text="'お問い合わせありがとうございます。送信が完了しました。<br>ご入力いただいたメールアドレス宛にご連絡いたします。'"
>
</pageLead>

<backTopBtn></backTopBtn>

</div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageLead from '~/components/PageLead.vue'
import BackTopBtn from '~/components/BackTopBtn.vue'

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
     content: 'https://afterworks.jp/contact/finish/'
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
     href: 'https://afterworks.jp/contact/finish/'
    }
   ]
  }
 },
 components: {
  PageTitle: PageTitle,
  PageLead: PageLead,
  BackTopBtn: BackTopBtn
 }
}
</script>

<style>
</style>
