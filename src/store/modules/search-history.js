const state = {
	searchHistory:[]
}

const mutations = {

}

const actions = {
	saveSearchHistory({commit},payload){
		console.log(payload.query);
	}
}
export default {
	state,
	mutations,
	actions
}
