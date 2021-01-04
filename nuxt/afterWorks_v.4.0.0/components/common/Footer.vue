<template>
  <footer id="ft-wrap" class="ft-wrap">
    <div class="inner">
      <div class="ft-fixed-box">
        <div class="ft-top-btn-box">
          <a
            href="#"
            title="ページトップに戻る"
            aria-label="ページトップに戻る"
            class="ft-top-btn"
          ></a>
        </div>
      </div>
      <!-- /.ft-box -->
      <div class="ft-box">
        <div class="ft-cnt-box">
          <div class="ft-link-box">
            <ul class="ft-link-items">
              <li
                class="ft-link-item"
                v-for="(item, i) in menuItems"
                :key="item.id"
              >
                <nuxt-link :to="item.to" :exact="item.exact" class="ft-link">
                  <span class="ft-link-tx">{{ item.tx }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="ft-sns-box">
            <SnsList />
          </div>
        </div>
        <!-- /.ft-cnt-box -->
        <div class="ft-copy-box">
          <p class="ft-copy">
            <small class="ft-copy-tx"
              >&copy;
              <i class="ft-copy-year" id="ft-copy-year" vcloak>{{
                currentYear
              }}</i>
              N/NE, All rights reserved.</small
            >
          </p>
        </div>
        <!-- /.ft-copy-box -->
      </div>
      <!-- /.ft-box -->
    </div>
    <!-- /.inner -->
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import SnsList from '~/components/SnsList.vue'

export default Vue.extend({
  name: 'Footer',
  components: {
    SnsList: SnsList,
  },
  data: function () {
    return {
      // 現在年
      currentYear: 0,
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
  created: function () {
    // 現在年を取得
    const now = new Date()
    const year = now.getFullYear()
    this.currentYear = year

    if (process.browser) {
      // リサイズ時にウィンドウサイズを更新する処理を設定
      window.addEventListener('resize', this.checkWinSize, false)
      // 画面の向きを判定する処理を設定
      this.initOrientation()
    }
  },
  mounted: function () {
    this.checkWinSize()
  },
  // 各処理
  methods: {
    // ウィンドウサイズを更新する処理
    checkWinSize: function () {
      const width = window.innerWidth

      // SPの場合
      if (width < this.storeBpSp) {
        if (!this.storeFlgSp) {
          this.$store.commit('flg_bp/setFlgSpTrue')
          this.$store.commit('flg_bp/setFlgTabFalse')
          this.$store.commit('flg_bp/setFlgPcFalse')
        }
      }
      // TABの場合
      else if (width >= this.storeBpSp && width < this.storeBpTab) {
        if (!this.storeFlgTab) {
          this.$store.commit('flg_bp/setFlgSpFalse')
          this.$store.commit('flg_bp/setFlgTabTrue')
          this.$store.commit('flg_bp/setFlgPcFalse')
        }
      }
      // PCの場合
      else if (width >= this.storeBpTab) {
        if (!this.storeFlgPc) {
          this.$store.commit('flg_bp/setFlgSpFalse')
          this.$store.commit('flg_bp/setFlgTabFalse')
          this.$store.commit('flg_bp/setFlgPcTrue')
        }
      }
    },
    // 画面の向きを判定する処理
    initOrientation: function () {
      const body = document.body
      // 画面の向きが存在する場合
      if (window.orientation != null) {
        body.classList.remove('not-orient')
        body.classList.add('orient')
        this.setOrientationClass()

        // 画面の向きが変わった時の処理を設定
        window.addEventListener(
          'orientationchange',
          this.changeOrientation,
          false
        )
      }
      // 画面の向きが存在しない場合
      else {
        body.classList.remove('orient')
        body.classList.add('not-orient')
      }
    },
    // 画面の向きが変わった時の処理
    changeOrientation: function () {
      const self = this
      // 向きが完全に切り替わってから処理を行う
      setTimeout(function () {
        self.setOrientationClass()
      }, 10)
    },
    // 画面の向きに応じてクラスを付与する処理
    setOrientationClass: function () {
      // 画面の角度を設定
      let orientation = window.orientation
      // 付与するクラス
      const addClassName = {
        vertical: 'is-vertical',
        horizontal: 'is-horizontal',
      }

      const body = document.body

      // 縦画面時の処理
      if (orientation === 0) {
        body.classList.remove(addClassName.horizontal)
        body.classList.add(addClassName.vertical)
      }
      // 横画面時の処理
      else {
        body.classList.remove(addClassName.vertical)
        body.classList.add(addClassName.horizontal)
      }
    },
  },
  computed: {
    storeFlgSp: function () {
      return this.$store.state.flg_bp.flgSp
    },
    storeFlgTab: function () {
      return this.$store.state.flg_bp.flgTab
    },
    storeFlgPc: function () {
      return this.$store.state.flg_bp.flgPc
    },
    storeBpSp: function () {
      return this.$store.state.flg_bp.bpSp
    },
    storeBpTab: function () {
      return this.$store.state.flg_bp.bpTab
    },
    storeBpPc: function () {
      return this.$store.state.flg_bp.bpPc
    },
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.ft-wrap {
  background-color: $palette-blue--3;
}
.ft-fixed-box {
  position: fixed;
  bottom: 16px;
  right: 4vw;
  z-index: $z-index--footer-1;
}
.ft-top-btn:not(:root) {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $palette-blue--1;
  border: none;
  outline: 0;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  transition: background-color 0.3s;
  &:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-left: 2px solid $palette-white--0;
    border-bottom: 2px solid $palette-white--0;
    transform: rotate(135deg);
    margin-top: 2px;
  }
  &:hover {
    background-color: $palette-blue--2;
  }
}
.ft-box {
  padding-top: 40px;
}
.ft-link-items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.ft-link-item {
  margin: 0;
  width: 100%;
}
.ft-link:not(:root) {
  position: relative;
  z-index: $z-index--1;
  display: block;
  font-size: 1.4rem;
  color: $palette-white--0;
  text-decoration: none;
  padding: 8px 16px;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: $palette-blue--1;
    position: absolute;
    z-index: $z-index--2;
    top: 16px;
    left: 0;
    transition: 0.3s background-color;
  }
  &:hover {
    opacity: 0.6;
  }
}
.ft-copy-box {
  padding: 40px 0 24px;
}
.ft-copy {
  margin: 0;
  text-align: center;
  color: $palette-white--0;
}
.ft-copy-tx {
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
}
@media screen and (min-width: $bp--sm), print {
  .ft-fixed-box {
    right: 4.6vw;
  }
  .ft-link-item {
    width: 50%;
  }
  .ft-link:not(:root) {
    padding: 16px;
    &:before {
      top: 24px;
    }
  }
  .ft-link:not(:root) {
    font-size: 1.6rem;
  }
}
@media screen and (min-width: $bp--md), print {
  .ft-box {
    padding-top: 48px;
  }
  .ft-fixed-box {
    bottom: 24px;
  }
  .ft-top-btn:not(:root) {
    width: 48px;
    height: 48px;
    &:after {
      width: 12px;
      height: 12px;
      margin-top: 4px;
    }
  }
  .ft-link-items {
    .ft-link-item {
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  .ft-link-item {
    width: auto;
    margin-right: 40px;
  }
  .ft-link:not(:root) {
    padding: 8px 16px;
    &:before {
      top: 16px;
    }
  }
  .ft-copy-box {
    padding-top: 64px;
  }
}
@media screen and (min-width: $bp--lg), print {
  .ft-fixed-box {
    right: 32px;
  }
}
</style>
