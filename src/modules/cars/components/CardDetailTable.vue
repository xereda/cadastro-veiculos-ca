<template>
  <div class="">
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>Atributo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="">ABV</td>
          <td class="custom-value-cel">{{ beer.abv }}</td>
        </tr>
        <tr>
          <td class="">IBU</td>
          <td class="custom-value-cel">{{ beer.ibu }}</td>
        </tr>
        <tr>
          <td class="">Target FG</td>
          <td class="custom-value-cel">{{ beer.targetFg }}</td>
        </tr>
        <tr>
          <td class="">Target OG</td>
          <td class="custom-value-cel">{{ beer.targetOg }}</td>
        </tr>
        <tr>
          <td class="">EBC</td>
          <td class="custom-value-cel">{{ beer.ebc }}</td>
        </tr>
        <tr>
          <td class="">SRM</td>
          <td class="custom-value-cel">{{ beer.srm }}</td>
        </tr>
        <tr>
          <td class="">PH</td>
          <td class="custom-value-cel">{{ beer.ph }}</td>
        </tr>
        <tr>
          <td class="">Attenuation Level</td>
          <td class="custom-value-cel">{{ beer.attenuationLevel }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'JmobCardDetailTable',
  data () {
    return {

    }
  },
  props: [
    'beer'
  ]
}
</script>

<style lang="scss">
  .custom-value-cel {
    font-style: italic;
  }
</style>
