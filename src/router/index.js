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
                redirect:{ name:'index'}
			},

			{
				path:'/audioBook',
			
				component:resolve=>require(['components/pages/audioBook/audioBook.vue'],resolve), //路由的懒加载
				children:[
					{
						path:':id',
						component:resolve=>require(['components/movie-detail/movie-detail.vue'],resolve),
					}
				]
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
				name:'index',
				component:index,
				children:[
                	{
                		path:':id',
                		component:resolve=>require(['components/index-detail/index-detail'],resolve)
                	}
                ]
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
		path:'/celebrity/:id',//影人
		// component:()=>import(/*webpackChunkName:'celebrity'*/'@/components/celebrity/celebrity') 坑  生命周期不执行动态路由
		component:resolve=>require(['components/celebrity/celebrity'],resolve),
	}
]

// 路由的配置
const router = new Router({
	mode:'hash',
    routes
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
