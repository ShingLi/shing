<template lang="html">
    <div class="loadmore" :class="{'full':fullScreen}">
        <div class="hasmore" v-if='hasMore'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="nomore" v-else>
            <Divider>我是有底线的</Divider>
            <!-- <span>我是有底线的`````</span> -->
            
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import { Divider } from 'vux'
export default {
    props:{
        fullScreen:{
            type:Boolean,
            default:false
        },
        hasMore:{
            type:Boolean,
            default:true
        }
    },
    components:{Divider}
}
</script>

<style lang="less" scoped rel='stylesheet/less'>
    div.loadmore{
        width: 15rem;;
        height: 2rem;
        margin:0 auto;
        text-align: center;
        padding-bottom: 1rem;
        &.full{
            position: absolute;
            width: 100%;
            top:50%;
            transform: translateY(-50%);

        }
        .hasmore{
            height: 100%;
            span{
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                margin-right: .5rem;
                background: #90ee90;
                animation:load 1.04s ease infinite;
                    &:nth-child(1){
                         animation-delay:0.13s
                    }
                    &:nth-child(2){
                         animation-delay:0.26s
                    }
                    &:nth-child(3){
                         animation-delay:0.39s
                    }
                    &:nth-child(4){
                         animation-delay:0.52s
                    }
                    &:nth-child(5){
                         animation-delay:0.65s
                    }
                    &:last-child{
                        margin-right: 0px
                    }
            }
            @keyframes load {
                0%{
                    opacity: 1;
                      transform: scale(1.2)
                }
                100%{
                    opacity: .2;
                    transform: scale(.2)
                }
            }
        }
    }
    div.nomore{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 2rem;
        padding-bottom: 1rem;
            .line{
                height: 1px;
                width: 30%;
                background-color: #f5f5f5;
            }
    }
</style>
