const mutations = {
  increaseClicker (state) {
    state.clickedTimes += state.power
  },
  resetClicker (state) {
    state.clickedTimes = 0
    state.power = 1
  },
  powerUp (state, payload) {
    state.power += payload.amount
  },
  spendClick (state, payload) {
    state.clickedTimes = state.clickedTimes - payload.amount
  },
  startGame (state) {
    state.isStarted = true
  },
  endGame (state) {
    state.isStarted = false
  }
}
export default mutations
