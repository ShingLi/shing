import axios from "axios"

const state = {
	temp_name:'',
	temp_email:'',
	temp_pwd:''

}
const mutations = {
	updateData(state,payload){
		switch(payload.name){
			case 'email':
				state.temp_email = payload.value;
				break;
			case 'pwd':
				state.temp_pwd   = payload.value;
				break;
		}
	}
}

const actions ={
	login({commit},payload){
		// console.log(payload)
		return new Promise((resolve,reject)=>{

			axios.post('/test/WX/index.php/qibao/index/test',{
				email:payload.email,
				pwd:payload.pwd
			}).then(res=>{

				const data = res.data
				// 服务返回Token
				// 然后把Token 存到vuex中
				// 下次登录的时候路由beforeEach  判断是否有Token  有的话直接next() 没遇到话拦截跳转
				console.log(data)
				resolve()//这里需要调用下好给dispath返回一个promise();
			})

		})
	}
}


export default {
	state,
	mutations,
	actions,
}
