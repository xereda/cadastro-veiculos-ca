export default {
  schema: state => {
    const { schema } = state
    return schema
  },
  cars: state => {
    const { cars } = state
    return cars
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
