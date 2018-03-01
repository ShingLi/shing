<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <slot name='swiper-img'></slot>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div :class="{'swiper-pagination':pagination}"></div>
	</div>
</template>
<script>
	import "../../common/js/swiper/js/swiper.js";
	export default{
		name:'swiper',
		props:{
			pagination:{
				type:Boolean,
				default:false
			}
		},
		beforeMount(){
			this.swiper();
		},
		methods:{
			swiper(){
				var mySwiper = new Swiper ('.swiper-container', {
    				pagination: '.swiper-pagination',
        			paginationClickable: true,
        			autoplayDisableOnInteraction:false,
        			loop: true,
	        		autoplay: 2500,
	                observer:true,
	                observeParents:true
  				}) 
			}
		}
	}
</script>
<style lang='less'>
	@import "../../common/js/swiper/css/swiper.css";
	.swiper-container{
		.swiper-wrapper{
			.swiper-slide{
				.banner_index{
					width: 100%;
					height: 15rem;
				}
			}
		}
	}
</style>