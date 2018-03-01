<template>
	<div>
	<keep-alive>
			<router-view @isShow = 'isShow'></router-view>
	</keep-alive>

    	<footer>
      		<tabbar></tabbar>
    	</footer>
	</div>
</template>
<script>
	import tabbar from '@/components/footer/tabbar'

	export default{
		name:'pages',

		components:{
			tabbar
		},
		methods:{
			isShow(){
				this.$emit('isShow')
			}
		}

	}
</script>
