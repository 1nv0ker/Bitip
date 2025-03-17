<template>
    <div class="phone_form">
        <div class="flex relative w-full h-full">
            <select :class="`customSelect form-control form-select w-[7.2rem]  text-[1.375rem] bitip_font_family text-[#999999] 
            ${errormessage.hasOwnProperty('phoneNum')?focusStatus?'custom_selecterror':'':(focusStatus?'custom_focus':'')}`" v-model="phoneCode">
                <option v-for="number in phoneNumbers" :value="number.phone_code" :selected="number.chinese_name==='中国'?true:false">
                    +{{number.phone_code}}
                </option>
            </select>
            
            <div :class="`absolute left-[1.5rem] top-[-0.75rem] 
            text-[${errormessage.hasOwnProperty('phoneNum')?'#FC4949':'#01AA44'}] text-[1.1rem] h-[1.5rem] bg-[white] pl-[0.4rem] pr-[0.4rem]`" 
            v-show="focusStatus">{{t('login.textTips')}}</div>
            <input type="number" 
            :class="`customInput form-control ${errormessage.hasOwnProperty('phoneNum')?(focusStatus?'customInputError':''):(focusStatus?'customInputNormal':'')}`" 
            :placeholder="t('login.textLogin')" v-model.number="phoneNum" v-bind="phonenumAttrs" @focus="focusStatus = true " @focusout="focusStatus=false">
        </div>
        <div v-if="errormessage.hasOwnProperty('phoneNum')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
            <span class="text-[#FC4949] text-[1.1rem]">{{t('login.textValidate')}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import phoneNumberJson  from '../views/login/phoneNumbers.json'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()

    const phoneNum = defineModel()
    const phoneNumbers = ref<any[]>(phoneNumberJson)
    const focusStatus = ref(false)
    const phoneCode = ref('')
    onMounted(() => {
        phoneCode.value = phoneNumberJson.find(item=>item.chinese_name == '中国')?.phone_code || ''
    })
    defineProps({
        errormessage: {
            type: Object,
            default:{}
        },
        phonenumAttrs: Object
    })
</script>
<style lang="less" scoped>
    .phone_form {
        .customSelect {
            background-image: url('../assets/selectIcon.png');
            background-repeat: no-repeat;
            background-size: 2rem 2rem;
            border-right: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: 0.75rem;
            border-bottom-left-radius: 0.75rem;
            text-align: center;
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
        .custom_focus {
            border-color: #01AA44!important;
            outline: 0;
        }
        .custom_selecterror {
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