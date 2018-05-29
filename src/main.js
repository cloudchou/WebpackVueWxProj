// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const eruda = () =>
  import ( /* webpackChunkName: "eruda" */ 'eruda')

Vue.config.productionTip = false


// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

prepareErudaTool()