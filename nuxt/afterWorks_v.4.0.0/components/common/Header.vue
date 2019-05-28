<template>

<header class="header-wrap" id="HEADER">
<div class="inner">

<div class="head-box">

<div class="head-logo">
<div class="logo-box">
<h1><nuxt-link to="/" exact><img src="/img/img_logo.svg" alt="After Works."></nuxt-link></h1>
</div><!-- /.logo-box -->
</div><!-- /.head-logo -->

<div class="head-menu">
<div class="head-menu-btn">
<button v-on:click="toggleMenu" v-bind:class="[isHeaderMenu ? 'on' : 'off']">
<span><i></i><i></i><i></i></span>
</button>
</div>
<transition name="header-menu">
<div class="groval-nav" v-if="!isSp || isHeaderMenu" v-bind:class="[isHeaderMenu ? 'on' : 'off']">
<nav>
<ul>
<li><nuxt-link to="/" exact v-on:click.native="closeMenu">Top</nuxt-link></li>
<li><nuxt-link to="/about/" v-on:click.native="closeMenu">About</nuxt-link></li>
<li><nuxt-link to="/works/" v-on:click.native="closeMenu">Works</nuxt-link></li>
<li><nuxt-link to="/contact/" v-on:click.native="closeMenu">Contact</nuxt-link></li>
</ul>
</nav>
</div><!-- /.groval-nav -->
</transition>
</div><!-- /.head-menu -->

</div><!-- /.head-box -->

</div><!-- /.inner -->
</header>

</template>

<script>
/*------------------------------------------
 グローバル変数
--------------------------------------------*/
// SP判定
let isSp = false
// ブレイクポイント
const bp = 767

export default {
 data: function() {
  return {
   // SP判定フラグ
   isSp: false,
   // メニュー表示フラグ
   isHeaderMenu: false
  }
 },
 // インスタンスが作成された後に実行する処理
 created: function() {
  // リサイズ時にウィンドウサイズを更新する処理を設定
  window.addEventListener('resize', this.checkSp, false)
 },
 // インスタンスがマウントされた後に実行する処理
 mounted: function() {
  this.checkSp()
 },
 // 各処理
 methods: {
  // ウィンドウサイズを更新する処理
  checkSp: function() {
   if(window.innerWidth > bp) {
    if(this.isSp) {
     this.isSp = false
    }
   } else {
    if(!this.isSp) {
     this.isSp = true
    }
   }
  },
  // SPメニューボタン押下時の処理
  toggleMenu: function() {
   // メニューが閉じていた場合
   if(!this.isHeaderMenu) {
    this.openMenu()
   } else {
    // メニューが開いていた場合
    this.closeMenu()
   }
  },
  // メニューを開く処理
  openMenu: function() {
   this.winY = document.documentElement.scrollTop || document.body.scrollTop
   this.isHeaderMenu = true
   this.isOverlay = true
   let $body = document.body
   $body.classList.add('h-op')
   $body.setAttribute('style', 'top: -' + this.winY + 'px;')
  },
  // メニューを閉じる処理
  closeMenu: function() {
   this.isHeaderMenu = false
   this.isOverlay = false
   let $body = document.body
   $body.classList.remove('h-op')
   $body.removeAttribute('style')
   window.scrollTo(0, this.winY)
  }
 },
 // 監視プロパティ
 watch: {
  isSp: function() {
   isSp = this.isSp
   // PC表示になった場合
   if(!this.isSp) {
    // メニューが開いている場合
    if(this.isHeaderMenu) {
     // メニュー表示フラグを初期化する
     this.isHeaderMenu = false
     this.isOverlay = false
     let $body = document.body
     $body.classList.remove('h-op')
     $body.removeAttribute('style')
    }
   }

  }
 }
}

</script>

<style lang="scss" scoped>

/* ヘッダー
*************************************************/
.header-wrap {
 background: #fff;
 box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 56px;
 z-index: 100;
 .inner {
  padding: 0;
 }
 .head-box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
 }
}

.head-logo .logo-box {
 padding: 0 8px;
 display: flex;
 align-items: center;
 text-align: left;
 height: 56px;
 box-sizing: border-box;
 h1 {
  margin: 0 8px 0 0;
  a {
   display: block;
  }
  img {
   margin: 0;
   width: 100%;
   min-width: 120px;
   max-width: 140px;
  }
 }
}

.head-menu {
 position: relative;
 .head-menu-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 56px;
  height: 56px;
  button {
   width: 100%;
   height: 100%;
   display: block;
   padding: 20px 16px;
   margin: 0;
   background-color: #fff;
   z-index: 101;
   border: none;
   outline: none;
   span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    i {
     position: absolute;
     display: block;
     width: 100%;
     height: 2px;
     left: 0;;
     background-color: #EC4A4A;
     transition: 0.3s all;
     &:nth-child(1) {
      top: 0;
     }
     &:nth-child(2) {
      top: 50%;
      margin-top: -1px;
     }
     &:nth-child(3) {
      bottom: 0;
     }
    }
   }
   &.on {
    span {
     i {
      &:nth-child(1) {
       -webkit-transform: translateY(7px) rotate(-45deg);
       transform: translateY(7px) rotate(-45deg);
      }
      &:nth-child(2) {
       opacity: 0;
      }
      &:nth-child(3) {
       -webkit-transform: translateY(-7px) rotate(45deg);
       transform: translateY(-7px) rotate(45deg);
      }
     }
    }
   }
  }
 }
 .groval-nav {
  display: none;
  position: fixed;
  top: 56px;
  left: 20%;
  width: 80%;
  height: calc(100% - 56px);
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
  &.on {
   display: block;
  }
  nav {
   width: 100%;
   height: 100%;
   overflow: auto;
   ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
     margin: 0;
     padding: 0;
     a {
      display: block;
      margin: 0;
      padding: 16px;
      text-align: center;
      color: #3c3c3c;
      text-decoration: none;
      border-bottom: 1px solid #ffb6b6;
      &:hover {
       color: #EC4A4A;
      }
     }
    }
   }
  }
 }
}

/* ヘッダーアニメーション */
.header-menu-enter-active,
.header-menu-leave-active {
transition: all 0.3s;
}
.header-menu-enter,
.header-menu-leave-to {
left: 100% !important;
}
.header-menu-enter-to,
.header-menu-leave {
left: 20% !important;
}

</style>
