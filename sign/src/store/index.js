import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
//面试地址
import address from './modules/address'
//登录我的
import mine from "./modules/mine";
//获取面试列表接口
import Interview from "./modules/Interview";
//添加面试
import addInterview from "./modules/addinterview"
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
    address,
    mine,
    Interview,
    addInterview
  },
  plugins: [CreateLogger()]
})
