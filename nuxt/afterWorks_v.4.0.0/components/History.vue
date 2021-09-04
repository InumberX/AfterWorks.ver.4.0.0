<template>
  <div class="cnt-wrap">
    <div class="cnt-box">
      <div class="inner">
        <div class="his-box">
          <ul class="his-items">
            <li class="his-item animelm animelm-his" v-for="(item, i) in items">
              <dl
                class="his-list-box animelm animelm-slide-in-top"
                data-animelm-delay="600"
              >
                <dt class="his-list-ttl">
                  <h2 class="his-list-ttl-tx">
                    <template v-if="item.date">
                      <time class="his-list-ttl-date">{{ item.date }}</time>
                    </template>
                    <template v-else>
                      <time
                        v-if="item.startDate"
                        class="his-list-ttl-date is-start"
                        >{{ item.startDate }}</time
                      >
                      <span class="his-list-ttl-date-separator">〜</span>
                      <time
                        v-if="item.endDate"
                        class="his-list-ttl-date is-end"
                        >{{ item.endDate }}</time
                      >
                    </template>
                  </h2>
                </dt>
                <dd class="his-list-cnt">
                  <ul class="his-cnt-items">
                    <li class="his-cnt-item">
                      <div class="his-cnt-box">
                        <h3 class="his-ttl">{{ item.ttl }}</h3>
                        <ul
                          class="his-tx-items is-pos"
                          v-if="item.pos.length > 0"
                        >
                          <li class="his-tx-item" v-for="(tx, k) in item.pos">
                            {{ tx }}
                          </li>
                        </ul>
                        <ul
                          class="his-tx-items is-tools"
                          v-if="item.tools.length > 0"
                        >
                          <li class="his-tx-item" v-for="(tx, k) in item.tools">
                            {{ tx }}
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'History',
  props: {
    items: {},
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.his-box {
  margin: 40px auto 0;
  max-width: 960px;
}
.his-items {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  .his-item {
    &:last-of-type {
      padding-bottom: 0;
    }
  }
}
.his-item {
  margin: 0;
  position: relative;
  padding: 0 0 24px 24px;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: $palette-blue--1;
    position: absolute;
    top: 8px;
    left: 4px;
    z-index: $z-index--2;
    opacity: 0;
    transform: scale(0.4);
    transition: 0.3s opacity, 0.3s transform;
  }
  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 0;
    background-color: $palette-blue--1;
    position: absolute;
    top: 10px;
    left: 7px;
    z-index: $z-index--1;
  }
}
.his-list-box {
  margin: 0;
}
.his-list-ttl {
  margin: 0;
  font-weight: 700;
}
.his-list-ttl-tx {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
}
.his-list-cnt {
  margin: 8px 0 0;
}
.his-cnt-items {
  margin: 0;
  padding: 0;
  list-style: none;
  .his-cnt-item {
    &:first-of-type {
      margin-top: 0;
    }
  }
}
.his-cnt-item {
  margin: 8px 0 0;
  padding: 0 0 0 16px;
}
.his-cnt-box {
  margin: 0;
}
.his-ttl {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
}
.his-tx-items {
  margin: 0;
  padding: 0 0 0 16px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  .his-tx-item {
    &:last-of-type {
      &:after {
        content: none;
      }
    }
  }
}
.his-tx-item {
  margin: 0;
  font-size: 1.4rem;
  display: flex;
  color: $palette-gray--1;
  &:after {
    content: ',';
    margin-right: 8px;
  }
}
.animelm-his.animelm-active {
  &.his-item {
    &:before {
      opacity: 1;
      transform: scale(1);
    }
    &:after {
      animation: his-line 1 0.3s ease 0.3s normal forwards;
    }
  }
}
@keyframes his-line {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
@media screen and (min-width: $bp--sm), print {
  .his-box {
    margin-top: 56px;
  }
  .his-item {
    padding: 0 0 32px 40px;
    &:before {
      top: 10px;
      left: 16px;
    }
    &:after {
      top: 12px;
      left: 19px;
    }
  }
  .his-list-ttl-tx {
    font-size: 1.8rem;
  }
  .his-tx-item {
    font-size: 1.6rem;
  }
  .his-ttl {
    font-size: 1.6rem;
  }
}
@media screen and (min-width: $bp--md), print {
  .his-box {
    margin-top: 80px;
  }
  .his-item {
    padding: 0 0 40px 56px;
    &:before {
      left: 32px;
    }
    &:after {
      left: 35px;
    }
  }
}
</style>
