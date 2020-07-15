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
     format: "auto"
    }
   ]
  };
 }
};
</script>
