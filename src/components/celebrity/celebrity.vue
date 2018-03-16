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
			>
			<div class="scroll-wrapper">
				<div class="movie-pic">
					<div v-if='celebrity.avatars'>
						<img v-lazy='replaceUrl(celebrity.avatars.large)'>
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
				celebrity:{}
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
<style lang='less' scoped>
	.celebrity-wrap{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		background-color:rgba(85,85,85,.6);
	
		.head{
			position: fixed;
			top:0;
			width: 100%;
			height: 40px;
			z-index: 10;
			background-color:rgba(85,85,85,.6);
				.arrow{
					display: inline-block;
					margin-left: .6rem;
					.icon{
						color: #fff;
						font-size: 1.7rem;
						display: inline-block;
						line-height: 40px;
					}
				}
				p{
					display: inline-block;
					line-height: 40px;
					vertical-align: top;
					font-size: 12px;
					color: #fff;
					margin-left: 10px;
				}
		}
		.list-scroll{
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
			overflow: hidden;
				.scroll-wrapper{
					
					.movie-pic{
						padding: 50px 0 20px 0;
						text-align: center;
						background-color: #555;
							img{
								width: 40%;
								border-radius: 4px;
							}
					}
				}
		}
	}
</style>
