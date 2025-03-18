<template>
    <ModelComponent v-model="open" slot-mode :title="type=='edit'?t('sub.edit'):t('sub.title')" :width="'25.25rem'">
        <div>
            <a-form layout="vertical">
                <a-row class="w-[21.75rem]">
                    <a-col :span="24" class="w-[21.75rem]">
                        <a-form-item :label="t('sub.form1')" required :labelCol="{span: 24}" class="w-[21.75rem]">
                            <a-select :placeholder="t('sub.placeholder1')" class="customASelect h-[3rem] w-full">
                                   
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form2')" required :labelCol="{span: 24}" >
                            <a-input class="customAInput w-[21.75rem]" :placeholder="t('sub.placeholder2')"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form5')" required :labelCol="{span: 24}" >
                            <a-select :placeholder="t('purchaseddetail.search5')"  class="customASelect h-[3rem] w-full" v-model:value="isLimit">
                                <a-select-option :value="1">{{t('purchaseddetail.yes')}}</a-select-option>
                                <a-select-option :value="0">{{t('purchaseddetail.no')}}</a-select-option>
                            </a-select>
                        </a-form-item>
                        
                    </a-col>
                    <a-col :span="24" v-show="isLimit==1">
                        <a-form-item :label="t('sub.form6')" required :labelCol="{span: 24}" >
                            <a-input-number class="w-[21.75rem] customANum "  addon-after="M"></a-input-number>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form3')" required :labelCol="{span: 24}" >
                            <a-input-password class="customAPass w-[21.75rem]" :placeholder="t('sub.placeholder2')"></a-input-password>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form4')" required :labelCol="{span: 24}" >
                            <a-input class="customAInput w-[21.75rem]" :placeholder="t('sub.placeholder2')" />
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
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const open = defineModel()
    const isLimit = ref(1)
    defineProps({
        type:{
            type:String,
            default:'add'
        }
    })
</script>
