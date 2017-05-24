import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      config: 'config',
      cars: 'cars/cars',
      payloadForm: 'cars/payloadForm',
      loading: 'cars/loading',
      sort: 'cars/sort',
      textFilter: 'cars/textFilter',
      dialog: 'cars/dialog',
      currentPag: 'cars/currentPag',
      selectedsCars: 'cars/selectedsCars'
    }),
    paginatedData () {
      return this.cars.slice((this.currentPag - 1) * this.config.limitePerPage, this.currentPag * this.config.limitePerPage)
    },
    allCarsSelectedsInPage () {
      return this.paginatedData.filter(e => this.selectedsCars.includes(e)).length === this.config.limitePerPage
    }
  }
}
