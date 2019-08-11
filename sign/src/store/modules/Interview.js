//获取面试列表接口
import { signList, signDetail , abandonInterview } from "../../service";
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
    payload.start_time = formatTime(payload.start_time);
    state.detailList = payload;
  }
};
//异步
const actions = {
  // 获取面试列表
  async getsignList({ commit }, payload) {
    const data = await signList(payload);
    // console.log(data,'data...............')  
    data.data.map(item => {
      item.start_time = formatTime(item.start_time);
    });
    if (payload.status === 2) {
      state.list = data.data;
    } else if(payload.status === -1) {
      state.list = data.data;
    } else if(payload.status === 1) {
      state.list = data.data
    } else {
      state.list = data.data
    }
  },
  async myinterviewDetail({ commit }, payload) {
    const data = await signDetail(payload);
    commit("mutationsSignDetail", data.data);
  },
  async abandonInterview({commit,dispatch},payload) {
    const data = await abandonInterview(payload)
    if(data.code === 0) {
       await dispatch('myinterviewDetail',payload.id)
    }
    // commit('upCode',payload)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
