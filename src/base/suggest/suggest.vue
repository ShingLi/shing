<template lang="html">
    <scroll class='list-scroll'
            :data='result'
			:pullup = 'pullup'
            ref='scroll'
    >

    	<ul class="suggest-list">
    		<li class="suggest-item" v-for='item in result'>
    			<div class="item-pic">
    				<img v-lazy='replaceUrl(item.images.large)'>
    			</div>
    			<div class="item-info">
    				<h5 v-text='item.title'></h5>
                    <p>
                        <star :size='24' :score='item.rating.average' :showScore='true'></star>
                    </p>
                    <p v-if='item.mainland_pubdate'>上映时间 / {{item.pubdates[0]}}</p>
    			</div>

    		</li>
    	</ul>
        <!-- 搜索不到  -->
        <div class="noResult" v-if='!result.length&&flag'>
            抱歉，暂无搜索结果 :(
        </div>
        <div class="loading" v-show='!result.length&&isShow'>
            <loadmore :show='isShow' class="show"></loadmore>
        </div>
    </scroll>
</template>

<script>
	import scroll from 'base/scroll/scroll'
    import star from 'base/star/star'
    import loadmore from 'base/loadmore/loadmore'
    import { searchMovie } from 'api/search/searchMovie'
    import { Toast } from 'mint-ui'
    const count = 20
	export default {
		data(){
			return {
				pullup:true,
                result:[],
                searchIndex:0,
                isShow:true,
                flag:false,

			}
		},
		props:{
			query:{
                type:String,
                default:''
            }
		},

		components:{ scroll , star ,loadmore},
        methods:{
            search(){
                this.result =[] ;
                this.flag=false ;//重置
                this.isShow =true ;
                this.searchIndex =0;
                if(this.query===""){return false} //去掉空格
                searchMovie(this.query,this.searchIndex,count).then(res=>{
                    // console.log(res);
                    this.result  = res.subjects
                    // 把搜索的query存进vuex
                    this.$store.dispatch('saveSearchHistory',{
                        query:this.query
                    })
                    if(!this.result.length){
                        this.flag =true
                        this.isShow =false
                    }
                }).catch(err=>{
                    Toast({
                          message: '网络错误',
                          position: 'bottom',
                          duration: 2000
                    });
                })
            },
            replaceUrl(srcUrl) {
                if (srcUrl !== undefined) { // 图片防盗链处理
                  return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''));
            }
      },
        },
        watch:{
            query(){
                // 值的变化 检索数据

                this.search();
            }
        }
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/color.less";
	.list-scroll{
		position: fixed;
		width: 100%;
		top:3.7rem;
		bottom: 0;
		overflow: hidden;
		padding:0 15px;
			.suggest-list{
					.suggest-item{
						display: flex;
						width: 100%;
                        margin-bottom: 15px;
								.item-pic{
									flex:0 0 5rem;
									width: 5rem;
                                    overflow: hidden;
									img{
										height: 7rem;
                                        width: 5rem;
									}
								}
								.item-info{
									margin-left:@size-default;
									flex:1;
                                    color:@default-color;

                                    p{
                                        font-size: 12px;
                                        margin: 5px 0;
                                    }
								}
                                &:nth-child(1){
                                    padding-top: 10px;
                                }
                                &:last-child{
                                    padding-bottom: 10px;
                                }
					}
			}
            .noResult{
                position: absolute;
                top: 50%;
                width: 100%;
                left: 0;
                text-align: center;
                color: #777;
                font-size: 16px;
            }
            .loading{
                position: fixed;
                top: 3.7rem;
                width: 100%;
                left: 0;
                bottom: 0;
                text-align: center;
                color: #777;
                font-size: 16px;
                z-index: 999;
                opacity: 1;
                    .show{
                        position: absolute;
                        top: 40%;
                        width: 100%;
                        left: 0;
                        transform: translateY(-50%);
                        text-align: center;
                    }
            }
	}
</style>
