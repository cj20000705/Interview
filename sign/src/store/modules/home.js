//所有模块内状态
const state = {
  longitude: "113.324520",
  latitude: "23.099994"
};
//同步
const mutations = {
  updateLocation(state, payload) {
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  }
};
//异步
const actions = {
  getLocation({ commit }, payload) {
    wx.getLocation({
      success(res) { 
        commit("updateLocation", res);
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
