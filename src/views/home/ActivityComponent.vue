<template>
    <div class="w-full h-[2.8125rem] bg-[#EDFBF7] flex gap-[1.5rem] justify-center items-center" v-show="status">
        <div class="bg-[#01AA44]">
            <img class="w-[2rem] h-[2rem]" />
        </div>
        <div class="flex items-center cursor-pointer" @click="onLogin">
            <span class="text-[#0C311A] text-[1rem] font-medium">{{t('acvitity.title')}}</span>
            <span class="text-[#01AA44] text-[1rem] font-bold pl-[0.25rem]">{{t('acvitity.subtitle')}}</span>
        </div>
        <div class="bg-[#01AA44]">
            <img class="w-[2rem] h-[2rem]" />
        </div>
        <div class="w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-[50%] bg-[#FFFFFF] absolute right-[4rem] ">
            <div class="close-icon cursor-pointer" @click="onClose"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref } from 'vue'
    const status = ref(true)
    const emit = defineEmits(['onCloseActivity'])
    const { t } = useI18n()

    const onLogin = () => {

    }
    const onClose = () => {
        emit('onCloseActivity')
        status.value = false
    }
</script>
<style>
.close-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  
}

.close-icon::after {
  content: '×';        /* 使用乘号字符 */
  font-size: 24px;
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #01AA44;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
}

/* 点击动画 */
.close-icon:active::after {
  opacity: 0.6;
  transform: translate(-50%, -50%) scale(0.9);
}
</style>