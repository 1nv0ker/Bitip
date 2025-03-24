<template>
    <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
        <div class="h-[2rem] w-full flex justify-end relative items-center mt-[1rem]">
            <span class="text-[#5E6F94] text-[1rem] absolute left-0 top-[0.5rem] cursor-pointer" v-show="showTip">{{t('whitelist.tips')}}</span>
            <a-pagination v-model:current="current" show-quick-jumper 
            show-size-changer 
            :total="total" 
            :show-total="(total:number) => `${t('purchasedhistory.total')} ${total} ${t('purchasedhistory.item')}`"
            @change="onCurrentChange" @showSizeChange="onSizeChange" v-model:pageSize="pageSize" />
        </div>
    </a-config-provider>
</template>
<script setup lang="ts">
    import useI18nStore from '../store/i18n'
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const I18Store = useI18nStore()
    const emit = defineEmits(['onCurrentChange', 'onSizeChange'])
    defineProps({
        showTip: {
            default:false,
            type:Boolean
        }
    })
    const current = defineModel()
    const total = defineModel('total')
    const pageSize = defineModel('pageSize')
    const onCurrentChange = (page:number) => {
        emit('onCurrentChange', page)
    }
    const onSizeChange = (current:number, size:number) => {
        emit('onSizeChange', current, size)
    }
</script>