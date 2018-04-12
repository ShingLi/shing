<template>
	<div class="broadCast_wrapper">
		<m-header title='广播' class='head'>
			<a  slot='right' @click="$router.push({path:'/search'})">
				<img src="../../../common/images/ic_status_search_user.png" alt="" class="m-icon-img is-margin">
			</a>
			<a href="javascript:void" slot='right'>
				<img src="../../../common/images/ic_chat_green.png" alt="" class="m-icon-img">
			</a>
		</m-header>
		<!-- 滚动部分 -->
		<scroll class='list-scroll'>
			<div class="wrapper">
				<!-- 图书 -->
				
			</div>
		</scroll>
	</div>
</template>
<script>
	import MHeader from 'base/header/header'
	import scroll from 'base/scroll/scroll'
	export default {
		name:'broadCast',
		components:{
			MHeader,
			scroll
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../common/less/border-1px';
	.broadCast_wrapper{
		.head{
			.border-1px(#ccc);
		}
	}
</style>
