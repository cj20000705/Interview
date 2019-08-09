import {abandonInterview} from '../../service'
const state = {

}
const actions = {
    async abandonInterview({commit},payload) {
        console.log(payload,'payload..............')
        const data = await abandonInterview(payload)
        console.log(data)
    }
}
const mutations = {
    
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}