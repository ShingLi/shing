import axios from "axios"

const state = {
	temp_name:'',
	temp_email:'',
	temp_pwd:'',
	login:"",

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
	},
	// 登录 2018/3/22
	login(state,payload){
		state.login = payload
	}
}

const getters = {
	login:state=>state.login  //获取登录状态
}

const actions ={
	login({commit},payload){
		// console.log(payload)
		return new Promise((resolve,reject)=>{

			axios.post('/test/WX/index.php/qibao/index/test',{
				email:payload.email,
				pwd:payload.pwd
			}).then(res=>{
				const data = res.data.flag; //1正确 0 //密码错误 /2 用户名不存在 同事写的php 返回值
				let err = function(){
					commit('login',data)
					reject()
				}
				switch(data){
					case 0 :
						err();
						break;
					case 1 :
						commit('login',data) //这里是同步函数 这段执行完成才会执行下一步
						// alert(3)
						resolve();
						break;
					case 2 :
						err();
						break
				}
				// 服务返回Token
				// 然后把Token 存到vuex中
				// 下次登录的时候路由beforeEach  判断是否有Token  有的话直接next() 没遇到话拦截跳转

				// 	resolve()
				 //这里需要调用下好给dispath返回一个promise();
			})

		})
	}
}


export default {
	state,
	mutations,
	actions,
}
