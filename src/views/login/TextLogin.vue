<template>
    <form class="mt-[2rem]" @submit.prevent="onSubmit">
        <!-- 手机号 -->
        <div class="flex h-[4rem] relative">
            <select disabled :class="`form-select customSelect w-[7.2rem] font-normal text-[1.375rem] bitip_font_family text-[#999999] 
            ${errormessage.hasOwnProperty('phoneNum')?focusStatus?'customSelectError':'':(focusStatus?'customFocus':'')}`" v-model="phoneCode">
                <option v-for="number in phoneNumbers" :value="number.phone_code" :selected="number.chinese_name==='中国'?true:false">
                    +{{number.phone_code}}
                </option>
            </select>
            
            <div :class="`absolute left-[1.5rem] top-[-0.75rem] 
            text-[${errormessage.hasOwnProperty('phoneNum')?'#FC4949':'#01AA44'}] text-[1.1rem] h-[1.5rem] bg-[white] pl-[0.4rem] pr-[0.4rem]`" 
            v-show="focusStatus">{{t('login.textTips')}}</div>
            <input type="number" 
            :class="`form-control customInput ${errormessage.hasOwnProperty('phoneNum')?(focusStatus?'customInputError':''):(focusStatus?'customInputNormal':'')}`" 
            :placeholder="t('login.textLogin')" v-model.number="phoneNum" v-bind="phonebumAttrs" @focus="onfocus" @focusout="focusout">
        </div>
        <div v-if="errormessage.hasOwnProperty('phoneNum')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.textValidate')}}</span>
        </div>
        <!-- 阿里验证码 -->
        <div class="mt-[1.5rem] w-full h-[4rem] flex " ref="cap_box">
            <AliyunCaptchaComponent 
            @getCaptchaVerifyParam="getCaptchaVerifyParam" 
            ref="capRef" :element="'textLogin'" :button="'textLogin_button'" key="textLogin" :immediate="true" :auto-refresh="false"/>
        </div>
        <div v-if="captchaStatus" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.captchaVerifyTitps')}}</span>
        </div>
        <!-- 验证码 -->
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
                <span class="text-[#191919] text-[1.4rem] font-normal" @click="onSendCode" id="textLogin_button">{{sendCodeStaus?codeCount+'s':t('login.sendCode')}}</span>
            </div>
        </div>
        <div v-if="errormessage.hasOwnProperty('verifyCode')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.verifyCode')}}</span>
        </div>
        
        <!-- 用户协议 -->
        <div class="mt-[1.5rem] items-center flex">
            <input class="form-check-input customCheck w-[1.5rem] h-[1.5rem] mt-0" type="checkbox" value="" id="flexCheckDefault" v-model="checked">
            <label class=" text-[#111111] text-[0.875rem] pl-[0.75rem] bitip_font_family font-normal" for="flexCheckDefault">
                {{t('login.agree')}} 
                <Law />
            </label>
        </div>
        
        <a-button :loading="loading" class="w-full h-[4rem] mt-[2rem] bg-[#01AA44] rounded-[0.75rem] cursor-pointer flex items-center justify-center" htmlType="submit" id="cap_button">
            <span class="text-[white] text-[1.5rem] font-medium">{{t('login.login')}}</span>
        </a-button>
        <div class="w-full flex items-center mt-[1.5rem] justify-center">
            <span class="text-[#191919] font-medium text-[1.25rem]">{{t('login.notAccount')}}<span class="text-[#01AA44] pl-[0.2rem] font-medium cursor-pointer" @click="onRegister">{{t('login.registerNow')}}</span></span>
        </div>
        <div class="w-full flex justify-center">
            <span class="text-[#999999] text-[1rem] pt-[0.75rem]">{{t('backend_menu.tip')}}</span>
        </div>
        <!-- 弹出框 -->
        <div class="modal fade" ref="modalRef" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered" >
                <div class="modal-content p-[1.5rem]">
                    <div class="flex justify-end">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="flex justify-center text-[1.2rem]">
                        <span class=" font-bold">{{t('login.modalPolicy')}}</span>
                    </div>
                    <div class="flex flex-wrap pt-[0.5rem]">  
                        <span>{{t('login.modalTips')}}
                            <Law />
                        </span>
                    </div>
                    <div class="flex justify-evenly mt-[1.2rem]   ">
                        <a-button :loading="loading" class="customAbutton w-[6.75rem] h-[2rem] flex justify-center items-center bg-[#01AA44] rounded-[0.4rem] text-[white] text-[0.8rem] cursor-pointer" @click="onContinueLogin">
                           <span class=" font-medium text-[white]"> {{t('login.agreeLogin')}}</span>
                        </a-button>
                        <div class="w-[6.75rem] h-[2rem] flex justify-center items-center rounded-[0.4rem] border-[#D9D9D9] border-[1px] text-[0.8rem] cursor-pointer" @click="onCancelLogin">
                            <span class="font-medium">{{t('login.disagree')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </form>
</template>
<script setup lang="ts">
    import { useForm } from 'vee-validate'
    import AliyunCaptchaComponent from './AliyunCaptchaComponent.vue';
    import { Login, SendSms } from '../../api/login'
    import {  ref, onMounted, computed } from 'vue';
    import { useI18n } from 'vue-i18n'
    import phoneNumberJson from './phoneNumbers.json'
    import * as bootstrap from 'bootstrap'
    import * as yup from 'yup'
    import { useRouter } from 'vue-router'
    import UseUserStore from '../../store/user'
    // import { ElMessage } from 'element-plus'
    import { message } from 'ant-design-vue'
    import Law from './Law.vue';
    const store = UseUserStore()
    const phoneCode = ref('')
    const focusStatus = ref(false)
    const verityFocusStatus = ref(false)
    const loading = ref(false)
    const modalRef = ref(null)
    const sendCodeStaus = ref(false)
    const codeCount = ref(60)
    const captchaVerifyParam = ref('')
    const captchaStatus = ref(false)
    const capRef = ref<any>()
    const cap_box = ref<HTMLElement|null>()
    let codeCountInterval:any = null
    let modalInstance: any = null
    // const phoneNum = ref('')
    // const password = ref('')
    const checked = ref(false)
    const phoneNumbers = ref<any[]>([])
    const { t } = useI18n()
    const router = useRouter()
    // const phoneCode = ref('')
    phoneNumbers.value = phoneNumberJson
    onMounted(() => {
        phoneCode.value = phoneNumberJson.find(item=>item.chinese_name == '中国')?.phone_code || ''
        modalInstance = new (bootstrap as any).Modal(modalRef.value)
        const rect = cap_box.value?.getBoundingClientRect()
        capRef.value && capRef.value.loadCaptha(rect?.width,rect?.height)
    })
    const schema = yup.object({
        phoneNum: yup.string().required().length(11),
        verifyCode: yup.string().required()
    })
    const { defineField, errors, handleSubmit, validateField } = useForm({
        validationSchema: schema,
        
    })
    const errormessage = computed(()=>errors.value)
    const [phoneNum, phonebumAttrs] = defineField('phoneNum');
    const [verifyCode, verityCodeAttrs ] = defineField('verifyCode')
    const getCaptchaVerifyParam = (value:string) => {
        captchaVerifyParam.value = value
        captchaStatus.value = false
    }
    const onSubmit = handleSubmit((values) => {
        console.log('values', values)
        if (!checked.value) {
            modalInstance.show() 
        } else {
            accountLogin()
        }
    }) 
    const accountLogin = () => {
        loading.value = true
        Login({
            loginType:'code',
            tel: ''+phoneNum.value,
            verifyCode: verifyCode.value
        })
        .then((res:any) => {
            console.log('res', res)
            loading.value = false
            store.setToken(res.body.token)
            store.setUserInfo()
            const redirectPath:any = router.currentRoute.value.query.redirect || '/usercenter/proxycity'
            router.push(redirectPath)
        })
        .catch(() => {
            loading.value = false
            capRef.value && capRef.value.onRefresh()
        })
        
    }
    const onContinueLogin = () => {
        checked.value = true
        modalInstance.hide()
        accountLogin()
    }
    const onCancelLogin = () => {
        modalInstance.hide()
    }
    const onfocus = () => {
        focusStatus.value = true    
    }
    const focusout = () => {
        focusStatus.value = false
    }
    const onRegister = () => {
        router.push({path: '/register'})
    }
    const onSendCode = () => {
        if (sendCodeStaus.value) {
            return
        }
        
        if (!captchaVerifyParam.value) {
            captchaStatus.value = true
            return
        }
        if (!phoneNum.value) {
            validateField('phoneNum')
            return
        }
        if (errormessage.value.hasOwnProperty('phoneNum')) {
            // ElMessage.warning(t('login.textValidate'))
            return
        }
        sendCodeStaus.value = true
        
        SendSms({
            tel:''+phoneNum.value,
            smsType: 'login',
            captchaVerifyParam:captchaVerifyParam.value
        })
        .then((res:any) => {
            console.log('res', res)
            message.success(t('login.sendSms'))
            codeCountInterval = setInterval(() => {
                codeCount.value--
                if (codeCount.value<=0) {
                    sendCodeStaus.value = false
                    codeCount.value = 60
                    captchaVerifyParam.value = ''
                    capRef.value && capRef.value.onRefresh()
                    clearInterval(codeCountInterval)
                }
            }, 1000);
        })
        .catch(() => {
            capRef.value && capRef.value.onRefresh()
        })
        
    }
</script>
<style>
.customVerityCode,.customInput {
  -moz-appearance: textfield; /* Firefox */
}

.customVerityCode,.customInput::-webkit-inner-spin-button,
.customVerityCode,.customInput::-webkit-outer-spin-button,
.customVerityCode,.customInput:focus::-webkit-inner-spin-button,
.customVerityCode,.customInput:focus::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Chrome/Safari/Edge */
  margin: 0;
}

</style>
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