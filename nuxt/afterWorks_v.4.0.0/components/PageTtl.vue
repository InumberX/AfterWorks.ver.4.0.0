<template>
  <div class="page-ttl-box">
    <div class="inner">
      <div class="page-ttl animelm animelm-page-ttl">
        <small class="page-ttl-en">{{ ttlEn }}</small>
        <br />
        <h1 class="page-ttl-tx">{{ ttl }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinAnimelm from '~/mixins/animelm'

export default Vue.extend({
  name: 'PageTtl',
  mixins: [mixinAnimelm],
  props: {
    ttl: { type: String },
    ttlEn: { type: String },
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.page-ttl {
  margin-top: 24px;
}
.page-ttl {
  position: relative;
  z-index: $z-index--2;
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: $z-index--1;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 0;
    margin-top: -20px;
    transform: rotate(45deg) scale(0.2);
    border: 1px solid $palette-blue--1;
    opacity: 0;
  }
}
.page-ttl-en {
  display: inline-block;
  font-size: 1.6rem;
  color: rgba($palette-blue--2, 0);
  position: relative;
  z-index: $z-index--3;
  overflow: hidden;
  line-height: 1;
  &:before {
    content: '';
    position: absolute;
    z-index: $z-index--4;
    background-color: rgba($palette-white--0, 0);
    display: block;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    transform: translate3d(0, 0, 0);
  }
}
.page-ttl-tx {
  display: inline-block;
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  color: rgba($color-tx--main, 0);
  position: relative;
  z-index: $z-index--3;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    z-index: $z-index--4;
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba($palette-blue--1, 0);
    overflow: hidden;
    white-space: nowrap;
    transform: translate3d(0, 0, 0);
  }
}
.animelm-page-ttl.animelm-active {
  &:after {
    animation: page-ttl-shape 1 0.8s ease 0s normal forwards;
  }
  .page-ttl-en {
    animation: page-ttl-tx-en 1 1.2s ease 0.8s normal forwards;
    &:before {
      animation: page-ttl-tx-curtain 1 1.2s ease 0.8s normal forwards;
    }
  }
  .page-ttl-tx {
    animation: page-ttl-tx 1 1.2s ease 1.2s normal forwards;
    &:before {
      animation: page-ttl-tx-curtain 1 1.2s ease 1.2s normal forwards;
    }
  }
}
@keyframes page-ttl-shape {
  0% {
    transform: rotate(45deg) scale(0.2);
    opacity: 0;
  }
  60% {
    transform: rotate(45deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(45deg) scale(1);
    opacity: 0;
  }
}
@keyframes page-ttl-tx-en {
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
@keyframes page-ttl-tx {
  0% {
    color: rgba($color-tx--main, 0);
  }
  49% {
    color: rgba($color-tx--main, 0);
  }
  50% {
    color: $color-tx--main;
  }
  100% {
    color: $color-tx--main;
  }
}
@keyframes page-ttl-tx-curtain {
  0% {
    left: 0;
    width: 0;
    background-color: $palette-blue--1;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
    background-color: $palette-blue--1;
  }
}
@media screen and (min-width: $bp--sm), print {
  .page-ttl {
    margin-top: 32px;
    &:after {
      width: 64px;
      height: 64px;
      margin-top: -32px;
    }
  }
  .page-ttl-en {
    font-size: 2.4rem;
  }
  .page-ttl-tx {
    font-size: 3.2rem;
  }
}
@media screen and (min-width: $bp--md), print {
  .page-ttl {
    margin-top: 40px;
    &:after {
      width: 80px;
      height: 80px;
      margin-top: -40px;
    }
  }
  .page-ttl-en {
    font-size: 3.2rem;
  }
  .page-ttl-tx {
    font-size: 4rem;
  }
}
</style>
