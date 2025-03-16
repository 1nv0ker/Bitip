<template>
    <div>
        <div class="flex h-[4rem] mt-[1.5rem] relative">
            <div :class="`absolute left-[1.5rem] top-[-0.75rem] 
            text-[${errormessage.hasOwnProperty('verifyCode')?'#FC4949':'#01AA44'}] text-[1.1rem] h-[1.5rem] bg-[white] pl-[0.4rem] pr-[0.4rem]`" 
            v-show="verityFocusStatus">{{t('login.verifyTips')}}</div>
            <input :class="`form-control custom_placeholder customVerityCode ${errormessage.hasOwnProperty('verifyCode')?(verityFocusStatus?'customVerityCodeError':''):(verityFocusStatus?'customVerityCodeNormal':'')}` " type="text" :placeholder="t('login.verifyCode')"  
            v-bind="verityCodeAttrs"
            @focus="verityFocusStatus=true" @focusout="verityFocusStatus=false" v-model="verifyCode"/>
            <div :class="`w-[12rem] border-[1px] border-[#D9D9D9] rounded-tr-[0.75rem] border-l-0 rounded-br-[0.75rem] flex cursor-pointer relative justify-center
            items-center
            ${errormessage.hasOwnProperty('verifyCode')?verityFocusStatus?'VerityCodeError':'':(verityFocusStatus?'VerityCodeNormal':'')}`">
                <div class="h-[70%] absolute left-0 top-[15%] bg-[#D9D9D9] w-[0.12rem]"></div>
                <span class="text-[#191919] text-[1.4rem] font-normal" @click="onSendCode" id="modift_email">{{sendCodeStaus?codeCount+'s':t('login.sendCode')}}</span>
            </div>
        </div>
        <div v-if="errormessage.hasOwnProperty('verifyCode')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.verifyCode')}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const verityFocusStatus = ref(false)
    const sendCodeStaus = ref(false)
    const codeCount = defineModel('codeCount')
    const verifyCode = defineModel('verifyCode')
    const emit = defineEmits(['onSendCode'])
    defineProps({
        errormessage:{
            type:Object,
            default: {}
        },
        verityCodeAttrs:Object
    })

    const onSendCode = () => {
        emit('onSendCode')
    }
</script>
<style lang="less" scoped>
    .customSelect {
        background-image: url('../../assets/selectIcon.png');
        background-repeat: no-repeat;
        background-size: 2rem 2rem;
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem;
        text-align: center;

    }
    .customFocus {
        border-color: #01AA44!important;
        outline: 0;
    }
    .customSelectError {
        border-color: #FC4949!important;
        outline: 0;
    }
    .customInputError {
        &:focus {
            border-color: #FC4949!important;
            outline: 0;
        }
    }
    .customInputNormal {
        &:focus {
            border-color: #01AA44!important;
            outline: 0;
        }
    }
    .customVerityCodeError {
        &:focus {
            border-color: #FC4949!important;
            outline: 0;
        }
    }
    .customVerityCodeNormal {
        &:focus {
            border-color: #01AA44!important;
            outline: 0;
        }
    }
    .VerityCodeError {
        border-color: #FC4949!important;
        
    }
    .VerityCodeNormal {
        border-color: #01AA44!important;
    }
    .custom_placeholder {
        
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 1.375rem;
            text-align: left;
            font-weight: normal;
            line-height: 100%;
            // font-family: "Alibaba Sans";
        }
    }
    .customInput {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
        color:#191919;
        font-family: "Alibaba Sans";
        font-size: 1.375rem;
        text-transform: none;
        height: 4rem;
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 1.375rem;
            text-align: left;
            font-weight: normal;
            line-height: 100%;
            font-family: "Alibaba Sans";
        }
        
        
    }
    .customVerityCode {
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem;
        color:#191919;
        font-size: 1.375rem;
        text-transform: none;
        font-family: "Alibaba Sans";
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 1.375rem;
            text-align: left;
            font-weight: normal;
            line-height: 100%;
            font-family: "Alibaba Sans";
        }
    }
    .customPassError {
        &:focus {
            border-color: #FC4949!important;
            outline: 0;
        }
    }
    .customPassNormal {
        &:focus {
            border-color: #01AA44!important;
            outline: 0;
        }
    }
    .customPassInput {
        border: 1px solid #D9D9D9;
        border-radius: 0.75rem;
        color:#191919;
        font-size: 1.75rem;
        text-transform: none;
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 1.375rem;
            text-align: left;
            font-weight: normal;
            line-height: 100%;
        }
        
    }
    .customCheck {
        border-color: #D9D9D9;

    }
</style>
<style scoped>
    .form-control:focus {
        /* color:white; */
        background-color: white;
        border-color:#D9D9D9 ;
        outline: 0;
        box-shadow: none;
    }
    .form-select:focus {
        box-shadow: none;
        border-color:#D9D9D9 ;
    }
    /* .customCheck:checked + label::before {
        background: #01AA44;
        border-color: #01AA44;
    } */
</style>