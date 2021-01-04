<template>
  <validation-provider
    :name="item.name"
    :rules="item.rules"
    tag="div"
    class="frm-provider-box"
  >
    <fieldset class="frm-txar-box" slot-scope="validationProviderProps">
      <label class="frm-lb">
        <textarea
          class="frm-txar"
          v-model="item.val"
          :name="item.fieldName"
          :maxlength="getMax(item.rules)"
          :placeholder="item.placeholder"
          :class="{ 'is-err': validationProviderProps.errors[0] }"
          v-if="isMax(item.rules)"
        ></textarea>
        <textarea
          class="frm-txar"
          v-model="item.val"
          :name="item.fieldName"
          :placeholder="item.placeholder"
          :class="{ 'is-err': validationProviderProps.errors[0] }"
          v-else
        ></textarea>
      </label>
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
import mixinUtils from '~/mixins/utils'

export default Vue.extend({
  name: 'InputTextArea',
  mixins: [mixinUtils],
  props: {
    item: {},
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss"></style>
