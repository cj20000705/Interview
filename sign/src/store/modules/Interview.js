//获取面试列表接口
import { signList, signDetail } from "../../service";
//所有模块内状态
const state = {
  list: [],
  detailList: []
};
//同步
const mutations = {
  mutationsSignList(state, payload) {
    state.list = payload;
  },
  mutationsSignDetail(state, payload) {
    state.detailList = payload;
    console.log('detail----',state.detailList);
  }
};
//异步
const actions = {
  async getsignList({ commit }, payload) {
    const data = await signList();
    // console.log("darra.....", data.data);
    commit("mutationsSignList", data.data);
  },
  async myinterviewDetail({ commit }, payload) {
    const data = await signDetail(payload);
    commit("mutationsSignDetail", data.data);
    // console.log("darra.....", data.data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
