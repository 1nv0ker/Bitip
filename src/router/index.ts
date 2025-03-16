import { createWebHistory, createRouter } from 'vue-router'

import LoginComponent from '../views/login/Login.vue'
import HomeComponent from '../views/home/index.vue'
import ForgetPasswordVue from '../views/login/ForgetPassword.vue'
import RegisterVue from '../views/login/Register.vue'
import SafetyComponent from '../views/safety/index.vue'
import SeviceComponent from '../views/service/index.vue'
import PlanComponent from '../views/plan/index.vue'
import setmenuComponent from '../views/setmenu/index.vue'
import usercenterComponent from '../views/usercenter/index.vue'
import proxycityComponent from '../views/usercenter/proxycity/index.vue'
import LawServiceComponent from '../views/law/service.vue'

import LawPrivateComponent from '../views/law/private.vue'
import BasicLayoutVue from '../views/BasicLayout.vue'
import PurchasedProcess from '../views/usercenter/purchaseprocess/index.vue'
import TrafficManager from '../views/usercenter/trafficmanager/index.vue'
import Purchased from '../views/usercenter/buy/index.vue'
import PurchasedDetail from '../views/usercenter/purchaseddetail/index.vue'
import PurchasedHistory from '../views/usercenter/purchasehistory/index.vue'
import Promotionrebate from '../views/usercenter/promotionrebate/index.vue'
import RechargeComponent from '../views/usercenter/recharge/index.vue'
import UserAuth from '../views/usercenter/userauth/index.vue'
import UserAccountSetting from '../views/usercenter/accountsetting/index.vue'
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/', component:BasicLayoutVue, children:[
      { path: '/servicelaw', component: LawServiceComponent, name:'servicelaw'},
      { path: '/privatelaw', component: LawPrivateComponent, name:'privatelaw'},
    ] },
    { path: '/home', component: HomeComponent},
    { path: '/login', component: LoginComponent },
    { path: '/forgetPassword', component: ForgetPasswordVue},
    { path: '/register', component: RegisterVue},
    { path: '/setmenu', component: setmenuComponent, name:'setmenu'},
    { path: '/safety', component: SafetyComponent, name:'safety'},
    { path: '/service', component: SeviceComponent, name:'service'},
    { path: '/plan', component: PlanComponent, name:'plan'},
    { path: '/usercenter', component: usercenterComponent, name:'usercenter', children:[
      {
        path:'proxycity',
        name:'proxycity',
        component: proxycityComponent,
        meta: {
          parent:'1'
        }
      },
      {
        path:'purchasedflow',
        name:'purchasedflow',
        component: PurchasedProcess,
        meta: {
          parent:'1'
        }
      },
      {
        path:'trafficmanager',
        name:'trafficmanager',
        component: TrafficManager,
        meta: {
          parent:'1'
        }
      },
      {
        path:'purchased',
        name:'purchased',
        component: Purchased,
        meta: {
          parent:'2'
        }
      },
      {
        path:'purchaseddetail',
        name:'purchaseddetail',
        component: PurchasedDetail,
        meta: {
          parent:'2'
        }
      },
      {
        path:'purchasedhistory',
        name:'purchasedhistory',
        component: PurchasedHistory
      },
      {
        path:'promotionrebate',
        name:'promotionrebate',
        component: Promotionrebate
      },
      {
        path:'recharge',
        name:'recharge',
        component: RechargeComponent
      },
      {
        path:'userauth',
        name:'userauth',
        component: UserAuth
      },
      {
        path:'setting',
        name:'setting',
        component: UserAccountSetting
      }
    ]},
    // { path: '/servicelaw', component: LawServiceComponent, name:'servicelaw'},
    
    { path: '/:catchAll(.*)', redirect: '/home'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// //路由前置
// router.beforeEach((to, from)=> {

// })

// //路由后置
// router.afterEach((to, from) => {
    
// })
export default router