const state ={
	listId:"",
	scrollY:''
}

const mutations = {
	saveListId(state,payload){
		state.listId = payload
	},
	saveScrollY(state,payload){
		console.log(payload)
		state.scrollY = payload.Y
	}
}


export default {
	state ,
	mutations ,
	
}