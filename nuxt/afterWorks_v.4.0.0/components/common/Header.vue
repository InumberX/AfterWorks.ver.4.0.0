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
<button v-on:click="toggleMenu" aria-label="メニュー">
<span><i></i><i></i><i></i></span>
</button>
</div>
<transition name="header-menu">
<div class="groval-nav" v-if="!isSp || isHeaderMenu" v-bind:class="[isHeaderMenu ? 'on' : 'off']">
<div class="head-close-btn">
<button v-on:click="toggleMenu" aria-label="閉じる">
<span><i></i><i></i></span>
</button>
</div>
<nav>
<ul>
<li><nuxt-link to="/" exact v-on:click.native="closeMenu(false)">Top</nuxt-link></li>
<li><nuxt-link to="/about/" v-on:click.native="closeMenu(false)">About</nuxt-link></li>
<li><nuxt-link to="/works/" v-on:click.native="closeMenu(false)">Works</nuxt-link></li>
<li><nuxt-link to="/contact/" v-on:click.native="closeMenu(false)">Contact</nuxt-link></li>
</ul>
</nav>
</div><!-- /.groval-nav -->
</transition>

<div class="header-menu-bg-box">
<transition name="header-menu-bg1">
<div class="groval-nav-bg" v-if="isHeaderMenu" v-bind:class="[isHeaderMenu ? 'on' : 'off']"></div>
</transition>
<transition name="header-menu-bg2">
<div class="groval-nav-bg" v-if="isHeaderMenu" v-bind:class="[isHeaderMenu ? 'on' : 'off']"></div>
</transition>
</div>

</div><!-- /.head-menu -->

</div><!-- /.head-box -->

</div><!-- /.inner -->

<transition name="overlay">
<div class="h-overlay" v-if="isHeaderMenu" v-bind:class="[isHeaderMenu ? 'on' : 'off']" v-on:click="toggleMenu"></div>
</transition>

</header>

</template>

<script>
export default {
 data: function() {
  return {
   // SP判定フラグ
   isSp: false,
   // ブレイクポイント
   bp: 767,
   // メニュー表示フラグ
   isHeaderMenu: false
  }
 },
 // インスタンスが作成された後に実行する処理
 created: function() {
  if (process.browser) {
   // リサイズ時にウィンドウサイズを更新する処理を設定
   window.addEventListener('resize', this.checkSp, false)
  }
 },
 // インスタンスがマウントされた後に実行する処理
 mounted: function() {
  this.checkSp()
 },
 // 各処理
 methods: {
  // ウィンドウサイズを更新する処理
  checkSp: function() {
   if(window.innerWidth > this.bp) {
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
    this.closeMenu(true)
   }
  },
  // メニューを開く処理
  openMenu: function() {
   this.winY = document.documentElement.scrollTop || document.body.scrollTop
   this.isHeaderMenu = true
   let $body = document.body
   $body.style.top = '-' + this.winY + 'px'
   $body.classList.add('h-op')
  },
  // メニューを閉じる処理
  closeMenu: function(isScroll) {
   this.isHeaderMenu = false
   let $body = document.body
   $body.classList.remove('h-op')
   $body.style.top = ''
   if(isScroll) {
    scrollTo(0, this.winY)
   }
  }
 },
 // 監視プロパティ
 watch: {
  isSp: function() {
   // PC表示になった場合
   if(!this.isSp) {
    // メニューが開いている場合
    if(this.isHeaderMenu) {
     // メニュー表示フラグを初期化する
     this.isHeaderMenu = false
     let $body = document.body
     $body.classList.remove('h-op')
    }
   }

  }
 }
}

</script>

<style lang="scss" scoped>

/* ヘッダー
*************************************************/

