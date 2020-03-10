import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import routes from './routes';
import Vuetify from 'vuetify';

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
