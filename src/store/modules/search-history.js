const state = {
	searchHistory:[]
}

const mutations = {
	saveSearchHistory(state,payload){
		state.searchHistory = payload.query
	}
}

const actions = {
	saveSearchHistory({commit},payload){
		commit("saveSearchHistory",payload)
	}
}
export default {
	state,
	mutations,
	actions
}
