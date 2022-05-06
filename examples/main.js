import Vue from 'vue'
import App from './App.vue'
import ffui from '../packages'
Vue.use(ffui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
