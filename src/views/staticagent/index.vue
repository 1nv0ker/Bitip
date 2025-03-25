<template>
    <BasicLayout :customeStyle="{
        background:'transparent'
    }">
        <ComponentLayout class="bg-[#F6FDFF]">
            <div class=" absolute top-[-4rem] right-0 bottom-0 left-0 z-0">
                <img :src="bg" class="w-full h-full" />
                
            </div>
            <div class="w-full h-[31.5625rem] flex items-center ">
                <div class="flex flex-col gap-[1.25rem] z-20">
                    <span class="text-[#191919] text-[3.375rem] font-medium">{{t('staticagent.title1')}}</span>
                    <div class="w-full flex flex-col gap-[0.9rem] text-[#191919] text-[1.125rem] z-20">
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.subtitle1')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.subtitle2')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.subtitle3')}}</span>
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
                <div class="z-20 ">
                    <img  src="../../assets/static/card_bg.png" class="ml-[19.625rem] w-[45rem]  h-[29rem] z-20" />
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <div class="w-full h-[51.25rem] pt-[4.75rem]">
                <div class="flex justify-center w-full pb-[3.25rem]">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('staticagent.title2')}}</span>
                </div>
                <div class="w-full flex flex-wrap gap-[1rem]">
                    <div class="border-[#EBEFF8] p-[2rem] border-[1px] rounded-[1rem] h-[15.75rem] flex flex-col gap-[1.25rem]" style=" width: calc( 50% - 0.5rem );" v-for="item in items">
                        <img :src="item.img" class=" w-[4rem] h-[4rem]" />
                        <div class="w-full flex flex-col gap-[1rem]">
                            <span class="text-[#191919] text-[1.75rem] font-bold">{{item.title}}</span>
                            <span class="text-[#666666] text-[1rem]">{{ item.subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout class="">
            <div class="w-full pb-[8.125rem] flex h-[52rem] pt-[3.75rem] gap-[1.25rem] items-center">
                <div class="w-[37.5rem] h-full flex flex-col gap-[2.25rem] justify-center">
                    <span class="max-w-full text-[#191919] font-medium text-[1.875rem]">
                        {{t('staticagent.title3')}}
                    </span>
                    <div class="flex flex-col gap-[0.9rem] text-[#191919] text-[1.125rem]">
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.tltle3_subtitle1')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.tltle3_subtitle2')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.tltle3_subtitle3')}}</span>
                        </div>
                        <div class="flex items-center gap-[0.5rem]">
                            <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]"></div>
                            <span>{{t('staticagent.tltle3_subtitle4')}}</span>
                        </div>
                    </div>
                </div>
                <div class="h-full flex items-center">
                    <img src="../../assets/static/card_bg2.png" class="w-[49.3125rem] h-[38.125rem]" />
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout >
            <div class=" absolute top-0 bottom-0 left-0 right-0">
                <img src="../../assets/dy/card.png" class="w-full h-full" />
            </div>
            <div class="w-full  pb-[4rem]">
                <div class="flex w-full justify-center items-end pb-[1.75rem] z-50">
                    <span class="text-[#191919] text-[2rem] font-medium z-50">{{ t('dyagent.title4') }}</span>
                </div>
                <StaticSetmenu class="p-[1.25rem]" showPadding/>
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <QuestionComponent :question-datas="questionDatas"/>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import BasicLayout from '../BasicLayout.vue';
    import { ref, computed } from 'vue'
    import ComponentLayout from '../ComponentLayout.vue';
    import QuestionComponent from '../setmenu/QuestionComponent.vue';
    // import DySetmenu from '../setmenu/DySetmenu.vue';
    import StaticSetmenu from '../setmenu/StaticSetmenu.vue';
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue';
    import item1_img from '../../assets/static/item1.png'
    import item2_img from '../../assets/static/item2.png'
    import item3_img from '../../assets/static/item3.png'
    import item4_img from '../../assets/static/item4.png'
    import bg from '../../assets/bg_2.png?inline'
    const { t } = useI18n()
    const hoverStatus = ref(false)
    const items = computed(() => {
        return [
            {
                title:t('staticagent.titl2_item1'),
                img:item1_img,
                subtitle:t('staticagent.title2_subtitle1')
            },
            {
                title:t('staticagent.titl2_item2'),
                img:item2_img,
                subtitle:t('staticagent.title2_subtitle2')
            },
            {
                title:t('staticagent.titl2_item3'),
                img:item3_img,
                subtitle:t('staticagent.title2_subtitle3')
            },
            {
                title:t('staticagent.titl2_item4'),
                img:item4_img,
                subtitle:t('staticagent.title2_subtitle4')
            }
        ]
    })
    const questionDatas = computed(() => {
        return [
            {
                title: t('staticagent.question1'),
                answer: [t('staticagent.answer1_1')],
                key: 1
            },
            {
                title: t('staticagent.question2'),
                answer: [t('staticagent.answer2_1')],
                key: 2
            },
            {
                title: t('staticagent.question3'),
                answer: [t('staticagent.answer3_1')],
                key: 3
            },
            {
                title: t('staticagent.question4'),
                answer: [t('staticagent.answer4_1')],
                key: 4
            },
            {
                title: t('staticagent.question5'),
                answer: [t('staticagent.answer5_1')],
                key: 5
            },
            {
                title: t('staticagent.question6'),
                answer: [t('staticagent.answer6_1')],
                key: 6
            }
        ]
    })
    const onContact = () => {

    }
    const onFreeUse = () => {

    }
</script>