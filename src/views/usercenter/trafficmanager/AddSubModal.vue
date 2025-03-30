<template>
    <ModelComponent v-model="open" slot-mode :title="type=='edit'?t('sub.edit'):t('sub.title')" :width="'50rem'">
        <div>
            <a-form layout="vertical">
                <a-row :gutter="80">
                    <a-col :span="12" >
                        <a-form-item :label="t('sub.form1')" :labelCol="{span: 24}" v-bind="validateInfos.enabled">
                            <a-select :placeholder="t('sub.placeholder1')" class="customASelect h-[3rem] w-full" v-model:value="modelRef.enabled" >
                                <a-select-option :value="1">{{t('purchaseddetail.yes')}}</a-select-option>
                                <a-select-option :value="0">{{t('purchaseddetail.no')}}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[80, 0]">
                    <a-col :span="12">
                        <a-form-item :label="t('sub.form2')" :labelCol="{span: 24}" v-bind="validateInfos.keyName" :rules="rulesRef.keyName" >
                            <a-input class="customAInput w-full" :placeholder="t('sub.placeholder2')" v-model:value="modelRef.keyName" :disabled="type=='edit'"></a-input>
                        </a-form-item>
                    </a-col>
                    <!-- <a-col :span="12">
                        <a-form-item :label="t('sub.form5')" required :labelCol="{span: 24}" >
                            <a-select :placeholder="t('purchaseddetail.search5')"  class="customASelect h-[3rem] w-full" v-model:value="isLimit">
                                <a-select-option :value="1">{{t('purchaseddetail.yes')}}</a-select-option>
                                <a-select-option :value="0">{{t('purchaseddetail.no')}}</a-select-option>
                            </a-select>
                        </a-form-item>
                        
                    </a-col> -->
                    <a-col :span="12">
                        <a-form-item :label="t('sub.form6')" :labelCol="{span: 24}" v-bind="validateInfos.limited" >
                            <a-input-number class="w-full customANum "  addon-after="GB" v-model:value="modelRef.limited" :min="0"  ></a-input-number>
                        </a-form-item>
                    </a-col>
                    <!-- <a-col :span="12">
                        <a-form-item :label="t('sub.form3')" required :labelCol="{span: 24}" >
                            <a-input-password class="customAPass w-full" :placeholder="t('sub.placeholder2')"></a-input-password>
                        </a-form-item>
                    </a-col> -->
                    <a-col :span="24">
                        <a-form-item :label="t('sub.form4')" :labelCol="{span: 24}" v-bind="validateInfos.remark">
                            <!-- <a-input class="customAInput w-full" :placeholder="t('sub.placeholder2')" /> -->
                            <a-textarea class="customArea"  :placeholder="t('sub.placeholder2')" v-model:value="modelRef.remark" :rows="2" :maxlength="20" show-count />
                        </a-form-item>
                    </a-col>
                </a-row>
                <div class="w-full flex mt-[1.125rem] justify-end">
                    <a-button :loading="modelRef.loading" class="customAbutton w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="onConfirm">
                        <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{t('sub.button')}}</span>
                    </a-button>
                </div>
            </a-form>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    import {  reactive } from 'vue'
    import { Form, message } from 'ant-design-vue';
    import { AddAccount, UpdateAccount } from '../../../api/account'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const useForm = Form.useForm;
    const open = defineModel()
    const modelRef = reactive({
        keyName: '',
        limited: 0,
        enabled: 1,
        remark:'',
        id:'',
        loading:false
    });
    const rulesRef = reactive({
        keyName: [
            {
                required:true,
                message:t('sub.message1'),
                pattern:`^[A-Za-z0-9]{8,15}$`
            }
        ],
        limited: [
            {
                validator: (_rule:any, value:number, callback:any) => {
                    if (value>10000) {
                        callback(t('sub.message4'))
                    }
                    callback()
                }
            }
        ]
    })
    const { validate, validateInfos, resetFields } = useForm(modelRef, rulesRef);
    const props = defineProps({
        type:{
            type:String,
            default:'add'
        }
    })
    const init = (values:any) => {
        resetFields()
        if (props.type != 'add') {
            modelRef.enabled = values.enabled
            modelRef.limited = values.limited
            modelRef.keyName = values.keyName
            modelRef.remark = values.remark,
            modelRef.id = values.id
        }
    }
    defineExpose({
        init: init
    })
    const emit = defineEmits(['onAddComplate'])
    const onConfirm = () => {
        validate()
        .then(async () => {
            modelRef.loading = true
            if (props.type == 'add') {
                const res:any = await AddAccount(modelRef)
                if (res.code == 200) {
                    message.success(t('form.success'))
                    emit('onAddComplate')
                }
                
                
            } else {
                const res:any = await UpdateAccount(modelRef)
                if (res.code == 200) {
                    message.success(t('form.success'))
                    emit('onAddComplate')
                }
            }
            modelRef.loading = false
        })
        
    }
</script>
