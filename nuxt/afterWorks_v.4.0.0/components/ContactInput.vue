<template>
  <div class="cnt-wrap is-frm">
    <div class="cnt-box">
      <div class="inner">
        <div class="frm-box" :class="[{ 'is-active': flgShowContact }]">
          <div class="frm-top-mes-box">
            <p class="frm-top-mes">
              下記フォームにご入力の上、お気軽にお問い合わせください。
            </p>
          </div>
          <transition name="va-fade">
            <div
              class="frm-err-mes-box"
              v-show="flgErrorMes"
              v-cloak
              id="frm-err-mes"
            >
              <p class="frm-err-mes">入力項目に誤りがあります。</p>
            </div>
          </transition>
          <validation-observer
            ref="validationObs"
            v-slot="validationObsProps"
            tag="div"
            class="frm"
          >
            <dl
              v-for="(item, i) in items"
              class="frm-set"
              :class="item.className"
              :key="item.fieldName"
            >
              <dt class="frm-ttl">
                {{ item.name
                }}<span class="frm-required" v-if="isRequired(item.rules)"
                  >必須</span
                >
              </dt>
              <dd class="frm-cnt">
                <InputText v-if="item.type === 'text'" :item="item" />
                <InputMail v-if="item.type === 'mail'" :item="item" />
                <InputTel v-if="item.type === 'tel'" :item="item" />
                <InputTextArea v-if="item.type === 'textarea'" :item="item" />
                <InputRadio v-if="item.type === 'radio'" :item="item" />
                <InputCheck v-if="item.type === 'checkbox'" :item="item" />
                <InputSelect v-if="item.type === 'select'" :item="item" />
              </dd>
            </dl>
          </validation-observer>
          <div class="frm-btm-box">
            <div class="frm-btm-next-wrap">
              <div class="frm-btn-next">
                <button
                  type="button"
                  name="frmConfirm"
                  class="sbmt-btn"
                  @click="confirm"
                >
                  <span class="sbmt-btn-tx">確認</span>
                </button>
              </div>
            </div>
          </div>
          <transition name="va-fade">
            <div class="overlay-wrap" v-if="flgShowModal">
              <div
                class="overlay-box"
                v-if="flgShowModal"
                :class="[{ 'is-active': flgShowModal }]"
              >
                <div class="modal-wrap">
                  <div class="modal-box">
                    <div class="modal">
                      <div class="modal-ttl-box">
                        <p class="modal-ttl">お問い合わせ内容確認</p>
                      </div>
                      <div class="modal-cnt-box">
                        <div class="frm-conf-box">
                          <div class="frm-top-mes-box">
                            <p class="frm-top-mes">
                              以下の内容で送信します。よろしいですか？
                            </p>
                          </div>
                          <div class="frm">
                            <dl
                              v-for="(item, i) in items"
                              class="frm-set"
                              v-if="isNotEmpty(item.val)"
                            >
                              <dt class="frm-ttl">{{ item.name }}</dt>
                              <dd class="frm-cnt">
                                <span
                                  class="frm-cnt-tx"
                                  v-html="getCntTx(item.val)"
                                  >{{ item.val }}</span
                                >
                              </dd>
                            </dl>
                          </div>
                          <div class="frm-btm-box">
                            <div class="frm-btm-next-wrap">
                              <div class="frm-btn-next">
                                <button
                                  type="button"
                                  name="frmSbmt"
                                  class="sbmt-btn"
                                  @click="sbmt()"
                                  :class="{ 'is-sending': flgSend }"
                                >
                                  <span class="sbmt-btn-tx">送信</span>
                                </button>
                              </div>
                              <div class="frm-btn-back">
                                <button
                                  type="button"
                                  name="frmBack"
                                  class="back-btn"
                                  @click="back()"
                                >
                                  <span class="back-btn-tx">戻る</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.modal-cnt-box -->
                    </div>
                    <!-- /.modal -->
                  </div>
                  <!-- /.modal-box -->
                </div>
                <!-- /.modal-wrap -->
              </div>
              <!-- /.overlay-box -->
              <div
                class="overlay-bg"
                v-if="flgShowModal"
                :class="[{ 'is-active': flgShowModal }]"
              ></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import mixinUtils from '~/mixins/utils'
