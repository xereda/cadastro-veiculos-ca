import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'beers',
      'config',
      'loading',
      'currentPag'
    ])
  }
}
