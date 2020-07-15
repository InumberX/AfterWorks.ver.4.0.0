<template>
 <div class="index-wrap" v-if="!this.$store.state.isLoading">
  <mainVisual></mainVisual>

  <contentsLead v-bind:text="response.contents.indexMessage[0]"> </contentsLead>

  <section>
   <contentsTitle titleEn="Service" title="提供サービス"> </contentsTitle>

   <cardList
    v-bind:titles="response.contents.indexServiceTitle"
    v-bind:texts="response.contents.indexServiceText"
    v-bind:classes="response.contents.indexServiceClass"
   >
   </cardList>
  </section>

  <section>
   <contentsTitle titleEn="Contents" title="コンテンツ"> </contentsTitle>

   <cardList
    v-bind:titles="response.contents.indexContentsTitle"
    v-bind:texts="response.contents.indexContentsText"
    v-bind:classes="response.contents.indexContentsClass"
    v-bind:links="response.contents.indexContentsLink"
    v-bind:linkTexts="response.contents.indexContentsLinkText"
   >
   </cardList>
  </section>

  <contact></contact>

  <section>
   <AdsenseList></AdsenseList>
  </section>
 </div>
</template>

<script>
import MainVisual from "~/components/MainVisual.vue";
import ContentsLead from "~/components/ContentsLead.vue";
import ContentsTitle from "~/components/ContentsTitle.vue";
import CardList from "~/components/CardList.vue";
import Contact from "~/components/Contact.vue";
import AdsenseList from "~/components/AdsenseList.vue";

export default {
 head: {
  title: "After Works.",
  titleTemplate: ""
 },
 components: {
  MainVisual: MainVisual,
  ContentsLead: ContentsLead,
  ContentsTitle: ContentsTitle,
  CardList: CardList,
  Contact: Contact,
  AdsenseList: AdsenseList
 },
 data: function() {
  return {
   response: ""
  };
 },
 async asyncData({ $axios }) {
  let url = "/json/page/index.json" + process.env.cashBuster;
  if (process.server) {
   url = "https://afterworks.jp" + url;
  } else {
   let hostname = location.hostname;
   if (hostname === "localhost") {
    hostname += ":3000";
   }
   url = location.protocol + "//" + hostname + url;
  }

  const res = await $axios.get(url);
  return {
   response: res.data
  };
 },
 mounted: function() {
  /*------------------------------------------
   Scrooll Magic
  --------------------------------------------*/
  let sMagicController = new ScrollMagic.Controller();

  let $sMagicFadeIn = document.querySelectorAll(".s-magic-fadein");
  const sMagicFadeInLength = $sMagicFadeIn.length;

  if (sMagicFadeInLength > 0) {
   Array.prototype.forEach.call($sMagicFadeIn, function($item, i) {
    let sMagicFadeInScene = new ScrollMagic.Scene({
     // 対象要素
     triggerElement: $item,
     triggerHook: "onEnter",
     reverse: false,
     offset: 150
    }).addTo(sMagicController);

    // アニメーション開始時の処理
    sMagicFadeInScene.on("enter", function() {
     const delayTime = $sMagicFadeIn[i].dataset.pcIndex * 300;
     $sMagicFadeIn[i].style.transitionDelay = delayTime + "ms";
     setTimeout(function() {
      $sMagicFadeIn[i].style.transitionDelay = "";
     }, delayTime);
     $sMagicFadeIn[i].classList.add("s-magic-on");
    });

    // アニメーション完了時の処理
    sMagicFadeInScene.on("end", function() {
     sMagicFadeInScene.destroy(true);
    });
   });
  }
 }
};
</script>

<style></style>
