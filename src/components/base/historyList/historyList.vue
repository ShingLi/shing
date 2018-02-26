<template>
	<div class="history-list-wrap">
		<div class="has-history" v-if='hasMore'>
			<ul>
				<li>
					<span>红海行动</span>
					<div class="delete">
						<i class="icon iconfont icon-delete"></i>
					</div>
				</li>
			</ul>
		</div>
		<div class="nomore-history" v-else>
			<span>还没有搜索记录，赶快去搜索吧！:)</span>
		</div>
	</div>
</template>
<script>
	export default {
		name:'historyList',
		props:{
			hasMore:{
				type:Boolean,
				default:true
			}
		}
	}
</script>
<style scoped lang='less'>
	@import '../../../assets/less/color.less';
	.history-list-wrap{
		.has-history{
			li{
				display: flex;
				justify-content: space-between;
				font-size: @size-default;
				padding:10px 0;
					.delete{
						width: 2rem;
						height: 2rem;
						line-height: 2rem;
						text-align: right;
							i{
								font-size: @size-default;
							}
					}

			}
		}
		.nomore-history{
			text-align: center;
			font-size: 1.2rem;
		}
	}
</style>