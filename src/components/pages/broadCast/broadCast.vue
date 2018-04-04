<template>
	<div>
		<m-header title='广播'>
			<a  slot='right' @click="$router.push({path:'/search'})">
				<img src="../../../common/images/ic_status_search_user.png" alt="" class="m-icon-img is-margin">
			</a>
			<a href="javascript:void" slot='right'>
				<img src="../../../common/images/ic_chat_green.png" alt="" class="m-icon-img">
			</a>
		</m-header>
	</div>
</template>
<script>
	import mHeader from '@/base/header/header'
	export default {
		name:'broadCast',
		components:{
			mHeader
		}
	}
</script>
