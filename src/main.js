// main.js作为入口应该让它尽可能简单

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// Vue实例是可以作为我们的事件总线的


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