/* SP
*************************************************/
.header-wrap {
 background: rgba(255, 255, 255, 0.97);
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
   background-color: transparent;
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
     background-color: #002984;
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
  }
 }
 .groval-nav {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background-color: #002984;
  z-index: 1000;
  &.on {
   display: block;
  }
  nav {
   width: 100%;
   height: 100%;
   overflow: auto;
   ul {
    margin: 0;
    padding: 0 0 104px;
    list-style: none;
    li {
     margin: 0;
     padding: 0;
     a {
      display: block;
      margin: 0;
      padding: 16px 40px;
      text-align: left;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      &:hover {
       color: #fff;
      }
     }
    }
   }
  }
  .head-close-btn {
   width: 100%;
   height: 56px;
   button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 16px;
    margin: 0;
    background-color: transparent;
    z-index: 101;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    span {
     position: relative;
     display: block;
     width: 24px;
     height: 16px;
     i {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      left: 0;;
      background-color: #fff;
      &:nth-child(1) {
       top: 0;
       -webkit-transform: translateY(7px) rotate(-45deg);
       transform: translateY(7px) rotate(-45deg);
      }
      &:nth-child(2) {
       bottom: 0;
       -webkit-transform: translateY(-7px) rotate(45deg);
        transform: translateY(-7px) rotate(45deg);
      }
     }
    }
   }
  }
 }
 .header-menu-bg-box {
  .groval-nav-bg {
   display: none;
   position: fixed;
   top: 0;
   right: 0;
   width: 280px;
   height: 100%;
   &.on {
    display: block;
   }
   &:nth-of-type(1) {
    z-index: 998;
    background-color: #004aef;
    width: 288px;
   }
   &:nth-of-type(2) {
    z-index: 999;
    background-color: #003cc1;
    width: 284px;
   }
  }
 }
}

.h-overlay {
 display: block;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.2);
 z-index: 700;
}

/* ヘッダーアニメーション */
.header-menu-enter-active {
transition: all 0.3s;
transition-delay: 0.1s;
}
.header-menu-leave-active {
transition: all 0.3s;
}
.header-menu-enter,
.header-menu-leave-to {
right: -280px !important;
}
.header-menu-enter-to,
.header-menu-leave {
right: 0 !important;
}

.header-menu-bg1-enter-active {
transition: all 0.3s;
}
.header-menu-bg1-leave-active {
transition: all 0.3s;
transition-delay: 0.1s;
}
.header-menu-bg1-enter,
.header-menu-bg1-leave-to {
right: -280px !important;
}
.header-menu-bg1-enter-to,
.header-menu-bg1-leave {
right: 0 !important;
}

.header-menu-bg2-enter-active,
.header-menu-bg2-leave-active {
transition: all 0.3s;
transition-delay: 0.05s;
}
.header-menu-bg2-enter,
.header-menu-bg2-leave-to {
right: -280px !important;
}
.header-menu-bg2-enter-to,
.header-menu-bg2-leave {
right: 0 !important;
}

/* オーバレイアニメーション */
.overlay-enter-active,
.overlay-leave-active {
transition: opacity 0.3s ease;
}
.overlay-enter,
.overlay-leave-active {
opacity: 0;
}
.overlay-enter-to,
.overlay-leave {
opacity: 1;
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.header-wrap {
 height: 64px;
 .head-box {
  align-items: center;
 }
}

.head-logo .logo-box {
 height: 64px;
 h1 {
  margin: 0;
  img {
   width: 160px;
   max-height: 46px;
   min-width: auto;
   max-width: none;
  }
 }
}

.head-menu {
 position: relative;
 .head-menu-btn {
  display: none;
 }
 .groval-nav {
  display: block;
  position: relative;
  top: auto;
  right: auto;
  width: auto;
  height: auto;
  background-color: transparent;
  nav {
   width: 100%;
   height: 100%;
   overflow: auto;
   ul {
    padding: 0;
    display: flex;
    align-items: center;
    li {
     a {
      display: block;
      margin: 0;
      padding: 0 12px;
      color: #2E2E2E;
      border-bottom: none;
      text-align: center;
      &:hover {
       color: #4466B1;
      }
     }
    }
   }
  }
  .head-close-btn {
   display: none;
  }
 }
 .header-menu-bg-box {
  display: none;
 }
}

}

</style>
