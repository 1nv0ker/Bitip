import { defineStore } from 'pinia'

const store = defineStore('language', {
    state:() => {
        return {
            language: ''
        }
    },
    persist: true,
    getters: {
        getLanauage(state) {
            return state.language
        }
    },
    actions: {
        changeLanauage(type:string) {
            this.language = type
        }
    }
})

export default store