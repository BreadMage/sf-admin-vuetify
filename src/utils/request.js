import axios from 'axios'
// import store from '@/store'
import SfMessage from '@/components/sf-message'
import { AUTHKEY } from '@/config.js'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    const authorization = window.localStorage.getItem(AUTHKEY) || null
    if (authorization) {
      config.headers.authorization = authorization
    }
    return config
  },
  error => {
    console.debug(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      SfMessage.error({
        message: res.msg || '服务器开了小差'
      })
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    console.debug(error)
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
