export default {
  'SET_LOADING' (state, control) {
    state.states.loading = control
  },
  'SET_CURRENT_PAG' (state, pag) {
    state.states.currentPag = pag
  },
  'ADD_CAR' (state, car) {
    state.car.push(car)
  }
}
