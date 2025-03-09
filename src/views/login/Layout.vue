<template>
    <div class="w-full h-full login-bg" :style="`background-image:url(${loginBg})`">

        <div class="w-full row m-0">
            <div class="col-12 offset-md-3 col-lg-4 flex flex-col  pt-[20rem] pr-[6rem] pl-[6rem] md:pt-[10rem]">
                <img src="../../assets/logo.png" class="w-[15rem] h-[5rem]" />
                <span class="text-[3.8rem] text-[#191919] font-bold pt-[1.75rem] bitip_font_family">{{t('login.loginTitle')}}</span>
            </div>
            <div class="col-12 col-lg-4 mt-[8rem] bitip_form">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import loginBg from '../../assets/login.png'
  const { t } = useI18n()
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