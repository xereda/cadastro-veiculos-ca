export default {
  'SHOW_DIALOG' (state, control) {
    state.states.dialog = control
  },
  'SET_LOADING' (state, control) {
    state.states.loading = control
  },
  'SET_CURRENT_PAG' (state, pag) {
    state.states.currentPag = pag
  },
  'ADD_CAR' (state, car) {
    state.cars.push(car)
  },
  'CHANGE_CAR' (state, car) {
    state.cars.filter(f => f.plate === car.plate)
    .map(e => {
      e.model = car.model
      e.manufacturer = car.manufacturer
      e.value = car.value
      e.fuelType = car.fuelType
      e.image = car.image
    })
  },
  'SELECT_CAR' (state, index) {
    state.cars.filter(f => f.plate === index).map(e => { e.selected = true })
  },
  'DESELECT_CAR' (state, index) {
    state.cars.filter(f => f.plate === index).map(e => { e.selected = false })
  },
  'SELECT_PAG_CARS' (state, payload) {
    payload.cars.slice((payload.currentPag - 1) * payload.limitePerPage, payload.currentPag * payload.limitePerPage).map(e => { e.selected = true })
  },
  'DESELECT_PAG_CARS' (state, payload) {
    payload.cars.slice((payload.currentPag - 1) * payload.limitePerPage, payload.currentPag * payload.limitePerPage).map(e => { e.selected = false })
  },
  'REMOVE_CARS' (state) {
    state.cars = state.cars.filter(e => e.selected === false)
  },
  'CLEAR_SELECTION' (state) {
    state.cars.map(e => { e.selected = false })
  },
  'SET_TEXT_FILTER' (state, filter) {
    state.states.filter = filter
  },
  'SORT_COLUMN' (state, column) {
    state.states.sort.column === column ? state.states.sort.asc = !state.states.sort.asc : state.states.sort.asc = true
    state.states.sort.column = column
  }
}
