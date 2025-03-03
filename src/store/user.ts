import { defineStore } from 'pinia'

const store = defineStore('users', {
    state:() => {
        return {
            token: '',
            userInfo:''
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
    }
})

export default store