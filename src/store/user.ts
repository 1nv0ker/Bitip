import { defineStore } from 'pinia'
interface UserInfo_data {
    email:string,
    name:string,
    remark:string,
    tel:string
}
const store = defineStore('users', {
    state:():{
        token:string,
        userInfo:UserInfo_data|null
    } => {
        return {
            token: '',
            userInfo: null
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
        setUserInfo(userInfo:UserInfo_data | any) {
            this.userInfo = userInfo
        }
    }
})

export default store