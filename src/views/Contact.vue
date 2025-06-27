<template>
    <div class="w-[4.75rem] h-[21.75rem] fixed right-[2rem] 
    flex top-[30rem] z-[99] rounded-[6.25rem] bg-[white] 
    flex-col items-center 
    justify-evenly" style="box-shadow: 0px 4px 20px 0px rgba(3,42,18,0.08);" >
    <div class="flex flex-col items-center cursor-pointer" @click="openWechatService">
            <img src="../assets/wechat.png" class="w-[2.25rem] h-[2.25rem]" />
            <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title2') }}</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" @click="openTelegram">
            <img src="../assets/tel.svg" class="w-[2.25rem] h-[2.25rem]" />
            <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title4') }}</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" @click="showManager">
            <img src="../assets/qq.svg" class="w-[2.25rem] h-[2.25rem]" />
            <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title1') }}</span>
        </div>

        <div class="flex flex-col items-center cursor-pointer" @click="oepnWechatAccount">
            <img src="../assets/offical.svg" class="w-[2.25rem] h-[2.25rem]" />
            <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title3') }}</span>
        </div>
        <ModelComponent slot-mode v-model="open" :width="300">
        <div class=" flex justify-center h-[12rem] items-center">
            <img :src="imgSrc" class="w-[12rem] h-[12rem]" />
        </div>
        </ModelComponent>
    </div>
</template>
<script setup lang="ts">
    import ModelComponent from './usercenter/ModelComponent.vue'
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import accountImg from '../assets/account.png'
    import managerImg from '../assets/manager.png'
    const { t } = useI18n()
    const open = ref(false)
    const imgSrc = ref('')
    const showManager = () => {
        open.value = true
        imgSrc.value = managerImg
    }
    const openWechatService = () => {
        window.open('https://work.weixin.qq.com/kfid/kfcf16ce8cd66e324b1', '__blank')
    }
    const openTelegram = () => {
        window.open('https://t.me/bitip111', '__blank')
    }
    const oepnWechatAccount = () => {
        open.value = true
        imgSrc.value = accountImg
    }
</script>