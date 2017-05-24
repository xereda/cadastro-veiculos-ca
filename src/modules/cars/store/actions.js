export default {
  showDialog (context, control) {
    context.commit('SHOW_DIALOG', control)
  },
  setLoading (context, control) {
    context.commit('SET_LOADING', control)
  },
  setCurrentPag (context, pag) {
    context.commit('SET_CURRENT_PAG', pag)
  },
  addCar (context, car) {
    context.commit('ADD_CAR', car)
  },
  changeCar (context, car) {
    context.commit('CHANGE_CAR', car)
  },
  selectCar (context, index) {
    context.commit('SELECT_CAR', index)
  },
  deselectCar (context, index) {
    context.commit('DESELECT_CAR', index)
  },
  selectPagCars (context, payload) {
    context.commit('SELECT_PAG_CARS', { ...payload, cars: context.getters.cars })
  },
  deselectPagCars (context, payload) {
    context.commit('DESELECT_PAG_CARS', { ...payload, cars: context.getters.cars })
  },
  removeCars (context) {
    context.commit('REMOVE_CARS')
  },
  clearSelection (context) {
    context.commit('CLEAR_SELECTION')
  },
  setTextFilter (context, filter) {
    context.commit('SET_TEXT_FILTER', filter)
  },
  sortColumn (context, column) {
    context.commit('SORT_COLUMN', column)
  }
}
