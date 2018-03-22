<template>
	<div class="login-wrap">
		<div class="back_wrap">
			<a @click="$router.go(-1)">
				<img src="../../common/images/ic_bar_back_green.png" alt="" class="default_back">
			</a>
		</div>
		<form @submit.prevent='submit'>
			<div class="form-email group">
				<label for="">邮箱:</label>
				<input type="text"
						name='email'
						:value="email"
						@input='updateData'
						v-validate="'required|email'"
						:class="{'input': true, 'is-danger': errors.has('email') }"

				>

			</div>
			<div class="form-pwd group">
				<label for="">密码:</label>
				<template v-if = "loginType === 'pwd'">
					<input type= "password"
							name='pwd'
							:value='pwd'
							@input='updateData'

					>
				</template>
				<template v-if = "loginType==='text'">
					<input type= "text"
							name='pwd'
							:value='pwd'
							@input='updateData'

					>
				</template>
				<span class="show-pwd" :class="{show:isShow}" @click='showPwd'></span>
			</div>
			<div class="login-button">
				<x-button type="primary" action-type="submit">登录</x-button>
			</div>
		</form>
		<div class="forget_pwd">
			<router-link to="" class='forget'>忘记密码？</router-link>
			<router-link :to="{name:'index'}" class='back_home'>注册账号</router-link>
		</div>
		<!-- 表单验证 -->
		<toast v-model="flag" type="text" width='10em'>{{err}}</toast>
	</div>
</template>
<script>
import axios from "axios"
	import { XButton , Toast } from 'vux'
	import { mapState ,mapMutations, mapActions} from 'vuex'
	export default{
		name:'login',
		data(){
			return {
				loginType:'pwd',
				isShow:0,
				flag:false,
				err:''
			}
		},
		computed:{
			...mapState({
				// 表单处理,读取vuex中存储的状态信息
				email:state=>state.login.temp_email,
				pwd:state=>state.login.temp_pwd

			})

		},
		components:{ XButton , Toast},
		methods:{
			showPwd(){
				this.isShow = this.isShow ? 0 : 1;
				this.isShow ?this.loginType='text':this.loginType='pwd'
			},
            //因为VUE更新后v-model 这样写如数据绕过mutations VUE会报错说写入数据
			updateData(e){
				this.$store.commit({
					type:'updateData',
					name:e.target.name,
					value:e.target.value
				})
			},

			submit:function(){
				// 表单的验证部分 这段是垃圾代码······
				let email = this.email,
					pwd   = this.pwd,
					testEmail=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
				if(this.email===""||!testEmail.test(email)){
					this.flag = true
					this.err='请填写邮箱~~'
					return false
				}
				if(this.pwd.length===0){
					this.flag = true
					this.err='请填写密码'
					return false
				}
				//
				this.$store.dispatch({
					// 对象的形式分发
					type:'login',
					email:this.email,
					pwd :this.pwd

				}).then(()=>{
					this.$router.push({path:'/'})
				}).catch(err=>{
					// 登录失败
					this.flag = true
					this.$nextTick(()=>{
						this.err='账号密码错误'

					})
					
				})
			},

		}

	}
</script>
<style lang='less' scoped>
	@import "../../common/less/header";
	@import "../../common/less/login";
</style>
