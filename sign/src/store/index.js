import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import address from './modules/address'
//登录我的
import mine from "./modules/mine";
//获取面试列表接口
import Interview from "./modules/Interview";
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
    address,
    mine,
    Interview
  },
  plugins: [CreateLogger()]
})
