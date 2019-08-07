import QQMapWX from '@/utils/qqmap-wx-jssdk.min'
//实力化
const qqMapSdk = new QQMapWX ({
    key:"UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I"
})

const state = {
    addressList:[],
    addres:'面试地址'
}
//模块内的异步改变
const actions = {
 getSuggestion({commit}, payload){
    qqMapSdk.getSuggestion({
        keyword: payload,
        success: res=>{
            commit('upgetSuggestion',res.data)
        }
    })
 },
}

//模块内的同步操作
const mutations = {
    upgetSuggestion(state,payload) {
        state.addressList = payload
    },
    upgetAddres(state,payload) {
        state.addres = payload
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}