<template>
	<m-tabbar v-model='select'>
		<m-tabbar-item id='index'>
			<img src="../../assets/images/ic_tab_home_normal.png" alt="" slot='icon-normal'>
			<img src="../../assets/images/ic_tab_home_active.png" alt="" slot='icon-active'>
			首页
		</m-tabbar-item>
		<m-tabbar-item id='audioBook'>
			<img src="../../assets/images/ic_tab_subject_normal.png" alt="" slot='icon-normal'>
			<img src="../../assets/images/ic_tab_subject_active.png" alt="" slot='icon-active'>

			书影音
		</m-tabbar-item>
		<m-tabbar-item id='broadCast'>
			<img src="../../assets/images/ic_tab_status_normal.png" alt="" slot='icon-normal'>
			<img src="../../assets/images/ic_tab_status_active.png" alt="" slot='icon-active'>

			广播
		</m-tabbar-item>

		<m-tabbar-item id='group'>
			<img src="../../assets/images/ic_tab_group_normal.png" alt="" slot='icon-normal'>
			<img src="../../assets/images/ic_tab_group_active.png" alt="" slot='icon-active'>

			小组
		</m-tabbar-item>
		<m-tabbar-item id='mine'>
			<img src="../../assets/images/ic_tab_profile_normal.png" alt="" slot='icon-normal'>
			<img src="../../assets/images/ic_tab_profile_active.png" alt="" slot='icon-active'>

			我的
		</m-tabbar-item>

	</m-tabbar>
</template>
<script>
	import mTabbar from '@/components/m-tabbar'
	import mTabbarItem from '@/components/m-tabbar-item'
	export default{
		name:"index",
		data(){
			return {
				select:'index'
			}
		},
		components:{
			mTabbar,
			mTabbarItem
		}
	}
</script>
<style src='../../assets/less/tabbar.less' lang='less'></style>
