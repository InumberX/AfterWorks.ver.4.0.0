<template>
  <div class="idx-mv-wrap">
    <div class="inner">
      <div
        class="idx-mv-box animelm animelm-idx-mv"
        :style="[{ height: mvHeight + 'px' }]"
      >
        <div class="idx-mv-ttl-box">
          <h1 class="idx-mv-ttl">
            <span class="idx-mv-ttl-tx">From design</span>
            <br />
            <span class="idx-mv-ttl-tx">to coding</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IdxMainVisual',
  data: function () {
    return {
      mvHeight: 0,
    }
  },
  methods: {
    // メインビジュアルの高さを設定する処理
    setMvHeight: function () {
      const winHeight = window.innerHeight
      const hd = document.getElementById('hd-wrap')
      let hdHeight = 0

      if (typeof hd !== 'undefined' && hd !== null) {
        hdHeight = hd.clientHeight
      }

      this.mvHeight = winHeight - hdHeight
    },
  },
  mounted: function () {
    this.setMvHeight()
    window.addEventListener('resize', this.setMvHeight)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.setMvHeight)
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.idx-mv-box {
  background-image: url('~assets/img/img_mv.jpg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  max-height: 800px;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 50%;
    position: absolute;
    z-index: $z-index--5;
    background-color: $palette-white--0;
    transition: 1.2s 0.3s top, 1.2s 0.3s bottom;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
}
.idx-mv-ttl-box {
  position: relative;
  z-index: $z-index--1;
  display: inline-block;
  padding: 0 0 0 16px;
}
.idx-mv-ttl {
  position: relative;
  z-index: $z-index--4;
  margin: 0;
  padding: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.4;
}
.idx-mv-ttl-tx {
  position: relative;
  z-index: $z-index--1;
  display: inline-block;
  color: $palette-white--0;
  overflow: hidden;
  opacity: 0;
  filter: blur(24px);
  transition: 0.6s 1.6s opacity, 0.6s 1.6s filter;
}
.animelm-idx-mv.animelm-active {
  &:before {
    top: -50%;
  }
  &:after {
    bottom: -50%;
  }
  .idx-mv-ttl-tx {
    opacity: 1;
    filter: blur(0);
  }
}
@media screen and (min-width: $bp--sm), print {
  .idx-mv-ttl-box {
    padding-left: 24px;
  }
  .idx-mv-ttl {
    font-size: 6.4rem;
  }
}
@media screen and (min-width: $bp--lg), print {
  .idx-mv-ttl-box {
    padding-left: 40px;
  }
  .idx-mv-ttl {
    font-size: 8rem;
  }
}
</style>
