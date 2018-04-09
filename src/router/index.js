import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/pages/index/index0'
import pages from 'components/pages/pages'
import store from '../store'

// import index from '@/components/common/loading'
Vue.use(Router)

const routes =[

	{
		path:'/',//根路径
		component:pages,
		children:[
			{
				path:'',
				name:'index',
				component:index
			},

			{
				path:'/audioBook',
				name:'audioBook',
				// component:resolve=>require(['../components/pages/audioBook/audioBook.vue'],resolve) //路由的懒加载
				component:()=>import(/* webpackChunkName: 'audioBook' */'components/pages/audioBook/audioBook')
			},
			{
				path:'/broadCast',
				name:'broadCast',
				component:()=>import(/*webpackChunkName:'broadCast'*/'components/pages/broadCast/broadCast')
			},
			{
				path:'/group',
				name:'group',
				component:()=>import(/*webpackChunkName:'group'*/'components/pages/group/group')

			},
			{
				path:'/mine',
				name:'mine',
				meta:{
					auth:true
				},
				component:()=>import(/*webpackChunkName:'mine'*/'components/pages/Mine/mine')

			},
			{
				path:'/index',
				redirect:{
					name:'index'
				}
			}
		]
	},
	{
		path:'/emplace',//设置的页面
		name:'emplace',
		component:resolve=>require(['../components/pages/Mine/emplace/emplace'],resolve)

	},
	{
		path:'/login',//登录的页面
		name:'login',
		component:resolve=>require(['../components/login/login.vue'],resolve)
	},
	{
		path:'*',//匹配不到的页面 404页面
		name:'error',
		component:resolve=>require(['../components/error/error.vue'],resolve)
	},
	{
		path:'/search',//搜索的页面
		name:"search",
		// component:resolve=>require(['../components/search/search'],resolve)
		component:()=>import(/*webpackChunkName:'search'*/'../components/search/search')
	},
	{
		path:'/movie/:id',//电影详情的页面
		component:resolve=>require(['../components/movie-detail/movie-detail.vue'],resolve),
	},
	{
		path:'/celebrity/:id',//影人
		// component:()=>import(/*webpackChunkName:'celebrity'*/'@/components/celebrity/celebrity') 坑  生命周期不执行动态路由
		component:resolve=>require(['components/celebrity/celebrity'],resolve),
	},
	{
		path:'/list/:id',
		component:resolve=>require(['components/index-detail/index-detail'],resolve),

	}
]

// 坑 1.官网的教程是new VueRouter   这里是因为官网使用了Vue.use(Vue.router )
//    2  const routes  这里必须是routes  ===>母鸡不知道换成其他的就不可以
//    3
const router = new Router({
	mode:'history',
  routes,
  // scrollBehavior(to,from,savedPosition){
  // 	// if(to.name==='index'){
  // 	// 	return {
  // 	// 		x:0,
  // 	// 		y:500
  // 	// 	}
  // 	// }

  // }
})

router.beforeEach(( to , from ,next )=>{
	if(to.matched.some( m => m.meta.auth)){
        // 对路由进行验证
		console.log(store.state.login.login);
        if(store.state.login.login) { // 已经登陆
            next()
        }else{
            next({path:'/login' })
        }
    }else{
        next()
    }
})


export default router
