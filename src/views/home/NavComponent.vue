<template>
    <div class="w-full">
        <div class="w-full h-[2.8125rem] bg-[#EDFBF7]  fixed top-0 items-center flex z-50" v-show="acvitityStatus">
            <ActivityComponent  @onCloseActivity="emit('onCloseActivity', false);acvitityStatus=false;" />
        </div>
        <!-- 移动端下拉菜单 -->
        <NavMobieMenu v-show="showMobie" @onCloseNav="showMobie=false" :status="showMobie"/>
        <!-- <div :class="`row w-full gx-0 top-[2.8125rem] h-[4rem] items-center fixed z-50 bg-[white] ${acvitityStatus?'top-[2.8125rem]':'top-0'}`" :style="customeStyle"> -->
        <div :class="`flex w-full justify-center gx-0  h-[4rem] items-center mt-[2.8125rem]  fixed z-50 bg-[white] ${acvitityStatus?' mt-[2.8125rem] ':'mt-0'}`" :style="customeStyle">
            <div class="w-[20rem]">
                <div class="w-full flex justify-center cursor-pointer ml-[2.625rem] z-50" @click="onToHome">
                    <img src="../../assets/logo.svg" class="w-[5.25rem] h-[1.75rem] z-50"  />
                </div>
            </div>
            <div class="flex justify-center h-full flex-[80rem]">
                <!-- 桌面导航菜单 -->
                <NavMenu  class="z-50"/>
                <div class="flex items-center md:hidden justify-center" v-if="!userStore.userInfo?.tel">
                    <div class="w-[4.5rem] flex ">
                        <img src="../../assets/translate.svg" class="w-[1.5rem] h-[1.5rem] z-50" style="transform: scaleX(-1) "/>
                        <select class="w-[5rem] cursor-pointer ml-[0.5rem] bitip_font_family font-medium" v-model="lan" @change="onLanauageChange">
                            <option value="zh">中</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div class="text-[#191919] z-50 cursor-pointer text-[1rem] font-medium ml-[2rem] hover:text-[#01AA44] ellipsis-single" @click="onLogin">
                        <span>{{t('login.login')}}</span>
                    </div>
                    <div class="text-[white] z-50 cursor-pointer relative text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                        <span>{{t('login.register')}}</span>
                        <div class="z-50 w-[4.375rem] rounded-[3.125rem] h-[1.5rem] bg-[#FFDA44] absolute top-[-0.75rem] right-[-2.5rem] flex justify-center items-center">
                            <span class="text-[#191919] font-medium text-[0.9rem]">{{t('login.registerTip')}}</span>
                        </div>
                    </div>
                </div>
                <div class="flex z-50 items-center md:hidden gap-[1rem]" v-else>
                    <span class=" z-50 font-medium">{{userStore.userInfo?.tel}}</span>
                    <div class="z-50 bg-[#01AA44] text-[white] rounded-[1.1rem] w-[5.75rem] text-[1rem] cursor-pointer h-[2.25rem] flex items-center justify-center" @click="OnEnterBackend">
                        <span class="font-medium pl-[0.5em] pr-[0.5rem] ellipsis-single">{{t('login.Backstage')}}</span>
                    </div>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onLogout">
                        <span>{{t('login.exit')}}</span>
                    </div>
                </div>
            </div>
            <div class="w-[20rem] z-50 h-full flex justify-end pr-[2.625rem]">
                <div class="hidden items-center md:flex gap-[2rem] sm:gap-[1rem]  justify-center z-50" v-if="!userStore.userInfo?.tel">
                    <div class="w-[4.5rem] flex cursor-pointer z-50" @click="onLanauageChange()">
                        <img :src="lan=='zh'?lanImg1:lanImg2" class="z-50 w-[1.5rem] h-[1.5rem]" />
                        <span class="pl-[0.375rem] text-[1rem] font-medium z-50">{{lan =='zh' ? '中文':'EN'}}</span>
                    </div>
                    <div class="text-[#191919] cursor-pointer text-[1rem] font-medium  hover:text-[#01AA44] z-50 " @click="onLogin">
                        <span class="ellipsis-single">{{t('login.login')}}</span>
                    </div>
                    <div class="text-[white] cursor-pointer text-[1rem] font-medium  z-50 relative 
                    bg-[#01AA44] hover:bg-[#008836] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center register_hover" @click="onRegister">
                        <span class=" font-medium">{{t('login.register')}}</span>
                        <div class="w-[4.375rem] rounded-[3.125rem] h-[1.5rem] bg-[#FFDA44] absolute top-[-0.75rem] right-[-2.5rem] flex justify-center items-center">
                            <span class="text-[#191919] font-medium text-[0.9rem]">{{t('login.registerTip')}}</span>
                        </div>
                    </div>
                </div>
                <div class="hidden items-center md:flex gap-[1rem] " v-else>
                    <div class="w-[4.5rem] flex cursor-pointer z-50" @click="onLanauageChange()">
                        <img :src="lan=='zh'?lanImg1:lanImg2" class="z-50 w-[1.5rem] h-[1.5rem]" />
                        <span class="pl-[0.375rem] text-[1rem] font-medium z-50">{{lan =='zh' ? '中文':'EN'}}</span>
                    </div>
                    <span>{{userStore.userInfo?.tel}}</span>
                    <div class=" bg-[#01AA44] text-[white] rounded-[1.1rem] w-[5.75rem] text-[1rem] cursor-pointer h-[2.25rem] flex items-center justify-center" @click="OnEnterBackend">
                        <span class="font-medium pl-[0.5em] pr-[0.5rem] ellipsis-single" :title="t('login.Backstage')">{{t('login.Backstage')}}</span>
                    </div>
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
        </div>
        <div :class="`w-full top-[6.8125rem] h-[1px] items-center z-30 bg-[#EBEFF8] ${acvitityStatus?'top-[6.8125rem]':'top-[4rem]'}`" ></div>
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
    import lanImg1 from '../../assets/translate.svg'
    import lanImg2 from '../../assets/translate_en.svg'
    const { t } = useI18n()
    const i18n = useI18n()
    const lan = ref('zh')
    const store = useI18nStore()
    const router = useRouter()
    const acvitityStatus = ref(true)
    const showMobie = ref(false)
    const userStore = useUserStore()
    const emit = defineEmits(['onCloseActivity'])
    defineProps({
        customeStyle:Object
    })
    onMounted(()=> {
        lan.value = i18n.locale.value || 'zh'
        store.changeLanauage(lan.value)
    })
    const onLanauageChange = () => {
        // console.log('onLanauageChange', value, lan.value)
        lan.value == 'zh'?lan.value='en':lan.value='zh'
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
        router.push('/')
    }
    const onLogout = () => {
        userStore.logout()
    }
    const OnEnterBackend = () => {
        router.push('/usercenter/proxycity')
    }
</script>
<style scoped>
 
</style>