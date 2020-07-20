<template>
 <div class="ads-list-box">
  <div class="inner">
   <div class="ads-list">
    <ul>
     <li v-for="(item, i) in ads">
      <adsense
       :ad-slot="item.slot"
       :ad-responsive="item.responsive"
       :ad-format="item.format"
       :style="item.style"
      />
     </li>
    </ul>
   </div>
  </div>
 </div>
</template>

<script>
import Adsense from "~/components/Adsense.vue";

export default {
 components: {
  Adsense: Adsense
 },
 data: function() {
  return {
   ads: [
    {
     slot: "7889882209",
     responsive: "false",
     style: "display:inline-block;width:100%;max-width:300px;height:300px"
    },
    {
     slot: "6465119893",
     responsive: "false",
     style: "display:inline-block;width:100%;max-width:300px;height:300px"
    },
    {
     slot: "4704589318",
     responsive: "false",
     style: "display:inline-block;width:100%;max-width:300px;height:300px"
    }
   ]
  };
 }
};
</script>

<style lang="scss" scoped>
/* 広告
*************************************************/

/* SP
*************************************************/
.ads-list-box {
 .ads-list {
  ul {
   margin: 56px 0 0;
   padding: 0;
   list-style: none;
   li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 0;
    padding: 0;
    box-sizing: border-box;
    width: 300px;
    max-width: 300px;
    height: 300px;
    max-height: 300px;
   }
  }
 }
}
/* PC
*************************************************/
@media screen and (min-width: 768px) {
 .ads-list-box {
  .ads-list {
   ul {
    margin: 80px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
     width: calc(100% / 3);
     padding: 8px;
    }
   }
  }
 }
}
</style>
