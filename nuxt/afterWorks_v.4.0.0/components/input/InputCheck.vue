<template>
  <validation-provider
    :name="item.name"
    :rules="item.rules"
    tag="div"
    class="frm-provider-box"
  >
    <fieldset class="frm-chk-box" slot-scope="validationProviderProps">
      <ul class="frm-items">
        <li class="frm-item" v-for="(info, i) in item.selectVal">
          <label class="frm-lb">
            <input
              type="checkbox"
              :name="item.fieldName"
              class="frm-chk"
              :value="info.val"
              v-model="item.val"
              :class="{ 'is-err': validationProviderProps.errors[0] }"
            />
            <span class="frm-chk-tx" :class="info.className"
              ><i class="frm-chk-faker"></i>{{ info.tx }}</span
            >
          </label>
        </li>
      </ul>
      <transition name="fade">
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
  name: 'InputCheck',
  props: {
    item: {},
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss"></style>
