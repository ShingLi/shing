<template lang="html">
    <div class="detail-wrapper">
        <div class="detail-head">
            <span class="arrow" @click='$router.go(-1)'>
                <i class="icon iconfont icon-fanhui1"></i>
            </span>
            <span class="title-description">
                <i class="icon iconfont icon-dianying"></i>
                <span>{{movieDetail.title}}</span>
            </span>
        </div>
        <!--  -->
        <scroll class="list-scroll"
            ref="wrapper"
            :data = "movieDetail"
            :pullup = 'true'
            :pulldown ='true'
        >
            <div class="scroll-wrapper">
                <!-- 电影图片 -->
                <div class="scroll-content">
                    <div class="movie-pic">
                        <img alt="" src='https://images.weserv.nl/?url=img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg'>
                    </div>
                    <!-- 电影信息 -->
                    <movie-info :movieDetail ="movieDetail"></movie-info>
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
    import movieInfo from '@/base/movie-info/movie-info'
    import loadmore from '@/base/loading/loadmore'
    import {getMovieDetail} from '@/api/get-movie/get-movie'
    import {mapState , mapGetters } from 'vuex'
    export default {
        name:"movieDetail",

        data(){
            return {
                movieDetail:{},
                isShow:true
            }
        },
        created(){
            this._getDetail()
        },
        mounted(){
            this.$refs.wrapper.refresh()
        },
        components:{scroll,movieInfo,loadmore},
        computed:{

            ...mapGetters ([
                'movie'
            ])
        },
        methods:{
            _getDetail(){
                if(!this.movie.id){//当前页面刷新就返回
                    this.$router.go(-1)
                }
                const id = this.movie.id
                let that = this;
                getMovieDetail(id).then(res=>{
                    that.movieDetail = res
                    this.isShow = !this.isShow
                    console.dir(res)
                    
                }).catch(err=>{
                    console.log("error")
                })
            }
        }
        // beforeRouteLeave(){
        //     console.log(this.movieDetai);
        // }
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
