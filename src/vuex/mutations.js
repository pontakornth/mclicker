const mutations = {
  increaseClicker (state) {
    state.clicked_times += state.power
  },
  resetClicker (state) {
    state.clicked_times = 0
    state.power = 1
  },
  setPower (state, payload) {
    state.power = payload.amount
  },
  spendClick (state, payload) {
    state.clicked_times = state.clicked_times - payload.amount
  }
}
export default mutations
