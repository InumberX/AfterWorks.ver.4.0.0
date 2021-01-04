<template>
  <header id="hd-wrap" class="hd-wrap">
    <div class="hd-box">
      <div class="inner">
        <div class="hd">
          <div class="hd-logo-box">
            <nuxt-link to="/" exact class="hd-logo-link">
              <img
                :src="imgLogo.url"
                :alt="imgLogo.alt"
                class="hd-logo-img"
                width="140px"
                height="37px"
              />
            </nuxt-link>
          </div>
          <!-- /.hd-logo-box -->
          <div class="hd-manu-box">
            <div class="hd-menu-btn-box">
              <button
                type="button"
                class="hd-menu-btn"
                @click="toggleMenu()"
                :class="[{ 'is-active': flgHeaderMenuOpen }]"
              >
                <div class="hd-hamburger-box">
                  <span class="hd-hamburger"></span>
                  <span class="hd-hamburger"></span>
                  <span class="hd-hamburger"></span>
                </div>
                <div class="hd-menu-tx-box">
                  <span class="hd-menu-tx" v-cloak>{{ menuTx }}</span>
                </div>
              </button>
            </div>
            <!-- /.hd-menu-btn-box -->
            <transition name="va-fade">
              <div
                class="hd-menu"
                v-if="flgHeaderMenuOpen"
                :class="[{ 'is-active': flgHeaderMenuOpen }]"
              >
                <nav class="hd-menu-link-box">
                  <transition-group
                    name="hd-menu-items"
                    tag="ul"
                    class="hd-menu-items"
                  >
                    <li
                      class="hd-menu-item animelm"
                      v-for="(item, i) in menuItems"
                      :key="item.id"
                    >
                      <nuxt-link
                        :to="item.to"
                        :exact="item.exact"
                        class="hd-menu-link"
                        @click.native="closeMenu()"
                      >
                        <span class="hd-menu-tx">{{ item.tx }}</span>
                      </nuxt-link>
                    </li>
                  </transition-group>
                </nav>
                <div class="hd-sns-box animelm">
                  <SnsList />
                </div>
                <div class="hd-menu-close-box animelm">
                  <button class="hd-menu-close-btn" @click="closeMenu()">
                    <span class="hd-menu-close-btn-tx">閉じる</span>
                  </button>
                </div>
              </div>
            </transition>
          </div>
          <!-- /.hd-manu-box -->
        </div>
        <!-- /.hd -->
      </div>
      <!-- /.inner -->
    </div>
    <!-- /.hd-box -->
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import SnsList from '~/components/SnsList.vue'

