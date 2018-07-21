<template>
    <transition name='slide'>
        <div class="movie-detail">
           <div>
                <div class="back" @click='$router.go(-1)'>
                    <i class="icon iconfont icon-fanhui1"></i>
                </div>
                <div class="title">
                    {{movie.title.substr(0,11)}}
                </div>
                <!-- 背景图片 -->
                <div class="bgImage" :style='bgImage' ref='bgImage'></div>
           </div>
           <scroll class="list"
            ref="scroll"
        >
            <div class="scroll-wrapper">
                <!-- 电影图片 -->
                <!-- 电影信息 -->
                <movie-info :movieDetail ="movies"></movie-info>
                <!-- 影评 -->
                <movie-reviews :movieDetail='movies'></movie-reviews>
            </div>
        </scroll>
        </div>
    </transition>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { getMovieDetail } from 'api/get-movie/get-movie' //获取电影详情的api
    import MovieInfo from 'base/movie-info/movie-info' //电影的信息
    import MovieReviews from "base/movie-reviews/movie-reviews"
    
    import Scroll from 'base/scroll/scroll'

    export default {
        name:'movieDetail',
        data() {
            return {
                movies:{}
            }
        },
        created() {
            this._getDetail()
        },
        mounted(){
            let bgImageHeight = this.$refs.bgImage.clientHeight
            console.log(this.$refs.scroll)
        },
        computed:{
            ...mapGetters([
                'movie'
            ]),
            bgImage(){
               return `background-image:url(${this.movie.photo})`
            }
        },
        components:{
            Scroll,
            MovieInfo,
            MovieReviews
        },
        methods:{
             _getDetail() {
                if (!this.movie.id) {//当前页面刷新就返回
                    this.$router.go(-1)
                    return
                }

                getMovieDetail(this.movie.id).then(res=>{
                    this.movies = res;

                    
                }).catch(err=>{
                    console.log(err)
                })
            },
        }
    }
</script>-
<style lang='less'>
    .movie-detail{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        background: #555;
        z-index: 99;
        .back{
            position: absolute;
            top:0;
            left: 6px;
            z-index: 50;
            i{
                display: inline-block;
                padding: .7rem;
                font-size: 1.5rem;
                color:#fff;

            }
        }
        .title{
            position: absolute;
            top: 0%;
            left:50%;
            line-height: 3rem;
            transform: translateX(-50%);
            color:#fff;
            font-size:1.3rem;
            z-index: 50;
        }
        .bgImage{
            width: 100%;
            height: 0;
            padding-top: 60%;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .list{
            position: fixed;
            top:0;
            left: 0;
            width: 100%;
            bottom: 0;
            
        }
    }
    .slide-enter-active, .slide-leave-active{
        transition: all .3s
    }
    .slide-enter, .slide-leave-to{
        transform: translate3d(100%,0,0);
    }
</style>