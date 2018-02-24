<template>
	<div class="loadmore">
		<img src="../../assets/images/ico/loading_green.gif" alt="" v-if='show'>
		<div class="nomore" v-else>
			<span>没有更多数据了啊·····</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'loadmore',
		props:{
			show:{
				type:Boolean,
				default:false
			}
		},
		methods:{

		}
	}
</script>
<style scoped lang='less'>
	div.loadmore{
		display: flex;
		justify-content: center;
		padding: 2rem;

		img{
			width: 3.5rem;
			height: 3.5rem;
		}
	}
</style>
