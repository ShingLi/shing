<template>
	<div class="celebrity-wrap">
		<div class="head">
			<div style="display:inline-block" @click='$router.go(-1)'>
				<span class="arrow">
                	<i class="icon iconfont icon-fanhui1"></i>
            	</span>
				<p>影人</p>
			</div>
		</div>
		<!--  -->
		<scroll
			:data='celebrity'
			ref='scroll'
			class='list-scroll'
			:pulldwon = 'pulldown'
			>
			<div class="scroll-wrapper">
				<div class="movie-pic">
					<div v-if='celebrity.avatars'>
						<img v-lazy='replaceUrl(celebrity.avatars.large)'>
					</div>
				</div>
				<!-- info -->
				<div class="celebrity-info">
					<div class="name">
						
					</div>
				</div>
			</div>
		</scroll>
	</div>
</template>
<script>
	import scroll from '@/base/scroll/scroll'
	import { celebrity } from "@/api/get-movie/get-movie"
	import { mapGetters , mapState } from 'vuex'


	export default{
		name:'celebrity',
		data(){
			return{
				celebrity:{},
				pulldown:true,//

			}
		},
		created(){
			this._getCelebrity();
		},
		mounted(){
			// this.$nextTick(()=>{
			// 	this.$refs.scroll.refresh();
			// })
			 
		},
		components:{scroll},
		computed:{
			...mapState({
					celebrityId :state=>state.movie.celebrityId
			})
		},
		methods:{
			_getCelebrity(){
				if(!this.celebrityId){
					this.$router.push({path:'/audioBook'})
					return 
					// 当前页面刷新就返回上一级
				}
				celebrity(this.celebrityId).then(res=>{
					this.celebrity = res

				}).catch(err=>{
					console.log(err);
				})
			},
			replaceUrl(srcUrl) {
                if (srcUrl !== undefined) { // 图片防盗链处理
                    return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''));
                }
            }
		}
	}
</script>
<style lang='less' src='./celebrity.less' scoped></style>

