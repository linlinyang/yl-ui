import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueTap from 'vue-tap-directive';
import '../packages/styles/index.scss'

Vue.config.productionTip = false

Vue.use(vueTap);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
