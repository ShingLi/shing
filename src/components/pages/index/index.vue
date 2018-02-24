<template>
	<div>
		<m-header title='' :bg='true' fixed>
			<div class="search-warp">
				<input class="searchBtn" type="submit">
				<input type="text" class="search" placeholder="请输入搜索内容"
					v-model='zhen'

				>
				<input type="file" class="search-img">
			</div>
			<a href="" slot='right'>
				<img src="../../../assets/images/ic_chat_white.png" alt="" class="m-icon-img">
			</a>
		</m-header>
		<!-- 滚动的部分 -->
		<mt-loadmore :top-method='pulldown' ref='loadmore' @top-status-change='handleTopChange'>
			<div class="wrapper">
				<div class="content">
					<!-- 轮播图部分 -->
						<swiper :pagination="true" ref='swipers'>
							<template slot='swiper-img'>
								<div class="swiper-slide" v-for="(item,index) in bannerList">
									<img :src="item.src" alt="" class="banner_index">
								</div>
							</template>
						</swiper>
					<!-- cell部分的格局 -->
						<cell title='设置' is-link to="/emplace">
							<img src="../../../assets/images/ic_mine_notification.png" alt="" class="m-cell-icon" slot='icon'>
						</cell>
					<!-- 媒体数据部分 -->
						<media-cell :author="item.author" :source="item.category_name"  v-for='(item,index) of events' :key="index" v-cloak>
							<div class="m-media_cell-title text" slot='title'>{{item.title}}</div>
							<div class="m-media_cell-detail text" slot='detail'>{{item.content}}</div>
							<img :src="item.image_hlarge" alt="">
						</media-cell>
							<!-- 拉动的时候刷新数用于加载的tips容器 -->
						<infinite-loading ref='infiniteLoading' @infinite="loadmore">
							<loadimg :show="true" slot="spinner"></loadimg>
						</infinite-loading>
						<!-- error -->
				</div>
			</div>
			<!-- 顶部的内容 -->
			<div slot="top" class="mint-loadmore-top">
      			<span>因上努力，果上随缘！</span>
    		</div>
		</mt-loadmore>
	</div>
</template>
<script>
	import mHeader from '@/components/common/header'
	import swiper  from "@/components/common/swiper"
	import cell  from "@/components/common/cell"
	import mediaCell from "@/components/common/mediaCell"
	// 自定义的加载图标
	import loadimg from "@/components/common/loadmore"
	// 无线滚动
	import infiniteLoading from 'vue-infinite-loading'
	// 使用mint的toast组件
	import { Toast } from 'mint-ui'
	import { Loadmore } from 'mint-ui'
	import axios from "axios"

	export default {
		name:'index',
		data(){
			return {
				zhen:"",
				bannerList:[],
				events:[],
				skip:0,
				topStatus:0 //mint-ui 的上拉状态
			}
		},

		components:{
			mHeader,
			swiper,
			cell,
			mediaCell,
			loadimg,
			infiniteLoading,
			'mtLoadmore':Loadmore
		},

		created(){
			this.loadData();
			// this.loadMore()
		},

		computed:{
			Show(){
				return true
			},
			pullup(){
				return true
			}
		},

		methods:{
			pulldown:function(){

				this.$refs.loadmore.onTopLoaded()

			},

			handleTopChange:status=>{
				this.topStatus = status
			},

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

			loadmore($state){
				let that = this.skip;

				axios.get("/api/event/list?loc=108288&start="+that+'&count=5')
					.then(res=>{
							console.dir(res)
							if(res.data.events.length){
								this.skip+=5;
								this.events = this.events.concat(res.data.events)
								$state.loaded();
							}else{
								$state.complete();
							}
					}).catch(err=>{
						Toast({
							message:'加载失败',
							duration:3000,
							iconClass:'icon iconfont icon-shibai'
						})
					})
			}
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
			background: url('../../../assets/images/ic_search_gray.png')  no-repeat;
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
			background:url('../../../assets/images/ic_scan_gray.png');
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
	.wrapper{
		margin-top: 3.7rem;
		padding-bottom:4.09rem;
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
