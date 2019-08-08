import {addInterview} from '../../service'
const state = {
    code:''
}
const actions = {
    async AddInterview({commit},payload) {
        console.log(payload,'payload...')
        const data = await addInterview(payload)
        commit('mutationsAddInterview',data)
        console.log(data,'data...')
        if(data.code === 0) {
            wx.showToast({
              title: '添加面试成功',
              icon: 'none',
              duration: 2000,
              success(res){
                wx.navigateTo({
                    url: "/pages/myinterview/main"
                });
              }
          })
          
        }
    }
}

const mutations = {
    mutationsAddInterview(state,payload) {
        state.code = payload
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}