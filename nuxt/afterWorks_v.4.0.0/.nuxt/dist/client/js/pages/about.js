(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(t,e,n){},180:function(t,e,n){},181:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){"use strict";var r=n(179);n.n(r).a},184:function(t,e,n){"use strict";var r=n(180);n.n(r).a},185:function(t,e,n){"use strict";var r={props:["titleEn","title"],methods:{pageTitleBeforeEnter:function(t){t.style.width="0"},pageTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)},pageSubTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)}}},o=(n(183),n(6)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-box"},[n("div",{staticClass:"inner"},[n("h2",[n("transition",{attrs:{name:"page-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageTitleEnter}},[n("span",[t._v(t._s(t.titleEn))])]),t._v(" "),n("transition",{attrs:{name:"page-sub-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageSubTitleEnter}},[n("em",[t._v(t._s(t.title))])])],1)])])},[],!1,null,"795c3108",null);e.a=component.exports},186:function(t,e,n){"use strict";n(54);var r={props:["text"],methods:{replaceNewLine:function(t){return t.replace(/\r?\n/g,"<br>")}}},o=(n(184),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"contents",appear:""}},[e("div",{staticClass:"page-lead-box"},[e("div",{staticClass:"inner"},[e("p",{domProps:{innerHTML:this._s(this.replaceNewLine(this.text))}})])])])},[],!1,null,"18f386e6",null);e.a=component.exports},187:function(t,e,n){"use strict";var r={props:["titleEn","title"]},o=(n(188),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-box"},[e("div",{staticClass:"inner"},[e("h3",[this._v(this._s(this.titleEn)),e("em",[this._v(this._s(this.title))])])])])},[],!1,null,"6ce4fa08",null);e.a=component.exports},188:function(t,e,n){"use strict";var r=n(181);n.n(r).a},189:function(t,e,n){"use strict";var r=n(182);n.n(r).a},190:function(t,e,n){"use strict";var r={components:{ContentsTitle:n(187).a}},o=(n(189),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("contentsTitle",{attrs:{titleEn:"Contact",title:"お問い合わせ"}}),this._v(" "),e("div",{staticClass:"contact-box"},[e("div",{staticClass:"inner"},[this._m(0),this._v(" "),e("div",{staticClass:"btn-box"},[e("nuxt-link",{staticClass:"btn-m1",attrs:{to:"/contact/"}},[e("i",{staticClass:"icon icon-mail"}),this._v("お問い合わせ")])],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-tx"},[e("p",[this._v("「ランディングページを制作してほしい」、「Wordpressを使って更新性の高いWebサイトを作りたい」、「JavaScriptを用いてWeb サイトにリッチな表現を取り入れてほしい」などお客様の様々なご要望にお応えいたします。"),e("br"),this._v("また、デザインのみ、コーディングのみ行ってほしいといったご依頼にも柔軟に対応できます。"),e("br"),this._v("まずはお気軽にお問い合わせください。")])])}],!1,null,"5439cf5b",null);e.a=component.exports},191:function(t,e,n){},192:function(t,e,n){},199:function(t,e,n){"use strict";var r=n(191);n.n(r).a},200:function(t,e,n){"use strict";var r=n(192);n.n(r).a},208:function(t,e,n){"use strict";n.r(e);n(55);var r=n(8),o=n(185),c=n(186),l={props:["name","certificateNames","certificateUrls","skills"],components:{SnsList:n(107).a}},f=(n(199),n(6)),v=Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"contents",appear:""}},[n("div",{staticClass:"profile-box"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"profile-in"},[n("div",{staticClass:"profile-image"},[n("span",[n("img",{attrs:{src:"/img/img_logo_nine.svg",alt:"N/NE"}})])]),t._v(" "),n("div",{staticClass:"profile-info"},[n("dl",{staticClass:"name"},[n("dt",[t._v("Name")]),t._v(" "),n("dd",[t._v(t._s(t.name))])]),t._v(" "),n("dl",{staticClass:"certificate"},[n("dt",[t._v("Certificate")]),t._v(" "),n("dd",[n("ul",[t._l(t.certificateNames,function(e,i){return e?[e?n("li",[t.certificateUrls[i]?n("a",{attrs:{href:t.certificateUrls[i],target:"_blank"}},[t._v(t._s(e))]):n("span",[t._v(t._s(e))])]):t._e()]:t._e()})],2)])]),t._v(" "),n("dl",{staticClass:"skill"},[n("dt",[t._v("Skill")]),t._v(" "),n("dd",[n("ul",t._l(t.skills,function(e,i){return e?n("li",[t._v("\n"+t._s(e)+"\n")]):t._e()}),0)])]),t._v(" "),n("dl",{staticClass:"sns"},[n("dt",[t._v("SNS")]),t._v(" "),n("dd",[n("snsList")],1)])])])])])])},[],!1,null,"4699c4bf",null).exports,d={props:["dates","titles","positions","tools"],methods:{combineByComma:function(t){for(var text="",e=t.length,i=0;i<e;i++)text+=t[i],i<e-1&&(text+=", ");return text}}},_=(n(200),Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"contents",appear:""}},[n("div",{staticClass:"history-box"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"history-in"},[n("div",{staticClass:"history-list"},t._l(t.dates,function(e,i){return e?n("dl",[n("dt",[t._v(t._s(e))]),t._v(" "),n("dd",[n("p",{staticClass:"main-text description",domProps:{innerHTML:t._s(t.titles[i])}}),t._v(" "),t.positions[i]?n("span",{staticClass:"sub-text position"},[t._v(t._s(t.combineByComma(t.positions[i])))]):t._e(),t._v(" "),t.tools[i]?n("span",{staticClass:"sub-text tool"},[t._v(t._s(t.combineByComma(t.tools[i])))]):t._e()])]):t._e()}),0)])])])])},[],!1,null,"1c41b6d4",null).exports),m=n(190),h={head:function(){return{title:"About",meta:[{hid:"description",name:"description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。"},{hid:"ogTitle",property:"og:title",content:"About | After Works."},{hid:"ogUrl",property:"og:url",content:"https://afterworks.jp/about/"},{hid:"ogSiteName",property:"og:site_name",content:"About | After Works."},{hid:"ogDescription",property:"og:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。"},{hid:"twitterDescription",name:"twitter:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。"}],link:[{hid:"canonical",rel:"canonical",href:"https://afterworks.jp/about/"}]}},components:{PageTitle:o.a,PageLead:c.a,Profile:v,History:_,Contact:m.a},data:function(){return{response:""}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r="/json/page/about.json?ver=20190719004858","localhost"===(o=location.hostname)&&(o+=":3000"),r=location.protocol+"//"+o+r,t.next=5,n.get(r);case 5:return c=t.sent,t.abrupt("return",{response:c.data});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},C=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-wrap"},[n("pageTitle",{attrs:{titleEn:"About",title:"経歴紹介"}}),t._v(" "),n("pageLead",{attrs:{text:t.response.contents.aboutLead[0]}}),t._v(" "),n("section",[n("profile",{attrs:{name:t.response.contents.aboutName[0],certificateNames:t.response.contents.aboutCertificateName,certificateUrls:t.response.contents.aboutCertificateUrl,skills:[t.response.contents.aboutSkillFrontendProgrammingLanguage[0],t.response.contents.aboutSkillCms[0],t.response.contents.aboutSkillServerSideProgrammingLanguage[0],t.response.contents.aboutSkillSoftware[0]]}})],1),t._v(" "),n("section",[n("history",{attrs:{dates:t.response.contents.aboutHistoryDate,titles:t.response.contents.aboutHistoryTitle,positions:t.response.contents.aboutHistoryPositions,tools:t.response.contents.aboutHistoryTools}})],1),t._v(" "),n("contact")],1)},[],!1,null,null,null);e.default=C.exports}}]);