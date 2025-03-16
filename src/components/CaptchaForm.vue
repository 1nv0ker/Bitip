<template>
    <div class="mt-[2.5rem]">
        <!-- 阿里验证码 -->
        <div class="w-full h-full flex" ref="captcha_box">
            <AliyunCaptchaComponent 
            @getCaptchaVerifyParam="getCaptchaVerifyParam" 
            ref="capRef" :element="captchaId" :button="captchaId" :key="captchaId" :immediate="true" :auto-refresh="false"/>
        </div>
        <div v-if="captchaStatus" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.captchaVerifyTitps')}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import AliyunCaptchaComponent from '../views/login/AliyunCaptchaComponent.vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const captchaStatus = defineModel('captchaStatus')
    const captchaVerifyParam = defineModel('captchaVerifyParam')
    const captcha_box = ref<any>()
    const capRef = ref<any>()
    const getCaptchaVerifyParam = (value:string) => {
        captchaVerifyParam.value = value
        captchaStatus.value = false
    }
    defineProps({
        captchaId:String
    })
    const initCaptcha = () => {
        const rect = captcha_box.value?.getBoundingClientRect()
  
        capRef.value && capRef.value.loadCaptha(rect?.width, rect?.height)
    }
    const onRefresh = () => {
        capRef.value && capRef.value.onRefresh()
    }
    defineExpose({
        initCaptcha: initCaptcha,
        onRefresh: onRefresh
    })
</script>