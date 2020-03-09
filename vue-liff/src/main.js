import Vue from 'vue'
import VueRouter from 'vue-router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
Vue.use(VueRouter)
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
