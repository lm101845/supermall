import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// Vue实例是可以作为我们的事件总线的


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
