<template lang="html">
    <div class="star" :class="starType">
        <span class="star-item" v-for='item in itemClasses'
                :class="item"
                v-if="score || needNullStar"
        ></span>
        <span v-if="!score" class="no-score" :class="{'block':needNullStar}">暂无评分</span>
        <span v-if="showScore && score" class="show-score">{{normalizeScore}}</span>
    </div>
</template>

<script type='text/ecmascript-6'>
    const LENGTH=5,
          CLS_ON ='on',
          CLS_HALF = 'half',
          CLS_OFF = 'off';

    export default {
        name:'star',
        props:{
            size:{
                type:Number,
                default:0
            },
            score:{
                type:Number,
                default:0
            },
            needNullStar:{
                type:Boolean,
                default:false
            },
            showScore:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            starType(){
                return 'size-'+this.size
            },
            normalizeScore(){
                // 数位补零
                let len  = this.score.toString().length;
                if(len<2){
                    return `${this.score}.0`;
                }
                return this.score;
            },
            itemClasses(){
                let result=[],
                    score = Math.floor(this.score) / 2,
                    hasDecimal = score % 1 !==0,
                    integer =Math.floor(score);
                for(let i=0;i<integer;i++){
                    result.push(CLS_ON)
                }
                if(hasDecimal)result.push(CLS_HALF);
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);

                }
                return result;
            }
        }
    }
</script>

<style lang="less" scoped>
    // 引入背景图
    @import "../../common/less/mixin";
    div.star{
        font-size: 0;
        star-item{
            display: inline-block;
            background-repeat: no-repeat;
        }
        &.size-24{
            .star-item{
                height: 10px;
                width: 10px;
                margin-right: 3px; 
                background-size: 10px 10px;
                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    .bg-image(star24_on);
                }
                &.half{
                    .bg-image(star24_half);
                }
                &.off{
                    .bg-image(star24_off);

                }
            }
            .show-score{
                font-size: 12px;
            }
            .no-score{
                font-size: 12px;
            }
        }
        &.size-36{
            .star-item{
                height: 22px;
                width: 22.5px;
                margin-right: 8px; 
                background-size: 22.5px 22px;
                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    .bg-image(star36_on);
                }
                &.half{
                    .bg-image(star36_half);
                }
                &.off{
                    .bg-image(star36_off);

                }
            }
            .show-score{
                font-size: 14px;
            }
            .no-score{
                font-size: 14px;
            }
        }
    }
</style>
