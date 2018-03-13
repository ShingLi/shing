<template lang="html">
    <div class="detail-wrapper">
        <div class="detail-head">
            <span class="arrow" @click='$router.go(-1)'>
                <i class="icon iconfont icon-fanhui1"></i>
            </span>
            <span class="title-description">
                <i class="icon iconfont icon-dianying"></i>
                <span v-text='movieDetail.title'></span>
            </span>
        </div>
        <!-- 主体部分 -->
        <scroll class="list-scroll"
            ref="scroll"
            :data = "movieDetail"
        >
            <div class="scroll-wrapper">
                <!-- 电影图片 -->
                <div class="scroll-content">
                    <div class="movie-pic">
                        <div v-if="movieDetail.images">
                            <img v-lazy="replaceUrl(movieDetail.images.large)">
                        </div>
                    </div>
                    <!-- 电影信息 -->
                    <movie-info :movieDetail ="movieDetail"></movie-info>
                    <!-- 影评 -->
                    <reviews :movieDetail='movieDetail'></reviews>
                </div>
            </div>
        </scroll>
        <div class="modal" v-show='isShow'>
            <loadmore :fullScreen='true'></loadmore>
        </div>
    </div>

</template>

<script>
    import scroll from '@/base/scroll/scroll'
    import movieInfo from '@/base/movie-info/movie-info' //电影的信息
    import loadmore from '@/base/loading/loadmore' //加载点遮罩层
    import {getMovieDetail} from '@/api/get-movie/get-movie' //获取电影详情的api
    import reviews from "@/base/movie-reviews/reviews"
    import {mapState , mapGetters } from 'vuex'
    export default {
        name:"movieDetail",

        data(){
            return {
                movieDetail:{},
                isShow:true,

            }
        },
        created(){
            this._getDetail()
        },
        mounted(){
            this.$nextTick(()=>{
                this.$refs.scroll.refresh();
            })
        },
        components:{scroll,movieInfo,reviews,loadmore},
        computed:{

            ...mapGetters ([
                'movie'
            ])
        },
        methods:{
            _getDetail(){
                if(!this.movie.id){//当前页面刷新就返回
                    this.$router.go(-1)
                    return
                }

                getMovieDetail(this.movie.id).then(res=>{
                    this.movieDetail = res;

                    this.isShow = !this.isShow;
                    this.$nextTick(()=>{
                        this.$refs.scroll.refresh();
                    })
                }).catch(err=>{
                    console.log(err)
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

<style lang="less">
    .detail-wrapper{
        height: 100%;
            .detail-head{
                position: fixed;
                top:0;
                width: 100%;
                height: 40px;
                z-index: 10;
                background-color:rgba(85,85,85,.6);
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
                        display:flex;
                        transform:translateX(-50%);
                            span{
                                line-height: 40px;
                                color: #fff;
                                font-size: 1.2rem;
                            }
                            i{
                                .arrow>.icon
                            }
                    }
            }
            .list-scroll{
                position: fixed;
                top: 0;
                bottom: 0;
                width: 100%;
                overflow: hidden;
                background-color:rgb(85,85,85);
                    .scroll-wrapper{
                            .scroll-content{
                                    .movie-pic{
                                        padding: 50px 0 20px 0;
                                        text-align: center;
                                        img{
                                            width: 50%;
                                        }
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
                background-color: #555;

            }
    }
</style>
