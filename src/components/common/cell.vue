<template>
	<a class="m-cell" :href="href">
		<div class="m-cell-title">
			<slot name='icon'></slot>
			<span>{{title}}</span>
		</div>
		<div class="m-cell-right">
			<p>{{description}}</p>
			<img src="../../assets/images/ic_arrow_gray_small.png" alt="" class="m-cell-icon-isLink" v-if="isLink">
		</div>
	</a>
</template>
<script>
	export default{
		name:'cell',
		props:{
			title:{
				type:String,
				default:""
			},
			description:{
				type:String,
				default:''
			},
			isLink:{
				type:Boolean,
				default:false
			},
			to: [String, Object]
		},
		computed:{
			// 引用mint组件源码，其实我也不没懂
			href(){
				if(this.to && !this.added && this.$router){
					const resolved = this.$router.match(this.to);
					// console.log(resolved)
					if(!resolved.matched.length){
						return  this.to
					}
					this.$nextTick(()=>{
						this.added=true;
						this.$el.addEventListener('click', this.handleClick);
					})
					return resolved.path;
				}
				return this.to
			}
		},
		methods:{
			handleClick($event){
				$event.preventDefault();
				this.$router.push(this.href);
			}
		}
	}
</script>
<style lang='less'>
	a.m-cell{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem .5rem 1rem 1rem;
		color: #000;
		font-size: 1rem;
		background-color: #fff;
		&:after{
			position:absolute;
			content: "";
			width: 100%;
			height: 1px;
			bottom: 0;
			left: 0;
			right: 0;
			transform: scaleY(.5);
			background-color: #e4e4e4;

		}
		.m-cell-title{
			display: flex;
			align-items: center;
			.m-cell-icon,img{
				display:inline-block;
				width: 1.6rem;
				height: 1.6rem;
				margin-right: .5rem;

			}
		}
		.m-cell-right{
			display: flex;
			align-items: center;
			.m-cell-icon-isLink{
				width: 2rem;
				height: 2rem;
			}
		}
	}
</style>
