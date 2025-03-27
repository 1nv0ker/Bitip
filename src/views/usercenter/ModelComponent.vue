<template>
    <a-modal v-model:open="open" :footer="null" class=" rounded-[1.5rem]" :width="width" centered destroyOnClose :maskClosable="false" @cancel="onCancel">
      <template #title>
            <span class="text-[#191919] text-[1.5rem] font-bold">{{ title }}</span>
      </template>
      <span class="text-[#191919] text-[1rem] text-wrap" v-if="!slotMode">{{content}}</span>
      <slot v-else></slot>
      <div class="w-full flex mt-[1.125rem] justify-end" v-if="!slotMode">
        <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="onClick">
           <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{buttonName?buttonName:t('login.confirmMessage')}}</span>
        </div>
      </div>
    </a-modal>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const open = defineModel()
    defineProps({
        title:String,
        content:String,
        width:[String , Number],
        slotMode:{
          type: Boolean,
          default:false
        },
        buttonName: {
          type:String,
          defautlt:''
        }
    })
    const emit = defineEmits(['onClick', 'onCancel'])
    const onClick=() => {
      emit('onClick')
      // open.value = false
    }
    const onCancel = () => {
      emit('onCancel')
    }
</script>