<template>
	<div class="reviews-wrapper">
		<div class="reviews-content">
			<navbar :items = "items" @switchs="selectItem" :currentIndex='currentIndex'></navbar>
			<!-- 短评列表 -->
			<div class="comments" v-show="currentIndex===0">
				<comments :popular_comments='movieDetail.popular_comments'></comments>
			</div>
			<!-- 影评 -->
			<div class="reviews" v-if="currentIndex===1">
				<reviews :popular_reviews='movieDetail.popular_reviews'></reviews>
			</div>
		</div>
	</div>
</template>
<script>
	import navbar from "@/base/navbar/navbar"
	import comments from "@/base/movie-reviews/comments/comments"

	export default {
		name:'movie-reviews',
		props:{
			movieDetail:{
				type:Object,
				default:{}
			}
		},
		data(){
			return {
				items:[{id:"0",name:'短评'},{id:"1",name:'影评'}],
				currentIndex:0
			}
		},
		components:{
			navbar,
			comments,
			reviews:()=>import (/*webpackChunkName:'reviews'*/'@/base/movie-reviews/reviews/reviews')
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
				.comments,.reviews{
					margin-top: 20px;
				}
		}
	}
</style>
