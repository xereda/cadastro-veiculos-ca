export default {
  cars: state => {
    console.log(state)
    const { cars } = state
    const _textFilter = state.states.filter.toUpperCase()
    return cars.filter(e => {
      if (e.fuelType.toUpperCase().indexOf(_textFilter) > -1) return true
      if (e.manufacturer.toUpperCase().indexOf(_textFilter) > -1) return true
      return false
    })
  },
  loading: state => {
    const { states } = state
    return states.loading
  },
  textFilter: state => {
    const { states } = state
    return states.filter
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
