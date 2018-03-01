<template>
	<div>
		<m-header title='小组'>
			<a href="javascript:void" slot='right'>
				<img src="../../../assets/images/ic_actionbar_search_icon.png" alt="" class="m-icon-img is-margin">
			</a>
			<a href="javascript:void" slot='right'>
				<img src="../../../assets/images/ic_chat_green.png" alt="" class="m-icon-img">
			</a>
		</m-header>
	</div>
</template>
<script>
	import mHeader from '@/base/header/header'
	export default {
		name:'group',
		components:{
			mHeader
		}
	}
</script>