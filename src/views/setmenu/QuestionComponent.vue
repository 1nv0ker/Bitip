<template>
    <div class="w-full mt-[6.25rem] questions">
        <div class="w-full flex justify-center h-[5rem] items-center">
            <span class="text-[#191919] text-[2rem] font-medium" >{{t('setmenu.bottom_title')}}</span>
        </div>
        <a-collapse ghost expandIconPosition="end" v-model:activeKey="activeKey">
            <a-collapse-panel  :header="question.title" class=" font-medium text-[1.125rem] text-[#191919] border-b-[1px] border-t-[1px] border-[#F4F4F4] h-[5rem] w-full flex items-center" :key="question.key" v-for="question in questions">
                    <!-- <p>{{ text }}</p> -->
                </a-collapse-panel>
            <!-- <div class="" >
                
            </div> -->
        </a-collapse>
        
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    import { computed, ref } from 'vue'
    const activeKey = ref([1])
    const questions = computed(() => {
        return [
            {
                title: t('setmenu.question1'),
                answer: t('setmenu.answer1'),
                key: 1
            },
            {
                title: t('setmenu.question2'),
                answer: t('setmenu.answer2'),
                key: 2
            },
            {
                title: t('setmenu.question3'),
                answer: t('setmenu.answer3'),
                key: 3
            },
            {
                title: t('setmenu.question4'),
                answer: t('setmenu.answer4'),
                key: 4
            },
            {
                title: t('setmenu.question5'),
                answer: t('setmenu.answer5'),
                key: 5
            },
            {
                title: t('setmenu.question6'),
                answer: t('setmenu.answer6'),
                key: 6
            }
        ]
    })
</script>
<style lang="less">
.questions {
    .ant-collapse-header {
        width: 98%;
    }
    // .ant-collapse-content-active {
    //     display: none!important;
    // }
}
    
</style>