import { createWebHistory, createRouter } from 'vue-router'

import LoginComponent from '../views/login/Login.vue'
import HomeComponent from '../views/home/index.vue'
import ForgetPasswordVue from '../views/login/ForgetPassword.vue'
import RegisterVue from '../views/login/Register.vue'
import SafetyComponent from '../views/safety/index.vue'
import SeviceComponent from '../views/service/index.vue'
import PlanComponent from '../views/plan/index.vue'
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeComponent},
    { path: '/login', component: LoginComponent },
    { path: '/forgetPassword', component: ForgetPasswordVue},
    { path: '/register', component: RegisterVue},
    { path: '/safety', component: SafetyComponent},
    { path: '/service', component: SeviceComponent},
    { path: '/plan', component: PlanComponent},
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