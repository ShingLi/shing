<template>
	<div>
		<m-header title='' :bg='true' fixed>
			<div class="search-warp">
				<input class="searchBtn" type="submit">
				<input type="text" class="search" placeholder="请输入搜索内容"
					v-model='zhen'
					@focus="$router.push({path:'/search'})"
				>
				<input type="file" class="search-img">
			</div>
			<a href="" slot='right'>
				<img src="../../../common/images/ic_chat_white.png" alt="" class="m-icon-img">
			</a>
		</m-header>
		<!-- scroll -->
		<scroll
				class="list-scroll"
				:data="events"
				:pullup = 'pullup'
				@scrollToEnd = 'loadMore'
				:listenScroll= 'true'
				:probeType = "probeType"
				@scroll = "scroll"
				ref='full'
		>
			<div class="wrapper">
				<div class="content">
					<!-- Carousel-->
						<swiper :pagination="true" ref='swipers'>
							<template slot='swiper-img'>
								<div class="swiper-slide" v-for="(item,index) in bannerList">
									<img :src="item.src" alt="" class="banner_index">
								</div>
							</template>
						</swiper>
					<!-- cell -->
						<cell title='设置' is-link to="/emplace">
							<img src="../../../common/images/ic_mine_notification.png" alt="" class="m-cell-icon" slot='icon'>
						</cell>
					<!-- 媒体数据部分 -->
						<media-cell :author="item.category_name" 
									:source="item.subcategory_name"  
									v-for='(item,index) of events' 
									:key="index" v-cloak
									@click.native='selectList(item)'
						>
							<div class="m-media_cell-title text" slot='title'>{{item.title}}</div>
							<div class="m-media_cell-detail text" slot='detail'>{{item.content}}</div>
							<img alt="" v-lazy='item.image_hlarge'>
						</media-cell>
					<!-- 拉动的时候刷新数用于加载的tips容器 -->

						<loading :show="show"></loading>
				</div>
			</div>
			<!-- 顶部的内容 -->
			<!-- <div slot="top" class="mint-loadmore-top">
      			<span>因上努力，果上随缘！</span>
    		</div> -->
		</scroll>
	</div>
</template>
<script>
	import mHeader from '@/base/header/header'
	import swiper  from "@/base/swiper/swiper"
	import cell  from "@/base/cell/cell"
	import mediaCell from "@/base/media-cell/mediaCell"
	// 加载组件
	import loading from "@/base/loadmore/loadmore"
	// awesome vue无限滚动的组件
	//import infiniteLoading from 'vue-infinite-loading'
	// 使用mint的toast组件
	import { Toast , Loadmore} from 'mint-ui'

