export default {
  cars: state => {
    console.log(state)
    const { cars } = state
    return cars
  },
  loading: state => {
    const { states } = state
    return states.loading
  },
  dialog: state => {
    const { states } = state
    return states.dialog
  },
  currentPag: state => {
    const { states } = state
    return states.currentPag
  },
  selectedsCars: state => {
    const { cars } = state
    return cars.filter(e => e.selected === true)
  }
}
