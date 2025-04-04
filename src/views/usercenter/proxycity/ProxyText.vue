<template>
    <div class="h-[8.5rem] w-full relative">
        <!-- <textarea :placeholder="t('proxycity.agentPlaceholder')" wrap="soft"  class="border-[1px] border-[#666666] rounded-[1rem] w-full h-[8.5rem] p-[1rem]" :value="text"  @input="onchange">
            
        </textarea> -->
        <a-textarea v-model:value="text"  :placeholder="t('proxycity.agentPlaceholder')" :rows="6" @change="onchange" class="w-full h-[8.5rem] rounded-[1rem]" />
        <div class="w-full flex justify-end absolute bottom-0 pr-[1rem] pb-[0.5rem]">
            <span class="text-[#666666] text-[1rem]">{{len}}/10</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    // import type { PropType } from 'vue';
   
    import { ref } from 'vue'
    import { useI18n  } from 'vue-i18n'
    const { t } = useI18n()
    const text = defineModel({type:String})
    const len = ref(0)
    // const emit = defineEmits(['onGetIP'])
    // const text = computed(() => {
    //     return proxyIPS.value?.slice(0, 10).map((item:any)=>item.hostname_port+'@'+item.username_password).join(';')
    // })
    // const proxyIPS = defineModel({type:Array as PropType<any[]>})
    const onchange = (event:any) => {
        // console.log('event', event)
        const value = event.target.value
       
        // text.value = value.replace(/[\s]+/g, ' ').split(';').slice(0, 10).join(';')
        len.value = value?.split(';').slice(0, 10).length || 0
        console.log('text', len.value, value?.split(';').slice(0, 10).length )
        // console.log('len',  value)
        if (!value) {
            len.value = 0
        }
    
        // console.log('len', len, value)
    }

</script>
<style>
textarea::placeholder {
    font-family: "Alibaba Sans";
  color: #666666;       /* 字体颜色 */
  font-size: 1rem;   /* 字体大小 */
  /* padding:0.5rem */
}
textarea:focus {
  border:1px solid #666666;
  outline: none;
}
textarea {
    max-width: 100%;
    white-space: pre-wrap;
}
</style>