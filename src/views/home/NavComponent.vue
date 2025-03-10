<template>
    <div class="w-full">
        <div class="w-full h-[2.8125rem] bg-[#EDFBF7]  fixed top-0 items-center flex z-50" v-show="acvitityStatus">
            <ActivityComponent  @onCloseActivity="emit('onCloseActivity', false);acvitityStatus=false;" />
        </div>
        <!-- 移动端下拉菜单 -->
        <NavMobieMenu v-show="showMobie" @onCloseNav="showMobie=false" :status="showMobie"/>
        <div :class="`row w-full gx-0 top-[2.8125rem] h-[4rem] items-center fixed z-50 bg-[white] ${acvitityStatus?'top-[2.8125rem]':'top-0'} border-[1px] border-[#EBEFF8]`">
            <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <div class="w-full flex justify-center cursor-pointer ml-[2.625rem]" @click="onToHome">
                    <img src="../../assets/logo.png" class="w-[5.25rem] h-[1.75rem]" />
                </div>
            </div>
            <div class="col-8 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8 justify-center">
                <!-- 桌面导航菜单 -->
                <NavMenu />
                <div class="flex items-center md:hidden justify-center" v-if="!userStore.userInfo?.tel">
                    <div class="w-4.5rem flex">
                        <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                        <select class="w-[5rem] cursor-pointer ml-[0.5rem] bitip_font_family font-medium" v-model="lan" @change="onLanauageChange">
                            <option value="zh">中</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div class="text-[#191919] cursor-pointer text-[1rem] font-medium ml-[2rem] hover:text-[#01AA44] ellipsis-single" @click="onLogin">
                        <span>{{t('login.login')}}</span>
                    </div>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                        <span>{{t('login.register')}}</span>
                    </div>
                </div>
                <div class="flex items-center md:hidden" v-else>
                    <span class=" font-medium">{{userStore.userInfo?.email}}</span>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onLogout">
                        <span>{{t('login.exit')}}</span>
                    </div>
                </div>
            </div>
            <div class="col-2 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <div class="hidden items-center md:flex gap-[2rem] sm:gap-[1rem] justify-center" v-if="!userStore.userInfo?.tel">
                    <div class="w-4.5rem flex">
                        <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                        <select class="w-[3rem] cursor-pointer font-medium ml-[0.5rem] bitip_font_family" v-model="lan" @change="onLanauageChange">
                            <option value="zh">中</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div class="text-[#191919] cursor-pointer text-[1rem] font-medium  hover:text-[#01AA44] " @click="onLogin">
                        <span class="ellipsis-single">{{t('login.login')}}</span>
                    </div>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium  bg-[#01AA44] hover:bg-[#008836] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center register_hover" @click="onRegister">
                        <span class=" font-medium">{{t('login.register')}}</span>
                    </div>
                </div>
                <div class="hidden items-center md:flex " v-else>
                    <span>{{userStore.userInfo?.email}}</span>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onLogout">
                        <span class="font-medium">{{t('login.exit')}}</span>
                    </div>
                </div>
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
            </div>
            <!-- <div :class="`flex h-[4rem] fixed top-[2.8125rem] container-fluid items-center ${acvitityStatus?'top-[2.8125rem]':'top-0'} bg-white`"> -->
                <!-- <div class="navbar-brand cursor-pointer ml-[2.625rem]" @click="onToHome">
                    <img src="../../assets/logo.png" class="w-[5.25rem] h-[1.75rem]" />
                </div>
                <div class="flex items-center md:hidden" v-if="!userStore.userInfo?.tel">
                    <div class="w-4.5rem flex">
                        <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                        <select class="w-[5rem] cursor-pointer ml-[0.5rem] bitip_font_family font-medium" v-model="lan" @change="onLanauageChange">
                            <option value="zh">中</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div class="text-[#191919] cursor-pointer text-[1rem] font-medium ml-[2rem] hover:text-[#01AA44] ellipsis-single" @click="onLogin">
                        <span>{{t('login.login')}}</span>
                    </div>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                        <span>{{t('login.register')}}</span>
                    </div>
                </div>
                <div class="flex items-center md:hidden" v-else>
                    <span class=" font-medium">{{userStore.userInfo?.email}}</span>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onLogout">
                        <span>{{t('login.exit')}}</span>
                    </div>
                </div> -->
                
                
                
                
            </div>
        <!-- </div> -->
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n'
    import useI18nStore from '../../store/i18n'
    import { useRouter } from 'vue-router'
    import ActivityComponent from './ActivityComponent.vue';
    import NavMenu from './NavMenu.vue';
    import NavMobieMenu from './NavMobieMenu.vue';
    import useUserStore from '../../store/user'
    const { t } = useI18n()
    const i18n = useI18n()
    const lan = ref()
    const store = useI18nStore()
    const router = useRouter()
    const acvitityStatus = ref(true)
    const showMobie = ref(false)
    const userStore = useUserStore()
    const emit = defineEmits(['onCloseActivity'])
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
    const onLogout = () => {
        userStore.setToken('')
        userStore.setUserInfo(null)
        router.push('/login')
    }
</script>
<style scoped>
 
</style>