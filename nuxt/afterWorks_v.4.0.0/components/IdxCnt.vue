<template>
  <section class="cnt-wrap">
    <CntTtl :ttl="ttl" :ttlEn="ttlEn" />
    <div class="cnt-box">
      <div class="inner">
        <div class="idx-cnt-box">
          <ul class="idx-cnt-items">
            <li
              class="idx-cnt-item animelm animelm-slide-in-top"
              v-for="(ttl, key, i) in cnt.ttl"
              :key="cnt.className[key]"
              :data-animelm-delay="(i + 1) * 300"
            >
              <div class="idx-cnt">
                <div class="idx-cnt-icon-box">
                  <i class="icon" :class="cnt.className[key]"></i>
                </div>
                <h3 class="idx-cnt-ttl">{{ ttl }}</h3>
                <p class="idx-cnt-tx">{{ cnt.tx[key] }}</p>
                <div
                  class="idx-cnt-link-box"
                  v-if="
                    cnt.link != null &&
                    cnt.linkTx != null &&
                    cnt.link[key] != null &&
                    cnt.linkTx[key] != null
                  "
                >
                  <nuxt-link
                    :to="'/' + cnt.link[key] + '/'"
                    class="idx-cnt-link"
                  >
                    <span>{{ cnt.linkTx[key] }}</span>
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinUtils from '~/mixins/utils'
import CntTtl from '~/components/CntTtl.vue'

export default Vue.extend({
  name: 'IdxCnt',
  mixins: [mixinUtils],
  components: {
    CntTtl: CntTtl,
  },
  props: {
    ttl: { type: String },
    ttlEn: { type: String },
    cnt: { type: Object },
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.idx-cnt-box {
  margin-top: 16px;
}
.idx-cnt-items {
  margin: 0;
  padding: 0;
  list-style: none;
  .idx-cnt-item {
    &:first-of-type {
      margin-top: 0;
    }
  }
}
.idx-cnt-item {
  margin: 16px 0 0;
  box-sizing: border-box;
}
.idx-cnt {
  border: 4px solid $palette-gray--3;
  padding: 24px 16px;
  box-sizing: border-box;
  height: 100%;
}
.idx-cnt-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $palette-gray--3;
  width: 80px;
  height: 80px;
  border-radius: 120px;
  overflow: hidden;
  margin: 0 auto;
  .icon {
    font-size: 4.8rem;
    &.about {
      font-size: 8rem;
    }
    &.works {
      font-size: 8.8rem;
    }
  }
}
.idx-cnt-ttl {
  margin: 16px 0 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}
.idx-cnt-tx {
  margin: 8px 0 0;
}
.idx-cnt-link-box {
  margin-top: 16px;
}
.idx-cnt-link:not(:root) {
  position: relative;
  display: block;
  width: 100%;
  max-width: 320px;
  padding: 12px;
  margin: 0 auto;
  outline: 0;
  background-color: $palette-blue--1;
  color: $palette-white--0;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 16px rgba($palette-black--0, 0.3);
  box-sizing: border-box;
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    border: 0;
    border-top: 1px solid $palette-white--0;
    border-right: 1px solid $palette-white--0;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 16px;
    margin-top: -4px;
  }
  &:hover {
    background-color: $palette-blue--2;
    box-shadow: 0 2px 4px rgba($palette-black--0, 0.3);
  }
}

@media screen and (min-width: $bp--sm), print {
  .idx-cnt {
    padding: 24px;
  }
  .idx-cnt-icon-box {
    width: 100px;
    height: 100px;
    .icon {
      font-size: 5.6rem;
      &.about {
        font-size: 9.6rem;
      }
      &.works {
        font-size: 10.4rem;
      }
    }
  }
  .idx-cnt-ttl {
    font-size: 2.4rem;
  }
}
@media screen and (min-width: $bp--md), print {
  .idx-cnt-icon-box {
    width: 120px;
    height: 120px;
    .icon {
      font-size: 7.2rem;
      &.about {
        font-size: 11.2rem;
      }
      &.works {
        font-size: 12rem;
      }
    }
  }
  .idx-cnt-ttl {
    font-size: 2.8rem;
  }
  .idx-cnt-items {
    display: flex;
    flex-wrap: wrap;
    .idx-cnt-item {
      &:nth-of-type(2) {
        margin-top: 0;
      }
      &:nth-of-type(odd) {
        padding-right: 8px;
      }
      &:nth-of-type(even) {
        padding-left: 8px;
      }
    }
  }
  .idx-cnt-item {
    width: 50%;
  }
  .idx-cnt-link:not(:root) {
    padding: 16px;
  }
}
</style>
