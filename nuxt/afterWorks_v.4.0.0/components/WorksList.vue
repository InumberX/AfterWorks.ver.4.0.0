<template>
  <div class="cnt-wrap">
    <div class="cnt-box">
      <div class="inner">
        <div class="works-list-box">
          <p
            class="works-lead animelm animelm-fade-in"
            v-if="items.lead.length > 0"
          >
            {{ items.lead[0] }}
          </p>
          <ul class="works-items">
            <li
              class="works-item animelm animelm-slide-in-top"
              v-for="(id, i) in items.id"
              :id="id"
              :key="id"
            >
              <div class="works-box">
                <figure class="works-img-box">
                  <img
                    :src="imgUrlCashBuster(items.img[i])"
                    alt=""
                    class="works-img"
                  />
                </figure>
                <div class="works-cnt-box">
                  <h3 class="works-ttl">
                    <a
                      :href="items.link[i]"
                      class="works-link"
                      target="_blank"
                      rel="noopener"
                      v-if="items.link[i] != ''"
                    >
                      <span class="works-ttl-tx">{{ items.ttl[i] }}</span
                      ><i class="icon is-new-tab"></i>
                    </a>
                    <span class="works-ttl-tx" v-else>{{ items.ttl[i] }}</span>
                  </h3>
                  <ul
                    class="works-info-items is-charge"
                    v-if="items.charge[i].length > 0"
                  >
                    <li
                      class="works-info-item"
                      v-for="(tx, j) in items.charge[i]"
                    >
                      {{ tx }}
                    </li>
                  </ul>
                  <ul
                    class="works-info-items is-programming"
                    v-if="items.programming[i].length > 0"
                  >
                    <li
                      class="works-info-item"
                      v-for="(tx, j) in items.programming[i]"
                    >
                      {{ tx }}
                    </li>
                  </ul>
                  <ul
                    class="works-info-items is-cms"
                    v-if="items.cms[i].length > 0"
                  >
                    <li class="works-info-item" v-for="(tx, j) in items.cms[i]">
                      {{ tx }}
                    </li>
                  </ul>
                  <ul
                    class="works-info-items is-software"
                    v-if="items.software[i].length > 0"
                  >
                    <li
                      class="works-info-item"
                      v-for="(tx, j) in items.software[i]"
                    >
                      {{ tx }}
                    </li>
                  </ul>
                  <p class="works-tx" v-html="replaceQuot(items.tx[i])"></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinAnimelm from '~/mixins/animelm'
import mixinUtils from '~/mixins/utils'

export default Vue.extend({
  name: 'WorksList',
  mixins: [mixinAnimelm, mixinUtils],
  props: {
    items: {},
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.works-list-box {
  margin-top: 32px;
}
.works-lead {
  margin: 0;
}
.works-items {
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  .works-item {
    &:first-of-type {
      margin-top: 0;
    }
  }
}
.works-item {
  margin: 16px 0 0;
  padding: 0;
}
.works-box {
  padding: 16px;
  border: 4px solid $palette-gray--3;
}
.works-img-box {
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.works-img {
  width: 100%;
}
.works-cnt-box {
  box-sizing: border-box;
}
.works-ttl {
  margin: 16px 0 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: $color-tx--main;
}
.works-link:not(:root) {
  display: block;
  color: $color-tx--main;
  text-decoration: none;
  &:hover {
    color: $color-tx--link;
    .icon {
      color: $color-tx--link;
    }
  }
  .icon {
    margin-left: 8px;
    font-size: 1.6rem;
  }
}
.works-info-items {
  position: relative;
  margin: 8px 0 0;
  padding: 0 0 0 16px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: $palette-blue--1;
    position: absolute;
    top: 7px;
    left: 0;
  }
  .works-info-item {
    &:last-of-type {
      &:after {
        content: none;
      }
    }
  }
}
.works-info-item {
  margin: 0;
  font-size: 1.4rem;
  display: flex;
  color: $palette-gray--1;
  &:after {
    content: ',';
    margin-right: 8px;
  }
}
.works-tx {
  margin: 8px 0 0;
  .note {
    display: block;
    color: $palette-gray--1;
    font-size: 1.4rem;
  }
}
@media screen and (min-width: $bp--sm), print {
  .works-list-box {
    margin-top: 40px;
  }
  .works-items {
    margin-top: 16px;
  }
  .works-item {
    margin-top: 24px;
    padding: 0;
  }
  .works-box {
    padding: 24px;
  }
  .works-ttl {
    margin-top: 24px;
    font-size: 2rem;
  }
  .works-link:not(:root) {
    .icon {
      margin-left: 12px;
      font-size: 1.8rem;
    }
  }
  .works-info-items {
    &:before {
      top: 8px;
    }
  }
  .works-info-item {
    font-size: 1.6rem;
  }
  .works-tx {
    .note {
      font-size: 1.6rem;
    }
  }
}
@media screen and (min-width: $bp--md), print {
  .works-list-box {
    margin-top: 48px;
  }
  .works-box {
    display: flex;
    align-items: center;
  }
  .works-img-box {
    width: 50%;
    padding-right: 16px;
  }
  .works-cnt-box {
    width: 50%;
  }
  .works-ttl {
    margin-top: 0;
    font-size: 2.2rem;
  }
}
@media screen and (min-width: $bp--lg), print {
  .works-box {
    padding: 32px;
  }
  .works-ttl {
    font-size: 2.4rem;
  }
}
</style>
