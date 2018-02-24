import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import scrollY from './modules/scrollY'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		login,
		scrollY
	}
})