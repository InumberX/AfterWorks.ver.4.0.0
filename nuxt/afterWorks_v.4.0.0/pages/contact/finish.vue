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
 head: {
  title: 'Contact | After Works.'
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
