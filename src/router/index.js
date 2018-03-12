import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index/index0'
import pages from '@/components/pages/pages'
// import index from '@/components/common/loading'
Vue.use(Router)

const routes =[

	{
		path:'/',
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
				component:()=>import(/* webpackChunkName: 'audioBook' */'@/components/pages/audioBook/audioBook')
			},
			{
				path:'/broadCast',
				name:'broadCast',
				component:()=>import(/*webpackChunkName:'broadCast'*/'@/components/pages/broadCast/broadCast')
			},
			{
				path:'/group',
				name:'group',
				component:resolve=>require(['../components/pages/group/group.vue'],resolve)
			},
			{
				path:'/mine',
				name:'mine',
				component:resolve=>require(['../components/pages/Mine/mine.vue'],resolve)

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
		component:resolve=>require(['../components/search/search'],resolve)
	},
	{
		path:'/movie/:id',//电影详情的页面
		
		component:resolve=>require(['../components/movie-detail/movie-detail.vue'],resolve),


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

// beforeEach 注册一个全局前置守卫
// router.beforeEach((to,from ,next)=>{
// 	// to :Route 即将进入的目标路由对象
// 	// from：Route 	当前导航正要离开的路由
// 	// next:function(){} 一定要调用这个方法来resolve 这个钩子
// 	let nextRoute = ['mine'],
// 		isLogin   = global.isLogin;

// 	if(nextRoute.indexOf(to.name)>=0){
// 		// 没有登录
// 		if(!isLogin){
// 			router.push({'name':'login'})
// 		}

// 	}
// 	// 已经登录
// 	if(to.name==='login'){
// 		//
// 	}
// 	next()
// })



export default router
