<template>
    <div class="slider" ref='slider'>
        <div class="slider-group" ref='sliderGroup'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name:'slider',
        props:{
            currentIndex:{
                type:Number,
                default:0
            }
        },
        mounted(){
            setTimeout(()=>{
                this._initSlider()
                this._setSliderWidth()
            },25)
        },
        computed:{
            
        },
        methods:{
            _initSlider(){
                this.slider = new BScroll(this.$refs.slider,{
                    scrollX:true,
                    scrollY:false,
                    snap:{
                        threshold: 0.3,
                        momentum:false
                    },
                    bounce:false,

                })
                this.slider.on("scrollEnd",()=>{
                    let pageIndex = this.slider.getCurrentPage().pageX

                    this.$emit('switchItem',pageIndex)
                })
            },
            _setSliderWidth(){
                this.children = this.$refs.sliderGroup.children;
                let width =0,
                    sliderWidth = this.$refs.slider.clientWidth;
                for(let i=0;i<this.children.length-1;i++){
                    let child = this.children[i]
                    child.style.width = sliderWidth+'px'
                    width+=sliderWidth;
                    
                }
                this.$refs.sliderGroup.style.width = width+'px'
            }
        },
        watch:{
            currentIndex(newVal,oldVal){
                this.slider.goToPage(newVal,0,1000)
            }
        }
    }
</script>
<style scoped lang='less'>
    .slider{
        position: fixed;
        left: 0;
        width: 100%;
        top: 7.25rem;
        bottom: 4.2rem;
        overflow: hidden;
        .slider-group{
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            background-color: #fff;
        }
       
    }
</style>