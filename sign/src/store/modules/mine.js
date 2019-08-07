import QQMapWX from "@/utils/qqmap-wx-jssdk.min";
//实例化
// 实例化一下
const qqMapSdk = new QQMapWX({
  key: "UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I"
  // 必填
});
//所有模块内状态
const state = {
  mine: ""
};
//同步
const mutations = {};
//异步
const actions = {
  getSuggestion({ commit }, payload) {
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res => {
        console.log("111res", res);
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
