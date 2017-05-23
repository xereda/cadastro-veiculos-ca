import Main from './Main.vue'
import CarDetail from './CarDetail.vue'

export default [
  {
    path: '/cars',
    name: 'cars',
    component: Main
  },
  {
    path: '/cars/:carId',
    name: 'carDetail',
    component: CarDetail
  }
]
