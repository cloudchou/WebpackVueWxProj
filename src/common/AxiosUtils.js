/**
 * Created by Liu.Jun on 2017/11/27.
 */

import axios from 'axios'
import VueCookie from 'vue-cookie'
import {
  getToken,
  login
} from './LoginUtils'

let mAxios = null

function initVueHttpCompUseAxios() {
  if (mAxios !== null) {
    return
  }
  mAxios = axios.create({
    timeout: 20 * 1000
  })
  mAxios.defaults.baseURL = process.env.API_ROOT
  mAxios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' // 配置请求头  
  mAxios.interceptors.request.use(config => {
    let token = getToken()
    if (!isStringEmpty(token)) {
      config.headers.Authorization = `token ${token}`
    }
    return config
  }, error => {
    console.error(`error reject`)
    return Promise.reject(error)
  })

  mAxios.interceptors.response.use(res => {
    // console.log(`response some thing ${JSON.stringify(res)}`)
    return res
  }, error => {
    if (error.response && error.response.hasOwnProperty('data')) {
      if (error.response.data.status === 401) { // 用户user id 无效  则登录
        console.error('user id invalid, need to login again')
        login()
        return
      }
    } else {
      console.error('data request error, no response, maybe server have wrong cors configuration')
    }
    return Promise.reject(error)
  })
  Vue.prototype.$http = axios
}

export {
  initVueHttpCompUseAxios,
  mAxios as axios
}
