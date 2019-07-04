export default {
 setBrowser(state) {
  state.isBrowser = true
 },
 setContents(state, obj) {
  state.contents[obj.name].isGet = true
  state.contents[obj.name].data = obj.data
 },
 setContentsFail(state, obj) {
  state.contents[obj.name].isGet = false
 },
 checkFinishGetContents(state) {
  const contentsLength = Object.keys(state.contents).length
  let isGetNum = 0
  
  Object.keys(state.contents).forEach(function(key) {
   if(state.contents[key].isGet) {
    isGetNum++
   }
  })
  
  if(isGetNum >= contentsLength) {
   state.isLoading = false
  }
 },
 hideLoading(state) {
  state.isLoading = false
 },
 showLoading(state) {
  state.isLoading = true
 }
}