<template>
	<div>
		<m-header title='小组'>
			<a slot='right' @click="$router.push({path:'/search'})">
				<img src="../../../common/images/ic_actionbar_search_icon.png" alt="" class="m-icon-img is-margin">
			</a>
			<a href="javascript:void" slot='right'>
				<img src="../../../common/images/ic_chat_green.png" alt="" class="m-icon-img">
			</a>
		</m-header>
	</div>
</template>
<script>
	import mHeader from 'base/header/header'
	export default {
		name:'group',
		metaInfo:{
			title:"小组"
		},
		components:{
			mHeader
		}
	}
</script>
