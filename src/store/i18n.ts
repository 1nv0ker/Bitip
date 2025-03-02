import { defineStore } from 'pinia'

const store = defineStore('language', {
    state:() => {
        return {
            language: '',
            currentNav:''
        }
    },
    persist: true,
    getters: {
        getLanauage(state) {
            return state.language
        },
        getNav(state) {
            return state.currentNav
        }
    },
    actions: {
        changeLanauage(type:string) {
            this.language = type
        },
        setNav(nav:string) {
            this.currentNav = nav
        }
    }
})

export default store