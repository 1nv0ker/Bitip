<template>
    <ModelComponent v-model="open" slot-mode :title="type=='edit'?t('whitelist.modaltitle1'):t('whitelist.modaltitle')" :width="'24.25rem'">
        <div>
            <a-form layout="vertical">
                <a-row :gutter="[80, 0]" class="mt-[1.5rem]">
                    <a-col :span="24">
                        <a-form-item :label="t('whitelist.modal_form1')" :labelCol="{span: 24}" v-bind="validateInfos.ipAddress" :rules="rulesRef.ipAddress" >
                            <a-input class="customAInput w-full" :placeholder="t('sub.placeholder2')" v-model:value="modelRef.ipAddress" :disabled="type=='edit'"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item :label="t('whitelist.modal_form2')" :labelCol="{span: 24}" v-bind="validateInfos.remark">
                            <!-- <a-input class="customAInput w-full" :placeholder="t('sub.placeholder2')" /> -->
                            <a-textarea class="customArea"  :placeholder="t('whitelist.modal_form2_placeholder')" v-model:value="modelRef.remark" :rows="2" :maxlength="20" show-count />
                        </a-form-item>
                    </a-col>
                </a-row>
                <div class="w-full flex mt-[1.125rem] justify-end gap-[2rem]">
                    <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] border-[#666666] border-[1px] flex justify-center items-center" @click="onCancel">
                        <span class="text-[1rem] text-[#191919]"> {{t('whitelist.button4')}}</span>
                    </div>
                    <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="onConfirm">
                        <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{t('whitelist.button5')}}</span>
                    </div>
                </div>
            </a-form>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    import {  reactive } from 'vue'
    import { Form, message } from 'ant-design-vue';
    import { AddWhiteList, EditWhitelist} from '../../../api/whitelist'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const useForm = Form.useForm;
    const open = defineModel()
    const modelRef = reactive({
        ipAddress: '',
        remark:'',
        id:''
    });
    const rulesRef = reactive({
        ipAddress: [
            {
                required:true,
                message:t('whitelist.message'),
                pattern:'^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$'
            }
        ],
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
            modelRef.ipAddress = values.ipAddress
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
            if (props.type == 'add') {
                const res:any = await AddWhiteList(modelRef)
                if (res.code == 200) {
                    message.success(t('form.success'))
                    emit('onAddComplate')
                }
                
            } else {
                const res:any = await EditWhitelist(modelRef)
                if (res.code == 200) {
                    message.success(t('form.success'))
                    emit('onAddComplate')
                }
            }
        })
    }
    const onCancel = () => {
        open.value = false
    }
</script>
