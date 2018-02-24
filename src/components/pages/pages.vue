<template>
	<div>
	<keep-alive>
			<router-view></router-view>
	</keep-alive>

    	<footer>
      		<tabbar></tabbar>
    	</footer>
	</div>
</template>
<script>
	import tabbar from '@/components/common/tabbar'
	export default{
		name:'pages',
		
		components:{
			tabbar
		}

	}
</script>
<style lang='less'>

</style>
