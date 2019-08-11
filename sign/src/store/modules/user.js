import {decrypt} from '../../service'
function replacePhone (tel) {
    tel = "" + tel;
    let reg=/(\d{3})\d{4}(\d{4})/;
    let tel1 = tel.replace(reg, "$1****$2")
    return tel1
}
const state = {
    phone:null,
    code:null
}
const actions = {
    async getDecrypt({commit},payload) {
        const data = await decrypt(payload)
        commit('upPhone',data)
    }
}

const mutations = {
   upPhone(state,payload) {
       state.phone = replacePhone(payload.data.phoneNumber)
       state.code = payload.code
   }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}