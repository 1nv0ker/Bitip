import { defineStore } from 'pinia'
import { GetUserInfo, GetMyIp } from '../api/login'
import router from '../router'
interface UserInfo_data {
    email:string,
    name:string,
    remark:string,
    tel:string,
    accountBalance:number,
    isVerify:boolean,
    status:number,
    realName:string,
    idCard:string,
    inviteCode:string
}
const store = defineStore('users', {
    state:():{
        token:string,
        userInfo:UserInfo_data|null,
        info:any
    } => {
        return {
            token: '',
            userInfo: null,
            info:null
        }
    },
    persist: true,
    getters: {
        getToken(state) {
            return state.token
        }
    },
    actions: {
        setToken(token:string) {
            this.token = token
        },
        async setUserInfo() {
            if (!this.token) {
                return
            }
            await GetUserInfo()
            .then((res:any) => {
                console.log('res1', res)
                this.userInfo = res.body.userInfo
            })
            await GetMyIp()
            .then((res:any) => {
                // console.log('res1', res)
                this.info = res.body
            })
            
        },
        clearUserInfo() {
            this.userInfo = null
        },
        clearToken() {
            this.token = ''
        },
        logout() {
            this.token = ''
            this.userInfo = null
            router.push({path:'/login'})
        },
        //密码登录
        passwordLogin() {
            
        },
        //短信登陆
        textLogin() {

        },
        //忘记密码
        forgetPassword() {

        },
        //注册
        accountRegister() {

        }
    }
})

export default store