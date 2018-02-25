<template>
  <div id="app">
    <section>
        <keep-alive>
            <router-view @isShow='isShow' :class="{'is-height':hide}"></router-view>
        </keep-alive>
    </section>
    <!-- 进入页面部分的遮罩层 -->
    <transition name='fade'>
        <loading v-if='!show'></loading>
    </transition>
    <!-- <login></login> -->
  </div>
</template>

<script>
// import tabbar from '@/components/common/tabbar'
import loading from '@/components/common/loading'
import login   from '@/components/common/login.vue'
export default {
  name: 'app',
  data(){
    return {
      show:false  //欢迎页默认是关闭的
    }
  },

  components:{
    loading,
    login
  },

  computed:{
    // 这个方法是单独控制我的那个页面的高度是100%
    hide(){
      if(this.$route.name==='mine'){
        return true
      }
    }
  },

  methods:{
    // 这个方法是进入主页后读取到数据然后inex.vue emit('isShow') 然后关闭欢迎页
    isShow(){
      var that = this;
      setTimeout(function(){

        that.show=true
      },1500)
    }
  }
}
</script>

<style scoped>
  @import 'assets/less/app.css'
</style>
