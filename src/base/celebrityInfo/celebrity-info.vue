<template>
    <transition name='fade'>
        <div class="celebrity-info" v-show='isShow'>
            <m-header title='影人简介' fixed>
                <i class="icon iconfont icon-delete" slot='left' @click='close'></i>
            </m-header>
            <scroll
                class="list-scroll"
                :data='celebrity'
                ref='scroll'
                :pulldown='true'
            >
                <div class="wrapper">
                    <div class="name">
                        <h2>{{celebrity.name}}</h2>
                        <span>{{celebrity.name_en}}</span>
                    </div>
                    <!--  -->
                    <ul class="brief">
                        <li>
                            <span>性别：</span>
                            <p>{{celebrity.gender}}</p>
                        </li>
                        <li>
                            <span>星座：</span>
                            <p>{{celebrity.constellation}}</p>
                        </li>
                        <li>
                            <span>出生日期：</span>
                            <p>{{celebrity.birthday}}</p>
                        </li>
                        <li>
                            <span>出生地：</span>
                            <p>{{celebrity.born_place}}</p>
                        </li>
                        <li>
                            <span>更多中文名：</span>
                            <p>{{celebrity.aka[0]}}</p>
                        </li>
                    </ul>
                    <p class="summary">{{celebrity.summary}}</p>

                </div>
            </scroll>
        </div>
    </transition>
</template>

<script>
    import mHeader from 'base/header/header'
    import scroll from 'base/scroll/scroll'
    export default {
        name:'celebrityInfo',
        data(){
            return {
                isShow:0
            }
        },
        props:{
            celebrity:{
                type:Object
            }
        },
        components:{ mHeader ,scroll},
        mounted(){
            this.$nextTick(()=>{
                this.$refs.scroll.refresh();
            })
        },
        methods:{
            close(){
                this.isShow=0
            },
            show(){
                this.isShow =1;
                this.$nextTick(()=>{
                    this.$refs.scroll.refresh();
                })

            }
        }
    }
</script>
<style lang="less" scoped src='./index.less'></style>
