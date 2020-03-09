import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
