<template>
    <ModelComponent v-model="open" slot-mode :title="t('sub.title')" :width="'25.25rem'">
        <div>
            <a-form layout="vertical">
                <a-row class="w-[21.75rem]">
                    <a-col :span="24" class="w-[21.75rem]">
                        <a-form-item :label="t('sub.form1')" required :labelCol="{span: 24}" class="w-[21.75rem]">
                            <a-select :placeholder="t('sub.placeholder1')" class="proxycity_select ">
                                   
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form2')" required :labelCol="{span: 24}" >
                            <a-input class="customInput w-[21.75rem]" :placeholder="t('sub.placeholder2')"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form3')" required :labelCol="{span: 24}" >
                            <a-input class="customInput w-[21.75rem]" :placeholder="t('sub.placeholder2')"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
                <div class="w-full flex mt-[1.125rem] justify-end">
                    <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="open=false">
                        <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{t('sub.button')}}</span>
                    </div>
                </div>
            </a-form>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const open = defineModel()
</script>

<style lang="less" scoped>
.customInput {
    font-family: "Alibaba Sans";
    height: 3rem!important;
    border-color: #666;
    border-radius: 0.75rem;
    &::placeholder {
        color: #999999; /* 改变文字颜色 */
        font-size: 0.9rem;
        text-align: left;
        font-family: "Alibaba Sans";
        line-height: 100%;
    }
        
}
.proxycity_select {
        .ant-select-selector {
            height: 3rem!important;
            border-color: #666666!important;
            border-radius: 0.75rem!important;
        }
        .ant-select-selection-item {
            line-height: 3rem!important;
        }
        .ant-select-selection-placeholder {
            height: 3rem!important;
            line-height: 3rem!important;
            color: #999999;
            font-size: 1rem;
        }
    } 
</style>