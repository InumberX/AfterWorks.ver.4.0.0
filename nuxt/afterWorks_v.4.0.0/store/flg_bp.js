export const state = () => ({
 // ブレイクポイント（SP）
 bpSp: 520,
 // ブレイクポイント（TAB）
 bpTab: 768,
 // ブレイクポイント（PC）
 bpPc: 960,
 // SP判定フラグ
 flgSp: false,
 // TAB判定フラグ
 flgTab: false,
 // PC判定フラグ
 flgPc: false,
})

export const mutations = {
 setFlgSpTrue(state) {
  state.flgSp = true
 },
 setFlgSpFalse(state) {
  state.flgSp = false
 },
 setFlgTabTrue(state) {
  state.flgTab = true
 },
 setFlgTabFalse(state) {
  state.flgTab = false
 },
 setFlgPcTrue(state) {
  state.flgPc = true
 },
 setFlgPcFalse(state) {
  state.flgPc = false
 },
}
