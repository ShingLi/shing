<template>
	<div class="history-list-wrap">
		<div class="has-history">
			<ul>
				<li v-for='(item,index) of searchs'


				>
					<span>{{item.name}}</span>
					<div class="delete" @click.stop='deleteOne(index)'>
						<i class="icon iconfont icon-delete"></i>
					</div>
				</li>
			</ul>
		</div>
		<div class="nomore-history" v-show="!searchs.length">
			<span>还没有搜索记录，赶快去搜索吧！:)</span>
		</div>
	</div>
</template>
<script>
	export default {

		name:'historyList',
		props:{
			searchs:{
				type:Array,
				default:[]
			}
		},
		methods:{
			deleteOne(index){
				this.$emit('delete',index)
			}
		}
	}
</script>
<style scoped lang='less'>
	@import '../../common/less/color.less';
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
