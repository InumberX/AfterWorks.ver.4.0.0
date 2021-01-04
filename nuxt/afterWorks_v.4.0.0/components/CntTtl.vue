<template>
  <div class="cnt-ttl-box">
    <div class="inner">
      <div class="cnt-ttl animelm animelm-cnt-ttl">
        <small class="cnt-ttl-en">{{ ttlEn }}</small>
        <br />
        <h2 class="cnt-ttl-tx">{{ ttl }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinAnimelm from '~/mixins/animelm'

export default Vue.extend({
  name: 'CntTtl',
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

.cnt-wrap {
  &.is-wave {
    .cnt-ttl {
      margin-top: 0;
    }
  }
}
.cnt-ttl {
  position: relative;
  text-align: center;
  z-index: $z-index--2;
  margin-top: 80px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: $z-index--1;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    transform: rotate(45deg) scale(0.2);
    border: 1px solid $palette-blue--1;
    opacity: 0;
  }
}
.cnt-ttl-en {
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
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    transform: translate3d(0, 0, 0);
  }
}
.cnt-ttl-tx {
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
    width: 100%;
    height: 100%;
    left: 0;
    top: 100%;
    background-color: rgba($palette-blue--1, 0);
    overflow: hidden;
    white-space: nowrap;
    transform: translate3d(0, 0, 0);
  }
}
.animelm-cnt-ttl.animelm-active {
  &:after {
    animation: cnt-ttl-shape 1 0.8s ease 0s normal forwards;
  }
  .cnt-ttl-en {
    animation: cnt-ttl-tx-en 1 1.2s ease 0.8s normal forwards;
    &:before {
      animation: cnt-ttl-tx-curtain 1 1.2s ease 0.8s normal forwards;
    }
  }
  .cnt-ttl-tx {
    animation: cnt-ttl-tx 1 1.2s ease 1.2s normal forwards;
    &:before {
      animation: cnt-ttl-tx-curtain 1 1.2s ease 1.2s normal forwards;
    }
  }
}
@keyframes cnt-ttl-shape {
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
@keyframes cnt-ttl-tx-en {
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
@keyframes cnt-ttl-tx {
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
@keyframes cnt-ttl-tx-curtain {
  0% {
    top: 100%;
    height: 100%;
    background-color: $palette-blue--1;
  }
  50% {
    top: 0;
    height: 100%;
  }
  100% {
    top: 0;
    height: 0;
    background-color: $palette-blue--1;
  }
}
@media screen and (min-width: $bp--sm), print {
  .cnt-ttl {
    margin-top: 120px;
    &:after {
      width: 64px;
      height: 64px;
      margin: -32px 0 0 -32px;
    }
  }
  .cnt-ttl-en {
    font-size: 2.4rem;
  }
  .cnt-ttl-tx {
    font-size: 3.2rem;
  }
}
@media screen and (min-width: $bp--md), print {
  .cnt-ttl {
    margin-top: 160px;
    &:after {
      width: 80px;
      height: 80px;
      margin: -40px 0 0 -40px;
    }
  }
  .cnt-ttl-en {
    font-size: 3.2rem;
  }
  .cnt-ttl-tx {
    font-size: 4rem;
  }
}
</style>
