export default {
 setContents(state, obj) {
  state.contents[obj.name] = obj.data
 },
 hideLoading(state) {
  state.isLoading = false
 },
 showLoading(state) {
  state.isLoading = true
 }
}