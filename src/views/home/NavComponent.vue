<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top p-0">
        <ActivityComponent class="fixed top-0" @onCloseActivity="acvitityStatus=false"/>
        <div :class="`container-fluid h-[4rem] relative ${acvitityStatus?'mt-[2.8125rem]':''} `">
            <div class="navbar-brand cursor-pointer ml-[2.625rem]" @click="onToHome">
                <img src="../../assets/logo.png" class="w-[5.25rem] h-[1.75rem]" />
            </div>
            <div class="flex items-center md:hidden">
                <div class="w-4.5rem flex">
                    <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                    <select class="w-[5rem] cursor-pointer ml-[0.5rem]" v-model="lan" @change="onLanauageChange">
                        <option value="zh">中</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="text-[#191919] cursor-pointer text-[1rem] font-medium ml-[2rem]" @click="onLogin">
                    {{t('login.login')}}
                </div>
                <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                    {{t('login.register')}}
                </div>
            </div>

            <!-- 桌面导航菜单 -->
            <NavMenu />
            <!-- 移动端菜单按钮 -->
            <div class="md:hidden">
                <button 
                    id="mobile-menu-button"
                    @click="showMobie=!showMobie"
                    class="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <svg 
                        class="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <!-- 移动端下拉菜单 -->
            <NavMobieMenu v-show="showMobie" @onCloseNav="showMobie=false" :status="showMobie"/>
            <div class="hidden items-center md:flex pr-[5.75rem]">
                <div class="w-4.5rem flex">
                    <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                    <select class="w-[3rem] cursor-pointer ml-[0.5rem]" v-model="lan" @change="onLanauageChange">
                        <option value="zh">中</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="text-[#191919] cursor-pointer text-[1rem] font-medium ml-[2rem]" @click="onLogin">
                    {{t('login.login')}}
                </div>
                <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                    {{t('login.register')}}
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n'
    import useI18nStore from '../../store/i18n'
    import { useRouter } from 'vue-router'
    import ActivityComponent from './ActivityComponent.vue';
    import NavMenu from './NavMenu.vue';
    import NavMobieMenu from './NavMobieMenu.vue';
    const { t } = useI18n()
    const i18n = useI18n()
    const lan = ref()
    const store = useI18nStore()
    const router = useRouter()
    const acvitityStatus = ref(true)
    const showMobie = ref(false)
    onMounted(()=> {
        lan.value = i18n.locale.value || 'zh'
        store.changeLanauage(lan.value)
    })
    const onLanauageChange = () => {
        // console.log('onLanauageChange', value, lan.value)
        i18n.locale.value = lan.value
        store.changeLanauage(lan.value)
    }
    const onLogin = () => {
        router.push('/login')
    }
    const onRegister = () => {
        router.push('/register')
    }
    const onToHome = () => {
        router.push('/home')
    }
</script>