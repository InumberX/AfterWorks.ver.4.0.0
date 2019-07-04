<template>

<transition
 name="contents"
>

<div class="input-box" id="INPUT_BOX">
<div class="inner">

<transition name="fade">
<div class="error-topbox" v-show="isFormError" v-cloak>
<p>入力項目に誤りがあります。</p>
</div>
</transition>

<div class="input-list">

<dl class="inset">
<dt>お名前<span class="required"></span></dt>
<dd>
<fieldset class="form-text">

<label
 v-bind:class="{'error': errors.has('appName')}"
>
<input
 name="appName"
 type="text"
 placeholder="例：田中　太郎"
 v-model="applicant[0].name"
 v-validate="'required'"
 data-vv-as="お名前"
>
</label>

<transition name="fade">
<div
 class="error-box"
 v-if="errors.has('appName')"
 v-cloak
>
<p>{{ errors.first('appName') }}</p>
</div>
</transition>

</fieldset>
</dd>
</dl>

<dl class="inset">
<dt>メールアドレス<span class="required"></span></dt>
<dd>
<fieldset class="form-text">

<label
 v-bind:class="{'error': errors.has('appMail')}"
>
<input
 name="appMail"
 type="text"
 placeholder="例：abc@xyz.com"
 v-model="applicant[0].mail"
 v-validate="'required|email'"
 data-vv-as="メールアドレス"
>
</label>

<transition name="fade">
<div
 class="error-box"
 v-if="errors.has('appMail')"
 v-cloak
>
<p>{{ errors.first('appMail') }}</p>
</div>
</transition>

</fieldset>
</dd>
</dl>

<dl class="inset">
<dt>お問い合わせ内容<span class="required"></span></dt>
<dd>
<fieldset class="form-textarea">

<label
 v-bind:class="{'error': errors.has('appInquiry')}"
>
<textarea
 name="appInquiry"
 placeholder="例：Webサイト制作について"
 v-model="applicant[0].inquiry"
 v-validate="'required'"
 data-vv-as="お問い合せ内容"
>
</textarea>
</label>

<transition name="fade">
<div
 class="error-box"
 v-if="errors.has('appInquiry')"
 v-cloak
>
<p>{{ errors.first('appInquiry') }}</p>
</div>
</transition>

</fieldset>
</dd>
</dl>

</div><!-- /.input-list -->

<div class="form-btn-box">
<div class="form-btn-next">
<button name="formSubmitConfirm" class="btn-m1" v-on:click="checkConfirm">確認する</button>
</div>
</div><!-- /.form-btn-box -->

<transition name="fade">
<div class="overlay-box" v-if="isModal" v-cloak>
<div class="modal-wrap">
<div class="modal-box">

<div class="modal-box-in">
<div class="title-box">
<h2 class="tt">お問い合せ内容確認</h2>
</div><!-- /.title-box -->
<div class="input-box confirm">
<div class="lead-box">
<p class="lead">以下の内容で送信します。よろしいですか？</p>
</div><!-- /.lead-box -->
<div class="input-list">
<dl class="inset">
<dt>お名前</dt>
<dd>{{ applicant[0].name }}</dd>
</dl>
<dl class="inset">
<dt>メールアドレス</dt>
<dd>{{ applicant[0].mail }}</dd>
</dl>
<dl class="inset">
<dt>お問い合わせ内容</dt>
<dd>{{ applicant[0].inquiry }}</dd>
</dl>
</div><!-- /.input-list -->

<div class="form-btn-box">
<div class="form-btn-next">
<button name="formSubmitConfirm" class="btn-m1" v-on:click="checkRegist"><i class="icon icon-mail"></i>送信する</button>
</div>
<div class="form-bottom-link back">
<button class="form-link-back" v-on:click="closeModal">戻る</button>
</div>
</div><!-- /.form-btn-box -->

</div><!-- /.input-box -->
</div><!-- /.modal-box-in -->

</div><!-- /.modal-box -->
</div><!-- /.modal-wrap -->
</div><!-- /.overlay-box -->
</transition>

<transition name="fade">
<div class="overlay-bg" v-if="isOverlay" v-on:click="closeModal" v-cloak></div>
</transition>

