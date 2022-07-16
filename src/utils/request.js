import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
})

request.interceptors.request.use(
  (config) => {
    const token = store.state.user
    if (token) {
      config.headers.authorization = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default request
