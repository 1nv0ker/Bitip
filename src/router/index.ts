import { createWebHistory, createRouter } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import UseUserStore from '../store/user'
// import { useMeta } from 'vue-meta'

// 全局配置（可选）
(NProgress as any).configure({
  showSpinner: false,        // 隐藏旋转动画
  speed: 500,               // 动画速度
  trickleSpeed: 200,        // 自动递增间隔
  minimum: 0.3              // 最小进度百分比
})


// import LoginComponent from '../views/login/Login.vue'
// import HomeComponent from '../views/home/index.vue'
// import ForgetPasswordVue from '../views/login/ForgetPassword.vue'
// import RegisterVue from '../views/login/Register.vue'
// import SafetyComponent from '../views/safety/index.vue'
// import SeviceComponent from '../views/service/index.vue'
// import PlanComponent from '../views/plan/index.vue'
// import setmenuComponent from '../views/setmenu/index.vue'
// import usercenterComponent from '../views/usercenter/index.vue'
// import proxycityComponent from '../views/usercenter/proxycity/index.vue'
// import LawServiceComponent from '../views/law/service.vue'

// import LawPrivateComponent from '../views/law/private.vue'
// import BasicLayoutVue from '../views/BasicLayout.vue'
// import PurchasedProcess from '../views/usercenter/purchaseprocess/index.vue'
// import TrafficManager from '../views/usercenter/trafficmanager/index.vue'
// import Purchased from '../views/usercenter/buy/index.vue'
// import PurchasedDetail from '../views/usercenter/purchaseddetail/index.vue'
// import PurchasedHistory from '../views/usercenter/purchasehistory/index.vue'
// import Promotionrebate from '../views/usercenter/promotionrebate/index.vue'
// import RechargeComponent from '../views/usercenter/recharge/index.vue'
// import UserAuth from '../views/usercenter/userauth/index.vue'
// import UserAccountSetting from '../views/usercenter/accountsetting/index.vue'
// import DyAgent from '../views/dyagent/index.vue'
// import StaticAgent from '../views/staticagent/index.vue'
// import refundVue from '../views/law/refund.vue'
// import whitelistVue from '../views/usercenter/whitelist/index.vue'
export const routes = [
    // { path: '/', redirect: '/home' },
    { path: '/', name:'home', component: () => import(`../views/home/index.vue`), 
      meta: {
      metaInfo: {
        title:'全球住宅代理IP企业级',
        meta: [
          {
            name:'Keywords', content:'江苏米亚信息科技有限公司, 爬虫代理,高匿代理ip,刷单代理ip,https代理,http代理,ip代理,代理ip,私密代理ip,免费代理ip,高速代理,独享代理ip,免费ip,在线代理,代理服务器'
          },
          {
            name:'Description', content:'米亚科技，米亚代理,（www.bitip.com）是http代理ip服务供应商，拥有千万级独立ip池，覆盖全球，低延迟高可用率稳定专业！爬虫代理,网页代理ip,企业级代理ip,电脑换ip,https代理,私密代理ip,免费代理ip,独享代理ip,在线代理,代理服务器等!'
          }
        ]
      }
    } 
  },
    { path: '/', component:() => import('../views/BasicLayout.vue'), children:[

      { path: '/servicelaw', component: () => import('../views/law/service.vue'), name:'servicelaw'},
      { path: '/privatelaw', component: () => import('../views/law/private.vue'), name:'privatelaw'},
      { path: '/refundlaw', component: ()=>import(`../views/law/refund.vue`), name:'refundlaw'},
    ] },
    
    { path: '/login', component: () => import(`../views/login/Login.vue`) },
    { path: '/forgetPassword', component: () => import(`../views/login/ForgetPassword.vue`) },
    { path: '/register', component: ()=> import(`../views/login/Register.vue`)},
    { path: '/setmenu', component: ()=> import(`../views/setmenu/index.vue`), name:'setmenu'},
    { path: '/safety', component: ()=>import(`../views/safety/index.vue`), name:'safety'},
    { path: '/service', component: ()=>import(`../views/service/index.vue`), name:'service'},
    { path: '/plan', component: ()=>import(`../views/plan/index.vue`), name:'plan'},
    { path: '/dyproxy', name:'dyproxy', component: ()=>import(`../views/dyagent/index.vue`)},
    { path: '/staticproxy', name:'staticproxy', component: ()=>import(`../views/staticagent/index.vue`)},
    { path: '/usercenter', component: ()=>import(`../views/usercenter/index.vue`), name:'usercenter', 
      meta: { requiresAuth: true } ,
      redirect: '/usercenter/proxycity',
      children:[
      {
        path:'proxycity',
        name:'proxycity',
        component: ()=>import(`../views/usercenter/proxycity/index.vue`),
        meta: {
          parent:'1'
        }
      },
      {
        path:'purchasedflow',
        name:'purchasedflow',
        component: ()=>import(`../views/usercenter/purchaseprocess/index.vue`),
        meta: {
          parent:'1'
        }
      },
      {
        path:'trafficmanager',
        name:'trafficmanager',
        component: ()=>import(`../views/usercenter/trafficmanager/index.vue`),
        meta: {
          parent:'1'
        }
      },
      {
        path:'purchased',
        name:'purchased',
        component: ()=>import(`../views/usercenter/buy/index.vue`),
        meta: {
          parent:'2'
        }
      },
      {
        path:'purchaseddetail',
        name:'purchaseddetail',
        component: ()=>import(`../views/usercenter/purchaseddetail/index.vue`),
        meta: {
          parent:'2'
        }
      },
      {
        path:'purchasedhistory',
        name:'purchasedhistory',
        component: ()=>import(`../views/usercenter/purchasehistory/index.vue`)
      },
      {
        path:'promotionrebate',
        name:'promotionrebate',
        component: ()=>import(`../views/usercenter/promotionrebate/index.vue`)
      },
      {
        path:'recharge',
        name:'recharge',
        component: ()=>import(`../views/usercenter/recharge/index.vue`)
      },
      {
        path:'userauth',
        name:'userauth',
        component: ()=>import(`../views/usercenter/userauth/index.vue`)
      },
      {
        path:'setting',
        name:'setting',
        component: ()=>import(`../views/usercenter/accountsetting/index.vue`)
      },
      {
        path:'whitelist',
        name:'whitelist',
        component: ()=>import(`../views/usercenter/whitelist/index.vue`),
        meta: {
          parent:'1'
        }
      }
    ]},
    // { path: '/servicelaw', component: LawServiceComponent, name:'servicelaw'},
    
    { path: '/:catchAll(.*)', redirect: '/'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (
    to: any,
    _from: any,
    savedPosition: any | null
  ): any | Promise<any> => {
    // 场景 1：通过浏览器前进/后退按钮导航时恢复滚动位置
    if (savedPosition) {
      return savedPosition
    }

    // 场景 2：根据 meta 标记强制滚动到顶部
    if (to.meta.scrollToTop) {
      return { top: 0, left: 0 }
    }

    // 场景 3：滚动到指定元素
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' // 平滑滚动
      }
    }

    // 默认行为：不改变滚动位置
    return { left: 0, top: 0 }
  }
})

// //路由前置
router.beforeEach((to, _from, next)=> {
  (NProgress as any).start()
  const userStore = UseUserStore();
  // console.log('to', to)
  if (to.meta) {
    const meta:any = to.meta.metaInfo || {};

    if (meta.title) document.title = meta.title;
    if (meta.meta) {
      // console.log('meta', meta.meta)
      // debugger
      meta.meta.forEach((item:any)=> {
        const metadom = document.createElement('meta')
        metadom.setAttribute('name', item.name)
        metadom.setAttribute('content', item.content)
        document.head.appendChild(metadom)
      })
    }
  }
  // debugger
  

  const isLogin = userStore.token
  if (to.meta.requiresAuth && !isLogin) {
    
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  // if (to.path.includes('usercenter')) {
  //   // if (!userStore.token) {
  //   //   router.push({path:'login',re})
  //   // } 
  //   next()
  // }
  next()
})

// //路由后置
router.afterEach(() => {
  (NProgress as any).done()          // 完成加载
})

router.onError(() => {
  (NProgress as any).done()          // 错误时强制完成
})
export default router