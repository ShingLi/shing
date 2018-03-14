<template>
	<div class="celebrity-wrap">
		<div class="head">
			<span class="arrow" @click='$router.go(-1)'>
                <i class="icon iconfont icon-fanhui1"></i>
            </span>
			<p>影人</p>
		</div>
		<!--  -->
		<scroll

			>
			<div class="scroll-wrapper">
				<div class="movie-pic">
					<div>
						<img src="https://images.weserv.nl/?url=img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg" alt="">
					</div>
				</div>
			</div>
		</scroll>
	</div>
</template>
<script>
	import scroll from '@/base/scroll/scroll'
	import {celebrity} from "@/api/get-movie/get-movie"
	export default{
		name:'celebrity',
		data(){
			return{
				
			}
		},
		created(){
			this._getCelebrity();
		},
		components:{scroll},
		methods:{
			_getCelebrity(){

				celebrity(1274761).then(res=>{
					console.log(res);
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>
<style lang='less' scoped>
	.celebrity-wrap{

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
			.scroll-wrapper{
				position: fixed;
				width: 100%;
				top: 0;
				.movie-pic{
					padding: 50px 0 20px 0;
					text-align: center;
					background-color: #555;
						img{
							width: 40%;
						}
					}
			}
	}
</style>
