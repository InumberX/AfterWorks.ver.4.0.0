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
 }
}
</script>

<style>
</style>
