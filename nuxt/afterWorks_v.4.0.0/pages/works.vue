<template>
  <main class="mn-wrap" :key="pageKey">
    <PageTtl :ttl="pageTitle" :ttlEn="pageTitleEn" />
    <template v-for="(item, i) in cntData">
      <WorksList :key="item.id" :items="storeCnt(item.id)" />
    </template>
    <Contact />
    <AdsenseList />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import mixinMeta from '~/mixins/meta'
import PageTtl from '~/components/PageTtl.vue'
import WorksList from '~/components/WorksList.vue'
import Contact from '~/components/Contact.vue'
import AdsenseList from '~/components/ad/AdsenseList.vue'

export default Vue.extend({
  name: 'Works',
  mixins: [mixinMeta],
  components: {
    PageTtl: PageTtl,
    WorksList: WorksList,
    Contact: Contact,
    AdsenseList: AdsenseList,
  },
  async asyncData({ store, $axios }) {
    const dataKey = 'works'
    if (
      store.state.page_info.data[dataKey] == null ||
      store.state.page_info.data[dataKey].id === ''
    ) {
      let url =
        '/uploads/json/page/' + dataKey + '.json?' + process.env.cashBuster

      if (process.server) {
        url = process.env.url + url
      }

      const res = await $axios.get(url)

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
          id: 'Achievement',
        },
        {
          id: 'Hobby',
        },
      ],
    }
  },
  computed: {
    // コンテンツ部分の内容を返す処理
    storeCnt: function () {
      const self = this
      return function (type: String) {
        const targets = [
          {
            key: 'id',
            name: 'works' + type + 'Id',
          },
          {
            key: 'lead',
            name: 'works' + type + 'Lead',
          },
          {
            key: 'ttl',
            name: 'works' + type + 'Title',
          },
          {
            key: 'link',
            name: 'works' + type + 'Link',
          },
          {
            key: 'img',
            name: 'works' + type + 'Img',
          },
          {
            key: 'tx',
            name: 'works' + type + 'Text',
          },
          {
            key: 'charge',
            name: 'works' + type + 'Charge',
          },
          {
            key: 'programming',
            name: 'works' + type + 'ProgrammingLanguage',
          },
          {
            key: 'cms',
            name: 'works' + type + 'Cms',
          },
          {
            key: 'software',
            name: 'works' + type + 'Software',
          },
          {
            key: 'startDate',
            name: 'works' + type + 'StartDate',
          },
          {
            key: 'endDate',
            name: 'works' + type + 'EndDate',
          },
        ]
        interface storeCntResult {
          [key: string]: any
        }
        const result: storeCntResult = {}
        const data = self.$store.state.page_info.data

        if (data.works != null) {
          for (
            let i = 0, iLength = targets.length;
            i < iLength;
            i = (i + 1) | 0
          ) {
            const target = targets[i]
            const key = target.key
            const name = target.name

            if (data.works.contents[name] != null) {
              result[key] = data.works.contents[name]
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
