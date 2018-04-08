<template>
	<div class="bounch-wrapper" :class='{fullScreen}'>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>
<script>
	export default{
		name:'bounch-loader',
		props:{
			fullScreen:{
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style lang='less' scoped>
	.bounch-wrapper{
		display:flex;
		justify-content: center;
		div{
			width: 1.6rem;
			height:1.6rem;
			border-radius: 50%;
			margin-right: .7rem;
			background-color:#42bd56;
			animation: bouncing-loader .6s infinite alternate ;
			&:nth-child(1){
                
                background-color:red;
            }
            &:nth-child(2){
                animation-delay:.26s
            }
            &:nth-child(3){
                animation-delay:.39s
            }
            &:nth-child(4){
                animation-delay:.52s;
                margin-right: 0px
            }
            
		}
		&.fullScreen{
			position: absolute;
			top:50%;
			width:100%;
			transform:translateY(-50%);
		}
		@keyframes bouncing-loader {
			from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0.1;
                transform: translateY(-1.5rem);

            }
		}
	}
</style>