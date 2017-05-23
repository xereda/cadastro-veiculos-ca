import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      setLoading: 'cars/setLoading',
      showDialog: 'cars/showDialog',
      setCurrentPag: 'cars/setCurrentPag',
      addCar: 'cars/addCar',
      selectCar: 'cars/selectCar',
      deselectCar: 'cars/deselectCar',
      selectPagCars: 'cars/selectPagCars',
      deselectPagCars: 'cars/deselectPagCars',
      removeCars: 'cars/removeCars',
      clearSelection: 'cars/clearSelection'
    }),
    goTo (route) {
      this.$router.push({ name: route })
    }
  }
}
