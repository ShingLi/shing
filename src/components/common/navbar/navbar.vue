<template>
    <div class="navbar">
        <ul>
            <li :class="{'is-active':currentIndex===index}" @click='tabs(index)'
                v-for='(item,index) of items'
                    :key='item.id'
            >
                <span class="content">{{item.name}}</span>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name:'navbar',
    props:{
        items:{
            type:Array,
            default:[]
        },
        currentIndex:{
            type:Number,
            default:0
        }
    },
    methods:{
        tabs(index){
            this.$emit('switchs',index)
        }
    }
}
</script>

<style lang="less">
    div.navbar{
        height:3.5rem;
            .flex(){
                display: flex;
                align-items: center;
            }
            ul{
                .flex();
                list-style: none;
                li{
                    flex: 1;
                    .flex();
                    justify-content: center;
                    padding: 1rem 0;
                    border-bottom: 1px solid transparent;

                    span.content{
                        font-size: 1rem;
                    }
                    &.is-active{
                        color: #42bd56;
                        border-bottom: 1px solid #42bd56;
                    }
                }
            }
    }
</style>
