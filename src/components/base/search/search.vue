<template>
    <div>
        <search-box title='' :bg='true' fixed>
			<div class="search-warp">
				<input class="searchBtn" type="submit">
				<input type="text" class="search" placeholder="请输入"
                    id='focusInput'
                    v-model = 'query'
				>
			</div>
			<a slot='right' @click="$router.go(-1)">取消</a>
		</search-box>
        <div class="search-main">
            <scroll>
                <div>
                    <div class="search-history">
                        <!-- 搜索记录部分 -->
                        <div class="search-describe">
                            <h2>搜索历史</h2>
                            <i class="icon iconfont icon-lajitong"></i>
                        </div>
                        <history-list></history-list>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
</template>
<script>
    import searchBox from '@/components/common/header'
    import scroll    from '@/components/base/scroll/scroll'
    export default{
        data(){
            return {
                query:'', //用户搜索的参数
                throttle:false, //节流操作
            }
        },
        components:{searchBox,scroll,
            historyList:res=>require(['@/components/base/historyList/historyList.vue'],res)
        },
        activated(){
            this.$nextTick(()=>{
                this.focusInput();
            })
        },

        methods:{
            focusInput(){
                let focusInput = document.getElementById('focusInput');
                focusInput.focus();

            },
            onchangeQuery(newQuery){
                console.log(1)
                
            }
        },
        watch:{
            query(newQuery){

                if(!this.throttle){//前端节流
                    if(this.timer){
                        clearTimeout(this.timer)
                    
                    }
                    this.timer = setTimeout(()=>{
                        this.onchangeQuery(newQuery);
                    },200)
                }
               

            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../assets/less/color.less';
    div.search-warp{
        height: 2.8rem;
        background-color: #fff;
        display: flex;
        display: --webkit-flex;
        border-radius: .4rem;
        width: 90%;
        margin-left: 1rem;
        align-items: center;
        justify-content: space-around;
        .searchBtn{
            border: none;
            outline: none;
            display: inline-block;
            background: url('../../../assets/images/ic_search_gray.png')  no-repeat;
            text-indent: -99px;
            width: 20px;
            height: 20px;
            background-size: cover;
        }
        .search{
            border:none;
            outline: none;
            width: 80%;
            height: 90%;
            font-size: 1rem;
        }

    }
    .search-main{
        position: fixed;
        top:3.7rem;
        width: 100%;
        bottom: 0;
        
        padding: 0 15px;
        overflow: hidden;

            .search-history{
                    .search-describe{
                        display: flex;
                        width: 100%;
                    
                        justify-content: space-between;
                        padding:10px 0;
                        margin-top: 1rem;
                        position: relative;
                            h2{
                                color:@default-green-color;
                                font-weight: normal;
                                font-size: 1.4rem
                            }
                            i{
                                color:@default-green-color;
                                font-size: 1.4rem;
                            }
                            &:after{
                                position: absolute;
                                content: "";
                                top:0;
                                left: 0;
                                right: 0;
                                width: 100%;
                                height: 1px;
                                background-color: @line-default-color;
                                transform:scaleY(.5);

                            }
                    }
            }
    }
</style>
