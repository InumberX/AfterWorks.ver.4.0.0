<template>
  <section class="cnt-wrap is-paint is-wave">
    <div class="contact-wave-box">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="contact-wave is-upper"
      >
        <path id="contact-wave-upper" d=""></path>
      </svg>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="contact-wave is-lower"
      >
        <path id="contact-wave-lower" d=""></path>
      </svg>
    </div>
    <CntTtl ttl="お問い合わせ" ttlEn="Contact" />
    <div class="cnt-box">
      <div class="inner">
        <div class="contact-box">
          <div class="contact-tx-box animelm animelm-fade-in">
            <p class="contact-tx">
              「ランディングページを制作してほしい」、「Wordpressを使って更新性の高いWebサイトを作りたい」、「JavaScriptを用いてWeb
              サイトにリッチな表現を取り入れてほしい」などお客様の様々なご要望にお応えいたします。<br />また、デザインのみ、コーディングのみ行ってほしいといったご依頼にも柔軟に対応できます。<br />まずはお気軽にお問い合わせください。
            </p>
          </div>
          <div class="contact-link-box animelm animelm-fade-in">
            <nuxt-link to="/contact/" class="contact-link">
              <i class="icon is-mail"></i>
              <span class="contact-link-tx">お問い合わせ</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import mixinUtils from '~/mixins/utils'
import CntTtl from '~/components/CntTtl.vue'

interface Wavify {
  [key: string]: any
}

export default Vue.extend({
  name: 'Contact',
  mixins: [mixinUtils],
  components: {
    CntTtl: CntTtl,
  },
  data: function () {
    const wavify: Wavify = {
      className: {
        upper: 'contact-wave-upper',
        lower: 'contact-wave-lower',
      },
      instance: {
        upper: null,
        lower: null,
      },
    }

    return {
      wavify,
    }
  },
  mounted: function () {
    if (document.getElementById(this.wavify.className.upper) != null) {
      if (this.wavify.instance.upper != null) {
        this.wavify.instance.upper.kill()
      }
      this.wavify.instance.upper = wavify(
        document.getElementById(this.wavify.className.upper),
        {
          height: 60,
          bones: 3,
          amplitude: 40,
          color: 'rgba(241, 241, 241, 0.85)',
          speed: 0.1,
        }
      )
    }

    if (document.getElementById(this.wavify.className.lower) != null) {
      if (this.wavify.instance.lower != null) {
        this.wavify.instance.lower.kill()
      }
      this.wavify.instance.lower = wavify(
        document.getElementById(this.wavify.className.lower),
        {
          height: 60,
          bones: 3,
          amplitude: 40,
          color: 'rgba(241, 241, 241, 0.4)',
          speed: 0.05,
        }
      )
    }
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.contact-wave-box {
  position: absolute;
  width: 100%;
  height: 120px;
  z-index: $z-index--1;
  top: -120px;
}
.contact-wave {
  display: block;
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
}
.contact-wave {
  &.is-upper {
    z-index: $z-index--3;
  }
  &.is-lower {
    z-index: $z-index--2;
  }
}
.contact-tx-box {
  margin: 16px auto 0;
  max-width: 960px;
}
.contact-tx {
  margin: 0;
}
.contact-link-box {
  margin-top: 24px;
}
.contact-link:not(:root) {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .icon {
    color: $palette-white--0;
    margin-right: 12px;
  }
}
@media screen and (min-width: $bp--sm), print {
}
@media screen and (min-width: $bp--md), print {
  .contact-link-box {
    margin-top: 32px;
  }
  .contact-link:not(:root) {
    padding: 16px;
  }
}
</style>
