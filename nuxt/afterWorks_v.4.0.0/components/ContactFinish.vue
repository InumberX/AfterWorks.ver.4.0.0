<template>
  <section class="cnt-wrap is-fin">
    <div class="cnt-box">
      <div class="inner">
        <div class="fin-box">
          <div
            class="fin-tx-box animelm animelm-fade-in"
            data-animelm-delay="600"
          >
            <p class="fin-tx">
              お問い合わせありがとうございます。送信が完了しました。<br />後ほど担当者よりご連絡をさせていただきますので、今しばらくお待ちください。
            </p>
            <p class="fin-tx">
              なお、ご入力いただいたメールアドレス宛に確認メールを送信しております。<br />確認メールが届かない場合、メールアドレスに誤りがある可能性があります。<br />その際はお手数ですが、再度お問合せをお願いいたします。
            </p>
          </div>
          <div class="fin-link-box">
            <nuxt-link to="/" exact class="fin-link">
              <span class="fin-link-tx">トップ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinAnimelm from '~/mixins/animelm'

export default Vue.extend({
  name: 'ContactFinish',
  mixins: [mixinAnimelm],
  components: {},
  data: function () {
    return {}
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.fin-box {
  margin: 16px auto 0;
  max-width: 960px;
}
.fin-link-box {
  margin-top: 24px;
}
.fin-link:not(:root) {
  position: relative;
  display: block;
  width: 100%;
  max-width: 320px;
  padding: 12px;
  margin: 0 auto;
  outline: 0;
  background-color: $palette-blue--1;
  color: $palette-white--0;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 16px rgba($palette-black--0, 0.3);
  box-sizing: border-box;
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    border: 0;
    border-top: 1px solid $palette-white--0;
    border-right: 1px solid $palette-white--0;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 16px;
    margin-top: -4px;
  }
  &:hover {
    background-color: $palette-blue--2;
    box-shadow: 0 2px 4px rgba($palette-black--0, 0.3);
  }
}
@media screen and (min-width: $bp--sm), print {
  .fin-link-box {
    margin-top: 32px;
  }
}
@media screen and (min-width: $bp--md), print {
  .fin-link-box {
    margin-top: 40px;
  }
  .fin-link:not(:root) {
    padding: 16px;
  }
}
</style>
