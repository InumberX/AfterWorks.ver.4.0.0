<template>
  <div class="cnt-wrap">
    <div class="cnt-box">
      <div class="inner">
        <div
          class="page-lead-box animelm animelm-fade-in"
          data-animelm-delay="300"
        >
          <p class="page-lead-tx" v-html="replaceNewLine(leadTx)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinUtils from '~/mixins/utils'

export default Vue.extend({
  name: 'PageLead',
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

.page-lead-box {
  margin-top: 8px;
}
.page-lead-tx {
  margin: 0;
}
@media screen and (min-width: $bp--sm), print {
  .page-lead-box {
    margin-top: 16px;
  }
}
</style>
