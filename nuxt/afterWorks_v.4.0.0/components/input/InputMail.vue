<template>
  <InputText :item="item" className="frm-mail-box" type="mail" />
</template>

<script lang="ts">
import Vue from 'vue'
import InputText from '~/components/input/InputText.vue'

export default Vue.extend({
  name: 'InputMail',
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
