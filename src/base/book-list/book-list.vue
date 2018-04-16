<template>
	<div class="book_wrapper">
		<!-- 图书|虚构类 -->
		<div class="fiction book" v-if=''>
			<header>
				<h2>最受关注图书｜虚构类</h2>
				<router-link to='/'>更多</router-link>
			</header>
			<scroll 
				:data='book_fiction'
				:scrollX='true'

			>
				<ul class="book_content" ref = 'list'>
					<li 
						v-for='(item,index) of book_fiction'
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
		<div class="fiction book" v-if=''>
			<header>
				<h2>最受关注图书｜非虚构类</h2>
				<router-link to='/'>更多</router-link>
			</header>
			<scroll 
				:data='book_nonfiction'
				:scrollX='true'

			>
				<ul class="book_content" ref = 'nonlist'>
					<li 
						v-for='(item,index) of book_nonfiction'
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
	</div>
</template>
<script>
	// import { getBookFunction } from 'api/book/book'
	import { Toast } from 'mint-ui'
	import scroll from 'base/scroll/scroll'
	import star from 'base/star/star'
	import axios from "axios" ;

	export default {
		name:'book-list',
		data(){
			return {
				book_fiction:[],
				book_nonfiction:[]
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
				const url_1 ='/m/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=8',
						url_2  = '/m/rexxar/api/v2/subject_collection/book_nonfiction/items?start=0&count=8';
				axios.all([(axios.get(url_1)),(axios.get(url_2))]).then(
						axios.spread((acct,perms)=>{
							this.book_fiction = acct.data.subject_collection_items;
							this.book_nonfiction = perms.data.subject_collection_items;
							this.$nextTick(()=>{
								this._setWidth();
							})

						})
					).catch(err=>{
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
					n = this.book_fiction.length ,
					n_= this.book_nonfiction.length ;
				this.$refs.list.style.width = (w+r)*n-10 +"px" ;
				this.$refs.nonlist.style.width = (w+r)*n_-10 +"px" ;


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