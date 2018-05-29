// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import {
  loginIfNeeded
} from './common/LoginUtils'
import {
  initVueHttpCompUseAxios
} from './common/AxiosUtils'
// import {
//   configWechatJsSdk
// } from './common/AxiosUtils'

const eruda = () =>
  import ( /* webpackChunkName: "eruda" */ 'eruda')


Vue.config.productionTip = false

function prepareErudaTool() {
  if (process.env.EVN_CONFIG !== 'prod') {
    // const eruda = request('eruda')
    let el = document.createElement('div')
    document.body.appendChild(el)
    // console.log(eruda())
    eruda().then(function (eruda) {
      eruda.init({
        container: el,
        tool: ['console', 'elements', 'network']
      })
    })
  }
}

(function () {
  prepareErudaTool()

  Vue.prototype.$cookie = VueCookie

  if (loginIfNeeded()) {
    console.log('need to login, no need to show this site')
    return
  }

  initVueHttpCompUseAxios()

  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    template: '<App/>'
  })

  // 需要在具体页面去调用 这里只是做演示而已
  // configWechatJsSdk({'title':'hello'})

}())
