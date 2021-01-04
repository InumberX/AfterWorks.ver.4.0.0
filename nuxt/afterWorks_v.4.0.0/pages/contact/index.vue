<template>
  <main class="mn-wrap" :key="pageKey">
    <PageTtl :ttl="pageTitle" :ttlEn="pageTitleEn" />
    <no-ssr>
      <ContactInput :items="frmItems" />
    </no-ssr>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import mixinMeta from '~/mixins/meta'
import PageTtl from '~/components/PageTtl.vue'
import ContactInput from '~/components/ContactInput.vue'

interface FrmItems {
  [key: string]: any
}

export default Vue.extend({
  name: 'Contact',
  mixins: [mixinMeta],
  components: {
    PageTtl: PageTtl,
    ContactInput: ContactInput,
  },
  async asyncData({ store, $axios }) {
    const dataKey = 'contact'
    let res = await $axios.get('/json/frm_info.json?' + process.env.cashBuster)

    Object.keys(res.data).forEach(function (key) {
      // 正規表現チェックが設定されている場合
      if (
        res.data[key].rules != null &&
        res.data[key].rules.regex != null &&
        res.data[key].rules.regex !== ''
      ) {
        // 文字列からオブジェクトに変換する
        res.data[key].rules.regex = new Function(
          'return ' + res.data[key].rules.regex
        )()
      }
    })

    return {
      frmItems: res.data,
    }
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss"></style>
