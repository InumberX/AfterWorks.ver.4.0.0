<template>
  <div class="idx-mv-wrap">
    <div class="inner">
      <div class="idx-mv-box animelm animelm-idx-mv">
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
    return {}
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
}
.idx-mv-ttl-box {
  position: relative;
  z-index: $z-index--1;
  padding: 120px 0;
  &:before {
    content: '';
    position: absolute;
    z-index: $z-index--2;
    background-color: $palette-white--0;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
.idx-mv-ttl {
  position: relative;
  z-index: $z-index--4;
  margin: 0;
  padding: 0 16px;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  text-align: center;
}
.idx-mv-ttl-tx {
  position: relative;
  z-index: $z-index--1;
  display: inline-block;
  color: rgba($palette-blue--1, 0);
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    z-index: $z-index--2;
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    background-color: $palette-blue--1;
    overflow: hidden;
    white-space: nowrap;
    transform: translate3d(0, 0, 0);
  }
}
.animelm-idx-mv.animelm-active {
  .idx-mv-ttl-box {
    &:before {
      animation: idx-mv-ttl-curtain 1 1.2s ease 2s normal forwards;
    }
    .idx-mv-ttl-tx {
      &:nth-of-type(1) {
        animation: idx-mv-ttl-tx-bef 1 1.2s ease 0s normal forwards,
          idx-mv-ttl-tx-aft 1 1.2s ease 2s normal forwards;
        &:before {
          animation: idx-mv-ttl-tx-curtain 1 1.2s ease 0s normal forwards;
        }
      }
      &:nth-of-type(2) {
        animation: idx-mv-ttl-tx-bef 1 1.2s ease 0.4s normal forwards,
          idx-mv-ttl-tx-aft 1 1.2s ease 2s normal forwards;
        &:before {
          animation: idx-mv-ttl-tx-curtain 1 1.2s ease 0.4s normal forwards;
        }
      }
    }
  }
}
@keyframes idx-mv-ttl-curtain {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes idx-mv-ttl-tx-bef {
  0% {
    color: rgba($palette-blue--1, 0);
  }
  49% {
    color: rgba($palette-blue--1, 0);
  }
  50% {
    color: $palette-blue--1;
  }
  100% {
    color: $palette-blue--1;
  }
}
@keyframes idx-mv-ttl-tx-aft {
  0% {
    color: $palette-blue--1;
  }
  100% {
    color: $palette-white--0;
  }
}
@keyframes idx-mv-ttl-tx-curtain {
  0% {
    left: 0;
    width: 0;
    background-color: $palette-blue--1;
  }
  50% {
    left: 0;
    width: 100%;
  }
  51% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}

@media screen and (min-width: $bp--sm), print {
  .idx-mv-ttl-box {
    padding: 160px 0;
  }
  .idx-mv-ttl {
    font-size: 6.4rem;
  }
}
@media screen and (min-width: $bp--lg), print {
  .idx-mv-ttl-box {
    padding: 200px 0;
  }
  .idx-mv-ttl {
    font-size: 8rem;
  }
}
</style>
