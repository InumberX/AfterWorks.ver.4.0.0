export default {
 setContents(state, obj) {
  state.contents[obj.name].isGet = true
  state.contents[obj.name].data = obj.data
 },
 setContentsFail(state, obj) {
  state.contents[obj.name].isGet = false
 },
 hideLoading(state) {
  state.isLoading = false
 },
 showLoading(state) {
  state.isLoading = true
 }
}