import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'schema',
      'cars',
      'config',
      'loading',
      'currentPag'
    ])
  }
}
