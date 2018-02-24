<template>
	<div class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
		<div class="is-left m-header-button" :class="{show:hides}">
			<slot name='left'></slot>
		</div>
		<slot></slot>
		<div class="m-header-title" v-text='title'></div>
		<div class="is-right m-header-button" :class="{w:wright,cancel:cancel}" >
			<slot name='right'></slot>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			bg:{
				type:Boolean,
				default:false
			},
			fixed:{
				type:Boolean,
				default:false
			},
			title:{
				type:String
			}
		},
		computed:{
			hides(){
				if(this.$route.name=='index'||this.$route.name=='search'){
					return true
				}
			},
			wright(){
				if(this.$route.name=='index'){
					return true
				}
			},
			cancel(){
				if(this.$route.name=='search'){
					return true
				}
			}
		}
	}
</script>
<style lang='less'>
	@import "../../assets/less/header.less";
	.m-header{
		display: flex;
		height: 3.7rem;
		-ms-align-items: center;
		align-items: center;
		color: @headerDefaultColor;
		padding: 0 1rem;
		background-color: #fff;
		/*border-bottom: 1px solid #eee;*/
		a{
			color: @headerDefaultColor;
			font-size: 1.1rem;
			display: inline-block;
		}
		.m-header-button{
			width: 7rem;
			-ms-align-items: stretch;
			align-items: stretch;

			&.is-left{
				text-align: left;
			}
			&.is-right{
				text-align: right;
				font-size: 1rem;
			}
			.m-icon-img{
				width: 2rem;
				height:2rem;
				border: 0;
				vertical-align: middle;
				&.is-margin{
					margin-right: 1rem;
				}
			}
			&.show{
				display:none;
			}
			&.w{
				width: 4rem;
			}
			&.cancel{
				width: 4rem;
			}
		}
		.m-header-title{
			flex: 1;
			text-align: center;
			font-size: 1.3rem;
			text-overflow: ellipsis;
			white-space:nowrap;
			overflow: hidden;
		}
		&.is-bg{
			background: @headerBg;
			color: #fff;
			a{
				color: #fff;
			}
			.m-header-title{
				color: #fff;
			}
		}
		&.is-fixed{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 9;
		}
	}
</style>
