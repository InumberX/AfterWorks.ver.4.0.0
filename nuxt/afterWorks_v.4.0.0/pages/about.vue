<template>
  <main class="mn-wrap" :key="pageKey">
    <PageTtl :ttl="pageTitle" :ttlEn="pageTitleEn" />
    <PageLead :leadTx="storeLeadTx" />
    <Profile :items="storeProfile" />
    <History :items="storeHistory" />
    <Contact />
    <AdsenseList />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import mixinMeta from '~/mixins/meta'
import PageTtl from '~/components/PageTtl.vue'
import PageLead from '~/components/PageLead.vue'
import Profile from '~/components/Profile.vue'
import History from '~/components/History.vue'
import Contact from '~/components/Contact.vue'
import AdsenseList from '~/components/ad/AdsenseList.vue'

export default Vue.extend({
  name: 'About',
  mixins: [mixinMeta],
  components: {
    PageTtl: PageTtl,
    PageLead: PageLead,
    Profile: Profile,
    History: History,
    Contact: Contact,
    AdsenseList: AdsenseList,
  },
  async asyncData({ store, $axios }) {
    const dataKey = 'about'
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
  computed: {
    // 前文を返す処理
    storeLeadTx: function () {
      const data = this.$store.state.page_info.data
      if (data.about != null && data.about.contents.aboutLead.length > 0) {
        return data.about.contents.aboutLead[0]
      } else {
        return ''
      }
    },
    // プロフィール部分の内容を返す処理
    storeProfile: function () {
      const data = this.$store.state.page_info.data
      interface storeProfileResult {
        [key: string]: any
      }
      const result: storeProfileResult = {
        name: '',
        certificate: [],
        skill: [],
      }

      if (data.about != null) {
        if (data.about.contents.aboutName.length > 0) {
          result.name = data.about.contents.aboutName[0]
        }

        if (data.about.contents.aboutCertificateName.length > 0) {
          for (
            let i = 0,
              iLength = data.about.contents.aboutCertificateName.length;
            i < iLength;
            i = (i + 1) | 0
          ) {
            let certificateInfo = {
              tx: data.about.contents.aboutCertificateName[i],
              url: '',
            }

            if (data.about.contents.aboutCertificateUrl.length > i) {
              certificateInfo.url = data.about.contents.aboutCertificateUrl[i]
            }

            result.certificate.push(certificateInfo)
          }
        }

        if (
          data.about.contents.aboutSkillFrontendProgrammingLanguage.length > 0
        ) {
          result.skill.push(
            data.about.contents.aboutSkillFrontendProgrammingLanguage[0]
          )
        }

        if (data.about.contents.aboutSkillCms.length > 0) {
          result.skill.push(data.about.contents.aboutSkillCms[0])
        }

        if (
          data.about.contents.aboutSkillServerSideProgrammingLanguage.length > 0
        ) {
          result.skill.push(
            data.about.contents.aboutSkillServerSideProgrammingLanguage[0]
          )
        }

        if (data.about.contents.aboutSkillSoftware.length > 0) {
          result.skill.push(data.about.contents.aboutSkillSoftware[0])
        }
      }

      return result
    },
    // 経歴部分の内容を返す処理
    storeHistory: function () {
      const data = this.$store.state.page_info.data
      interface storeHistoryResult {
        date: string
        startDate: string
        endDate: string
        ttl: string
        pos: string
        tools: string
      }
      const result: storeHistoryResult[] = []

      if (data.about != null && data.about.contents.aboutHistoryTitle != null) {
        Object.keys(data.about.contents.aboutHistoryTitle).forEach(function (
          key
        ) {
          const historyInfo = {
            date: data.about.contents.aboutHistoryDate[key],
            startDate: data.about.contents.aboutHistoryStartDate[key],
            endDate: data.about.contents.aboutHistoryEndDate[key],
            ttl: data.about.contents.aboutHistoryTitle[key],
            pos: data.about.contents.aboutHistoryPositions[key],
            tools: data.about.contents.aboutHistoryTools[key],
          }

          result.push(historyInfo)
        })
      }

      return result
    },
  },
})
</script>

<style lang="scss"></style>
