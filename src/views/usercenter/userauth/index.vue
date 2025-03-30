<template>
    <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem] h-full">
        
        <div class="w-full pb-[1.5rem] border-b-[1px] border-[#EBEFF8]">
            <span>{{t('userauth.title')}}</span>
        </div>
        <div class="w-full pt-[2.125rem] flex flex-col items-center gap-[3.125rem]" v-show="current!==2">
            <div class="w-[55.75rem] h-[4.5rem] flex justify-center items-center" style="background: linear-gradient( 180deg, #FAFFED 0%, #FDFFEC 100%);">
                <span class="text-[#191919] text-[1.125rem]">{{t('userauth.title2')}}<span class=" font-bold text-[#01AA44]">500M</span>{{t('userauth.subtitle')}}</span>
            </div>
            <div class="w-[55.75rem] gap-[2.5rem] flex h-[25rem]">
                <div class="h-full w-[16.125rem] bg-[rgba(1,170,68,0.04)] pt-[2.5rem] pl-[1.75rem] pb-[2.5rem]">
                    <div class="w-full h-full">
                        <div class="w-full" v-for="(item, index) in items">
                            <div class="w-full flex gap-[1rem]" v-if="index==current">
                                <div class="w-[1.625rem] h-[1.625rem] rounded-[50%] bg-[#01AA44] flex justify-center items-center text-[white]">
                                    <span>✔</span>
                                </div>
                                <span class="text-[#01AA44] font-bold text-[1.125rem]">{{item.title}}</span>
                            </div>
                            <div class="w-full flex gap-[1rem]" v-else>
                                <div class="w-[1.625rem] h-[1.625rem] rounded-[50%] flex justify-center items-center text-[white]">
                                    <div class="w-[0.625rem] h-[0.625rem] bg-[#191919] rounded-[50%]">

                                    </div>
                                </div>
                                <span class="text-[#191919] text-[1.125rem]">{{item.title}}</span>
                            </div>
                            <div class="w-[1.625rem] pt-[1rem] pb-[1rem] flex justify-center" v-if="items.length-1 !== index">
                                <div class="h-[5.5rem] border-[1px] border-dashed border-[#000000] ">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-full">
                    <div class="w-[37.5rem] flex flex-col" v-show="current==0">
                        <a-form layout="vertical" >
                            <a-form-item :label="t('userauth.form1')" :rules="rulesRef.name" v-bind="validateInfos.name">
                                <a-input class="customAInput" v-model:value="modelRef.name" ></a-input>
                            </a-form-item>
                            <a-form-item :label="t('userauth.form2')" :rules="rulesRef.IdCard" v-bind="validateInfos.IdCard">
                                <a-input class="customAInput" v-model:value="modelRef.IdCard" ></a-input>
                            </a-form-item>
                        </a-form>
                        <a-button type="primary" @click="onStep(1)" :loading="loading"  class="bg-[#01AA44] w-[13.25rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center customAbutton">
                            <span class="text-[1.25rem] text-[white] font-medium">{{t('userauth.button')}}</span>
                        </a-button>
                        <!-- <div class=" cursor-pointer bg-[#01AA44] w-[13.25rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center" @click="onStep(1)">
                            <span class="text-[1.25rem] text-[white] font-medium">{{t('userauth.button')}}</span>
                        </div> -->
                        <div class="w-full pl-[1.5rem] h-[8rem] rounded-[1rem] border-[1px] justify-center mt-[2rem] border-[#EBEFF8] bg-[#FAFAFA] text-[#191919] text-[0.91rem] flex-col flex gap-[0.75rem]">
                            <span class="text-[#111111]">{{t('userauth.tip_title')}}</span>
                            <span>{{t('userauth.tip1')}}</span>
                            <span>{{t('userauth.tip2')}}<span class="text-[#01AA44] cursor-pointer" @click="router.push({name:'privatelaw'})">《{{t('login.privacyPolicy')}}》</span>{{t('userauth.tip3')}}</span>
                        </div>
                    </div>
                    <div v-show="current==1" class="h-full flex flex-col gap-[1.125rem]">
                        <span class="text-[#191919] text-[1.25rem] font-bold">{{t('userauth.step2')}}</span>
                        <span class="text-[#666666] text-[1rem]">{{t('userauth.step2_title')}}</span>
                        <div class="w-[15.25rem] h-[15.25rem] rounded-[0.75rem]">
                            <a-qrcode :value="authLink" class="w-full h-full" :size="15.25*16"/>
                        </div>
                        <a-button type="primary" @click="onStep(0)" :loading="loading"  class="bg-[#01AA44] w-[13.25rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center customAbutton">
                            <span class="text-[white] text-[1.25rem] font-medium">{{t('userauth.step2_button')}}</span>
                        </a-button>
                        <!-- <div class="w-[9.625rem] h-[3rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer" @click="onStep(0)">
                            <span class="text-[white] text-[1.25rem] font-medium">{{t('userauth.step2_button')}}</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center pt-[11.25rem]" v-show="current==2">
            <div class="flex flex-col gap-[3.25rem] items-center">
                <div class="flex flex-col gap-[2rem] items-center">
                    <div class="w-[7.25rem] h-[7.25rem] ">
                        <img src="../../../assets/usercenter/auth_success.png" class="w-full h-full"/>
                    </div>
                    <span class="text-[#191919] text-[1.25rem] font-bold">{{t('userauth.step3_title')}}</span>
                </div>
                <div class="w-[37.125rem] pl-[1.5rem] rounded-[1rem] pb-[1rem] pt-[1rem] pr-[1rem] border-[1px] justify-center mt-[2rem] border-[#EBEFF8] bg-[#FAFAFA] text-[#191919] text-[0.91rem] flex-col flex gap-[0.75rem]">
                    <span class="text-[#111111]">{{t('userauth.tip_title')}}</span>
                    <span>{{t('userauth.tip1')}}</span>
                    <span>{{t('userauth.tip2')}}<span class="text-[#01AA44] cursor-pointer" @click="router.push({name:'privatelaw'})">《{{t('login.privacyPolicy')}}》</span>{{t('userauth.tip3')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, reactive, onBeforeMount, onBeforeUnmount, onUnmounted } from 'vue'
    import { Form } from 'ant-design-vue';
    import { useRouter } from 'vue-router'
    import { Certification } from '../../../api/login'
    import useUserStore from '../../../store/user'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const useForm = Form.useForm;
    const userStore = useUserStore()
    const current = ref(2)
    const router = useRouter()
    const loading = ref(false)
    const authLink = ref('')
    let userauthInterval:any = null
    const items = computed(() => {
        return [
            {
                title: t('userauth.step1'),
                description:''
            },
            {
                title: t('userauth.step2'),
                description:''
            },
            {
                title: t('userauth.step3'),
                description:''
            }
        ]
    })
    const modelRef = reactive({
        name: '',
        IdCard: '',
    });
    const rulesRef = reactive({
        name: [
            // {
            //     required:true,
            //     message:t('userauth.form1_message')
            // },
            {
                pattern:`^(?:[\u4E00-\u9FA5\u3400-\u4DBF·]{2,10}|[a-zA-Z\s'-]{2,50})$`,
                required:true,
                message:t('userauth.form1_message')
            }
        ],
        IdCard: [
            // {
            //     required:true,
            //     message:t('userauth.form2_message')
            // },
            {
                pattern:'^[1-9]\\d{5}(18|19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[\\dXx]$',
                required:true,
                message: t('userauth.form2_message')
            }
        ]
    })
    onBeforeMount(() => {
        loadUserInfo()
    })
    onUnmounted(() => {
        console.log('onUnmounted')
        userauthInterval && clearInterval(userauthInterval)
    })
    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
        userauthInterval && clearInterval(userauthInterval)
    })
    const loadUserInfo = () => {
        userStore.setUserInfo()
        if (userStore.userInfo?.isVerify) {
            current.value = 2
        }
        // current.value = userStore.userInfo?.isVerify?2:0
        if (current.value === 2) {
            userauthInterval && clearInterval(userauthInterval)
        }
    }
    const { validate, validateInfos  } = useForm(modelRef, rulesRef);
    const onStep = (value:number) => {
        if (loading.value) {
            return
        }
        if (value == 1) {
            validate()
            .then(() => {
                let MetaInfo = window.getMetaInfo();
                loading.value = true
                Certification({
                    RealName:modelRef.name,
                    IdCard: modelRef.IdCard,
                    MetaInfo: JSON.stringify(MetaInfo)
                })
                .then((res:any) => {
                    console.log(res)
                    current.value = value
                    authLink.value = res.body
                    loading.value = false
                    //循环验证是否认证完成
                    userauthInterval = setInterval(() => {
                        loadUserInfo()
                    }, 2000);
                })
                .catch(() => {
                    loading.value = false
                })
            })
        } else {
            current.value = value
            userauthInterval && clearInterval(userauthInterval)
        }
        
    }
</script>
