const getters = {
  isBuyable (state) {
    return (cost) => {
      return state.clickedTimes >= cost
    }
  }
}
export default getters
