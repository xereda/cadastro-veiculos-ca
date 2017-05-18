import Main from './Main.vue'
import BeerDetail from './BeerDetail.vue'

export default [
  {
    path: '/beers',
    name: 'beers',
    component: Main
  },
  {
    path: '/beers/:beerId',
    name: 'beerDetail',
    component: BeerDetail
  }
]
