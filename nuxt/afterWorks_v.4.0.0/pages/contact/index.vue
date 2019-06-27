<template>
<div class="contact-wrap" v-if="!this.$store.state.isLoading">

<pageTitle titleEn="Contact" title="お問い合わせ"></pageTitle>

<pageLead
 v-bind:text="'制作の依頼・ご相談などお気軽にお問い合わせください。'"
>
</pageLead>

<section>

<contactInput></contactInput>

</section>

</div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageLead from '~/components/PageLead.vue'
import ContactInput from '~/components/ContactInput.vue'

export default {
 head: {
  title: 'Contact | After Works.'
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
