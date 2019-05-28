<template>
<div class="wrap-all">

<Header />

<main class="main-wrap">
<nuxt />
</main><!-- /.main-wrap -->

<Footer />

</div><!-- /.wrap-all -->
</template>

<script>
// コンポーネント読み込み
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'

export default {
 // コンポーネント設定
 components: {
  Header: Header,
  Footer: Footer
 }
}
</script>

<style lang="scss">

/* SP
*************************************************/

/* 基本設定
*************************************************/
html {
 height: 100%;
 line-height: 1;
 background: #ffffff;
 color: #2E2E2E;
 font-size: 62.5%;
}
body {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 1.4rem;
 line-height: 1.4;
 overflow-y: scroll;
 font-family: 游明朝, 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', HGS明朝E, メイリオ, Meiryo, serif;
 word-break: normal;
 -webkit-text-size-adjust:100%;
}

article, aside, details, figcaption, include, footer, header, hgroup, main, nav, section, summary {
 display:block;
 margin:0;
 padding:0;
}
h1, h2, h3, h4, h5, h6, dl, dt, dd, p, blockquote, ul, ol, li {
 margin: 16px 0 0;
 padding: 0;
 font-size: 1.4rem;
 vertical-align: baseline;
 -webkit-overflow-wrap: break-word;
 -ms-overflow-wrap: break-word;
 overflow-wrap: break-word;
 -webkit-word-wrap: break-word;
 -ms-word-wrap: break-word;
 word-wrap: break-word;
}
figcaption, span {
 -webkit-overflow-wrap: break-word;
 -ms-overflow-wrap: break-word;
 overflow-wrap: break-word;
 -webkit-word-wrap: break-word;
 -ms-word-wrap: break-word;
 word-wrap: break-word;
}
audio, canvas, progress, video {
 display: inline-block;
 vertical-align: baseline;
}
audio:not([controls]) {
 display: none;
 height: 0;
}
[hidden], template {
 display: none;
}
abbr[title] {
 border-bottom: 1px dotted;
}
i {
 font-style: italic;
}
em {
 font-style:normal;
}
b, strong, em {
 font-weight: bold;
}
dfn {
 font-style: italic;
}
mark {
 background: #fffd30;
 color: #3c3c3c;
}
small {
 font-size: 100%;
}
sub,sup {
 font-size: 75%;
 line-height: 0;
 position: relative;
 vertical-align: baseline;
}
sup {
 top: -0.5em;
}
sub {
 bottom: -0.25em;
}
ul, ol {
 margin: 16px 0 0;
 padding: 0 0 0 2em;
}
li {
 margin: 8px 0 0;
}
img {
 border: 0;
 vertical-align: top;
}
img {
 -ms-interpolation-mode: bicubic;
}
svg:not(:root) {
 overflow: hidden;
}
hr {
 -moz-box-sizing: content-box;
 box-sizing: content-box;
 height: 0;
}
pre {
 overflow: auto;
}
code, kbd, pre, samp {
 font-family: monospace, monospace;
 font-size: 1em;
}
q{
 &:before,
 &:after {
  display: none;
 }
}
legend {
 border: 0;
 padding: 0;
}
optgroup {
 font-weight: bold;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
td, th {
 padding: 0;
}

/* 共通設定
*************************************************/
.pc-obj {
 display: none;
}
.sp-obj {
 display: block;
}

/* clearfix */
.clearfix {
 *zoom: 1;
 &:before,
 &:after {
  content: '';
  display: table;
 }
 &:after {
  clear: both;
 }
}

/* コンテンツ */
.inner {
padding: 0 3%;
margin: 0 auto;
width: 100%;
box-sizing: border-box;
}

.main-wrap {
margin: 0 auto;
padding: 56px 0 0;
}

</style>
