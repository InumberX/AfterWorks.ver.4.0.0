<template>
  <div class="cnt-wrap">
    <div class="cnt-box">
      <div class="inner">
        <div class="idx-lead-box animelm animelm-fade-in">
          <p class="idx-lead-tx" v-html="replaceQuot(leadTx)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinUtils from '~/mixins/utils'

export default Vue.extend({
  name: 'IdxLead',
  mixins: [mixinUtils],
  props: {
    leadTx: { type: String },
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.idx-lead-box {
  margin-top: 80px;
}
.idx-lead-tx {
  margin: 0;
  text-align: center;
  font-size: 1.8rem;
}
@media screen and (min-width: $bp--sm), print {
  .idx-lead-box {
    margin-top: 100px;
  }
  .idx-lead-tx {
    font-size: 2rem;
  }
}
@media screen and (min-width: $bp--lg), print {
  .idx-lead-box {
    margin-top: 120px;
  }
  .idx-lead-tx {
    font-size: 2.4rem;
  }
}
</style>
