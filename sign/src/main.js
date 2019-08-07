import Vue from 'vue'
import App from './App'
//引入store
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

//挂载store
Vue.prototype.$store = store;

const app = new Vue(App)
app.$mount()
