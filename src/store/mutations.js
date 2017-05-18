export default {
  'SET_LOADING' (state, control) {
    state.states.loading = control
  },
  'SET_CURRENT_PAG' (state, pag) {
    state.states.currentPag = pag
  },
  'ADD_BEER' (state, beer) {
    state.beers.push(beer)
  }
}
