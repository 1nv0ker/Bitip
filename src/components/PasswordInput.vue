<template>
    <!-- 密码 -->
    <div class="flex h-[4rem] mt-[1.5rem] relative">
        <div :class="`absolute left-[1.5rem] top-[-0.75rem] 
        text-[${errormessage?.hasOwnProperty('password')?'#FC4949':'#01AA44'}] 
        bitip_font_family
        font-normal
        text-[1.1rem] h-[1.5rem] bg-[white] pl-[0.4rem] pr-[0.4rem]`" v-show="passwordFocusStatus">{{tips}}</div>
        <input :type="inputType" :class="`form-control customPassInput ${errormessage?.hasOwnProperty('password')?(passwordFocusStatus?'customPassError':''):(passwordFocusStatus?'customPassNormal':'')}`"
         :placeholder="placeholder" 
        @focus="passwordFocusStatus=true" v-bind="passwordAttrs" @focusout="passwordFocusStatus=false"
        v-model="model" />
        <div class="h-full flex items-center cursor-pointer absolute right-[1.5rem]" >
            <img  :src="inputType == 'password'?showImg:hideImg" class="w-[2rem] h-[2rem] z-10" @click="onChangeType" />
        </div>
    </div>
    <div v-if="errormessage?.hasOwnProperty('password')" class="h-[1.5rem] flex items-center mt-[0.5rem] animate__animated  animate__fadeIn ">
        <span class="text-[#FC4949] text-[1.1rem] font-normal">{{errorTips}}</span>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import hideImg from '../assets/hide.png'
    import showImg from '../assets/show.png'
    const inputType = ref('password')
    const model = defineModel()
    const passwordFocusStatus = ref(false)

    defineProps({
        errormessage: Object,
        tips: String,
        placeholder:String,
        passwordAttrs:Object,
        errorTips:String
    })
    const onChangeType = () => {
        inputType.value == 'password'?inputType.value = 'text': inputType.value = 'password'
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
    .form-control {
        font-size: 1.375rem;
        font-family: "Alibaba Sans";
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 1.375rem;
            text-align: left;
            font-weight: normal;
            font-family: "Alibaba Sans";
            line-height: 100%;
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
        // font-size: 1.75rem;
        text-transform: none;
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 1.375rem;
            text-align: left;
            font-weight: normal;
            font-family: "Alibaba Sans";
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