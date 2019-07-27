(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(t,e,n){},180:function(t,e,n){},181:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){"use strict";var r=n(179);n.n(r).a},184:function(t,e,n){"use strict";var r=n(180);n.n(r).a},185:function(t,e,n){"use strict";var r={props:["titleEn","title"],methods:{pageTitleBeforeEnter:function(t){t.style.width="0"},pageTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)},pageSubTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)}}},o=(n(183),n(6)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-box"},[n("div",{staticClass:"inner"},[n("h2",[n("transition",{attrs:{name:"page-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageTitleEnter}},[n("span",[t._v(t._s(t.titleEn))])]),t._v(" "),n("transition",{attrs:{name:"page-sub-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageSubTitleEnter}},[n("em",[t._v(t._s(t.title))])])],1)])])},[],!1,null,"795c3108",null);e.a=component.exports},186:function(t,e,n){"use strict";n(54);var r={props:["text"],methods:{replaceNewLine:function(t){return t.replace(/\r?\n/g,"<br>")}}},o=(n(184),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"contents",appear:""}},[e("div",{staticClass:"page-lead-box"},[e("div",{staticClass:"inner"},[e("p",{domProps:{innerHTML:this._s(this.replaceNewLine(this.text))}})])])])},[],!1,null,"18f386e6",null);e.a=component.exports},187:function(t,e,n){"use strict";var r={props:["titleEn","title"]},o=(n(188),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-box"},[e("div",{staticClass:"inner"},[e("h3",[this._v(this._s(this.titleEn)),e("em",[this._v(this._s(this.title))])])])])},[],!1,null,"6ce4fa08",null);e.a=component.exports},188:function(t,e,n){"use strict";var r=n(181);n.n(r).a},189:function(t,e,n){"use strict";var r=n(182);n.n(r).a},190:function(t,e,n){"use strict";var r={components:{ContentsTitle:n(187).a}},o=(n(189),n(6)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("contentsTitle",{attrs:{titleEn:"Contact",title:"お問い合わせ"}}),this._v(" "),e("div",{staticClass:"contact-box"},[e("div",{staticClass:"inner"},[this._m(0),this._v(" "),e("div",{staticClass:"btn-box"},[e("nuxt-link",{staticClass:"btn-m1",attrs:{to:"/contact/"}},[e("i",{staticClass:"icon icon-mail"}),this._v("お問い合わせ")])],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-tx"},[e("p",[this._v("「ランディングページを制作してほしい」、「Wordpressを使って更新性の高いWebサイトを作りたい」、「JavaScriptを用いてWeb サイトにリッチな表現を取り入れてほしい」などお客様の様々なご要望にお応えいたします。"),e("br"),this._v("また、デザインのみ、コーディングのみ行ってほしいといったご依頼にも柔軟に対応できます。"),e("br"),this._v("まずはお気軽にお問い合わせください。")])])}],!1,null,"5439cf5b",null);e.a=component.exports},194:function(t,e,n){},202:function(t,e,n){"use strict";var r=n(194);n.n(r).a},211:function(t,e,n){"use strict";n.r(e);n(55);var r=n(8),o=n(185),c=n(186),l=(n(54),{props:["id","titles","images","urls","charge","language","cms","software","texts"],methods:{combineByComma:function(t){for(var text="",e=t.length,i=0;i<e;i++)text+=t[i],i<e-1&&(text+=", ");return text},replaceQuot:function(t){return t.replace(/&quot;/g,'"')}}}),m=(n(202),n(6)),v=Object(m.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"contents",appear:""}},[n("div",{staticClass:"works-box"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"works-in"},[n("div",{staticClass:"works-list"},[n("ul",t._l(t.titles,function(title,i){return title?n("li",{attrs:{id:t.id[i]}},[n("figure",{staticClass:"img-box"},[n("img",{attrs:{src:t.images[i],alt:title}})]),t._v(" "),n("dl",{staticClass:"info-box"},[n("dt",[n("a",{attrs:{href:t.urls[i],target:"_blank"}},[t._v(t._s(title)),n("i",{staticClass:"icon icon-blank"})])]),t._v(" "),n("dd",[n("ul",{staticClass:"info-list"},[t.charge[i]?n("li",[t._v(t._s(t.combineByComma(t.charge[i])))]):t._e(),t._v(" "),t.language[i]?n("li",[t._v(t._s(t.combineByComma(t.language[i])))]):t._e(),t._v(" "),t.cms[i]?n("li",[t._v(t._s(t.combineByComma(t.cms[i])))]):t._e(),t._v(" "),t.software[i]?n("li",[t._v(t._s(t.combineByComma(t.software[i])))]):t._e()]),t._v(" "),n("p",{staticClass:"info-text",domProps:{innerHTML:t._s(t.replaceQuot(t.texts[i]))}})])])]):t._e()}),0)])])])])])},[],!1,null,"22593c7c",null).exports,h=n(190),f={head:function(){return{title:"Works",meta:[{hid:"description",name:"description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のこれまでの制作物についてご紹介します。"},{hid:"ogTitle",property:"og:title",content:"Works | After Works."},{hid:"ogUrl",property:"og:url",content:"https://afterworks.jp/works/"},{hid:"ogSiteName",property:"og:site_name",content:"Works | After Works."},{hid:"ogDescription",property:"og:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のこれまでの制作物についてご紹介します。"},{hid:"twitterDescription",name:"twitter:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のこれまでの制作物についてご紹介します。"}],link:[{hid:"canonical",rel:"canonical",href:"https://afterworks.jp/works/"}]}},components:{PageTitle:o.a,PageLead:c.a,Works:v,Contact:h.a},data:function(){return{response:""}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r="/json/page/works.json?ver=20190719004858","localhost"===(o=location.hostname)&&(o+=":3000"),r=location.protocol+"//"+o+r,t.next=5,n.get(r);case 5:return c=t.sent,t.abrupt("return",{response:c.data});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=Object(m.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"works-wrap"},[n("pageTitle",{attrs:{titleEn:"Works",title:"実績紹介"}}),t._v(" "),n("section",[n("pageLead",{attrs:{text:t.response.contents.worksAchievementLead[0]}}),t._v(" "),n("works",{attrs:{id:t.response.contents.worksAchievementId,titles:t.response.contents.worksAchievementTitle,images:t.response.contents.worksAchievementImg,urls:t.response.contents.worksAchievementLink,charge:t.response.contents.worksAchievementCharge,language:t.response.contents.worksAchievementProgrammingLanguage,cms:t.response.contents.worksAchievementCms,software:t.response.contents.worksAchievementSoftware,texts:t.response.contents.worksAchievementText}})],1),t._v(" "),n("section",[n("pageLead",{attrs:{text:t.response.contents.worksHobbyLead[0]}}),t._v(" "),n("works",{attrs:{id:t.response.contents.worksHobbyId,titles:t.response.contents.worksHobbyTitle,images:t.response.contents.worksHobbyImg,urls:t.response.contents.worksHobbyLink,charge:t.response.contents.worksHobbyCharge,language:t.response.contents.worksHobbyProgrammingLanguage,cms:t.response.contents.worksHobbyCms,software:t.response.contents.worksHobbySoftware,texts:t.response.contents.worksHobbyText}})],1),t._v(" "),n("contact")],1)},[],!1,null,null,null);e.default=d.exports}}]);