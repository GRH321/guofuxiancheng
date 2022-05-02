import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor)

new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
