<template lang="html">
    <div class="info-wrapper">
        <!-- 总体 -->
        <div class="overall">
            <div class="dec">
                <h4>{{movieDetail.title}}</h4>
                <p>{{tags}}</p>
                <p>原名：红海</p>
                <p>上映时间：2018-12-16(中国大陆)</p>
                <p>片长：100</p>
            </div>
            <div class="rank">
                <span>豆瓣评分</span>
                <span>8.5</span>
                <span>
                    <star :size='24'></star>
                </span>
                <span>100人</span>
            </div>
        </div>
        <!-- 操作 -->
        <div class="operate">
            <div class="want-watch"  :class="{wanted:isWanted}" @click='wantWatch'
                    v-text='wantText'
            ></div>
            <div class="has-watched" :class="{watched:isWatched}" @click='hasWatched'>
                <img src="./avatar.jpg" alt="" v-show='isWatched'>
                {{watchedText}}
            </div>
        </div>
        <!--简介 -->
        <div class="summary">
            <h4>剧情简介</h4>
            <p>{{movieDetail.summary}}</p>
        </div>
    </div>
</template>

<script>
    import star from '@/base/star/star'
    export default {
        data(){
            return {
                wantText:"想看",
                watchedText:"看过 ☆☆☆☆☆",
                isWatched:false,
                isWanted:0,
            }
        },
        props:{
            movieDetail:{
                type:Object,
                default:{}
            }
        },
        components:{star},
        computed:{
            tags(){
                let tags = this.movieDetail.genres.join('/'),
                    year = this.movieDetail.year;
                return `${year}/${tags}`
            }
        },
        methods:{
            wantWatch(){
                this.wantText==='想看'?this.wantText ="已想看":this.wantText ="想看";
                // this.isWanted = !this.isWanted
                this.isWanted = this.isWanted?0:1;
            },
            hasWatched(){
                this.watchedText==='看过 ☆☆☆☆☆'?this.watchedText ="已看过":this.watchedText ="看过 ☆☆☆☆☆";
                this.isWatched = !this.isWatched

            }
        }

    }
</script>

<style lang="less" scoped>
    @import "../../common/less/color.less";
    .info-wrapper{
        background-color:@base-white-color;
        padding: 0 15px;
            .overall{
                display: flex;
                justify-content: space-between;
                height: 140px;
                padding-top: 10px;
                    .dec{
                        display: flex;
                        flex: 70% 0 0 ;//flex-grow flex-shrink flex-basis
                        flex-direction: column;
                        justify-content: space-around;
                            h4{
                                font-weight: normal;
                                font-size: @size-default+.3;
                                color: #555;
                                vertical-align: baseline;
                            }
                            p{
                                color: @default-color;
                                font-size: 12px;

                            }
                    }
                    .rank{
                        display: flex;
                        flex-direction: column;
                        height: 100px;
                        background-color: #f8f8f8;
                        box-shadow: 0px 0px 5px #ccc;
                        padding: 10px 15px;
                        align-items: center;
                        justify-content: space-between;
                            span{
                                color: #777;
                                font-size: 12px;
                                &:nth-child(2){
                                    font-size: 18px;
                                    color: #333;
                                }
                            }
                    }
            }
            // 操作部分
            .operate{
                display:flex;
                margin-top: 20px;
                height: 35px;
                line-height: 35px;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                    .want-watch{
                        flex:1;
                        border: 1px solid @default-green-color;
                        border: 1px solid @default-green-color;
                        border-radius: 5px;

                        color: @default-green-color;
                        margin-right: 20px;
                        &.wanted{
                            color: #fe9800;
                            border: 1px solid #fe9800;

                        }
                    }
                    .has-watched{
                        flex: 2;
                        border: 1px solid @default-green-color;
                        border-radius: 5px;
                        color: @default-green-color;
                        &.watched{
                            color: #fe9800;
                            border: 1px solid #fe9800;
                        }
                            img{
                                width: 20px;
                                height: 20px;
                            }
                    }
            }
            // 简介部分
            .summary{
                margin: 20px 0;
                    position: relative;
                    &::before{
                        position: absolute;
                        content: "";
                        width: 100%;
                        top: 0;
                        height: 1px;
                        transform: scaleY(.5);
                        background-color: @line-default-color;
                    }
                    h4{
                        font-weight: normal;
                        color: #555;
                        padding: 10px 0 0;
                    }
                    p{
                        text-indent: 2em;
                        font-size: 14px;
                        color: #333;
                        line-height: 25px;
                    }
            }
    }
</style>
