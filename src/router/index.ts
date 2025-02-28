import { createWebHistory, createRouter } from 'vue-router'

import LoginComponent from '../views/login/Login.vue'
import HomeComponent from '../views/home/index.vue'
import ForgetPasswordVue from '../views/login/ForgetPassword.vue'
import RegisterVue from '../views/login/Register.vue'
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/home', component: HomeComponent},
    { path: '/login', component: LoginComponent },
    { path: '/forgetPassword', component: ForgetPasswordVue},
    { path: '/register', component: RegisterVue}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router