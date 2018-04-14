<template>
	<div class="book_wrapper">
		<!-- 图书|虚构类 -->
		<div class="fiction book">
			<header>
				<h2>最受关注图书｜虚构类</h2>
				<router-link to='/'>更多</router-link>
			</header>
			<ul class="book_content">
				<li>
					<img src="https://qnmob3.doubanio.com/lpic/s29687411.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg" alt="">
					<span></span>

				</li>
			</ul>
		</div>
		<!-- 图书|非虚构类 -->
		<div class="nofiction book"></div>
	</div>
</template>
<script>
	export default {
		name:'book-list',
		data(){
			return {

			}
		},
		created(){

		},
		methods:{

		}
	}
</script>
<style lang="less" src='./index.less' scoped></style>