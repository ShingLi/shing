<template>
    <div>
        <slot name='action_icon'></slot>
        <span class="number" v-if='isNumber'>{{num}}</span>
    </div>
</template>

<script>
export default {
    name:'backCellItem',
    props:{
        num:{
            type:Number,
            default:0,//number默认的类型是0
        },
        isNumber:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>
