<template>
  <validation-provider
    :name="item.name"
    :rules="item.rules"
    tag="div"
    class="frm-provider-box"
  >
    <fieldset
      class="frm-slc-box"
      slot-scope="validationProviderProps"
      :class="className"
    >
      <label class="frm-lb">
        <select
          class="frm-slc"
          v-model="item.val"
          :name="item.fieldName"
          :placeholder="item.placeholder"
          :class="{ 'is-err': validationProviderProps.errors[0] }"
        >
          <option
            class="frm-item"
            v-for="(info, i) in item.selectVal"
            :value="info.val"
          >
            {{ info.tx }}
          </option>
        </select>
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

export default Vue.extend({
  name: 'InputSelect',
  props: {
    item: {},
    className: { type: String },
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss"></style>
