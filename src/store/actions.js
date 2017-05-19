export default {
  setLoading (context, control) {
    context.commit('SET_LOADING', control)
  },
  setCurrentPag (context, pag) {
    context.commit('SET_CURRENT_PAG', pag)
  },
  addCar (context, car) {
    context.commit('ADD_CAR', car)
  }
}
