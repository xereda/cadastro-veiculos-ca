export default {
  setLoading (context, control) {
    context.commit('SET_LOADING', control)
  },
  setCurrentPag (context, pag) {
    context.commit('SET_CURRENT_PAG', pag)
  },
  addBeer (context, beer) {
    context.commit('ADD_BEER', beer)
  }
}
