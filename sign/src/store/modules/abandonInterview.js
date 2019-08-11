import {abandonInterview} from '../../service'
const state = {
    // code:'1'
}
const actions = {
    async abandonInterview({commit},payload) {
        console.log(payload,'payload..............')
        const data = await abandonInterview(payload)
        console.log(data,'data...')
        // commit('upCode',payload)
    }
}
const mutations = {
    // upCode(state,payload) {
    //     state.code = payload.status
    //     console.log(state.code,'code...')
    // }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}