<template>
  <tbody>
    {{ hydratedData }}
    <tr v-for="(doc, index) in paginatedData">
      <td>
        <checkbox v-model="doc.selected" :name="doc[fieldIndex]" @change.native="selectOne(index, $event.target.checked)"></checkbox>
        <!-- <input type="checkbox" v-model="doc.selected" @change.native="selectOne(index, $event.target.checked)"> -->
      </td>
      <td v-for="column in columns">
        <text-value v-if="schema[column].type === 'text'" :value="doc[column]"></text-value>
        <image-brand v-if="schema[column].type === 'image-brand'" :value="doc[column]"></image-brand>
        <thumbnail v-if="schema[column].type === 'thumbnail'"
                   :value="doc[column]"
                   :link-open-label="schema[column].link.labels.open"
                   :link-null-label="schema[column].link.labels.null"></thumbnail>
        <monetary v-if="schema[column].type === 'monetary'" :value="doc[column]"></monetary>
      </td>
      <td class="zoom-column">
        <a class="button is-small" @click="openDetail(111)">
          <span class="icon is-small">
            <i class="fa fa-search super"></i>
          </span>
        </a>
      </td>
    </tr>
  </tbody>
</template>

<script>
import Checkbox from './types/Checkbox.vue'
import TextValue from './types/TextValue.vue'
import ImageBrand from './types/ImageBrand.vue'
import Thumbnail from './types/Thumbnail.vue'
import Monetary from './types/Monetary.vue'

export default {
  name: 'GridBody',
  data () {
    return {
      hydratedData: [
      ]
    }
  },
  mounted () {
    this.hydrate(this.data)
  },
  methods: {
    hydrate (data) {
      console.log('dentro da paginatedData: ', data)
      data.forEach(e => {
        this.hydratedData.push({
          fuelType: e.fuelType,
          image: e.image,
          manufacturer: e.manufacturer,
          model: e.model,
          plate: e.plate,
          value: e.value,
          selected: false
        })
      })
    },
    selectOne (index, checked) {
      console.log(index, checked)
      const _row = this.paginatedData[index]
      console.log('dentro da selectOne da Body.vue: ', _row[this.fieldIndex])
      checked ? this.$emit('select-one', _row[this.fieldIndex]) : this.$emit('deselect-one', _row[this.fieldIndex])
    }
  },
  computed: {
    columns () {
      return Object.keys(this.schema)
    },
    paginatedData () {
      return this.hydratedData.slice((this.currentPag - 1) * this.pageLimite, this.currentPag * this.pageLimite)
    }
  },
  components: {
    ImageBrand,
    TextValue,
    Thumbnail,
    Monetary,
    Checkbox
  },
  watch: {
    selecteds (val, oldVal) {
      console.log(val)
      val.forEach(s => {
        this.hydratedData.filter(e => e[this.fieldIndex] === s).map(f => { f.selected = true })
      })
    }
  },
  props: [
    'schema',
    'data',
    'currentPag',
    'pageLimite',
    'selecteds',
    'fieldIndex'
  ]
}
</script>

<style lang="css">
</style>
