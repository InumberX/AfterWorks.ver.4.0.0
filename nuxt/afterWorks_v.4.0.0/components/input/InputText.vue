<template>
  <validation-provider
    :name="item.name"
    :rules="item.rules"
    tag="div"
    class="frm-provider-box"
  >
    <fieldset
      class="frm-tx-box"
      slot-scope="validationProviderProps"
      :class="className"
    >
      <label class="frm-lb">
        <input
          :type="inputType"
          class="frm-tx"
          v-model="item.val"
          :name="item.fieldName"
          :maxlength="getMax(item.rules)"
          :placeholder="item.placeholder"
          :class="{ 'is-err': validationProviderProps.errors[0] }"
          v-if="isMax(item.rules)"
        />
        <input
          :type="inputType"
          class="frm-tx"
          v-model="item.val"
          :name="item.fieldName"
          :placeholder="item.placeholder"
          :class="{ 'is-err': validationProviderProps.errors[0] }"
          v-else
        />
      </label>
      <p
        v-if="item.supplement"
        class="frm-supplement"
        v-html="item.supplement"
      ></p>
      <transition name="va-fade">
        <p
          v-show="validationProviderProps.errors[0]"
          class="frm-err-msg"
          v-html="validationProviderProps.errors[0]"
        ></p>
      </transition>
    </fieldset>
  </validation-provider>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import mixinUtils from '~/mixins/utils'

export default Vue.extend({
  name: 'InputText',
  mixins: [mixinUtils],
  props: {
    item: {},
    className: { type: String },
    type: { type: String },
  },
  data: function () {
    let inputType: String = 'text'

    return {
      inputType,
    }
  },
  methods: {
    getType: function () {
      if (this.type === 'tel' && this.storeFlgSp) {
        this.inputType = 'tel'
      } else {
        this.inputType = 'text'
      }
    },
  },
  created: function () {
    this.getType()
  },
  watch: {
    storeFlgSp: function () {
      this.getType()
    },
  },
  computed: {
    storeFlgSp: function () {
      const result: any = this.$store.state.flg_bp.flgSp
      return result
    },
  },
})
</script>

<style lang="scss"></style>
