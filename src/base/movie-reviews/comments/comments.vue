<template lang="html">
    <ul class="comment-wrap" v-if='popular_comments.length'>
        <li v-for='(item,index) of popular_comments'>
            <div class="avatar">
                <img  height="40" width="40" v-lazy='item.author.avatar'>
            </div>
            <div class="content">
                <p v-text="item.author.name" class="name"></p>
                <div class="star">
                    <star :score='item.rating.value' :size='24'></star>
                </div>
                <p class="desc">{{item.content}}</p>
                <span>{{item.created_at}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
    import {getComments} from "../../../api/get-movie/get-movie"
    import star from "@/base/star/star"
    export default {
        name:'comments',

        props:{
            popular_comments:{
                type:Array,
                default:function(){
                    return []
                }
            }
        },

        components:{star},

    }
</script>

<style lang="less" scoped>
    .comment-wrap{
        li{
            display: flex;
            margin-bottom: 20px;
            .avatar{
                flex:0 0 40px;
                width: 40px;
                margin-right: 12px;
                    img{
                        border-radius: 50%;

                    }
            }
            .content{
                flex: 1;
                    .name{
                        display: inline-block;
                        line-height: 25px;
                        margin-right: 8px;
                    }
                    .star{display: inline-block;}
                    .desc{line-height: 20px;}
                    span{color: #777;font-size: 12px;line-height: 25px;}
            }
        }
    }
</style>
