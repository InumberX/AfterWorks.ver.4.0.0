<template>
  <div class="cnt-wrap is-paint is-ads">
    <div class="cnt-box">
      <div class="inner">
        <div class="ads-box">
          <ul class="ads-items">
            <li class="ads-item" v-for="(item, i) in ads">
              <adsense
                :ad-slot="item.slot"
                :ad-responsive="item.responsive"
                :ad-format="item.format"
                :style="item.style"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Adsense from '~/components/ad/Adsense.vue'

interface Ads {
  [index: number]: {
    slot: string
    responsive: string
    style: string
  }
}

export default Vue.extend({
  name: 'AdsenseList',
  components: {
    Adsense: Adsense,
  },
  data: function () {
    const ads: Ads = [
      {
        slot: '7889882209',
        responsive: 'false',
        style: 'display:inline-block;width:100%;max-width:300px;height:300px',
      },
      {
        slot: '6465119893',
        responsive: 'false',
        style: 'display:inline-block;width:100%;max-width:300px;height:300px',
      },
      {
        slot: '4704589318',
        responsive: 'false',
        style: 'display:inline-block;width:100%;max-width:300px;height:300px',
      },
    ]

    return {
      ads,
    }
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.ads-box {
  overflow: hidden;
}
.ads-items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.ads-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 12px;
  box-sizing: content-box;
  width: 300px;
  max-width: 300px;
  height: 300px;
  max-height: 300px;
}
</style>