<transition name="fade">
<div class="loader-bg" v-if="isSend" v-cloak>
<div class="loader"></div>
</div>
</transition>

</div><!-- /.inner -->
</div><!-- /.input-box -->

</transition>

</template>

<script>
import axios from 'axios'

if (process.browser) {
 // スムーススクロール
 let smoothScroll = new SmoothScroll()
 const smoothScrollOption = {
  header: '#HEADER',
  offset: 20,
  updateURL: false
 }
}

export default {
 data: function() {
  return {
   // モーダル表示フラグ
   isModal: false,
   // モーダル背景表示フラグ
   isOverlay: false,
   // 入力エラー
   isFormError: false,
   // 送信処理状態の判定
   isSend: false,
   // 入力フォームの画面遷移判定
   formMode: 'form',
   // 申込者情報
   applicant: [
    {
     // お名前
     name: '',
     // メールアドレス
     mail: '',
     // お問い合わせ内容
     inquiry: ''
    }
   ]
  }
 },
  // 各処理
  methods: {
   // モーダルを開く処理
   openModal: function() {
    this.winY = document.documentElement.scrollTop || document.body.scrollTop
    this.isOverlay = true
    this.isModal = true
    $body.classList.add('m-op')
    $body.setAttribute('style', 'top: -' + this.winY + 'px;')
   },
   // モーダルを閉じる処理
   closeModal: function() {
    this.isOverlay = false
    this.isModal = false
    let $body = document.body
    $body.classList.remove('m-op')
    $body.removeAttribute('style')
    window.scrollTo(0, this.winY)
   },
   // 確認画面遷移時の処理
   checkConfirm: function() {
    let self = this
    // バリデーション
    this.$validator.validateAll().then(function(result) {
     // エラーがなかった場合
     if(result) {
      self.isFormError = false
     } else {
      // エラーがあった場合
      self.isFormError = true
     }

     // エラーの場合
     if(self.isFormError) {
      smoothScroll.animateScroll(document.querySelector('#INPUT_BOX'), '', smoothScrollOption)
      return false
     }
     // エラーがない場合
     else {
      // 画面を確認用にする
      self.formMode = 'confirm'
      self.winY = document.documentElement.scrollTop || document.body.scrollTop
      self.isOverlay = true
      self.isModal = true
      let $body = document.body
      $body.classList.add('m-op')
      $body.setAttribute('style', 'top: -' + self.winY + 'px;')
     }
     
    })

   },
   // 完了画面遷移時の処理
   checkRegist: function() {
    let self = this
    // 送信処理をまだ実行していない場合
    if(!this.isSend) {
     // バリデーション
     this.$validator.validateAll().then(function(result) {
      // エラーがなかった場合
      if(result) {
       self.isFormError = false
      } else {
       // エラーがあった場合
       self.isFormError = true
      }

      // エラーがない場合
      if(!self.isFormError) {
       self.isFormError = false
       self.isSend = true

       // サーバに入力情報を送信する
       axios
       .post('/api/api.php', {
        'applicant': self.applicant
       })
       .then(
        function(res) {
         const data = res.data

         setTimeout(function() {
          self.isSend = false
         }, 500)

         // 処理に成功した場合
         if(data.result == 'SUCCESS') {
          // 完了画面に遷移する
          let $body = document.body
          $body.classList.remove('m-op')
          $body.removeAttribute('style')
          self.$router.push('/contact/finish')
         } else {
          // 処理に失敗した場合
          console.log(data)
          alert('送信処理に失敗しました。時間を置いて再度お試しください。')
         }
        }
       ).catch(function (err) {
        self.isSend = false
        console.log(err)
        alert('送信処理に失敗しました。時間を置いて再度お試しください。')
       })

      }
      // エラーがあった場合
      else {
       self.formMode = 'form'
       self.closeModal()
      }
      
     })
    }
   }
  }
}
</script>

<style lang="scss" scoped>

/* 入力フォーム
*************************************************/

/* SP
*************************************************/
.input-box {
 .btn-m1 {
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .icon-mail {
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
  vertical-align: middle;
  margin-right: 8px;
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.input-box {
 .input-list {
  margin-top: 40px;
 }
}

}

</style>
