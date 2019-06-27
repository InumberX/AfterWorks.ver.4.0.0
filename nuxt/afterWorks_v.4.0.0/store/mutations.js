export default {
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
   let self = this
   let $initLoading = document.getElementById('INIT_LOADING')
   setTimeout(function() {
    $initLoading.classList.add('off')
    setTimeout(function() {
     $initLoading.parentNode.removeChild($initLoading)
     self.state.isLoading = false
    }, 300)
   }, 1000)
  }
 },
 hideLoading(state) {
  state.isLoading = false
 },
 showLoading(state) {
  state.isLoading = true
 }
}