(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{179:function(t,e,n){},180:function(t,e,n){},183:function(t,e,n){"use strict";var r=n(179);n.n(r).a},184:function(t,e,n){"use strict";var r=n(180);n.n(r).a},185:function(t,e,n){"use strict";var r={props:["titleEn","title"],methods:{pageTitleBeforeEnter:function(t){t.style.width="0"},pageTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)},pageSubTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)}}},o=(n(183),n(6)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-box"},[n("div",{staticClass:"inner"},[n("h2",[n("transition",{attrs:{name:"page-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageTitleEnter}},[n("span",[t._v(t._s(t.titleEn))])]),t._v(" "),n("transition",{attrs:{name:"page-sub-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageSubTitleEnter}},[n("em",[t._v(t._s(t.title))])])],1)])])},[],!1,null,"795c3108",null);e.a=component.exports},186:function(t,e,n){"use strict";n(54);var r={props:["text"],methods:{replaceNewLine:function(t){return t.replace(/\r?\n/g,"<br>")}}},o=(n(184),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"contents",appear:""}},[e("div",{staticClass:"page-lead-box"},[e("div",{staticClass:"inner"},[e("p",{domProps:{innerHTML:this._s(this.replaceNewLine(this.text))}})])])])},[],!1,null,"18f386e6",null);e.a=component.exports},195:function(t,e,n){},203:function(t,e,n){"use strict";var r=n(195);n.n(r).a},210:function(t,e,n){"use strict";n.r(e);var r=n(185),o=n(186),c={},l=(n(203),n(6)),f=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"contents",appear:""}},[e("div",{staticClass:"back-top-btn-box"},[e("div",{staticClass:"inner"},[e("nuxt-link",{staticClass:"btn-m1 btn-arrow-right",attrs:{to:"/"}},[this._v("トップページ")])],1)])])},[],!1,null,"44a8b58a",null).exports,h={head:function(){return{title:"Contact",meta:[{hid:"description",name:"description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。お問い合わせはこちらのページからお気軽にご連絡ください。"},{hid:"ogTitle",property:"og:title",content:"Contact | After Works."},{hid:"ogUrl",property:"og:url",content:"https://afterworks.jp/contact/finish/"},{hid:"ogSiteName",property:"og:site_name",content:"Contact | After Works."},{hid:"ogDescription",property:"og:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。お問い合わせはこちらのページからお気軽にご連絡ください。"},{hid:"twitterDescription",name:"twitter:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。お問い合わせはこちらのページからお気軽にご連絡ください。"}],link:[{hid:"canonical",rel:"canonical",href:"https://afterworks.jp/contact/finish/"}]}},components:{PageTitle:r.a,PageLead:o.a,BackTopBtn:f}},d=Object(l.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-wrap"},[e("pageTitle",{attrs:{titleEn:"Contact",title:"お問い合わせ完了"}}),this._v(" "),e("pageLead",{attrs:{text:"お問い合わせありがとうございます。送信が完了しました。<br>ご入力いただいたメールアドレス宛にご連絡いたします。"}}),this._v(" "),e("backTopBtn")],1)},[],!1,null,null,null);e.default=d.exports}}]);