const getters = {
  isBuyable (state) {
    return (cost) => {
      return state.clicked_times >= cost
    }
  }
}
export default getters
