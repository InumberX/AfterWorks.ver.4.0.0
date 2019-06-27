<template>

<transition name="loading-transition">
<div class="loading-box" v-if="this.$store.state.isLoading">
<div class="loading-spinner">
<div class="circle"></div>
<div class="orbit"></div>
</div>
<div class="loading-tx">
<span>Now loading...</span>
</div>
</div>
</transition>

</template>

<script>
export default {
 data: () => ({
  loading: false
 }),
 methods: {
  start () {
   this.loading = true
  },
  finish () {
   this.loading = false
  }
 }
}
</script>

<style lang="scss" scoped>

/* ローディング
*************************************************/
.loading-box {
 position: fixed;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 z-index: 1000;
 background-color: #002984;
 .loading-spinner {
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  position: relative;
  display: block;
  margin: calc(50vh - 80px) auto 0;
  animation: loading-animation infinite 1.3s ease;
  .orbit {
   box-sizing: border-box;
   height: 80px;
   width: 80px;
   position: absolute;
   top: 0;
   left: 0;
   border-radius: 50%;
   border: calc(80px * 0.03) solid #fff;
   animation: loading-orbit-animation infinite 1.3s ease;
  }
  .circle {
   box-sizing: border-box;
   height: 80px;
   width: 80px;
   display: block;
   border-radius: 50%;
   position: relative;
   border: calc(80px * 0.1) solid #fff;
   animation: loading-circle-animation infinite 1.3s ease;
   transform: rotate(0deg) scale(1);
  }
 }
 .loading-tx {
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
  margin: 32px auto 0;
 }
}

@keyframes loading-spinner-animation {
0% {
transform: rotate(0deg);
}

100% {
transform: rotate(360deg);
}
}

@keyframes loading-orbit-animation {
0% {
transform: scale(1);
}
50% {
transform: scale(0.8);
}
100% {
transform: scale(1);
}
}

@keyframes loading-circle-animation {
0% {
transform: scale(1);
}
50% {
transform: scale(1.4);
}
100% {
transform: scale(1);
}
}

.loading-transition-enter-active,
.loading-transition-leave-active {
transition: opacity 1s ease;
}
.loading-transition-enter,
.loading-transition-leave-to {
opacity: 0;
}
.loading-transition-enter-to,
.loading-transition-leave {
opacity: 1;
}

</style>
