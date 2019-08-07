import Vue from "vue";
import Vuex from "vuex";
//引入store子
import home from "./modules/home";
//登录我的
import mine from "./modules/mine";
//获取面试列表接口
import Interview from "./modules/Interview";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    mine,
    Interview
  },
  plugins: []
});