import InputText from '~/components/input/InputText.vue'
import InputMail from '~/components/input/InputMail.vue'
import InputTel from '~/components/input/InputTel.vue'
import InputTextArea from '~/components/input/InputTextArea.vue'
import InputRadio from '~/components/input/InputRadio.vue'
import InputCheck from '~/components/input/InputCheck.vue'
import InputSelect from '~/components/input/InputSelect.vue'

export default Vue.extend({
  name: 'ContactInput',
  mixins: [mixinUtils],
  components: {
    InputText: InputText,
    InputMail: InputMail,
    InputTel: InputTel,
    InputTextArea: InputTextArea,
    InputRadio: InputRadio,
    InputCheck: InputCheck,
    InputSelect: InputSelect,
  },
  props: {
    items: {},
  },
  data: function () {
    return {
      winY: 0,
      flgErrorMes: false,
      flgShowModal: false,
      flgSend: false,
      flgShowContact: false,
    }
  },
  methods: {
    // モーダルを開く処理
    openModal: function () {
      this.winY = document.documentElement.scrollTop || document.body.scrollTop
      this.flgShowModal = true
      const body = document.body
      body.style.top = '-' + this.winY + 'px'
      body.classList.add('is-fixed')
    },
    // モーダルを閉じる処理
    closeModal: function () {
      this.flgShowModal = false
      const body = document.body
      body.classList.remove('is-fixed')
      body.style.top = ''
      scrollTo(0, this.winY)
    },
    // バリデーションをリセットする処理
    validReset: function () {
      this.flgErrorMes = false
      if (this.$refs.validationObs != null) {
        this.$refs.validationObs.reset()
      }
    },
    // 確認ボタンを押下した時の処理
    confirm: function () {
      const self = this
      this.validReset()
      // バリデーション
      this.$refs.validationObs
        .validate()
        .then(function (res) {
          let validate = true
          // エラーがなかった場合
          if (res) {
            validate = false
          }

          // エラーがない場合
          if (!validate) {
            self.openModal()
          } // エラーがある場合
          else {
            self.flgErrorMes = true
            actSmoothScroll('#frm-err-mes')
          }
        })
        .catch(function (err) {})
    },
    // 送信ボタンを押下した時の処理
    sbmt: function () {
      const self = this
      if (!this.flgSend) {
        this.validReset()
        // バリデーションチェックを行う
        this.$refs.validationObs
          .validate()
          .then(function (res) {
            let validate = true
            // エラーがない場合
            if (res) {
              validate = false
            }

            // エラーがない場合
            if (!validate) {
              self.flgSend = true
              // サーバに入力情報を送信する
              axios
                .post('/api/send_mail/', {
                  frmData: self.items,
                })
                .then(function (res) {
                  const data = res.data
                  const result = data.result

                  // 送信に成功した場合
                  if (result.actStatus === 'success') {
                    setTimeout(function () {
                      const body = document.body
                      body.classList.remove('is-fixed')
                      body.style.top = ''
                      self.$router.push({ path: '/contact/finish/' })
                    }, 1000)
                  }
                  // 失敗した場合
                  else {
                    setTimeout(function () {
                      self.flgSend = false
                      alert(
                        '送信処理に失敗しました。お手数をおかけしますが、時間をおいて再度お試しください。'
                      )
                    }, 1000)
                  }
                })
                .catch(function (err) {
                  self.flgSend = false
                  alert(
                    '送信処理に失敗しました。お手数をおかけしますが、時間をおいて再度お試しください。'
                  )
                })
            } // エラーがある場合
            else {
              self.flgSend = false
              self.flgErrorMes = true
              self.closeModal()
            }
          })
          .catch(function (err) {})
      }
    },
    // 戻るボタンを押下した時の処理
    back: function () {
      this.closeModal()
    },
  },
  mounted: function () {
    const self = this
    setTimeout(function () {
      self.flgShowContact = true
    }, 2800)
  },
  computed: {
    isRequired: function () {
      return function (rules) {
        let result = false
        if (typeof rules.required != null && rules.required) {
          result = true
        }
        return result
      }
    },
  },
})
</script>

<style lang="scss"></style>
