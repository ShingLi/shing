<template>
	<tabbar v-model='select'>
		<tabbar-item id='index'>
			<img src="../../common/images/ic_tab_home_normal.png" alt="" slot='icon-normal'>
			<img src="../../common/images/ic_tab_home_active.png" alt="" slot='icon-active'>
			首页
		</tabbar-item>
		<tabbar-item id='audioBook'>
			<img src="../../common/images/ic_tab_subject_normal.png" alt="" slot='icon-normal'>
			<img src="../../common/images/ic_tab_subject_active.png" alt="" slot='icon-active'>

			书影音
		</tabbar-item>
		<tabbar-item id='broadCast'>
			<img src="../../common/images/ic_tab_status_normal.png" alt="" slot='icon-normal'>
			<img src="../../common/images/ic_tab_status_active.png" alt="" slot='icon-active'>

			广播
		</tabbar-item>

		<tabbar-item id='group'>
			<img src="../../common/images/ic_tab_group_normal.png" alt="" slot='icon-normal'>
			<img src="../../common/images/ic_tab_group_active.png" alt="" slot='icon-active'>

			小组
		</tabbar-item>
		<tabbar-item id='mine'>
			<img src="../../common/images/ic_tab_profile_normal.png" alt="" slot='icon-normal'>
			<img src="../../common/images/ic_tab_profile_active.png" alt="" slot='icon-active'>

			我的
		</tabbar-item>

	</tabbar>
</template>
<script>
	import tabbar from '@/base/tabbar/tabbar'
	import tabbarItem from '@/base/tabbar-item/tabbar-item'
	export default{
		
		data(){
			return {
				select:'index'
			}
		},
		components:{
			tabbar,
			tabbarItem
		}
	}
</script>
<style src='../../common/less/tabbar.less' lang='less'></style>
