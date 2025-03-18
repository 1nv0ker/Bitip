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
                            <a-form-item :label="t('userauth.form1')" required>
                                <a-input class="customAInput"></a-input>
                            </a-form-item>
                            <a-form-item :label="t('userauth.form2')" required>
                                <a-input class="customAInput"></a-input>
                            </a-form-item>
                        </a-form>
                        <div class=" cursor-pointer bg-[#01AA44] w-[13.25rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center" @click="onStep(1)">
                            <span class="text-[1.25rem] text-[white] font-medium">{{t('userauth.button')}}</span>
                        </div>
                        <div class="w-full pl-[1.5rem] h-[8rem] rounded-[1rem] border-[1px] justify-center mt-[2rem] border-[#EBEFF8] bg-[#FAFAFA] text-[#191919] text-[0.91rem] flex-col flex gap-[0.75rem]">
                            <span class="text-[#111111]">{{t('userauth.tip_title')}}</span>
                            <span>{{t('userauth.tip1')}}</span>
                            <span>{{t('userauth.tip2')}}<span class="text-[#01AA44] cursor-pointer" @click="router.push({name:'privatelaw'})">《{{t('login.privacyPolicy')}}》</span>{{t('userauth.tip3')}}</span>
                        </div>
                    </div>
                    <div v-show="current==1" class="h-full flex flex-col gap-[1.125rem]">
                        <span class="text-[#191919] text-[1.25rem] font-bold">{{t('userauth.step2')}}</span>
                        <span class="text-[#666666] text-[1rem]">{{t('userauth.step2_title')}}</span>
                        <div class="w-[15.25rem] h-[15.25rem] bg-[#EBEFF8] rounded-[0.75rem]">

                        </div>
                        <div class="w-[9.625rem] h-[3rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer" @click="onStep(0)">
                            <span class="text-[white] text-[1.25rem] font-medium">{{t('userauth.step2_button')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center pt-[11.25rem]" v-show="current==2">
            <div class="flex flex-col gap-[3.25rem] items-center">
                <div class="flex flex-col gap-[2rem] items-center">
                    <div class="w-[7.25rem] h-[7.25rem] bg-[#01AA44]">

                    </div>
                    <span class="text-[#191919] text-[1.25rem] font-bold">{{t('userauth.step3_title')}}</span>
                </div>
                <div class="w-[37.125rem] pl-[1.5rem] h-[8rem] rounded-[1rem] border-[1px] justify-center mt-[2rem] border-[#EBEFF8] bg-[#FAFAFA] text-[#191919] text-[0.91rem] flex-col flex gap-[0.75rem]">
                    <span class="text-[#111111]">{{t('userauth.tip_title')}}</span>
                    <span>{{t('userauth.tip1')}}</span>
                    <span>{{t('userauth.tip2')}}<span class="text-[#01AA44] cursor-pointer" @click="router.push({name:'privatelaw'})">《{{t('login.privacyPolicy')}}》</span>{{t('userauth.tip3')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const current = ref(0)
    const router = useRouter()
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
    const onStep = (value:number) => {
        current.value = value
    }
</script>
