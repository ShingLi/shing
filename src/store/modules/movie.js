const state ={
    movie:{}
}

const mutations ={
    setMovie(state,payload){
        state.movie= payload
    }
}
const getters={
    movie:state=>state.movie
}


export default {
    state,
    mutations,
    getters
}
