// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import VeeValidate from 'vee-validate'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'  //vue 的图片懒加载
import FastClick from 'fastclick'



Vue.use(VeeValidate)//vue 的表单验证

FastClick.attach(document.body)


Vue.use(VueLazyLoad,{
    loading:require('./common/images/ico/loading.gif')
})
Vue.config.productionTip = false

// require('./mock.js')
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount('#app-box')
