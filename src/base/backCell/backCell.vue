<template>
    <div class="back_wrap" :class="{'is-fixed':fixed}">
        <div class="arrow">
            <img src="../../common/images/ic_bar_back_green.png" alt="" @click="$router.go(-1)">
            <span class="description">{{title}}</span>
        </div>
        <div class="icons_right">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'backWrap',
    props:{
        fixed:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:''
        }
    }

}
</script>

<style lang="less" scoped>
    @import "../../common/less/header";
    .flex(){
        display: flex;
        align-items: center;
    }
    div.back_wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3.5rem;
        padding:0 .5rem 0 .7rem;
        position: relative;
        background-color:@defaultCellBg;
            .arrow{
                .flex();
                img{
                    width: 25px;
                    height: 25px;
                }
                span.description{
                    padding-left: 2rem;
                    font-size: 1rem;
                }

            }
            .icons_right{
                .flex();
                img{
                    width: 28px;
                    height: 28px;
                    margin-left: 1.1rem;
                }
                div{
                    position: relative;
                    span.number{
                        position: absolute;
                        right: -3px;
                        top: -7px;
                        font-size: .9rem;
                        color: #56C468;
                    }
                }
            }
        &.is-fixed{
            position: fixed;
            top: 0;
            left:0;
            right:0;
            z-index: 9;
        }
        &:after{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            transform: scaleY(.5);
            background-color: #e4e4e4;
        }
    }
</style>
