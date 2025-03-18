<template>
    <div class="w-full mt-[6.25rem] questions">
        <div class="w-full flex justify-center h-[5rem] items-center">
            <span class="text-[#191919] text-[2rem] font-medium" >{{t('setmenu.bottom_title')}}</span>
        </div>
        <a-collapse ghost expandIconPosition="end" v-model:activeKey="activeKey">
            <a-collapse-panel  :header="question.title" 
            class=" font-medium text-[1.125rem] text-[#191919] border-b-[1px] border-t-[1px] border-[#F4F4F4] w-full" :key="question.key" v-for="question in questions">
                    <!-- <p>{{ text }}</p> -->
                     <span v-for="answer in question.answer" class="h-[4rem]">
                        {{answer}}
                     </span>
            </a-collapse-panel>
        </a-collapse>
        
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    import { computed, ref } from 'vue'
    import type { PropType } from 'vue'
    const activeKey = ref([0])
    const props = defineProps({
        questionDatas:{
            type: Array as PropType<any[]>,
            default:[]
        }
    })
    const questions = computed(() => {
        if (props.questionDatas.length!==0) {
            return props.questionDatas
        }
        return [
            {
                title: t('setmenu.question1'),
                answer: [t('setmenu.answer1')],
                key: 1
            },
            {
                title: t('setmenu.question2'),
                answer: [t('setmenu.answer1')],
                key: 2
            },
            {
                title: t('setmenu.question3'),
                answer: [t('setmenu.answer1')],
                key: 3
            },
            {
                title: t('setmenu.question4'),
                answer: [t('setmenu.answer1')],
                key: 4
            },
            {
                title: t('setmenu.question5'),
                answer: [t('setmenu.answer1')],
                key: 5
            },
            {
                title: t('setmenu.question6'),
                answer: [t('setmenu.answer1')],
                key: 6
            }
        ]
    })
</script>
<style lang="less">
.questions {
    .ant-collapse-header {
        width: 98%;
        height: 5rem!important;
        display: flex;
        align-items: center!important;
    }
    // .ant-collapse-content-active {
    //     display: none!important;
    // }
}
    
</style>