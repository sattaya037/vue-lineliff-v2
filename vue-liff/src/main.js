import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
