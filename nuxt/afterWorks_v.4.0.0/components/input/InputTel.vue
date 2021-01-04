<template>
  <InputText :item="item" className="frm-tel-box" type="tel" />
</template>

<script lang="ts">
import Vue from 'vue'
import InputText from '~/components/input/InputText.vue'

export default Vue.extend({
  name: 'InputTel',
  components: {
    InputText: InputText,
  },
  props: {
    item: {},
  },
  data: function () {
    return {}
  },
  computed: {},
})
</script>

<style lang="scss"></style>
