<template>
  <main class="mn-wrap" :key="pageKey">
    <PageTtl :ttl="pageTitle" :ttlEn="pageTitleEn" />
    <ContactFinish />
    <AdsenseList />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import mixinMeta from '~/mixins/meta'
import PageTtl from '~/components/PageTtl.vue'
import ContactFinish from '~/components/ContactFinish.vue'
import AdsenseList from '~/components/ad/AdsenseList.vue'

export default Vue.extend({
  name: 'Finish',
  mixins: [mixinMeta],
  components: {
    PageTtl: PageTtl,
    ContactFinish: ContactFinish,
    AdsenseList: AdsenseList,
  },
})
</script>

<style lang="scss"></style>
