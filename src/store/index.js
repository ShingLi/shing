import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import login from './modules/login'
// import footer from './modules/footer'
import searchHistory from './modules/search-history'
import movie from './modules/movie' //电影详情的movie

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		index,
		login,
		movie,
		searchHistory
	}
})
