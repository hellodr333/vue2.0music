
import Vue from 'vue'     //引入node_module里的 vue.js文件
import App from './App'   //引入App.vue文件

import VueRouter from 'vue-router'  //引入node_module里的 vue-router.js文件
Vue.use(VueRouter)   //使用 路由
import List from 'components/List'   //引入两个配置用到的组件
import Home from 'components/Home'
import Detail from 'components/Detail'


const routes=[                            //配置路由  是一个数组
			    {
					path: '/home',
					component: Home 
			    },
			    {
			    	path:'/hello',
			    	component:List
			    },
			    {
			    	path:'/detail',
			    	component:Detail
			    },
			    {
			    	path:'/',                //配置默认情况下调用的组件
			    	component:Home
			    }
			  ];

const router = new VueRouter({            //构建一个路由实例   以下用了es6 的简写  routes:routes
	routes                             
});

const vue = new Vue({                     //创建一个  vue实例，同时配置选项，将router挂上
		  router,
		  components: { App },
		  render:h => h(App)  
		});

 vue.$mount('#app');
 router.push('/home')
