<template>
    <div class="w-full h-full pl-[1.75rem] pr-[1.75rem] flex justify-between">
        <div class="h-full flex items-center justify-center">
            <div class="flex flex-col ">
                <span class="text-[#191919] text-[1rem] ">{{t('backend_menu.local')}}:<span class="text-[#999999] text-[1rem]">{{t('backend_menu.tip')}}</span></span>
                <span class="text-[1.125rem] font-medium">{{userStore.IP}}</span>
            </div>
            <!-- 移动端菜单按钮 -->
            <div class="md:hidden">
                <button 
                    id="mobile-menu-button"
                    @click="onOpenMenu"
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
        <div class="h-full flex items-center">
            <div class="w-auto p-[0.375rem] border-[1px] border-[#999999] rounded-[3.125rem] gap-[2.8rem] flex items-center h-[3rem]">
                <span class="pl-[1rem] text-[#191919] text-[1rem]">{{t('backend_menu.Balance')}}:<span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-bold">￥{{userStore.userInfo?.accountBalance}}</span></span>
                <div class="w-[5.75rem] h-full rounded-[1.125rem] bg-[#01AA44] flex justify-center items-center cursor-pointer" @click="onRecharge">
                    <span class="text-[#FFFFFF] text-[1rem] font-medium">{{t('backend_menu.recharge')}}</span>
                </div>
            </div>
            <div class="p-[0.375rem] pl-[1.5rem] pr-[1.5rem] w-[auto] h-[3rem] border-[1px] border-[#999999] rounded-[3.125rem] cursor-pointer flex items-center ml-[1.75rem]" @click="onLanauageChange">
                <!-- <img src="../../assets/translate.png" class="w-[1.5rem] h-[1.5rem]"/> -->
                <img :src="lan=='zh'?lanImg1:lanImg2" class="w-[1.5rem] h-[1.5rem]" />
                <span class="pl-[0.375rem] text-[1rem] font-medium">{{lan =='zh' ? '中文':'EN'}}</span>
            </div>
            <div class="w-[3rem] h-[3rem] ] border-[1px] border-[#999999] rounded-[3.125rem] flex items-center ml-[1.75rem] justify-center">
                <div class="w-[1.5rem] h-[1.5rem] cursor-pointer" @click="showContact=!showContact">
                    <img  src="../../assets/contact.png" class="w-full h-full"/>
                </div>
            </div>
            <div class="w-[3rem] h-[3rem] border-[1px] border-[#999999] rounded-[3.125rem] flex items-center ml-[1.75rem] justify-center">
                <div class="w-[1.5rem] h-[1.5rem] cursor-pointer">
                    <img  src="../../assets/notice.png" class="w-full h-full"/>
                </div>
            </div>

            <div class="w-[3rem] h-[3rem] border-[1px] border-[#999999] rounded-[3.125rem] flex items-center ml-[1.75rem] justify-center  cursor-pointer"
             @mouseenter="showUser=true"
             @click="showUser=true">
                <img src="../../assets/usercenter/avater.png" class="w-full h-full"/>
            </div>
        </div>
        <!-- 用户下拉框 -->
        <div class="fixed w-[21.75rem] h-[24.3125rem] bg-[white] top-[5.875rem] right-[3.5rem] rounded-[1.5rem] border-[1px] border-[#E2E7E4] p-[1.75rem]" 
        style="box-shadow: 0px 16px 26px 0px rgba(4,27,13,0.06);z-index: 50;" v-show="showUser" @mouseenter="showUser=true" @mouseleave="showUser=false">
            <div class="w-full flex items-center  pb-[1.5rem] border-[#EBEFF8] border-b-[1px]">
                <div class="w-[4.25rem] h-[4.25rem]  rounded-[3.625rem]">
                    <img src="../../assets/usercenter/avater.png" class="w-full h-full"/>
                </div>
                <div class="flex flex-col pl-[1.375rem] text-[#191919]">
                    <span class="text-[1.1rem] font-bold">{{ t('backend_menu.welcome') }}</span>
                    <span class="text-[1.1rem] font-bold">{{userStore.userInfo?.tel}}</span>
                </div>
            </div>
            <div class="flex w-full gap-[0.5rem] flex-col mt-[1.25rem] border-[#EBEFF8] border-b-[1px] pb-[1.5rem]">
                <div class="flex w-full text-[1rem] justify-between">
                    <span class=" font-semibold text-[#191919]">{{ t('backend_menu.account') }}</span>
                    <span class=" font-medium text-[#01AA44] cursor-pointer" @click="router.push({name:'recharge'})">{{ t('backend_menu.recharge') }}</span>
                </div>
                <div class="flex w-full text-[1rem]">
                    <span class="  text-[#191919]">{{ t('backend_menu.Balance') }}</span>
                    <span class=" text-[#191919] cursor-pointer pl-[1.25rem]">￥{{userStore.userInfo?.accountBalance}}</span>
                </div>
            </div>
            <div class="flex w-full gap-[0.5rem] flex-col mt-[1.25rem]">
                <div class="flex w-full text-[1rem] justify-between items-center" @click="router.push({name:'userauth'})">
                    <span class="  text-[#191919]">{{ t('backend_menu.authentication') }}</span>
                    <RightOutlined class="text-[#191919] cursor-pointer" />
                </div>
                <div class="flex w-full text-[1rem] justify-between items-center cursor-pointer" @click="router.push({name:'setting'})">
                    <span class="  text-[#191919]">{{ t('backend_menu.setting') }}</span>
                    <RightOutlined class="text-[#191919] cursor-pointer" />
                </div>
            </div>
            <div class="w-full mt-[1.25rem]">
                <div class="w-[18.25rem] h-[3rem] border-[#EBEFF8] border-[1px] rounded-[0.75rem] bg-[#FAFAFA] flex justify-center items-center cursor-pointer" @click="onLogout">
                    <span class="text-[#191919] text-[1rem] font-semibold">{{t('login.exit')}}</span>
                </div>
            </div>
        </div>
        <Contact v-show="showContact"/>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import useI18nStore from '../../store/i18n'
    import { RightOutlined } from '@ant-design/icons-vue';
    import lanImg1 from '../../assets/translate.png'
    import lanImg2 from '../../assets/translate_en.png'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    import Contact from '../Contact.vue';
    import useUserStore from '../../store/user'

    const { t } = useI18n()
    const i18n = useI18n()
    const userStore = useUserStore()
    const store = useI18nStore()
    const emit = defineEmits(['onOpenMenu'])
    const lan = ref()
    const router = useRouter()
    const showUser = ref(false)
    const showContact = ref(false)
    const onOpenMenu = () => {
        emit('onOpenMenu')
        
    }
    onMounted(()=> {
        lan.value = i18n.locale.value || 'zh'
        store.changeLanauage(lan.value)
        userStore.setUserInfo()

        
    })
    const onLanauageChange = () => {
        // console.log('onLanauageChange', value, lan.value)
        lan.value == 'zh'?lan.value='en':lan.value='zh'
        i18n.locale.value = lan.value
        store.changeLanauage(lan.value)
    }
    const onRecharge = () => {
        router.push({name:'recharge'})
    }
    const onLogout = () => {
        userStore.logout()
    }
</script>