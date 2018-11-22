const mutations = {
  increaseClicker (state) {
    state.clickedTimes += state.power
  },
  resetClicker (state) {
    state.clickedTimes = 0
    state.power = 1
  },
  setPower (state, payload) {
    state.power = payload.amount
  },
  spendClick (state, payload) {
    state.clickedTimes = state.clickedTimes - payload.amount
  }
}
export default mutations
