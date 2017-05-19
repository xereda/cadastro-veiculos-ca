import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setLoading',
      'setCurrentPag',
      'addCar'
    ]),
    goTo (route) {
      this.$router.push({ name: route })
    }
  }
}
