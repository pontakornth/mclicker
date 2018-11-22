const actions = {
  click ({commit}) {
    commit('increaseClicker')
  },
  reset ({commit}) {
    commit('resetClicker')
  },
  setPower ({commit}, power) {
    commit('setPower', {amount: power})
  },
  buy ({commit}, cost) {
    commit('spendClick', {amount: cost})
  },
  buyAndSetPower ({commit, dispatch}, payload) {
    dispatch('buy', payload.cost)
    dispatch('setPower', payload.power)
  }
}

export default actions
