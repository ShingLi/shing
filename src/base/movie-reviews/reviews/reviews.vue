<template>
    <ul class="reviews-wrap">
    	<li class="reviews-item" v-for='(item,index) of popular_reviews'>
    		<p class="title">{{item.title}}</p>
    		<div>
    			<img v-lazy='item.author.avatar' height="25" width="25">
    			<span class="name">Ada Wang</span>
    			<star :score='item.rating.value' :size='24'></star>
    		</div>
    		<p class="desc" v-text='item.summary'></p>
    	</li>
    </ul>
</template>

<script>
	import star from "@/base/star/star"
	export default {

	    name:'reviews',

	    props:{
	    	popular_reviews:{
	    		type:Array,
	    		default:()=>[] //对象和数组的默认值必须是一个工厂函数返回
	    	}
	    },
	    components:{
	    	star
	    }
	}
</script>

<style lang="less" scoped>
	.reviews-wrap{
		padding: 0 15px;
			.reviews-item{
				margin-bottom: 20px;
					.title{
						font-size: 16px;
						color: #333;
						padding: 5px 0;
					}
					div{
						padding: 5px 0;
						display: flex;
						align-items: center;
						img{
							border-radius: 50%;
							margin-right: 10px;
						}
						.name{
							margin-right: 10px;
						}
					}
					.desc{
						line-height: 20px;
					}
			}
	}
</style>
