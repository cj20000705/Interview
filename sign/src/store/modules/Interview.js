//获取面试列表接口
import { signList, signDetail } from "../../service";
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
  // mutationsSignList(state, payload) {
  //   state.list = payload;
  // },
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
    console.log("data====", data.data);
    data.data.map(item => {
      item.address = JSON.parse(item.address);
      item.start_time = new Date(Number(item.start_time))
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    });
    if (payload.page === 1) {
      state.list = data.data;
    } else {
      state.list = [...state.list, ...data.data];
    }

    console.log("1111111111", state.list);

    // commit("mutationsSignList", data.data);
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
