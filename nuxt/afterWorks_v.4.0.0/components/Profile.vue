<template>
  <div class="cnt-wrap">
    <div class="cnt-box">
      <div class="inner">
        <div class="prof-box">
          <div class="prof">
            <figure class="prof-img-box animelm animelm-scale-in">
              <img
                :src="imgLogo.url"
                alt="N/NE"
                class="prof-img"
                width="80px"
                height="80px"
              />
            </figure>
            <div
              class="prof-cnt-box animelm animelm-fade-in"
              data-animelm-delay="400"
            >
              <dl class="prof-list">
                <dt class="prof-ttl">名前</dt>
                <dt class="prof-cnt">
                  <span class="prof-tx">{{ items.name }}</span>
                </dt>
              </dl>
              <dl class="prof-list" v-if="items.certificate.length > 0">
                <dt class="prof-ttl">資格</dt>
                <dt class="prof-cnt">
                  <ul class="prof-items">
                    <li
                      class="prof-item"
                      v-for="(item, i) in items.certificate"
                    >
                      <a
                        v-if="item.url != ''"
                        :href="item.url"
                        class="prof-link"
                        target="_blank"
                        rel="noopener"
                      >
                        <span class="prof-link-tx">{{ item.tx }}</span>
                      </a>
                      <span v-else class="prof-tx">{{ item.tx }}</span>
                    </li>
                  </ul>
                </dt>
              </dl>
              <dl class="prof-list" v-if="items.skill.length > 0">
                <dt class="prof-ttl">スキル</dt>
                <dt class="prof-cnt">
                  <ul class="prof-items">
                    <li class="prof-item" v-for="(item, i) in items.skill">
                      <span class="prof-tx">{{ item }}</span>
                    </li>
                  </ul>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Profile',
  props: {
    items: {},
  },
  data: function () {
    return {
      imgLogo: {
        url: '/img/img_logo_nine.svg?' + process.env.cashBuster,
      },
    }
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.prof-box {
  margin-top: 40px;
}
.prof-img-box {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 120px;
  margin: 0 auto;
  border: 4px solid $palette-gray--4;
  overflow: hidden;
  position: relative;
  z-index: $z-index--2;
}
.prof-img {
  width: 80px;
  height: 80px;
}
.prof-cnt-box {
  background-color: $palette-gray--4;
  margin-top: -40px;
  padding: 56px 16px 16px;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  z-index: $z-index--1;
  .prof-list {
    &:first-of-type {
      margin-top: 0;
    }
  }
}
.prof-list {
  margin: 16px 0 0;
}
.prof-ttl {
  margin: 0;
  font-weight: 700;
}
.prof-cnt {
  margin: 8px 0 0;
}
.prof-items {
  margin: 0;
  padding: 0;
  list-style: none;
  .prof-item {
    &:first-of-type {
      margin-top: 0;
    }
  }
}
.prof-item {
  position: relative;
  margin: 8px 0 0;
  padding: 0 0 0 16px;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: $palette-blue--1;
    position: absolute;
    top: 8px;
    left: 0;
  }
}
@media screen and (min-width: $bp--sm), print {
  .prof-box {
    margin-top: 56px;
  }
  .prof-img-box {
    width: 120px;
    height: 120px;
  }
  .prof-img {
    width: 120px;
    height: 120px;
  }
  .prof-cnt-box {
    margin-top: -60px;
    padding: 84px 24px 24px;
  }
  .prof-list {
    margin: 24px 0 0;
    display: flex;
  }
  .prof-ttl {
    min-width: 80px;
  }
  .prof-cnt {
    margin: 0;
    padding-left: 16px;
  }
  .prof-item {
    &:before {
      top: 10px;
    }
  }
}
@media screen and (min-width: $bp--md), print {
  .prof-box {
    margin-top: 80px;
  }
  .prof {
    display: flex;
  }
  .prof-img-box {
    margin: 0;
  }
  .prof-cnt-box {
    margin: 60px 0 0 -60px;
    padding: 40px 40px 40px 84px;
    width: calc(100% - 60px);
  }
}
</style>
