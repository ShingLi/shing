const state ={
	index:'',
	scrollY:''
}

const mutations ={
	index:state=>state.index =0,
	scrollY(state,payload){
		state.scrollY = payload.scrollY
	}
}
export default {
	state,
	mutations
}