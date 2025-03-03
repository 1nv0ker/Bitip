<template>
    <form class="mt-[2rem]" @submit.prevent="onSubmit">
        <!-- 手机号 -->
        <div class="flex h-[4rem] relative">
            <select :class="`form-select customSelect w-[7.2rem] font-normal text-[1.375rem] text-[#191919] 
            ${errormessage.hasOwnProperty('phoneNum')?focusStatus?'customSelectError':'':(focusStatus?'customFocus':'')}`" v-model="phoneCode">
                <option v-for="number in phoneNumbers" :value="number.phone_code" :selected="number.chinese_name==='中国'?true:false">
                    {{number.phone_code}}+
                </option>
            </select>
            
            <div :class="`absolute left-[1.5rem] top-[-0.75rem] text-[${errormessage.hasOwnProperty('phoneNum')?'#FC4949':'#01AA44'}] text-[1.1rem] h-[1.5rem] bg-[white] pl-[0.4rem] pr-[0.4rem]`" v-show="focusStatus">{{t('login.phoneTips')}}</div>
            <input type="text" :class="`form-control customInput ${errormessage.hasOwnProperty('phoneNum')?(focusStatus?'customInputError':''):(focusStatus?'customInputNormal':'')}`" :placeholder="t('login.phonePlaceholder')" v-model="phoneNum" v-bind="phonebumAttrs" @focus="onfocus" @focusout="focusout">
            
        </div>
        <div v-if="errormessage.hasOwnProperty('phoneNum')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.phoneValidate')}}</span>
        </div>
        <!-- 密码 -->
        <div class="flex h-[4rem] mt-[1.5rem] relative">
            <div :class="`absolute left-[1.5rem] top-[-0.75rem] text-[${errormessage.hasOwnProperty('password')?'#FC4949':'#01AA44'}] text-[1.1rem] h-[1.5rem] bg-[white] pl-[0.4rem] pr-[0.4rem]`" v-show="passwordFocusStatus">{{t('login.passwordTips')}}</div>
            <input type="password" :class="`form-control customPassInput ${errormessage.hasOwnProperty('password')?(passwordFocusStatus?'customPassError':''):(passwordFocusStatus?'customPassNormal':'')}`" :placeholder="t('login.passwordPlaceholder')" 
            @focus="passwordFocusStatus=true" @focusout="passwordFocusStatus=false"
            v-model="password" v-bind="passwordAttrs">
            
        </div>
        <div v-if="errormessage.hasOwnProperty('password')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.passwordValidate')}}</span>
        </div>
        <!-- 用户协议 -->
        <div class="mt-[1.5rem] items-center flex">
            <input class="form-check-input customCheck w-[1.5rem] h-[1.5rem] mt-0" type="checkbox" value="" id="flexCheckDefault" v-model="checked">
            <label class=" text-[#111111] text-[0.875rem] pl-[0.75rem]" for="flexCheckDefault">
                {{t('login.agree')}} <span class="text-[#01AA44] cursor-pointer">《{{ t('login.userServiceAgreement') }}》 </span><span class="text-[#01AA44] cursor-pointer">《{{t('login.privacyPolicy')}}》</span>
            </label>
        </div>
        
        <button class="w-full h-[4rem] mt-[2rem] bg-[#01AA44] rounded-[0.75rem] cursor-pointer flex items-center justify-center" type="submit">
            <span class="text-[white] text-[1.5rem]">{{t('login.login')}}</span>
        </button>
        <div class="w-full h-[4rem] mt-[2rem] border-[1px] border-[#D9D9D9]  rounded-[0.75rem] cursor-pointer flex items-center justify-center" @click="onForgetPass">
            <span class="text-[#191919] text-[1.5rem]">{{t('login.forgetPassword')}}</span>
        </div>
        <div class="w-full flex items-center mt-[1.5rem] justify-center">
            <span class="text-[#191919] font-medium text-[1.25rem]">{{t('login.notAccount')}}<span class="text-[#01AA44] pl-[0.2rem] cursor-pointer" @click="onRegister">{{t('login.registerNow')}}</span></span>
        </div>
        <!-- 弹出框 -->
        <div class="modal fade" ref="modalRef" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered" >
                <div class="modal-content p-[1.5rem]">
                    <div class="flex justify-end">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="flex justify-center text-[1.2rem]">
                        {{t('login.modalPolicy')}}
                    </div>
                    <div class="flex flex-wrap pt-[0.5rem]">  
                        <span>{{t('login.modalTips')}}
                            <span class="text-[#01AA44] cursor-pointer">《{{t('login.userServiceAgreement')}}》</span>
                        <span class="text-[#01AA44] cursor-pointer">《{{t('login.privacyPolicy')}}》</span>
                        </span>
                    </div>
                    <div class="flex justify-evenly mt-[1.2rem]   ">
                        <div class="w-[6.75rem] h-[2rem] flex justify-center items-center bg-[#01AA44] rounded-[0.4rem] text-[white] text-[0.8rem] cursor-pointer" @click="onContinueLogin">
                            {{t('login.agreeLogin')}}
                        </div>
                        <div class="w-[6.75rem] h-[2rem] flex justify-center items-center rounded-[0.4rem] border-[#D9D9D9] border-[1px] text-[0.8rem] cursor-pointer" @click="onCancelLogin">
                            {{t('login.disagree')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </form>
</template>
<script setup lang="ts">
    import { useForm } from 'vee-validate'
    import {  ref, onMounted, computed } from 'vue';
    import { useI18n } from 'vue-i18n'
    import phoneNumberJson from './phoneNumbers.json'
    import * as bootstrap from 'bootstrap'
    import * as yup from 'yup'
    import { useRouter } from 'vue-router'
    import UseUserStore from '../../store/user'
    const phoneCode = ref('')
    const passwordFocusStatus = ref(false)
    const focusStatus = ref(false)
    const modalRef = ref(null)
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
    })
    const schema = yup.object({
        phoneNum: yup.string().required(),
        password: yup.string().required()
    })
    const { defineField, errors, handleSubmit } = useForm({
        validationSchema: schema,
        
    })
    const store = UseUserStore()
    const errormessage = computed(()=>errors.value)
    const [phoneNum, phonebumAttrs] = defineField('phoneNum');
    const [password, passwordAttrs] = defineField('password');
    const onSubmit = handleSubmit((values) => {
        console.log('values', values)
        if (!checked.value) {
            modalInstance.show() 
        } else {
            accountLogin()
        }
    }) 
    const accountLogin = () => {
        store.setToken('testToken')
        router.push({path:'/home'})
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
    const onForgetPass = () => {
        router.push({path: '/forgetPassword'})
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
    .customInput {
        // border:1px solid #D9D9D9;
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
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