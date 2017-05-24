import Main from './Main.vue'
import CarForm from './CarForm.vue'

export default [
  {
    path: '/cars',
    name: 'cars',
    component: Main
  },
  {
    path: '/cars/:carId',
    name: 'detailCar',
    component: CarForm
  },
  {
    path: '/cars/new',
    name: 'newCar',
    component: CarForm
  }
]
