import { saveIndex } from '@/common/js/cache'
const state ={
	index:'index',
	
}

const mutations ={
	itemIndex(state,payload){
		state.index = payload
	}
}

const actions={
	async({commit},id){
		commit('itemIndex',saveIndex(id))
	}
}
export default {
	state,
	mutations,
	actions
}