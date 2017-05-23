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
  'SELECT_CAR' (state, index) {
    state.cars.filter(f => f.plate === index).map(e => { e.selected = true })
  },
  'DESELECT_CAR' (state, index) {
    state.cars.filter(f => f.plate === index).map(e => { e.selected = false })
  },
  'SELECT_PAG_CARS' (state, payload) {
    console.log('SELECT_PAG_CARS', payload)
    state.cars.slice((payload.currentPag - 1) * payload.limitePerPage, payload.currentPag * payload.limitePerPage).map(e => { e.selected = true })
  },
  'DESELECT_PAG_CARS' (state, payload) {
    console.log('DESELECT_PAG_CARS', payload)
    state.cars.slice((payload.currentPag - 1) * payload.limitePerPage, payload.currentPag * payload.limitePerPage).map(e => { e.selected = false })
  },
  'REMOVE_CARS' (state) {
    console.log('REMOVE_CARS')
    console.log(state.cars.filter(e => e.selected === false))
    state.cars = state.cars.filter(e => e.selected === false)
  },
  'CLEAR_SELECTION' (state) {
    console.log('CLEAR_SELECTION')
    state.cars.map(e => { e.selected = false })
  }
}