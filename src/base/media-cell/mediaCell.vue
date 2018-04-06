<template>
	<a class="m-media_cell-wrap">
		<div class="m-media_cell-top">
			<div class="m-media_cell-top-left">
				<slot name='title'></slot>
				<slot name='detail'></slot>
			</div>
			<div class="m-media_cell-top-right">
				<slot></slot>
			</div>
		</div>
		<div class="m-media_cell-bottom">
			<p class="author" v-if='author' slot='author'>{{author}}</p>
			<p v-if='source' class='source'>来自栏目:{{source}}</p>
		</div>
	</a>
</template>
<script>
	export default{
		name:'mediaCell',
		props:['author','source']
	}
</script>
<style lang='less'>
	a.m-media_cell-wrap{
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 18px 20px;
		background-color: #fff;
		&:before{
			position:absolute;
			content: "";
			left: 0;
			right: 0;
			bottom: 0;
			height: 1px;
			transform: scaleY(.5);
			background-color: #e4e4e4;
		}
		.m-media_cell-top{
			display:flex;

			.m-media_cell-top-left{
				flex: 1;
				padding-right: 45px;
				width: 235px;
				overflow: hidden;

				.m-media_cell-title{
					font-size: 1.15rem;
					line-height: 2rem;
					font-weight: bold;
					color: #333;
				}
				.m-media_cell-detail{
					padding-top: 1rem;
					color: #939393;
					font-size: .85rem;

				}
				.text{
					overflow: hidden;
					text-overflow: ellipsis;
             		display: -webkit-box;
            		-webkit-box-orient: vertical;
            		-webkit-line-clamp: 2;
            		
				}

			}
			.m-media_cell-top-right{
				width: 100px;
				height: 100px;
				border-radius: 4px;
				overflow: hidden;

				img{
					width: 100%;
				}
			}
		}
		.m-media_cell-bottom{
			display: flex;
			justify-content: space-between;
			padding-top: 10px;
			color:#bfbfbf;
			.author{
				font-size: .8rem;
			}
			.source{
				.author
			}
		}
	}
</style>