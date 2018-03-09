<template>
	<div class="reviews-wrapper">
		<div class="reviews-content">
			<navbar :items = "items" @switchs="selectItem" :currentIndex='currentIndex'></navbar>
			<!-- 短评列表 -->
			<div class="comments" v-show="currentIndex===0">
				
			</div>
			<!-- 影评 -->
			<div class="reviews" v-show="currentIndex===1">
				
			</div>
		</div>
	</div>
</template>
<script>
	import navbar from "@/base/navbar/navbar"
	export default {
		name:'reviews',

		data(){
			return {
				items:[{id:"0",name:'短评'},{id:"1",name:'影评'}],
				currentIndex:0
			}
		},
		components:{
			navbar
		},
		methods:{
			selectItem(index){
				this.currentIndex = index;
			}
		}

	}
</script>
<style lang="less" scoped>
	@import "../../common/less/color.less";
	.reviews-wrapper{
		background-color: @base-white-color;
		padding:30px 15px 0px 15px;
		
		
		.reviews-content{
			position: relative;
				&::before{
					position: absolute;
					width: 100%;
					content: "";
					height: 1px;
					transform: scaleY(.5);
					background-color: @default-screen-color;
				}
				.comments{
					height: 100px;
				}
				.reviews{
					height: 100px;

				}
		}
	}
</style>