<template>
	<div class="book_wrapper">
		<!-- 图书|虚构类 -->
		<div class="fiction book" v-if=''>
			<header>
				<h2>最受关注图书｜虚构类</h2>
				<router-link to='/'>更多</router-link>
			</header>
			<scroll 
				:data='bookList'
				:scrollX='true'

			>
				<ul class="book_content" ref = 'list'>
					<li 
						v-for='(item,index) of bookList'
						:key='index'
						>
						<img v-lazy='item.cover.url'>
						<p>{{item.title}}</p>
						<star 
							:score='item.rating.value' 
							:size='24'
							:showScore='true'
						></star>
					</li>
				</ul>
			</scroll>
		</div>
		<!-- 图书|非虚构类 -->
		<div class="nofiction book"></div>
	</div>
</template>
<script>
	import { getBookFiction } from 'api/book/book'
	import { Toast } from 'mint-ui'
	import scroll from 'base/scroll/scroll'
	import star from 'base/star/star'

	export default {
		name:'book-list',
		data(){
			return {
				bookList:[]
			}
		},
		created(){
			this._getBookFiction();
		},
		mounted(){
			// setTimeout(()=>{
			// 	this._setWidth()
			// },20)
		},
		components:{ scroll , star } ,
		methods:{
			_getBookFiction(){
				getBookFiction().then(res=>{
					this.bookList = res.subject_collection_items ;
					this.$nextTick(()=>{
						this._setWidth();
					})
				}).catch(err=>{
					Toast({
						message:'加载失败',
						duration:3000,
						iconClass:'icon iconfont icon-shibai'
					})
				})
			},
			_setWidth(){
				
				let w = 90,
					r = 10,
					n = this.bookList.length ;
				this.$refs.list.style.width = (w+r)*n-10 +"px"

			},
			replaceUrl(srcUrl) {
                if (srcUrl !== undefined) { // 图片防盗链处理
                  return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''));
                }
            }
		}
	}
</script>
<style lang="less" src='./index.less' scoped></style>