<template>
    <transition name='slide'>
        <div class="movie-detail">
           <div v-if='Object.keys(movies).length'>
                <div class="back" @click='$router.go(-1)'>
                    <i class="icon iconfont icon-fanhui1" ref='icon'></i>
                </div>
                <div class="title">
                    {{movie.title.substr(0,11)}}
                </div>
                <!-- 背景图片 -->
                <div class="bgImage" :style='bgImage' ref='bgImage'></div>
           </div>
           <!-- 蒙层 -->
           <div class="bg-layer" ref='bgLayer'></div>
           <scroll class="list"
                ref="scroll"
                :listenScroll = 'listenScroll'
                :probeType = 'probeType'
                @scroll ='scroll'
            >
                <div class="scroll-wrapper">
                    <!-- 电影图片 -->
                    <!-- 电影信息 -->
                    <movie-info :movieDetail ="movies"></movie-info>
                    <!-- 影评 -->
                    <movie-reviews :movieDetail='movies'></movie-reviews>
                </div>
            </scroll>
            <div class="modal" v-show='isShow'>
                <loadmore :fullScreen='true'></loadmore>
            </div>
        </div>

    </transition>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { getMovieDetail } from 'api/get-movie/get-movie' //获取电影详情的api
    import MovieInfo from 'base/movie-info/movie-info' //电影的信息
    import MovieReviews from "base/movie-reviews/movie-reviews"
    import Loadmore from 'base/loading/loadmore'
    import Scroll from 'base/scroll/scroll'
    const TITLE_HEIGHT = 40
    export default {
        name:'movieDetail',

        data() {
            return {
                movies:{},
                isShow:true,
                scrollY:-1
            }
        },
        created() {
            this._getDetail()

            this.listenScroll = true
            this.probeType = 3
            this.bgImageHeight 
        },
        updated() {
            let bgImageHeight = this.$refs.bgImage.clientHeight
            this.$refs.scroll.$el.style.top = `${bgImageHeight}px`
            this.bgImageHeight = bgImageHeight
        },
        computed: {
            ...mapGetters([
                'movie'
            ]),
            bgImage() {
               return `background-image:url(${this.movie.photo})`
            }
        },
        components: {
            Scroll,
            MovieInfo,
            MovieReviews,
            Loadmore
        },
        methods: {
             _getDetail() {
                if (!this.movie.id) {//当前页面刷新就返回
                    this.$router.go(-1)
                    return
                }

                getMovieDetail(this.movie.id).then(res=>{
                    this.movies = res;
                    this.isShow = false
                    
                }).catch(err=>{
                    console.log(err)
                })
            },
            scroll(pos) {
                this.scrollY = pos.y
                
            }
        },
        watch: {
            scrollY(newY) {
                let standardHeight = -this.bgImageHeight + TITLE_HEIGHT
                let translateY = Math.max(newY,standardHeight)

                this.$refs.bgLayer.style['transform'] = `translate3d(0 , ${translateY}px,0)`
                
                let zindex = 0,
                    scale = 1 ;

                if (newY > 0) {
                    let percent = Math.abs(newY / this.bgImageHeight)
                    scale = percent + 1
                }
                if (newY < standardHeight) {
                    this.$refs.bgImage.style.paddingTop = 0
                    this.$refs.bgImage.style.height = TITLE_HEIGHT +'px'
                    this.$refs.icon.style['color'] = 'red'
                    zindex =10
                }else {
                    this.$refs.bgImage.style.paddingTop = '60%'
                    this.$refs.bgImage.style.height = 0
                    this.$refs.icon.style['color'] = '#fff'
                    zindex = 0
                }
                this.$refs.bgImage.style.zIndex = zindex
                this.$refs.bgImage.style.transform = `scale(${scale})`

            }
        }

    }
</script>
<style lang='less' scoped>
    .movie-detail{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        background: #ffc0cb;
        z-index: 99;
        .back{
            position: absolute;
            top:0;
            left: 6px;
            z-index: 50;
            i{
                display: inline-block;
                padding: 10px;
                font-size: 18px;
                color:#fff;

            }
        }
        .title{
            position: absolute;
            top: 0%;
            left:50%;
            line-height: 40px;
            transform: translateX(-50%);
            color:#fff;
            font-size:1.3rem;
            z-index: 50;
        }
        .bgImage{
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 60%;
            background-repeat: no-repeat;
            background-size: cover;
            transform-origin: top;
        }
        .bg-layer{
            position: relative;
            height: 100%;


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
     .modal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: #98bf21;
    }
</style>