import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'cars',
      'config',
      'loading',
      'currentPag'
    ])
  }
}
