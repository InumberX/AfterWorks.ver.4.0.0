exports.ids=[1],exports.modules={55:function(t,e){},56:function(t,e){},57:function(t,e){},58:function(t,e){},59:function(t,e,n){"use strict";n.r(e);var r=n(55),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},60:function(t,e,n){"use strict";n.r(e);var r=n(56),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},61:function(t,e,n){"use strict";var r={props:["text"],methods:{replaceNewLine:function(t){return t.replace(/\r?\n/g,"<br>")}}},o=n(1);var component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"contents",appear:""}},[e("div",{staticClass:"page-lead-box"},[e("div",{staticClass:"inner"},[e("p",{domProps:{innerHTML:this._s(this.replaceNewLine(this.text))}})])])])},[],!1,function(t){var e=n(60);e.__inject__&&e.__inject__(t)},"18f386e6","35cfc4fb");e.a=component.exports},62:function(t,e,n){"use strict";var r={props:["titleEn","title"],methods:{pageTitleBeforeEnter:function(t){t.style.width="0"},pageTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)},pageSubTitleEnter:function(t){t.style.width=t.scrollWidth+"px",setTimeout(function(){t.style.width=""},1500)}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-box"},[t._ssrNode('<div class="inner" data-v-795c3108>',"</div>",[t._ssrNode("<h2 data-v-795c3108>","</h2>",[n("transition",{attrs:{name:"page-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageTitleEnter}},[n("span",[t._v(t._s(t.titleEn))])]),t._ssrNode(" "),n("transition",{attrs:{name:"page-sub-title",appear:""},on:{"before-enter":t.pageTitleBeforeEnter,enter:t.pageSubTitleEnter}},[n("em",[t._v(t._s(t.title))])])],2)])])},[],!1,function(t){var e=n(59);e.__inject__&&e.__inject__(t)},"795c3108","7916ee6e");e.a=component.exports},63:function(t,e,n){"use strict";var r={props:["titleEn","title"]},o=n(1);var component=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"title-box"},[this._ssrNode('<div class="inner" data-v-6ce4fa08><h3 data-v-6ce4fa08>'+this._ssrEscape(this._s(this.titleEn))+"<em data-v-6ce4fa08>"+this._ssrEscape(this._s(this.title))+"</em></h3></div>")])},[],!1,function(t){var e=n(64);e.__inject__&&e.__inject__(t)},"6ce4fa08","ac602ec4");e.a=component.exports},64:function(t,e,n){"use strict";n.r(e);var r=n(57),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},65:function(t,e,n){"use strict";n.r(e);var r=n(58),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},66:function(t,e,n){"use strict";var r={components:{ContentsTitle:n(63).a}},o=n(1);var component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("contentsTitle",{attrs:{titleEn:"Contact",title:"お問い合わせ"}}),this._ssrNode(" "),this._ssrNode('<div class="contact-box" data-v-5439cf5b>',"</div>",[this._ssrNode('<div class="inner" data-v-5439cf5b>',"</div>",[this._ssrNode('<div class="contact-tx" data-v-5439cf5b><p data-v-5439cf5b>「ランディングページを制作してほしい」、「Wordpressを使って更新性の高いWebサイトを作りたい」、「JavaScriptを用いてWeb サイトにリッチな表現を取り入れてほしい」などお客様の様々なご要望にお応えいたします。<br data-v-5439cf5b>また、デザインのみ、コーディングのみ行ってほしいといったご依頼にも柔軟に対応できます。<br data-v-5439cf5b>まずはお気軽にお問い合わせください。</p></div> '),this._ssrNode('<div class="btn-box" data-v-5439cf5b>',"</div>",[e("nuxt-link",{staticClass:"btn-m1",attrs:{to:"/contact/"}},[e("i",{staticClass:"icon icon-mail"}),this._v("お問い合わせ")])],1)],2)])],2)},[],!1,function(t){var e=n(65);e.__inject__&&e.__inject__(t)},"5439cf5b","3e5f8260");e.a=component.exports},67:function(t,e){},68:function(t,e){},75:function(t,e,n){"use strict";n.r(e);var r=n(67),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},76:function(t,e,n){"use strict";n.r(e);var r=n(68),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},84:function(t,e,n){"use strict";n.r(e);var r=n(62),o=n(61),c={props:["name","certificateNames","certificateUrls","skills"],components:{SnsList:n(21).a}},l=n(1);var d=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"contents",appear:""}},[n("div",{staticClass:"profile-box"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"profile-in"},[n("div",{staticClass:"profile-image"},[n("span",[n("img",{attrs:{src:"/img/img_logo_nine.svg",alt:"N/NE"}})])]),t._v(" "),n("div",{staticClass:"profile-info"},[n("dl",{staticClass:"name"},[n("dt",[t._v("Name")]),t._v(" "),n("dd",[t._v(t._s(t.name))])]),t._v(" "),n("dl",{staticClass:"certificate"},[n("dt",[t._v("Certificate")]),t._v(" "),n("dd",[n("ul",[t._l(t.certificateNames,function(e,i){return e?[e?n("li",[t.certificateUrls[i]?n("a",{attrs:{href:t.certificateUrls[i],target:"_blank"}},[t._v(t._s(e))]):n("span",[t._v(t._s(e))])]):t._e()]:t._e()})],2)])]),t._v(" "),n("dl",{staticClass:"skill"},[n("dt",[t._v("Skill")]),t._v(" "),n("dd",[n("ul",t._l(t.skills,function(e,i){return e?n("li",[t._v("\n"+t._s(e)+"\n")]):t._e()}),0)])]),t._v(" "),n("dl",{staticClass:"sns"},[n("dt",[t._v("SNS")]),t._v(" "),n("dd",[n("snsList")],1)])])])])])])},[],!1,function(t){var e=n(75);e.__inject__&&e.__inject__(t)},"4699c4bf","4686fb69").exports,f={props:["dates","titles","positions","tools"],methods:{combineByComma:function(t){let text="";const e=t.length;for(let i=0;i<e;i++)text+=t[i],i<e-1&&(text+=", ");return text}}};var _=Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"contents",appear:""}},[n("div",{staticClass:"history-box"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"history-in"},[n("div",{staticClass:"history-list"},t._l(t.dates,function(e,i){return e?n("dl",[n("dt",[t._v(t._s(e))]),t._v(" "),n("dd",[n("p",{staticClass:"main-text description",domProps:{innerHTML:t._s(t.titles[i])}}),t._v(" "),t.positions[i]?n("span",{staticClass:"sub-text position"},[t._v(t._s(t.combineByComma(t.positions[i])))]):t._e(),t._v(" "),t.tools[i]?n("span",{staticClass:"sub-text tool"},[t._v(t._s(t.combineByComma(t.tools[i])))]):t._e()])]):t._e()}),0)])])])])},[],!1,function(t){var e=n(76);e.__inject__&&e.__inject__(t)},"1c41b6d4","50eae8d4").exports,v=n(66),m={head:function(){return{title:"About",meta:[{hid:"description",name:"description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。"},{hid:"ogTitle",property:"og:title",content:"About | After Works."},{hid:"ogUrl",property:"og:url",content:"https://afterworks.jp/about/"},{hid:"ogSiteName",property:"og:site_name",content:"About | After Works."},{hid:"ogDescription",property:"og:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。"},{hid:"twitterDescription",name:"twitter:description",content:"東京都在住のフロントエンドエンジニア：N/NE（ナイン）のポートフォリオ用Webサイトです。このページでは、私のプロフィールやこれまでの経験、担当業務等をご紹介します。"}],link:[{hid:"canonical",rel:"canonical",href:"https://afterworks.jp/about/"}]}},components:{PageTitle:r.a,PageLead:o.a,Profile:d,History:_,Contact:v.a},data:function(){return{response:""}},async asyncData({$axios:t}){let e="/json/page/about.json?ver=20190719004858";return e="https://afterworks.jp"+e,{response:(await t.get(e)).data}}};var h=Object(l.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-wrap"},[n("pageTitle",{attrs:{titleEn:"About",title:"経歴紹介"}}),t._ssrNode(" "),n("pageLead",{attrs:{text:t.response.contents.aboutLead[0]}}),t._ssrNode(" "),t._ssrNode("<section>","</section>",[n("profile",{attrs:{name:t.response.contents.aboutName[0],certificateNames:t.response.contents.aboutCertificateName,certificateUrls:t.response.contents.aboutCertificateUrl,skills:[t.response.contents.aboutSkillFrontendProgrammingLanguage[0],t.response.contents.aboutSkillCms[0],t.response.contents.aboutSkillServerSideProgrammingLanguage[0],t.response.contents.aboutSkillSoftware[0]]}})],1),t._ssrNode(" "),t._ssrNode("<section>","</section>",[n("history",{attrs:{dates:t.response.contents.aboutHistoryDate,titles:t.response.contents.aboutHistoryTitle,positions:t.response.contents.aboutHistoryPositions,tools:t.response.contents.aboutHistoryTools}})],1),t._ssrNode(" "),n("contact")],2)},[],!1,function(t){},null,"19bce8f9");e.default=h.exports}};
//# sourceMappingURL=about.js.map?ver=20190719004858