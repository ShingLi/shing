<template>
	<div class="detail-wrapper">
		<div class="detail-head">
			<span class="arrow" @click='$router.go(-1)'>
				<i class="icon iconfont icon-fanhui1"></i>
			</span>
			<span class="title-description">
				<span>详情</span>
			</span>
		</div>
		<!--  -->
		<scroll class='list-scroll'
			:data='listCell'
		>
			<div class="list-content">
				<h2 class="title">{{listCell.title}}</h2>
				<div class="img" v-if="listCell.image_hlarge">
					<!-- <img v-lazy="replaceUrl(listCell.image_hlarge)" width="207" height="310"> -->
					<img :src='listCell.image_hlarge' >
				</div>
				<ul class="details">
					<li>
						<span>时间</span>
						<p>
							{{listCell.begin_time}} <br>
							{{listCell.end_time}}
						</p>
					</li>
					<li>
						<span>地点</span>
						<p>{{listCell.address}}</p>
					</li>
					<li>
						<span>费用</span>
						<p v-text='listCell.fee_str'></p>
					</li>
					<li>
						<span>类型</span>
						<p v-text='listCell.category_name'></p>
					</li>
					<li v-if='listCell.owner'>
						<span>所属</span>
						<p v-text='listCell.owner.name'></p>
					</li>
				</ul>
				<!-- tag -->
				<ol class="tags" v-if='listCell.tags'>
					<li v-for='item in tags'>
						<span>{{item}}</span>
					</li>
				</ol>
				<!-- 活动详情 -->
				<div class="content">
					<h2>活动详情</h2>
					<p v-html='listCell.content'></p>
				</div>
			</div>
		</scroll>
		<!-- 加载动画 -->
		<div class="modal" v-show='isShow'>
           <!--  <loadmore :fullScreen='true'></loadmore> -->
			<bouncing-loader :fullScreen='true'></bouncing-loader>
        </div>
	</div>
</template>
<script>
	import scroll from 'base/scroll/scroll'
	import loadmore from 'base/loading/loadmore'
	import bouncingLoader from 'base/bounch-loader/bouncing-loader'
	import { mapState } from 'vuex'
	import { getCellList } from 'api/online/getListCell'
	export default {
		name:'index-detail',
		data(){
			return {
				 listCell:{},
				 isShow:true
			}
		},
		created(){
			this._getListCell()
		},
		computed:{
			...mapState({
				listId:state=>state.index.listId
			}),
			tags(){
				let original = this.listCell.tags.split(',')
					// original.forEach(item=>{
					// 	if(item.length>3){
					// 		console.log(item.substring(0,3));
					// 	}
					// })
					return original
			}
		},
		components:{ scroll , loadmore , bouncingLoader },
		methods:{
			_getListCell(){
				// 当前页刷新返回首页
				 if(!this.listId){
					this.$router.go(-1)
					
				}
				getCellList(this.listId).then(res=>{
					// console.log(res)
					this.listCell = res
					this.isShow = false
				}).catch(err=>{
					alert("加载失败")
				})

			},
			replaceUrl(srcUrl) {
                if (srcUrl !== undefined) { // 图片防盗链处理
                  return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''));
                }
            }
		}
	}
</script>
<style lang='less' scoped>
	.detail-wrapper{
		height:100%;
		background-color:#fff;
		.detail-head{
			position: fixed;
    		top: 0;
		    width: 100%;
		    height: 40px;
		    z-index: 10;
		    background-color: rgba(85, 85, 85, 0.6);
		    	.arrow{
		    		position: absolute;
					top: 0;
					left: .6rem;
						.icon{
							color: #fff;
						    font-size: 1.7rem;
						    display: inline-block;
						    line-height: 40px;
						}
		    	}
		    	.title-description{
		    		position: absolute;
				    left: 50%;
				    top: 0;
				    bottom: 0;
				    display: -webkit-box;
				    display: -ms-flexbox;
				    display: flex;
				    -webkit-transform: translateX(-50%);
				    transform: translateX(-50%);
				    	span{
				    		color: #fff;
						    font-size: 1.2rem;
						    display: inline-block;
						    line-height: 40px;
				    	}
		    	}
		}
		.list-scroll{
			position:fixed;
			top:40px;
			left:0;
			bottom:0;
			width:100%;
			background-color:#fff;
				.list-content{
					padding: 30px 15px;
					.title{
						font-size:16px;
						font-weight: 100;
						color:#494949;
					}
					.img{
						margin: 2rem auto;
						text-align: center;
						img{
							width:60%;
							border-radius: 4px;
						}
					}
					.details{
						li{
							margin-bottom: 15px;
							span{
								display:inline-block;
								width:30px;
								margin-right: 15px;
								line-height:20px;
								text-align:left;
								vertical-align: top;
								font-size:14px;
								color:#666;
							}
							p{
								display:inline-block;
								font-size:12px;
								line-height:20px;

							}
						}
					}
					.tags{
						list-style: none;
						display:flex;
						li{
							margin-right:10px;
							white-space: nowrap;
							span{
								padding:5px 15px;
								background-color:#f5f5f5;
								color:#494949;
								border-radius:20px;
							}
							&:last-child{
								margin-right:0;
							}
						}

					}
					.content{
						h2{
							margin:2rem 0;
							color: #072;
							font-weight: normal;
							font-size: 15px;
						}
						p{
							text-indent: 2em;
							line-height: 20px;

							color: #555;

						}
					}

				}
		}
		.modal{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background-color: #fff;
        }
	}
</style>
