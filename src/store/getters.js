export default {
  beers: state => {
    const { beers } = state
    return beers
  },
  loading: state => {
    const { states } = state
    return states.loading
  },
  currentPag: state => {
    const { states } = state
    return states.currentPag
  },
  config: state => {
    const { config } = state
    return config
  }
}
