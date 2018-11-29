const actions = {
  click ({commit}) {
    commit('increaseClicker')
  },
  reset ({commit}) {
    commit('resetClicker')
  },
  powerUp ({commit}, power) {
    commit('powerUp', {amount: power})
  },
  buy ({commit}, cost) {
    commit('spendClick', {amount: cost})
  },
  buyAndPowerUp ({commit, dispatch}, payload) {
    dispatch('buy', payload.cost)
    dispatch('powerUp', payload.power)
  }
}

export default actions
