import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setLoading',
      'setCurrentPag',
      'addBeer'
    ]),
    goTo (route) {
      this.$router.push({ name: route })
    }
  }
}
