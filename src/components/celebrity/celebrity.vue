<template>
	<div class="celebrity-wrap" v-if='celebrity.avatars'>
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
					<div>
						<img v-lazy='replaceUrl(celebrity.avatars.large)'>
					</div>
				</div>
				<!-- info -->
				<div class="celebrity-info">
					<div class="name">
						<p v-text='celebrity.name'></p>
						<span v-text='celebrity.name_en' class="en_name"></span>
						<div class="collect" @click='hasCollect' :class="{collected:hasCollected}">
							<i class="icon iconfont icon-shoucang" v-if='!hasCollected'></i>
							<span>{{text}}</span>
						</div>
					</div>
					<div class="summary_wrap">
						<h5 class="title">个人简介</h5>
						<p class="summary">{{celebrity.summary}}</p>
					</div>
				</div>
				<!-- works -->
				<div class="works">
					<h2>代表作品</h2>
					<scroll :data='arr'
							:scrollX='scrollX'

					>
						<ul ref='listWrap'>
							<li v-for='(item,index) of arr' :key='index'>
								<img width="90" height="120" v-lazy='replaceUrl(item.subject.images.large)'>
								<p></p>
								<span></span>
							</li>
						</ul>
					</scroll>
				</div>
			</div>
		</scroll>
	</div>
</template>
<script>
	import scroll from '@/base/scroll/scroll'
	import { celebrity } from "@/api/get-movie/get-movie"
	import { mapGetters , mapState } from 'vuex'
	import { Toast } from 'mint-ui'
	export default{
		name:'celebrity',
		data(){
			return{
				celebrity:{},
				pulldown:true,//
				text:"收藏",
				hasCollected:0,
				arr:[],
				scrollX:true,
			}
		},
		created(){
			this._getCelebrity();
		},
		updated(){
			this.$refs.scroll.refresh();
			this._initWidth();
		},
		components:{ scroll },
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
					this.celebrity = res,
					this.arr = this.celebrity.works

				}).catch(err=>{
					Toast({
						message:'加载失败',
						duration:3000,
						iconClass:'icon iconfont icon-shibai'
					})
				})
			},
			replaceUrl(srcUrl) {
				// 图片防盗链
                if (srcUrl !== undefined) { // 图片防盗链处理
                    return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''));
                }
            },
			hasCollect(){
				// 切换收藏和已收藏
				this.hasCollected=!this.hasCollected?1:0
				this.text==="收藏"?this.text='已收藏':this.text="收藏"
			},
			// 计算宽度啊
			_initWidth(){
				const num = this.arr.length,
					w=  90,
					r=8;
				// console.log(num);
				const _width = (w+r)*num-8;
				this.$refs.listWrap.style.width = _width +"px"
			}
		}
	}
</script>
<style lang='less' src='./celebrity.less' scoped></style>
