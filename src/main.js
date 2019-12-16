import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter)
Vue.use(Vueaxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
