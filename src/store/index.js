import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import scrollY from './modules/scrollY'
import movie from './modules/movie' //电影详情的movie

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		login,
		scrollY,
		movie
	}
})
