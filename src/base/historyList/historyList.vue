<template>
	<div class="history-list-wrap">
		<div class="has-history">
			<!-- <ul>
				<li v-for='(item,index) of searchs'

				>
					<span>{{item.name}}</span>
					<div class="delete" @click.stop='deleteOne(index)'>
						<i class="icon iconfont icon-delete"></i>
					</div>
				</li>
			</ul> -->
			<cell-swipe
				:right-width="50"
				v-for="(item , index) of searchs" :key='index'
				:on-close="onClose"

			>
				<cell-group>
				    <cell :title="item.name" @click='historySearch(item.name)'>
						<i class="icon iconfont icon-jiantou-copy-copy-copy"></i>
				    </cell>
				</cell-group>
				<span slot="right" class="delete_item">删除</span>
			</cell-swipe>

		</div>
		<div class="nomore-history" v-show="!searchs.length">
			<span>还没有搜索记录，赶快去搜索吧&nbsp;!</span>
			<i class="smile"></i>
		</div>
	</div>
</template>
<script>
	import { CellSwipe , CellGroup , Cell , Dialog} from 'vant';
	import 'vant/lib/vant-css/base.css';
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
				alert(1)
				this.$emit('delete',index)
			},
			historySearch(query){
				this.$emit('historySearch',query)
			},
			onClose(clickPosition, instance) {
		    	switch (clickPosition) {
		        	case 'left':
		        	case 'cell':
		        	case 'outside':
		       			instance.close();
		          	break;
		        	case 'right':
			        	console.dir(instance);
						// Dialog.confirm({
		   				// 	message: '确定删除吗？'
		 				// }).then(() => {
						//
		   					instance.close();
		 				// });
			        break;
		      }
    }


		},
		components:{ CellSwipe ,CellGroup , Cell}
	}
</script>

<style scoped lang='less'>
	@import '../../common/less/color.less';
	.van-cell{
		padding:10px 0;
	}
	[class*=van-hairline]::after{
		border: none
	}
	.delete_item{
		width: 50px;
		height: 44px;
		display: inline-block;
		text-align: center;
		line-height: 44px;
		background-color: #f44;
		color: #fff;
		font-size: 15px;
		border-radius: 3px;
	}
	.history-list-wrap{
		.has-history{
			i{
				font-size: 20px;
				margin-right: 10px;
			}
		}
		.nomore-history{
			text-align: center;
			font-size: 1.2rem;
			display: flex;
			align-items: center;
				span{
					font-size: @size-default+0.1;
				}
				.smile{
					display: inline-block;
					background: url('../../common/images/default_splash_image_small.png');
					background-repeat: no-repeat;
					width: 1.5rem;
					height: 1.5rem;
					background-size: contain;
					margin-left: 1rem;

				}
		}
	}

</style>
