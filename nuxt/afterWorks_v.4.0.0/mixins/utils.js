export default {
 data: function () {
  return {}
 },
 methods: {
  replaceNewLine: function (val) {
   return val.replace(/\r?\n/g, '<br>')
  },
  replaceQuot: function (val) {
   return val.replace(/&quot;/g, '"')
  },
  imgUrlCashBuster: function (val) {
   return val + '?' + process.env.cashBuster
  },
  isNotEmpty: function (val) {
   let result = true

   if (Array.isArray(val) && val.length === 0) {
    result = false
   } else if (val === '') {
    result = false
   }
   return result
  },
 },
 computed: {
  isMax: function () {
   return function (rules) {
    let result = false
    if (typeof rules.max != null && rules.max > 0) {
     result = true
    }
    return result
   }
  },
  getMax: function () {
   return function (rules) {
    let result = ''
    if (typeof rules.max != null && rules.max > 0) {
     result = rules.max
    }
    return result
   }
  },
  // 確認時の文字列を出力する処理
  getCntTx: function () {
   return function (val) {
    let result = ''
    // 文字列の場合
    if (typeof val === 'string') {
     // 改行変換を行う
     result = val.replace(/\r?\n/g, '<br>')
    }
    // 配列の場合
    else if (Array.isArray(val)) {
     for (let i = 0, iLength = val.length; i < iLength; i = (i + 1) | 0) {
      result += val[i]
      if (i < iLength - 1) {
       result += ', '
      }
     }
    }
    // 上記以外の場合
    else {
     result = val
    }
    return result
   }
  },
  isSelected: function () {
   return function (selected, val) {
    let result = ''
    if (selected == val) {
     result = 1
    }
    return result
   }
  },
  isChecked: function () {
   return function (checked, val) {
    let result = ''
    for (let i = 0, iLength = checked.length; i < iLength; i = (i + 1) | 0) {
     if (checked[i] == val) {
      result = 1
      break
     }
    }
    return result
   }
  },
 },
}
