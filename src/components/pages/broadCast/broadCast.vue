<template>
	<div class="broadCast_wrapper">
		<m-header title='广播' class='head'>
			<a  slot='right' @click="$router.push({path:'/search'})">
				<img src="../../../common/images/ic_status_search_user.png"  
				class="m-icon-img is-margin">
			</a>
			<a href="javascript:void" slot='right'>
				<img src="../../../common/images/ic_chat_green.png" class="m-icon-img">
			</a>
		</m-header>
		<!-- 滚动部分 -->
		<scroll class='list-scroll'>
			<div class="wrapper">
				<div class="findWorld">
					<img src="./ic_status_anonymous_header.png" width='80' height="70">
					<div class="top_text">
						<h2>发现有趣的人</h2>
						<span>关注他们,发现更大的世界</span>
					</div>
				</div>
				<!-- card 卡片 -->
				<div class="card">
					<div class="header">
						<div class="avatar">
							<img src="" alt="">
						</div>
						<div class="info">
							
						</div>
					</div>
				</div>
			</div>
		</scroll>
	</div>
</template>
<script>
	import MHeader from 'base/header/header'
	import scroll from 'base/scroll/scroll'
	export default {
		name:'broadCast',
		data(){

		},
		created(){

		},
		components:{
			MHeader,
			scroll
		},
		methods:{

		}
	}
</script>
<style lang="less" src='./index.less' scoped></style>
