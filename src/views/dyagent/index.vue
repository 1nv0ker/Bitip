<template>
    <BasicLayout>
        <ComponentLayout class="bg-[#F6FDFF]">
            <div class="w-full h-[31.5625rem] flex items-center">
                <div class="flex flex-col gap-[1.25rem]">
                    <span class="text-[#191919] text-[3.375rem] font-medium">{{t('dyagent.title1')}}</span>
                    <div class="w-full flex flex-col gap-[0.9rem] text-[#191919] text-[1.125rem]">
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('dyagent.subtitle1')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('dyagent.subtitle1')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('dyagent.subtitle1')}}</span>
                        </div>
                    </div>
                    <div class="flex gap-[2rem] pt-[1rem]">
                        <RippleButton  class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] bg-[#01AA44] text-[1.25rem] font-medium hover:text-[#01AA44] text-[white]
                        border-[1px] border-[#01AA44]" :text="t('first.freeUse')" @btn-click="onFreeUse" />
                        <!-- <div class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] flex items-center justify-center cursor-pointer border-[1px] border-[#191919] ml-[2rem] z-50" @click="onContact">
                            <img src="../../assets/contact.png" class="w-[1.5rem] h-1.5rem" />
                            <span class="pl-[0.5rem] text-[#191919] text-[1.25rem] font-medium">{{t('first.contact')}}</span>
                        </div> -->
                        <RippleButton  class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] bg-[white] text-[1.25rem] font-medium hover:text-[white] text-[#191919]
                        border-[1px] border-[#191919]" :text="t('first.contact')" :color="'#01AA44'" @btn-click="onContact" @mouse-enter="(v)=>hoverStatus=v" @mouse-out="(v)=>hoverStatus=v">
                            <img src="../../assets/contact.png" :class="`w-[1.5rem] h-1.5rem mr-[0.5rem] z-10 ${hoverStatus?'invert':''}`"/>
                        </RippleButton>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <div class="w-full h-[51.25rem] pt-[4.75rem]">
                <div class="flex justify-center w-full pb-[3.25rem]">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('dyagent.title2')}}</span>
                </div>
                <div class="w-full flex flex-wrap gap-[1rem]">
                    <div class="border-[#EBEFF8] p-[2rem] border-[1px] rounded-[1rem] h-[15.75rem] flex flex-col gap-[1.25rem]" style=" width: calc( 50% - 0.5rem );" v-for="item in items">
                        <img :src="item.img" class="bg-[#01AA44] w-[4rem] h-[4rem]" />
                        <div class="w-full flex flex-col gap-[1rem]">
                            <span class="text-[#191919] text-[1.75rem] font-bold">{{item.title}}</span>
                            <span class="text-[#666666] text-[1rem]">{{ item.subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <div class="w-full pb-[8.125rem]">
                <div class="w-full flex justify-center">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('dyagent.title3')}}</span>
                </div>
                <div class="w-full rounded-[2rem] h-[18.375rem] mt-[3.625rem] flex flex-wrap gap-[0.75rem] items-center content-center" style="background: linear-gradient( 145deg, #E6FFF0 0%, #FFFFFF 100%);">
                    <div class="h-[6.875rem] rounded-[5rem] bg-[white] flex items-center gap-[1.25rem] p-[0.5rem] pl-[1.25rem]" style="width: calc( 25% - 0.5625rem );" v-for="item in item2">
                        <img :src="item.img" class="w-[5rem] h-[5rem]" />
                        <div class="flex flex-col gap-[0.25rem] h-full justify-center text-[#191919] font-medium">
                            <span class="text-[1.5rem]">{{item.title}}</span>
                            <span class="text[1rem]">{{item.value}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout :bg="'linear-gradient( 180deg, #FFFFFF 0%, #F2FFF7 100%);'">
            <div class="w-full ">
                <div class="flex w-full justify-center items-end p-[1.75rem]">
                    <span class="text-[#191919] text-[2rem] font-medium">{{ t('dyagent.title4') }}</span>
                </div>
                <DySetmenu />
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <QuestionComponent />
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import BasicLayout from '../BasicLayout.vue';
    import { ref, computed } from 'vue'
    import ComponentLayout from '../ComponentLayout.vue';
    import QuestionComponent from '../setmenu/QuestionComponent.vue';
    import DySetmenu from '../setmenu/DySetmenu.vue';
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue';
    import ger from '../../assets/nations/ger.png'
    import us from '../../assets/nations/us.png'
    import uk from '../../assets/nations/uk.png'
    import can from '../../assets/nations/can.png'
    import mx from '../../assets/nations/mx.png'
    import br from '../../assets/nations/br.png'
    import india from '../../assets/nations/india.png'
    import id from '../../assets/nations/id.png'
    const { t } = useI18n()
    const hoverStatus = ref(false)
    const items = computed(() => {
        return [
            {
                title:t('dyagent.titl2_item1'),
                img:'',
                subtitle:t('dyagent.title2_subtitle1')
            },
            {
                title:t('dyagent.titl2_item2'),
                img:'',
                subtitle:t('dyagent.title2_subtitle2')
            },
            {
                title:t('dyagent.titl2_item3'),
                img:'',
                subtitle:t('dyagent.title2_subtitle3')
            },
            {
                title:t('dyagent.titl2_item4'),
                img:'',
                subtitle:t('dyagent.title2_subtitle4')
            }
        ]
    })
    const item2 = computed( () => {
        return [
            {
                title: t('dyagent.title3_item1'),
                value:'5,764,389 IPS',
                img: ger
            },
            {
                title: t('dyagent.title3_item2'),
                value:'39,564,281 IPS',
                img:us
                
            },
            {
                title: t('dyagent.title3_item3'),
                value:'7,121,388 IPS',
                img:uk
            },
            {
                title: t('dyagent.title3_item4'),
                value:'4,222,171 IPS',
                img:can
            },
            {
                title: t('dyagent.title3_item5'),
                value:'6,551,297 IPS',
                img:mx
            },
            {
                title: t('dyagent.title3_item6'),
                value:'2,111,753 IPS',
                img:br
            },
            {
                title: t('dyagent.title3_item7'),
                value:'1,203,578 IPS',
                img:india
            },
            {
                title: t('dyagent.title3_item8'),
                value:'1,203,578 IPS',
                img:id
            }
        ]
    })
    
    const onContact = () => {

    }
    const onFreeUse = () => {

    }
</script>