export default Vue.extend({
  name: 'Header',
  components: {
    SnsList: SnsList,
  },
  data: function () {
    return {
      imgLogo: {
        url: '/img/img_logo.svg?' + process.env.cashBuster,
        alt: process.env.title,
      },
      menuTx: 'メニュー',
      flgHeaderMenuOpen: false,
      winY: 0,
      menuItems: [
        {
          id: 'index',
          to: '/',
          exact: true,
          tx: 'トップ',
        },
        {
          id: 'about',
          to: '/about/',
          exact: false,
          tx: '経歴紹介',
        },
        {
          id: 'works',
          to: '/works/',
          exact: false,
          tx: '実績紹介',
        },
        {
          id: 'contact',
          to: '/contact/',
          exact: false,
          tx: 'お問い合わせ',
        },
      ],
    }
  },
  methods: {
    // メニューボタン押下時の処理
    toggleMenu: function () {
      // メニューが閉じていた場合
      if (!this.flgHeaderMenuOpen) {
        this.openMenu()
      }
      // メニューが開いていた場合
      else {
        this.closeMenu()
      }
    },
    // メニューを開く処理
    openMenu: function () {
      const self = this
      this.winY = window.pageYOffset || document.documentElement.scrollTop
      this.flgHeaderMenuOpen = true
      this.menuTx = '閉じる'
      const body = document.body
      body.style.top = '-' + this.winY + 'px'
      body.classList.add('is-fixed')
      setTimeout(function () {
        const hd = document.getElementById('hd-wrap')

        if (hd != null) {
          const hdAnimelm = hd.querySelectorAll('.animelm')
          for (
            let i = 0, iLength = hdAnimelm.length;
            i < iLength;
            i = (i + 1) | 0
          ) {
            ;(function (elm, num) {
              setTimeout(function () {
                elm.classList.add('animelm-active')
              }, 100 + 200 * num)
            })(hdAnimelm[i], i)
          }
        }
      }, 310)
    },
    // メニューを閉じる処理
    closeMenu: function () {
      const self = this
      this.flgHeaderMenuOpen = false
      this.menuTx = 'メニュー'
      const body = document.body
      body.classList.remove('is-fixed')
      body.style.top = ''
      scrollTo(0, this.winY)
    },
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.hd-wrap {
  width: 100%;
  height: 56px;
  background-color: transparent;
  z-index: $z-index--header-1;
  .inner {
    height: 100%;
  }
}
.hd-box {
  height: 100%;
}
.hd {
  height: 100%;
  display: flex;
  align-items: center;
}
.hd-logo-box {
  display: flex;
  width: 140px;
}
.hd-logo-link:not(:root) {
  display: block;
  transition: 0.3s opacity;
  &:hover {
    opacity: 0.6;
  }
}
.hd-logo-img {
  width: 140px;
  height: 37px;
}
.hd-menu-btn-box {
  position: fixed;
  top: 0;
  right: 0;
  z-index: $z-index--header-2;
}
.hd-menu-btn:not(:root) {
  position: relative;
  display: block;
  background-color: transparent;
  border: none;
  color: $palette-blue--1;
  width: 56px;
  height: 56px;
  margin: 0;
  padding: 0 4vw 0 16px;
  box-sizing: content-box;
  &.is-active {
    .hd-hamburger-box {
      .hd-hamburger {
        &:nth-of-type(1) {
          transform: rotate(-45deg);
          top: 7px;
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
        &:nth-of-type(3) {
          transform: rotate(45deg);
          bottom: 9px;
        }
      }
    }
  }
}
.hd-hamburger-box {
  position: relative;
  display: block;
  width: 24px;
  height: 18px;
  margin: 0 auto;
  .hd-hamburger {
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 50%;
      margin-top: -1px;
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }
}
.hd-hamburger {
  display: block;
  width: 100%;
  height: 2px;
  background-color: $palette-blue--1;
  position: absolute;
  left: 0;
  transition: 0.3s all;
}
.hd-menu-tx-box {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1;
  margin-top: 8px;
}
.hd-menu-tx {
  display: block;
}
.hd-menu {
  display: none;
  position: fixed;
  z-index: $z-index--header-1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgba($palette-white--0, 0.96);
  &.is-active {
    display: block;
  }
}
.hd-menu-link-box {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 80px 0 0;
  box-sizing: border-box;
}
.hd-menu-items {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}
.hd-menu-item {
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: 0.6s opacity;
  &.animelm-active {
    opacity: 1;
  }
}
.hd-menu-link:not(:root) {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 24px 4%;
  color: $color-tx--main;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: $palette-blue--2;
  }
}
.hd-menu-close-box {
  margin: 24px 0 0;
  padding: 0 0 40px;
  opacity: 0;
  transition: 0.6s opacity;
  &.animelm-active {
    opacity: 1;
  }
}
.hd-menu-close-btn:not(:root) {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid $palette-gray--2;
  color: $palette-gray--1;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  padding: 0;
  border-radius: 40px;
  box-sizing: content-box;
  font-size: 1.4rem;
  line-height: 1;
}
@media screen and (min-width: $bp--sm), print {
  .hd-wrap {
    height: 64px;
  }
  .hd-logo-box {
    width: 160px;
  }
  .hd-logo-img {
    width: 160px;
    height: 43px;
  }
  .hd-menu-btn:not(:root) {
    width: 64px;
    height: 64px;
    padding: 0 4.6vw 0 24px;
  }
  .hd-menu-link-box {
    padding: 120px 4.6vw 0;
  }
  .hd-menu-items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .hd-menu-item {
    width: 50%;
  }
  .hd-menu-link:not(:root) {
    padding: 24px;
  }
  .hd-menu-close-box {
    margin-top: 40px;
    padding-bottom: 80px;
  }
}
@media screen and (min-width: $bp--md), print {
  .hd-menu-link-box {
    padding: 240px 32px 0;
  }
  .hd-menu-btn:not(:root) {
    padding: 0 32px;
  }
  .hd-menu-item {
    width: 25%;
  }
  .hd-menu-close-box {
    margin-top: 80px;
  }
}
</style>
