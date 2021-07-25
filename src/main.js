import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
Vue.prototype.$axios = axios
Vue.prototype.$request_url = 'http://47.99.48.150:16828'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
