import Vue from 'vue'
import {
 ValidationProvider,
 ValidationObserver,
 extend,
 localize,
 setInteractionMode,
} from 'vee-validate'
import { required, email, max, regex } from 'vee-validate/dist/rules'

localize({
 ja: {
  messages: {
   alpha:
    '<span class="frm-err-field-name">{_field_}</span>はアルファベットのみ使用できます',
   alpha_num:
    '<span class="frm-err-field-name">{_field_}</span>は英数字のみ使用できます',
   alpha_dash:
    '<span class="frm-err-field-name">{_field_}</span>は英数字とハイフン、アンダースコアのみ使用できます',
   alpha_spaces:
    '<span class="frm-err-field-name">{_field_}</span>はアルファベットと空白のみ使用できます',
   between:
    '<span class="frm-err-field-name">{_field_}</span>は{min}から{max}の間でなければなりません',
   confirmed: '<span class="frm-err-field-name">{_field_}</span>が一致しません',
   digits:
    '<span class="frm-err-field-name">{_field_}</span>は{length}桁の数字でなければなりません',
   dimensions:
    '<span class="frm-err-field-name">{_field_}</span>は幅{width}px、高さ{height}px以内でなければなりません',
   email:
    '<span class="frm-err-field-name">{_field_}</span>は有効なアドレスではありません',
   excluded: '<span class="frm-err-field-name">{_field_}</span>は不正な値です',
   ext:
    '<span class="frm-err-field-name">{_field_}</span>は有効なファイル形式ではありません',
   image:
    '<span class="frm-err-field-name">{_field_}</span>は有効な画像形式ではありません',
   integer:
    '<span class="frm-err-field-name">{_field_}</span>は整数のみ使用できます',
   is: '<span class="frm-err-field-name">{_field_}</span>が一致しません',
   length:
    '<span class="frm-err-field-name">{_field_}</span>は{length}文字でなければなりません',
   max_value:
    '<span class="frm-err-field-name">{_field_}</span>は{max}以下でなければなりません',
   max:
    '<span class="frm-err-field-name">{_field_}</span>は{length}文字以内にしてください',
   mimes:
    '<span class="frm-err-field-name">{_field_}</span>は有効なファイル形式ではありません',
   min_value:
    '<span class="frm-err-field-name">{_field_}</span>は{min}以上でなければなりません',
   min:
    '<span class="frm-err-field-name">{_field_}</span>は{length}文字以上でなければなりません',
   numeric:
    '<span class="frm-err-field-name">{_field_}</span>は数字のみ使用できます',
   oneOf:
    '<span class="frm-err-field-name">{_field_}</span>は有効な値ではありません',
   regex:
    '<span class="frm-err-field-name">{_field_}</span>のフォーマットが正しくありません',
   required: '<span class="frm-err-field-name">{_field_}</span>は必須項目です',
   required_if:
    '<span class="frm-err-field-name">{_field_}</span>は必須項目です',
   size:
    '<span class="frm-err-field-name">{_field_}</span>は{size}KB以内でなければなりません',
  },
 },
})

localize('ja')

setInteractionMode('eager')

extend('required', required)
extend('email', email)
extend('max', max)
extend('regex', regex)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
