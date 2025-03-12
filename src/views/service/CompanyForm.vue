<template>
    <div class="w-full flex justify-center h-[6.4375rem] items-center border-[#EBEFF8] border-[1px]">
        <span class="text-[#191919] text-[2rem] font-medium">{{ t('service.title4') }}</span>
    </div>
    <div class="p-[2rem] border-b-[1px] border-[#EBEFF8] h-[29.6875rem] ">
        <a-form layout="vertical">
            <a-row :gutter="50">
                <a-col :span="8">
                    <a-form-item :label="t('service.form1_label')" required>
                        <div class="w-full flex-col flex gap-[0.75rem]">
                            <a-input  :placeholder="t('service.form1_placeholder1')" size="large" class="customInput" />
                            <a-input  :placeholder="t('service.form1_placeholder2')" size="large" class="customInput"  />
                        </div>
                    </a-form-item>
                </a-col>
                <a-col :span="16">
                    <a-form-item :label="t('service.form2_label')" required>
                        <a-select :placeholder="t('service.form2_placeholder')" style="width:23.4375rem"  class="customSelect h-[3rem]">
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                            <a-select-option value="Yiminghe">yiminghe</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="50">
                <a-col :span="8">
                    <a-form-item :label="t('service.form3_label')" required>
                        <div class="w-full flex-col flex gap-[0.75rem]">
                            <a-input  :placeholder="t('service.form3_placeholder1')" size="large" class="customInput" />
                            <a-input  :placeholder="t('service.form3_placeholder2')" size="large" class="customInput"  />
                            <a-input  :placeholder="t('service.form3_placeholder3')" size="large" class="customInput"  />
                        </div>
                    </a-form-item>
                </a-col>
                <a-col :span="16">
                    <a-form-item :label="t('service.form4_label')" required>
                        <a-textarea  class="border-[1px] border-[#EBEFF8] rounded-[0.5rem] h-[10.6875rem]" style="height: 10.6875rem;width: 100%;" 
                        :placeholder="t('service.form4_placeholder')" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
    <div class="w-full flex items-center justify-center h-[7.0625rem]">
        <div class="bg-[#01AA44] rounded-[2rem] flex items-center justify-center w-[16.75rem] h-[3.25rem]">
            <span class="text-[#FFFFFF] text-[1rem] font-bold">{{t('service.button')}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>
<style lang="less" scoped>
    .customInput {
        font-family: "Alibaba Sans";
        height: 3rem!important;
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 0.9rem;
            text-align: left;
            font-family: "Alibaba Sans";
            line-height: 100%;
        }
         
    }
    
</style>
<style lang="less">
.customSelect  {
         .ant-select-selector {
            height: 3rem!important;
        }
        .ant-select-selection-item {
            line-height: 3rem!important;
        }
        .ant-select-selection-placeholder {
            height: 3rem!important;
            line-height: 3rem!important;
            color: #999999;
        }
    }
</style>