import { orderBy as _orderBy } from 'lodash'

export default {
  cars: state => {
    const { cars } = state
    const { states } = state
    const { sort } = states
    const direction = sort.asc ? 'asc' : 'desc'
    const _sortedCars = _orderBy(cars, sort.column, direction)
    const _textFilter = states.filter.toUpperCase()
    return _sortedCars.filter(e => {
      if (e.fuelType.toUpperCase().indexOf(_textFilter) > -1) return true
      if (e.manufacturer.toUpperCase().indexOf(_textFilter) > -1) return true
      return false
    })
  },
  payloadForm: state => {
    const { payloadForm } = state
    return payloadForm
  },
  loading: state => {
    const { states } = state
    return states.loading
  },
  sort: state => {
    const { states } = state
    return states.sort
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
