import Vue from 'vue'
import App from './App.vue'

import VioUI from 'vio-ui'
Vue.use(VioUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
