<template>
  <main class="mn-wrap" :key="pageKey">
    <IdxMainVisual />
    <IdxLead :leadTx="storeLeadTx" />
    <template v-for="(item, i) in cntData">
      <IdxCnt
        :ttl="item.ttl"
        :ttlEn="item.ttlEn"
        :key="item.id"
        :cnt="storeCnt(item.id)"
      />
    </template>
    <Contact />
    <AdsenseList />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import mixinMeta from '~/mixins/meta'
import IdxMainVisual from '~/components/IdxMainVisual.vue'
import IdxLead from '~/components/IdxLead.vue'
import IdxCnt from '~/components/IdxCnt.vue'
import Contact from '~/components/Contact.vue'
import AdsenseList from '~/components/ad/AdsenseList.vue'

export default Vue.extend({
  name: 'Index',
  mixins: [mixinMeta],
  components: {
    IdxMainVisual: IdxMainVisual,
    IdxLead: IdxLead,
    IdxCnt: IdxCnt,
    Contact: Contact,
    AdsenseList: AdsenseList,
  },
  async asyncData({ store, $axios }) {
    const dataKey = 'index'
    if (
      store.state.page_info.data[dataKey] == null ||
      store.state.page_info.data[dataKey].id === ''
    ) {
      const res = await $axios.get(
        '/json/page/' + dataKey + '.json?' + process.env.cashBuster
      )
      store.commit('page_info/setData', {
        key: dataKey,
        val: res.data,
      })
    }
  },
  data: function () {
    return {
      cntData: [
        {
          id: 'Service',
          ttl: '提供サービス',
          ttlEn: 'Service',
        },
        {
          id: 'Contents',
          ttl: 'コンテンツ',
          ttlEn: 'Contents',
        },
      ],
    }
  },
  computed: {
    // 前文を返す処理
    storeLeadTx: function () {
      const data = this.$store.state.page_info.data
      if (data.index != null && data.index.contents.indexMessage.length > 0) {
        return data.index.contents.indexMessage[0]
      } else {
        return ''
      }
    },
    // コンテンツ部分の内容を返す処理
    storeCnt: function () {
      const self = this
      return function (type: String) {
        const targets = [
          {
            key: 'ttl',
            name: 'index' + type + 'Title',
          },
          {
            key: 'tx',
            name: 'index' + type + 'Text',
          },
          {
            key: 'className',
            name: 'index' + type + 'Class',
          },
          {
            key: 'link',
            name: 'index' + type + 'Link',
          },
          {
            key: 'linkTx',
            name: 'index' + type + 'LinkText',
          },
        ]
        interface storeCntResult {
          [key: string]: any
        }
        const result: storeCntResult = {}
        const data = self.$store.state.page_info.data

        if (data.index != null) {
          for (
            let i = 0, iLength = targets.length;
            i < iLength;
            i = (i + 1) | 0
          ) {
            const target = targets[i]
            const key = target.key
            const name = target.name

            if (
              data.index.contents[name] != null &&
              data.index.contents[name].length > 0
            ) {
              result[key] = data.index.contents[name]
            }
          }
        }
        return result
      }
    },
  },
})
</script>

<style lang="scss"></style>
