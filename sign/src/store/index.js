import Vue from "vue";
import Vuex from "vuex";

//引入store子
import home from "./modules/home";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home
  },
  plugins: []
});
