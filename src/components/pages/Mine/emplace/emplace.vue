<template>
    <div class="emplace_wrap">
        <!-- 顶部的设置部分   -->
        <backCell title="设置" class="margin-b"></backCell>
        <!-- 推送 -->
        <cell title="推送" is-link class="margin-b"></cell>
        <!-- 缓存   -->
        <cell title="清理储存空间" is-link description='1MB' class="margin-b"></cell>
        <!-- 放到桌面 -->
        <cell title="将小组放到桌面" class="margin-b"></cell>
        <!-- feedback 反馈-->
        <cell title="帮助和反馈" description='来尽情吐槽把' isLink></cell>
        <cell title="网络诊断" isLink class="margin-b"></cell>
        <!-- about -->
        <cell title="新功能介绍" isLink></cell>
        <cell title="关于" isLink></cell>
        <cell title="开源许可" isLink></cell>
    </div>
</template>

<script>
import backCell from '@/base/backCell/backCell'
import cell from "@/base/cell/cell"
export default {
    name:'emplace',
    components:{
        backCell,
        cell
    }
}
</script>

<style lang="less" scoped>
    .emplace_wrap{
        height: 100%;
        background-color: #F2F1EE;
    }
    .margin(@top:0;@bot){
        margin-bottom: @bot;
        margin-top: @top;
    }
    .margin-b{
        .margin(@bot:1rem);
    }
</style>
