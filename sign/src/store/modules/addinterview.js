import {addInterview} from '../../service'
const state = {
    code:''
}
const actions = {
    async AddInterview({commit},payload) {
        const data = await addInterview()
        console.log(data,'data...')
        commit('mutationsAddInterview',data)
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