<template>
<div class="about-wrap">

<pageTitle
 titleEn="About"
 title="経歴紹介"
>
</pageTitle>

<pageLead
 v-if="this.$store.state.contents.about.isGet"
 v-bind:text="this.$store.state.contents.about.data.contents.aboutLead[0]"
>
</pageLead>

<section>

<profile
 v-if="this.$store.state.contents.about.isGet"
 v-bind:name="this.$store.state.contents.about.data.contents.aboutName[0]"
 v-bind:certificateNames="this.$store.state.contents.about.data.contents.aboutCertificateName"
 v-bind:certificateUrls="this.$store.state.contents.about.data.contents.aboutCertificateUrl"
 v-bind:skills="[
  this.$store.state.contents.about.data.contents.aboutSkillFrontendProgrammingLanguage[0],
  this.$store.state.contents.about.data.contents.aboutSkillCms[0],
  this.$store.state.contents.about.data.contents.aboutSkillServerSideProgrammingLanguage[0],
  this.$store.state.contents.about.data.contents.aboutSkillSoftware[0]
 ]"
>
</profile>

</section>

<contact></contact>

</div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue';
import PageLead from '~/components/PageLead.vue';
import Profile from '~/components/Profile.vue';
import Contact from '~/components/Contact.vue'

export default {
 head: {
  title: 'About | After Works.'
 },
 components: {
  PageTitle: PageTitle,
  PageLead: PageLead,
  Profile: Profile,
  Contact: Contact
 }
}
</script>

<style>
</style>
