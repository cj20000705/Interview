//获取面试列表接口
import { signList } from "../../service";
//所有模块内状态
const state = {
  list: []
};
//同步
const mutations = {
  mutationsSignList(state, payload) {
    state.list = payload;
  }
};
//异步
const actions = {
  async getsignList({ commit }, payload) {
    const data = await signList();
    
   console.log('darra.....',data.data)
    commit("mutationsSignList", data.data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
