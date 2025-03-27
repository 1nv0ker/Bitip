<template>
    <div class="w-full h-full login-bg" :style="`background-image:url(${loginBg})`">

        <div class="w-full flex h-full gap-[5.625rem] items-center justify-center">
            <div class=" h-full flex  flex-col gap-[1.875rem] justify-center">
                <img src="../../assets/logo.png" class="w-[15rem] h-[5rem] cursor-pointer" @click="router.push({name:'home'})"/>
                <span class="text-[4rem] w-[39.1825rem] text-[#191919] font-bold pt-[1.75rem] ">{{t('login.loginTitle')}}</span>
            </div>
            <div class="bitip_form">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import loginBg from '../../assets/login.webp'
  const { t } = useI18n()
  const router = useRouter()
</script>
<style lang="less">
    .bitip_form {
        .container {
            box-shadow: 0px 1.5rem 2rem 0px rgba(2,112,45,0.08);
        }
        
    }
    .login-bg {
        // background-image: url('../../assets/login.png');
        background-size:cover;
        background-repeat: no-repeat;
    }
</style>