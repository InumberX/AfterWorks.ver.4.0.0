<template>
  <ins
    class="adsbygoogle"
    :data-ad-layout="adLayout"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
    :data-full-width-responsive="adResponsive"
    :data-ad-layout-key="adLayoutKey"
    :data-ad-title="'ads-' + adSlot"
    :title="'ads-' + adSlot"
    :style="adStyle"
  />
</template>

<script lang="ts">
import Vue from 'vue'

declare const window: any

export default Vue.extend({
  name: 'Adsense',
  props: {
    adClient: {
      type: String,
      required: false,
      default: 'ca-pub-6711167987812480',
    },
    adSlot: {
      type: String,
      required: true,
      default: '',
    },
    adFormat: {
      type: String,
      required: false,
      default: null,
    },
    adLayout: {
      type: String,
      required: false,
      default: null,
    },
    adStyle: {
      type: String,
      required: false,
      default: 'display: block;',
    },
    adResponsive: {
      type: String,
      required: false,
      default: null,
    },
    adLayoutKey: {
      type: String,
      required: false,
      default: null,
    },
  },
  mounted() {
    this.showAd()
  },
  methods: {
    showAd() {
      this.$nextTick(() => {
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {}
      })
    },
  },
})
</script>
