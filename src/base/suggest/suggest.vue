<template lang="html">
    <scroll class='list-scroll'
			:pullup = 'pullup'
    >
    	
    	<ul class="suggest-list">
    		<li class="suggest-item">
    			<div class="item-pic">
    				<img src="https://images.weserv.nl/?url=img7.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg" alt="">
    			</div>
    			<div class="item-info">
    				<h5>红海行动</h5>
    			</div>
    		</li>
    	</ul>
    	
    </scroll>
</template>

<script>
	import scroll from '@/base/scroll/scroll'
	export default {
		data(){
			return {
				pullup:true
			}
		},
		props:{
			results:{
				type:Array,
				default:[]
			}
		},
		components:{scroll}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/color.less";
	.list-scroll{
		position: fixed;
		width: 100%;
		top:3.7rem;
		bottom: 0;
		overflow: hidden;
		padding: 10px 15px 0 15px;
			.suggest-list{
					.suggest-item{
						display: flex;
						width: 100%;
								.item-pic{
									flex:0 0 5rem;
									width: 5rem;
									img{
										
										height: 7rem;

									}
								}
								.item-info{
									margin-left:@size-default;
									flex:1;
									h5{
										color:@default-color;
									}
								}
					}
			}
	}
</style>