// 纠结想来想去还是使用better-scroll
	import scroll from '@/base/scroll/scroll'
	import axios from "axios"
	import getCellList from '@/api/index/getCellList'
	import { mapState , mapMutations } from 'vuex'
	const cellListCount = 10
	export default {
		name:'index',
		data(){
			return {
				zhen:"",//v-model绑定的双向数组
				bannerList:[],//Carousel
				events:[],//豆瓣API返回的数组
				skip:0,//加载的步骤
				pullup:true,//允许下拉加载
				topStatus:0, //mint-ui 的上拉状态
				loadingFlag:true,//每次加载完成后成功的标志
				show:true,//true是默认有数据的
				scrollY:0,//默认的滚动位置

			}
		},

		components:{ mHeader,swiper,cell,mediaCell,loading,'mtLoadmore':Loadmore,scroll },

		created(){
			this.loadData();
			this.probeType =3
		},
		mounted(){
			// console.log(this.$route.query.user)
		},
		computed:{
			...mapState({
				pageIndex :state=>state.scrollY.index,//目前点击在首页

			})
		},

		methods:{

			loadData(){

				axios.all(
				[
					axios.get("/static/data/data_banner.php"),
					axios.get("/static/data/data_mediaCell.php")
				])
				.then(axios.spread((banner,cell)=>{
					this.bannerList = banner.data
					let that = this;
					// 实例的方法     vm.$nexTick()
					that.$nextTick(function(){
						// 坑啊
						that.$refs.swipers.swiper();
					})
					this.events  = cell.data
					//

					//触发进入页面的模态框关闭欢迎页
					this.$emit('isShow');


				})).catch(err=>{
					console.log(err)
					alert('网络错误，不能访问！')
				})
			},
			loadMore(){
				if(!this.loadingFlag)return ;//没有加载完成不加载
				this.loadingFlag = false;
				if(!this.show){
					this.loadingFlag = true;
					return
				}
				
				getCellList(this.skip,cellListCount).then(res=>{
                    // console.log(res.events)
                    this.skip += cellListCount;
					this.events = this.events.concat(res.events)
                    // console.log(this.events)

					// 检查有没有数据
					this._checkMore(res)
					// console.log(res);
					this.loadingFlag = true;

				}).catch(error=>{
					Toast({
						message:'加载失败',
						duration:3000,
						iconClass:'icon iconfont icon-shibai'
					})
				})

			},
			_checkMore(data){
				if(!data.events.length){
					this.show = false;//没有数据了
				}
				this.loadingFlag = false;

			},
			//记录滚动的位置
			scroll(pos){
				this.scrollY = pos.y;

			},
			scrollTo(){
				this.$refs.full.refresh();//确保获得正确的高度
				this.$refs.full.scrollTo(0,this.scrollY)//切换回来的时候保存之前的浏览记录

			},
			selectList(item){
				this.saveListId(item.id)
				this.$router.push({
					path:`/list/${item.id}`
				})
			},
			...mapMutations([
					"saveListId"
				])

		},
		beforeRouteLeave(to,from,next){
			// 这段代码当初的想法是从index切换其他页面的时候吧当前页面的y记录下来
			// 然后提交vuex里面
			//然后使用守卫导航 afterEach((to,from)=>{
			// 		再次进入index的时候设置为之前的高度,但是发现keep-alive有个钩子函数
			//activated()这个神器
			//
			// })

			next()
		},
		activated(){
			// keep-alive 的生命周期钩子 再次加载组件的时候进行调用
			this.$refs.swipers.swiper(); //这里防止搜索组件返回的时候导致banner图不轮播
			this.scrollTo()
		}

	}
</script>
<style lang='less' scoped>
	div.search-warp{
		height: 2.8rem;
		background-color: #fff;
		display: flex;
		display: --webkit-flex;
		border-radius: .4rem;
		width: 90%;
		margin-left: 1rem;
		align-items: center;
		justify-content: space-around;
		.searchBtn{
			border: none;
			outline: none;
			display: inline-block;
			background: url('../../../common/images/ic_search_gray.png')  no-repeat;
			text-indent: -99px;
			width: 20px;
			height: 20px;
			background-size: cover;
		}
		.search{
			border:none;
			outline: none;
			width: 65%;
			height: 90%;
			font-size: 1rem;
		}
		.search-img{
			background:url('../../../common/images/ic_scan_gray.png');
			background-repeat: no-repeat;
			text-indent:-99px;
			background-size: cover;
			width: 25px;
			height: 25px;
			border:none;
			outline: none;
			overflow:hidden;

		}
	}
	.list-scroll{
		position: absolute;
		top: 3.7rem;
		bottom:4.1rem;
		overflow: hidden;
		width: 100%;

	}
	.wrapper{
		.swiper-container {
    		width: 100%;
      		height: 100%;
      		margin-left: auto;
      		margin-right: auto;
    	}
    	.swiper-slide {
      		text-align: center;
      		font-size: 18px;
		    background: #fff;

		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: -webkit-flex;
		    display: flex;
		    -webkit-box-pack: center;
		    -ms-flex-pack: center;
		    -webkit-justify-content: center;
		   	justify-content: center;
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    -webkit-align-items: center;
		    align-items: center;
    	}
	}
	.is-height{
		height: 563px;
	}

</style>
