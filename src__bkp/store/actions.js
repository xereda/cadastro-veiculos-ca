export default {
  setLoading (context, control) {
    context.commit('SET_LOADING', control)
  },
  setCurrentPag (context, pag) {
    console.log('dentro da action setCurrentPag: ', pag)
    context.commit('SET_CURRENT_PAG', pag)
  },
  addCar (context, car) {
    context.commit('ADD_CAR', car)
  }
}
