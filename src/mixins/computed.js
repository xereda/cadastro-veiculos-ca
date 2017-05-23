import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      cars: 'cars/cars',
      config: 'config',
      loading: 'cars/loading',
      dialog: 'cars/dialog',
      currentPag: 'cars/currentPag',
      selectedsCars: 'cars/selectedsCars'
    }),
    paginatedData () {
      return this.cars.slice((this.currentPag - 1) * this.config.limitePerPage, this.currentPag * this.config.limitePerPage)
    },
    allCarsSelectedsInPage () {
      console.log('dentro da allCarsSelectedsInPage')
      return this.paginatedData.filter(e => this.selectedsCars.includes(e)).length === this.config.limitePerPage
    }
  }
}
