import axios from 'axios'

export default {
 getContents({commit}, payload) {
  // isLoadingをtrueに設定
  commit('showLoading')

  // JSONファイル名
  const jsonNameArray = [
   'index',
   'about',
   'works'
  ]
  const jsonNameArrayLength = jsonNameArray.length

  // データ取得
  for(let i = 0; i < jsonNameArrayLength; i++) {
   const jsonName = jsonNameArray[i]
     axios
    .get('/json/page/' + jsonName + '.json', {
     headers: { 'Content-Type': 'application/json'},
     timeout: 15000
    })
    .then(function(response) {
     // レスポンスをストアに格納
     commit('setContents', {data: response.data, name: jsonName})
     // isLoadingをfalseに設定
     commit('hideLoading')
    })
    .catch(function(error) {
     console.error(error)
     // レスポンスをストアに格納
     commit('setContentsFail', {data: response.data, name: jsonName})
     // isLoadingをfalseに設定
     commit('hideLoading')
     // エラーアラートを表示
     alert('データの取得に失敗しました。再読み込みしてください。');
    })
  }
  }
}