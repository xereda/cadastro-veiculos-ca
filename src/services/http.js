import axios from 'axios'
import store from '@/store/store'

const client = axios.create({
  baseURL: store.state.config.api.uri,
  timeout: 10000,
  headers: {'Authorization': 'Bearer ' + store.state.config.api.accessToken}
})

export default client
