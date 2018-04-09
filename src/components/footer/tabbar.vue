<template>
	<tabbar v-model='select'>
		<tabbar-item id='index'>
			<img src="./ic_tab_home_normal.png"  slot='icon-normal'>
			<img src="./ic_tab_home_active.png"  slot='icon-active'>
			首页
		</tabbar-item>
		<tabbar-item id='audioBook'>
			<img src="./ic_tab_subject_normal.png"  slot='icon-normal'>
			<img src="./ic_tab_subject_active.png"  slot='icon-active'>

			书影音
		</tabbar-item>
		<tabbar-item id='broadCast'>
			<img src="./ic_tab_status_normal.png"  slot='icon-normal'>
			<img src="./ic_tab_status_active.png"  slot='icon-active'>

			广播
		</tabbar-item>

		<tabbar-item id='group'>
			<img src="./ic_tab_group_normal.png"  slot='icon-normal'>
			<img src="./ic_tab_group_active.png"  slot='icon-active'>

			小组
		</tabbar-item>
		<tabbar-item id='mine'>
			<img src="./ic_tab_profile_normal.png" slot='icon-normal'>
			<img src="./ic_tab_profile_active.png" slot='icon-active'>

			我的
		</tabbar-item>

	</tabbar>
</template>
<script>
	import tabbar from 'base/tabbar/tabbar'
	import tabbarItem from 'base/tabbar-item/tabbar-item'
	export default{
		
		data(){
			return {
				select:'index'
			}
		},
		components:{
			tabbar,
			tabbarItem
		},
		created(){

			let localData = window.sessionStorage.getItem('navTabIndex')
			if(!localData){
				this.select = 'index';
				return false
			}
			this.select = localData
		},
		watch:{
			select:function(val,oldVal){
				window.sessionStorage.setItem('navTabIndex',val)
			}
		}

	}
</script>
<style src='../../common/less/tabbar.less' lang='less'></style>
