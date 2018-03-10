// import { saveComment} from "../../common/js/cache"
const state ={
    movie:{},
    // favoriteComments:loadComment()
}

const mutations ={
    setMovie(state,payload){
        state.movie= payload
    },
    SET_FAVORITE_COMMENTS(state,comments){
        console.log(comments);
        // state.favoriteComments = comments;

    },
    hehe(state,payload){
        console.log(payload);
    }
}

const getters={
    movie:state=>state.movie
}

const actions = {
    markComment({commit},id){
        commit('hehe',id)
    }
}
export default {
    state,
    mutations,
    getters,
    actions
}
