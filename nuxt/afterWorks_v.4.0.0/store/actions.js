import axios from 'axios'

export default {
 getContents({commit}, payload) {
  // isLoadingをtrueに設定
  commit('showLoading');
  // データ取得
  axios
  .get('/json/page/index.json', {
   headers: { 'Content-Type': 'application/json'},
   timeout: 15000
  })
  .then(function(response) {
   // listsにレスポンスを設定
   commit('setContents', {data: response.data, name: 'index'})
   // isLoadingをfalseに設定
   commit('hideLoading')
  })
  .catch(function(error) {
   console.error(error)
   // isLoadingをfalseに設定
   commit('hideLoading');
   // エラー画面に遷移
   this.$router.push('/error');
  })
  }
}