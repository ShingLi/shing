<template lang="html">
    <div class="movie-list">
        <ul>
            <li v-for='(movie,index) of movies' @click='selectMovie(movie)'>
                <!-- <div class="date">2月06日 星期二</div> -->
                <div class="item">
                    <div class="info-img">
                        <img src="" alt="" v-lazy='replaceUrl(movie.image)' width="80" height="120">
                    </div>
                    <div class="info-desc">
                        <p class="title">{{movie.title}}</p>
                        <div>
                            <star :size='24' :score='movie.rating' :showScore="showScore"></star>
                        </div>
                        <p class="director">导演: {{movie.director}}</p>
                        <p class="casts">主演: {{movie.casts}}</p>
                        <p class="hasWatched">{{movie.collectCount}}人看过</p><!-- //collect_count 这个是豆瓣JSON数据中的格式-->

                    </div>
                </div>
            </li>
        </ul>
        <loadmore :hasMore='hasMore' v-show='movies.length'></loadmore>
    </div>
</template>

<script>
    import star from '@/base/star/star'
    import loadmore from '@/base/loadmore/loadmore'
    export default {
        name:'movieList',
        props:{
            movies:{
                type:Array,
                default:[]
            },
            hasMore:{
                type:Boolean,
                default:true
            }
        },
        data(){
            return {
                showScore:true
            }
        },
        components:{star,loadmore},
        methods:{
            selectMovie(movie){
                // 转到电影详情页的方法
                this.$emit('select',movie)
                
            },
            replaceUrl(srcUrl){
                if (srcUrl !== undefined) { // 图片防盗链处理
                     return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''));
                  }
            }
        }
    }
</script>

<style lang="less" scoped>
    div.movie-list{
        li{
            list-style: none;
            div.date{

                background-color: #eee;
                padding-left: 1.5rem;
                height: 3rem;
                line-height: 3rem;
                font-size: 1.1rem;
                color: #777;
            }
            div.item{
                display: flex;
                align-items: center;
                padding: 15px 0;
                div.info-img{
                    // flex:80px 0 0 ;
                    margin-right: 1rem;
                    img{
                        height: 9rem;
                        width: 6rem;
                    }
                }
                .info-desc{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 9rem;
                    color: #777;
                    p{
                        font-size: 1rem;
                    }
                    p.director{
                        font-size: 1.1rem;
                    }
                    .casts{
                        font-size: 1.1rem;
                    }
                    .hasWatched{
                        color: #333;
                    }
                }
            }
        }
    }
</style>
