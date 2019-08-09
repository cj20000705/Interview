//获取面试列表接口
import { signList, signDetail } from "../../service";
const moment = require("moment");
function formatTime(start_time) {
  return moment(start_time * 1).format("YYYY-MM-DD HH:mm");
}
//所有模块内状态
const state = {
  list: [],
  detailList: [],
  tabList: [
    {
      title: "未开始",
      status: -1
    },
    {
      title: "已打卡",
      status: 0
    },
    {
      title: "已放弃",
      status: 1
    },
    {
      title: "全部",
      status: 2
    }
  ]
};
//同步
const mutations = {
  mutationsSignDetail(state, payload) {
    state.detailList = payload;
    console.log("detail----", state.detailList);
  }
};
//异步
const actions = {
  // 获取面试列表
  async getsignList({ commit }, payload) {
    const data = await signList(payload);
    data.data.map(item => {
      item.start_time = formatTime(item.start_time);
    });
    console.log(payload.page, "page1111");
    if (payload.page === 1) {
      console.log(data.data, "data///////////////");
      state.list = data.data;
      console.log(state.list, "state.list......");
    } else {
      state.list = [...state.list, ...data.data];
      console.log(state.list, "state.list22222hhhh......");
    }
  },
  async myinterviewDetail({ commit }, payload) {
    const data = await signDetail(payload);
    commit("mutationsSignDetail", data.data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
