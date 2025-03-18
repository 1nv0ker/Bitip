<template>
    <BasicLayout>
        <ComponentLayout class="bg-[#F6FDFF]">
            <div class="w-full h-[31.5625rem] flex items-center">
                <div class="flex flex-col gap-[1.25rem]">
                    <span class="text-[#191919] text-[3.375rem] font-medium">{{t('staticagent.title1')}}</span>
                    <div class="w-full flex flex-col gap-[0.9rem] text-[#191919] text-[1.125rem]">
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
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <div class="w-full h-[51.25rem] pt-[4.75rem]">
                <div class="flex justify-center w-full pb-[3.25rem]">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('staticagent.title2')}}</span>
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
        <ComponentLayout class="bg-[#F6FDFF]">
            <div class="w-full pb-[8.125rem] flex h-[45rem] pt-[3.75rem] ">
                <div class="w-[37.5rem] h-full flex flex-col gap-[2.25rem]">
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
            </div>
        </ComponentLayout>
        <ComponentLayout :bg="' rgba(195,255,121,0.15);'">
            <div class="w-full ">
                <div class="flex w-full justify-center items-end p-[1.75rem]">
                    <span class="text-[#191919] text-[2rem] font-medium">{{ t('dyagent.title4') }}</span>
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

    const { t } = useI18n()
    const hoverStatus = ref(false)
    const items = computed(() => {
        return [
            {
                title:t('staticagent.titl2_item1'),
                img:'',
                subtitle:t('staticagent.title2_subtitle1')
            },
            {
                title:t('staticagent.titl2_item2'),
                img:'',
                subtitle:t('staticagent.title2_subtitle2')
            },
            {
                title:t('staticagent.titl2_item3'),
                img:'',
                subtitle:t('staticagent.title2_subtitle3')
            },
            {
                title:t('staticagent.titl2_item4'),
                img:'',
                subtitle:t('staticagent.title2_subtitle4')
            }
        ]
    })
    const questionDatas = computed(() => {
        return [
            {
                title: t('dyagent.question1'),
                answer: [t('dyagent.answer1_1')],
                key: 1
            },
            {
                title: t('dyagent.question2'),
                answer: [t('dyagent.answer2_1')],
                key: 2
            },
            {
                title: t('dyagent.question3'),
                answer: [t('dyagent.answer3_1')],
                key: 3
            },
            {
                title: t('dyagent.question4'),
                answer: [t('dyagent.answer4_1')],
                key: 4
            },
            {
                title: t('dyagent.question5'),
                answer: [t('dyagent.answer5_1')],
                key: 5
            },
            {
                title: t('dyagent.question6'),
                answer: [t('dyagent.answer6_1')],
                key: 6
            }
        ]
    })
    const onContact = () => {

    }
    const onFreeUse = () => {

    }
</script>